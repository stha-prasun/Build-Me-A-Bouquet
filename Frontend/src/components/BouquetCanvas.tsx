// BouquetCanvas.tsx
import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import CanvasItem from "./CanvasItem";
import type { ItemType } from "./SidebarItem";
import type { CanvasDragItem } from "./CanvasItem";

export type CanvasItemType = {
  item: ItemType;
  x: number;
  y: number;
};

interface BouquetCanvasProps {
  canvasItems: CanvasItemType[];
  setCanvasItems: React.Dispatch<React.SetStateAction<CanvasItemType[]>>;
}

const BouquetCanvas: React.FC<BouquetCanvasProps> = ({ canvasItems, setCanvasItems }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop<ItemType | CanvasDragItem>({
    accept: ["IMAGE", "CANVAS_ITEM"],
    drop: (draggedItem, monitor) => {
      const clientOffset = monitor.getClientOffset();
      const canvas = ref.current;
      if (!canvas || !clientOffset) return;

      const canvasRect = canvas.getBoundingClientRect();

      let size = 80;
      if ("id" in draggedItem && draggedItem.src.includes("b")) size = 300;
      else if ("index" in draggedItem) {
        const dragged = canvasItems[draggedItem.index];
        if (dragged.item.src.includes("b")) size = 300;
      }

      const x = clientOffset.x - canvasRect.left - size / 2;
      const y = clientOffset.y - canvasRect.top - size / 2;

      if ("id" in draggedItem) {
        setCanvasItems((prev) => [...prev, { item: draggedItem, x, y }]);
      }
    },
  });

  const moveItem = (index: number, x: number, y: number) => {
    setCanvasItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], x, y };
      return updated;
    });
  };

  drop(ref);

  return (
    <div ref={ref} className="flex-1 relative bg-[#f5f5da]">
      {canvasItems.map((ci, index) => (
        <CanvasItem
          key={index}
          index={index}
          item={ci.item}
          x={ci.x}
          y={ci.y}
          moveItem={moveItem}
        />
      ))}
    </div>
  );
};

export default BouquetCanvas;
