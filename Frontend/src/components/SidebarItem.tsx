// SidebarItem.tsx
import React, { useRef } from "react";
import { useDrag } from "react-dnd";

export type ItemType = {
  id: number;
  src: string;
};

interface SidebarItemProps {
  item: ItemType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const ref = useRef<HTMLImageElement>(null);

  const [{ isDragging }, drag] = useDrag<ItemType, void, { isDragging: boolean }>(() => ({
    type: "IMAGE",
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  drag(ref);

  return (
    <img
      ref={ref}
      src={item.src}
      alt="flower"
      className={`m-2 cursor-move rounded-lg w-20 h-20 ${isDragging ? "opacity-50" : "opacity-100"}`}
    />
  );
};

export default SidebarItem;
