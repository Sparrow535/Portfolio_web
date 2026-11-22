// 5x5 dot grid used as decoration (Figma "Dots" component, 84x84)
export function Dots({ cols = 5, rows = 5, className = "" }: { cols?: number; rows?: number; className?: string }) {
  return (
    <div
      aria-hidden
      className={`grid gap-[16px] ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, 4px)` }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-gray" />
      ))}
    </div>
  );
}
