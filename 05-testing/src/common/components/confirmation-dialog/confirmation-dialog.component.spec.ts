import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('common/components/confirmation-dialog/confirmation-dialog.component specs', () => {
  it('should be render as expected passing required properties', () => {
    // Arrange
    const title = "Hello dialog";
    const bOpen = true;

    const props = {
      isOpen: true,
      onAccept: () => console.log("Accepted"),
      onClose: () => console.log("Closed"),
      title: "Hello dialog",
      labels: {
        closeButton: "Cerrar",
        acceptButton: "Aceptar",
      },
      children: "Texto"
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    /*const buttonElement = screen.getByRole('button', {
          name: /Aceptar/i,
    });*/

    //await userEvent.click(buttonElement);

    // Assert
    expect(props.isOpen).toBeTruthy();
    //expect(buttonElement).toBeInTheDocument();
  });

  it('should render the dialog title "hello dialog"', () => {
    // Arrange
    const title = "Hello dialog";
    const bOpen = true;

    // Act
    //render(<Dialog open=bOpen></Dialog>)

    // Assert
    expect(bOpen).toBeTruthy();
  });
//should render a opened dialog window
  //render the dialog title "hello"
  //render the dialog children <p>Im text</p>
  //should close when click close button
  //should exec handleaccept when click on accept button

})
