// File to handle dragging and dropping of items in the columns

export function createHandleDragEnd(columns, setColumns) {
    return function handleDragEnd(result) {
      const { source, destination } = result;
  
      // Exit early if dropped outside a droppable area
      if (!destination) return;
  
      // Exit if item was dropped back in the same position
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      ) return;
  
      const startCol = columns[source.droppableId]; // Column being dragged from
      const finishCol = columns[destination.droppableId]; // Column being dragged to
  
      // Reordering within the same column
      if (startCol === finishCol) {
        const newItems = Array.from(startCol); // Clone items array
        const [moved] = newItems.splice(source.index, 1); // Remove dragged item
        newItems.splice(destination.index, 0, moved); // Insert it in new position
  
        setColumns((prev) => ({
          ...prev,
          [source.droppableId]: newItems                  // Update that column only
        }));
        return;
      }
  
      // Moving item to a different column
      const startItems = Array.from(startCol); // Clone source column
      const [movedItem] = startItems.splice(source.index, 1); // Remove item from source
  
      const finishItems = Array.from(finishCol); // Clone target column
      finishItems.splice(destination.index, 0, movedItem); // Insert into destination
  
      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: startItems, // Update both columns
        [destination.droppableId]: finishItems
      }));
    };
  }