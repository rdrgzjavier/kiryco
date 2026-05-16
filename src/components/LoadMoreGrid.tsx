"use client";

import { Children, ReactNode, useMemo, useState } from "react";

type LoadMoreGridProps = {
  children: ReactNode;
  className: string;
  step?: number;
  buttonLabel?: string;
};

export default function LoadMoreGrid({ children, className, step = 12, buttonLabel = "Cargar más resultados" }: LoadMoreGridProps) {
  const items = useMemo(() => Children.toArray(children), [children]);
  const [visible, setVisible] = useState(step);
  const visibleItems = items.slice(0, visible);
  const hasMore = visible < items.length;

  return (
    <>
      <div className={className}>
        {visibleItems}
      </div>
      {hasMore ? (
        <div className="mt-6 flex justify-center">
          <button type="button" className="btn-secondary" onClick={() => setVisible((value) => Math.min(value + step, items.length))}>
            {buttonLabel}
          </button>
        </div>
      ) : null}
    </>
  );
}
