"use client"

import { useRef, useState } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface DraggableItem {
  id: number
  content: string
  color: string
}

const initialItems: DraggableItem[] = [
  { id: 1, content: "Drag me 1", color: "bg-blue-200" },
  { id: 2, content: "Drag me 2", color: "bg-green-200" },
  { id: 3, content: "Drag me 3", color: "bg-yellow-200" },
  { id: 4, content: "Drag me 4", color: "bg-purple-200" },
  { id: 5, content: "Drag me 5", color: "bg-red-200" },
  { id: 6, content: "Drag me 6", color: "bg-indigo-200" },
  { id: 7, content: "Drag me 7", color: "bg-pink-200" },
  { id: 8, content: "Drag me 8", color: "bg-orange-200" },
  { id: 9, content: "Drag me 9", color: "bg-teal-200" },
  { id: 10, content: "Drag me 10", color: "bg-cyan-200" },
]

export default function InteractiveCanvasPage() {
  const [items, setItems] = useState<DraggableItem[]>(initialItems)
  const [draggedItem, setDraggedItem] = useState<DraggableItem | null>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  const handleDragStart = (e: React.DragEvent, item: DraggableItem) => {
    setDraggedItem(item)
    e.dataTransfer.setData('text/plain', item.id.toString())
    e.currentTarget.classList.add('opacity-50')
  }

  const handleDragEnd = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('opacity-50')
    setDraggedItem(null)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.add('bg-primary/5')
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('bg-primary/5')
  }

  const handleDrop = (e: React.DragEvent, targetId: number) => {
    e.preventDefault()
    e.currentTarget.classList.remove('bg-primary/5')
    
    if (!draggedItem) return

    const newItems = [...items]
    const draggedIndex = items.findIndex(item => item.id === draggedItem.id)
    const targetIndex = items.findIndex(item => item.id === targetId)
    
    newItems[draggedIndex] = items[targetIndex]
    newItems[targetIndex] = draggedItem
    
    setItems(newItems)
  }

  const exportToPDF = async () => {
    if (!canvasRef.current) return

    try {
      const canvas = await html2canvas(canvasRef.current, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        useCORS: true
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height]
      })

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height)
      pdf.save("interactive-canvas.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Interactive Canvas</h1>
        <button
          onClick={exportToPDF}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Export as PDF
        </button>
      </div>

      <div
        ref={canvasRef}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-background p-8 rounded-lg border border-border/40 shadow-lg"
      >
        {items.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, item.id)}
            className={`${item.color} p-4 rounded-lg cursor-move text-center font-medium shadow-sm transition-transform hover:scale-105 active:scale-95`}
          >
            {item.content}
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 rounded-lg bg-primary/5 text-sm text-muted-foreground">
        <p>Tip: Drag and drop items to rearrange them. Click &quot;Export as PDF&quot; to save your arrangement.</p>
      </div>
    </div>
  )
}