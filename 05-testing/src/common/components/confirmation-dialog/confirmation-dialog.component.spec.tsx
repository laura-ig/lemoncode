import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('common/components/confirmation-dialog/confirmation-dialog.component specs', () => {
  it('should render as expected passing required properties', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: "Hello dialog",
      labels: {
        closeButton: "Cerrar",
        acceptButton: "Aceptar",
      },
      children: ""
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const openedDialog = screen.getByRole('dialog');
    const buttonAccept = screen.getByRole('button', {
      name: /Aceptar/i,
    });
    const buttonClose = screen.getByRole('button', {
      name: /Cerrar/i,
    });

    // Assert
    expect(props.isOpen).toBeTruthy();
    expect(openedDialog).toBeInTheDocument();
    expect(buttonAccept).toBeInTheDocument();
    expect(buttonClose).toBeInTheDocument();

  });

  it('should render the dialog title "hello dialog" and children "random text"', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: "Hello dialog",
      labels: {
        closeButton: "Cerrar",
        acceptButton: "Aceptar",
      },
      children: "random text"
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const title = screen.getByText('Hello dialog');
    const children = screen.getByText('random text');

    // Assert
    expect(title).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });

  it('should call onAccept', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: () => {},
      title: "Hello dialog",
      labels: {
        closeButton: "Cerrar",
        acceptButton: "Aceptar",
      },
      children: ""
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const buttonAccept = screen.getByRole('button', {
      name: /Aceptar/i,
    });

    await userEvent.click(buttonAccept);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
  });

  it('should call onClose', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: jest.fn(),
      title: "Hello dialog",
      labels: {
        closeButton: "Cerrar",
        acceptButton: "Aceptar",
      },
      children: ""
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const buttonClose = screen.getByRole('button', {
      name: /Cerrar/i,
    });

    await userEvent.click(buttonClose);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should not render the dialog when is closed', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: () => {},
      onClose: () => {},
      title: "Hello dialog",
      labels: {
        closeButton: "Cerrar",
        acceptButton: "Aceptar",
      },
      children: ""
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

})
