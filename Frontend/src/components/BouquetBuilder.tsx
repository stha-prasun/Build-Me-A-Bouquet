// BouquetBuilder.tsx
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SidebarItem, { type ItemType } from "./SidebarItem";
import BouquetCanvas, { type CanvasItemType } from "./BouquetCanvas";

const BouquetBuilder: React.FC = () => {
  const [canvasItems, setCanvasItems] = useState<CanvasItemType[]>([]);

  const sidebarItems: ItemType[] = [
    { id: 1, src: "/flowers/1.png" },
    { id: 2, src: "/flowers/2.png" },
    { id: 3, src: "/flowers/3.png" },
    { id: 4, src: "/flowers/4.png" },
    { id: 5, src: "/flowers/5.png" },
    { id: 6, src: "/flowers/6.png" },
    { id: 7, src: "/flowers/7.png" },
    { id: 8, src: "/flowers/8.png" },
    { id: 9, src: "/flowers/9.png" },
    { id: 10, src: "/flowers/10.png" },
    { id: 11, src: "/flowers/11.png" },
    { id: 12, src: "/flowers/12.png" },
    { id: 13, src: "/flowers/b1.png" },
    { id: 14, src: "/flowers/b2.png" },
    { id: 15, src: "/flowers/b3.png" },
    { id: 16, src: "/flowers/b4.png" },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#f5f5da] flex">
        <div className="w-64 bg-[#c9d6b9] p-4 overflow-y-auto border-r h-screen">
          <h2 className="text-lg font-bold mb-4">Select Components</h2>
          <div className="grid grid-cols-2 gap-4">
            {sidebarItems.map((item) => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <BouquetCanvas canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
      </div>
    </DndProvider>
  );
};

export default BouquetBuilder;
