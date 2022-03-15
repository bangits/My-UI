import { copyAttrs } from '@/helpers';
import { useCallback, useMemo, useRef, useState } from 'react';

export interface UseTableColumnsDnDParameters {
  onSwap: (fromRowIndex: number, toRowIndex: number) => void;
  dragDelay?: number;
  disableIndexes?: number[];
}

const useTableColumnsDnD = ({ onSwap, dragDelay = 500, disableIndexes }: UseTableColumnsDnDParameters) => {
  const [currentDraggedCellIndex, setDraggedCellIndex] = useState<number>(null);

  const currentDraggedCellIndexRef = useRef<number>(null);

  const tableElementRef = useRef<HTMLElement>(null);
  const draggedTableHead = useRef<HTMLElement>(null);
  const mainCopiedTable = useRef<HTMLElement>(null);
  const dragTimerInterval = useRef<NodeJS.Timeout>(null);
  const cellsCoordinates = useRef<{ xPosition: number; cellIndex: number }[]>([]);
  const initialDraggedCellIndex = useRef<number>(null);

  const isDraggingStartedRef = useRef(false);

  const cloneTable = useCallback((draggedCellIndex: number) => {
    const table = tableElementRef.current;

    const originalTableCells = Object.values(table.querySelectorAll('td'));
    const originalTableBodyRows = Object.values(table.querySelectorAll('tbody tr'));
    const originalFirstTableRow = table.querySelector('tbody tr');
    const originalFirstTableCells = Object.values(originalFirstTableRow.querySelectorAll('td'));
    const originalTableHeadRow = table.querySelector('thead tr');

    const copiedTable = document.createElement('table');
    const copiedTableBody = document.createElement('tbody');
    const copiedTableHead = document.createElement('thead');
    const copiedTableHeadRow = document.createElement('tr');

    copiedTable.style.position = 'fixed';
    copiedTable.style.cursor = 'grabbing';

    mainCopiedTable.current = copiedTable;

    copyAttrs(table, copiedTable);
    copyAttrs(table.querySelector('tbody'), copiedTableBody);
    copyAttrs(table.querySelector('thead'), copiedTableHead);
    copyAttrs(originalTableHeadRow, copiedTableHeadRow);

    copiedTableHeadRow.append(draggedTableHead.current.cloneNode(true));
    copiedTableHead.append(copiedTableHeadRow);

    const tableCellsPerRowCount = originalTableCells.length / originalTableBodyRows.length;

    let maxCellWidth = draggedTableHead.current.offsetWidth;

    cellsCoordinates.current = [];

    originalFirstTableCells.forEach((cell, idx) => {
      cellsCoordinates.current = [
        ...cellsCoordinates.current,
        {
          cellIndex: idx,
          xPosition: cell.getBoundingClientRect().x
        }
      ];
    });

    originalTableCells.forEach((cell, idx) => {
      if ((idx - draggedCellIndex) % tableCellsPerRowCount === 0) {
        const copiedCell = cell.cloneNode(true) as HTMLTableCellElement;

        const copiedTableRow = document.createElement('tr');

        copyAttrs(originalFirstTableRow, copiedTableRow);

        copiedCell.style.setProperty('width', `${cell.offsetWidth}px`, 'important');
        copiedCell.style.setProperty('max-width', `${cell.offsetWidth}px`, 'important');

        if (cell.offsetWidth > maxCellWidth) maxCellWidth = cell.offsetWidth;

        copiedTableRow.appendChild(copiedCell);
        copiedTableBody.appendChild(copiedTableRow);
      }
    });

    copiedTable.style.width = `${maxCellWidth}px`;
    copiedTable.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';

    copiedTable.append(copiedTableBody);
    copiedTable.append(copiedTableHead);

    document.body.append(copiedTable);
  }, []);

  return useMemo(
    () => ({
      draggedCellIndex: currentDraggedCellIndex,
      tableHeadMouseDownHandler: (e) => {
        const tableHeadElement = e.target.closest('th');

        if (!tableHeadElement) return;

        const draggedCellIndex = +tableHeadElement.dataset.columnIndex;

        if (
          typeof draggedCellIndex !== 'number' ||
          Number.isNaN(draggedCellIndex) ||
          disableIndexes.includes(draggedCellIndex)
        )
          return;

        if (!tableElementRef.current) tableElementRef.current = tableHeadElement.closest('table');

        draggedTableHead.current = tableHeadElement;

        const mouseMoveHandler = (e) => {
          const { clientX, clientY } = e;

          if (!isDraggingStartedRef.current) {
            isDraggingStartedRef.current = true;

            cloneTable(draggedCellIndex);

            setDraggedCellIndex(draggedCellIndex);

            currentDraggedCellIndexRef.current = draggedCellIndex;

            initialDraggedCellIndex.current = draggedCellIndex;
          }

          if (!mainCopiedTable.current) return;

          const tablePositions = tableElementRef.current.getBoundingClientRect();

          if (clientY > tablePositions.top && clientY < tablePositions.bottom) {
            const droppedCellIndex = cellsCoordinates.current.findIndex((cell) => cell.xPosition > clientX);

            const draggedCellIndex = droppedCellIndex
              ? cellsCoordinates.current[
                  droppedCellIndex === -1 ? cellsCoordinates.current.length - 1 : droppedCellIndex - 1
                ]?.cellIndex
              : initialDraggedCellIndex.current;

            setDraggedCellIndex(draggedCellIndex);

            currentDraggedCellIndexRef.current = draggedCellIndex;
          } else {
            setDraggedCellIndex(initialDraggedCellIndex.current);

            currentDraggedCellIndexRef.current = initialDraggedCellIndex.current;
          }

          const tableHalfWidth = mainCopiedTable.current.offsetWidth / 2;

          mainCopiedTable.current.style.position = 'fixed';
          mainCopiedTable.current.style.top = `${clientY - tableHalfWidth}px`;
          mainCopiedTable.current.style.left = `${clientX - tableHalfWidth}px`;
        };

        const mouseUpHandler = () => {
          onSwap(initialDraggedCellIndex.current, currentDraggedCellIndexRef.current);

          setDraggedCellIndex(null);

          currentDraggedCellIndexRef.current = null;

          initialDraggedCellIndex.current = null;

          isDraggingStartedRef.current = false;

          if (mainCopiedTable.current) mainCopiedTable.current.remove();

          mainCopiedTable.current = null;

          document.removeEventListener('mousemove', mouseMoveHandler);
          document.removeEventListener('mouseup', mouseUpHandler);
        };

        dragTimerInterval.current = setTimeout(() => {
          document.addEventListener('mousemove', mouseMoveHandler);
          document.addEventListener('mouseup', mouseUpHandler);
        }, dragDelay);
      },
      tableHeadMouseUpHandler: () => {
        if (dragTimerInterval.current) clearTimeout(dragTimerInterval.current);
      }
    }),
    [isDraggingStartedRef, currentDraggedCellIndex, cloneTable, initialDraggedCellIndex, onSwap]
  );
};

export default useTableColumnsDnD;
