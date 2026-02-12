// CanvasItem.tsx
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import type { ItemType } from "./SidebarItem";

export type CanvasDragItem = {
  index: number;
};

interface CanvasItemProps {
  item: ItemType;
  x: number;
  y: number;
  index: number;
  moveItem: (index: number, x: number, y: number) => void;
}

const CanvasItem: React.FC<CanvasItemProps> = ({ item, x, y, index, moveItem }) => {
  const ref = useRef<HTMLImageElement>(null);
  const isBush = item.src.includes("b");

  const [{ isDragging }, drag] = useDrag<CanvasDragItem, void, { isDragging: boolean }>(() => ({
    type: "CANVAS_ITEM",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop<CanvasDragItem>({
    accept: "CANVAS_ITEM",
    hover(draggedItem, monitor) {
      const clientOffset = monitor.getClientOffset();
      const canvas = ref.current?.parentElement;
      if (!canvas || !clientOffset) return;

      const canvasRect = canvas.getBoundingClientRect();
      const size = isBush ? 300 : 80;
      const newX = clientOffset.x - canvasRect.left - size / 2;
      const newY = clientOffset.y - canvasRect.top - size / 2;

      moveItem(draggedItem.index, newX, newY);
    },
  });

  drag(drop(ref));

  return (
    <img
      ref={ref}
      src={item.src}
      alt="flower"
      className={`absolute rounded-lg ${isDragging ? "opacity-50" : "opacity-100"} ${isBush ? "w-75 h-75" : "w-20 h-20"}`}
      style={{ left: x, top: y }}
    />
  );
};

export default CanvasItem;
