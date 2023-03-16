import * as React from 'react';
import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('common/components/confirmation-dialog/confirmation-dialog.hook specs', () => {
  it('should return initial closed state empty object and three functions', () => {
    // Arrange
    const defaultLookup: Lookup = { id:'', name: '' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(defaultLookup);
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
  });

  it('should return open state and object to delete', () => {
    // Arrange
    const element: Lookup = { id:'1', name: 'John Doe' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(element);
    });

    // Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toMatchObject(element);

  });

  it('should return closed state after cancel', () => {
    // Arrange
    const element: Lookup = { id:'1', name: 'John Doe' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(element);
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toMatchObject(element);

  });

  it('should return empty object after accept and close dialog', () => {
    //hook modificado para cerrar el dialogo al Aceptar

    // Arrange
    const defaultLookup: Lookup = { id:'', name: '' };
    const element: Lookup = { id:'1', name: 'John Doe' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(element);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toMatchObject(defaultLookup);

  });
})
