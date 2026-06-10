/* global React */
/* =====================================================================
   BentoBoard — fixed-size bento grid with genuine drag-to-rearrange.
   - tiles: [{ id, col, row, render }]  (col/row = grid span units)
   - order persists per (boardId + preset) in localStorage
   - drag from anywhere on a tile EXCEPT interactive elements; a hover
     grip gives a guaranteed handle.
   ===================================================================== */

function loadOrder(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const saved = JSON.parse(raw);
    // keep only ids that still exist, append any new ones
    const valid = saved.filter((id) => fallback.includes(id));
    fallback.forEach((id) => { if (!valid.includes(id)) valid.push(id); });
    return valid;
  } catch (e) { return fallback; }
}

function BentoBoard({ boardId, preset = "default", tiles, resetSignal }) {
  const ids = tiles.map((t) => t.id);
  const storeKey = `ytm:order:${boardId}:${preset}`;
  const [order, setOrder] = React.useState(() => loadOrder(storeKey, ids.slice()));
  const [dragId, setDragId] = React.useState(null);
  const dragIdRef = React.useRef(null);

  // re-seed when the preset (arrangement) changes
  React.useEffect(() => {
    setOrder(loadOrder(storeKey, ids.slice()));
    // eslint-disable-next-line
  }, [preset, tiles.length]);

  // external "reset arrangement"
  React.useEffect(() => {
    if (resetSignal === undefined) return;
    try { localStorage.removeItem(storeKey); } catch (e) {}
    setOrder(ids.slice());
    // eslint-disable-next-line
  }, [resetSignal]);

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const persist = (next) => {
    setOrder(next);
    try { localStorage.setItem(storeKey, JSON.stringify(next)); } catch (e) {}
  };

  const byId = {};
  tiles.forEach((t) => { byId[t.id] = t; });

  const onDragStart = (e, id) => {
    const t = e.target;
    if (!t.closest("[data-grip]") &&
        t.closest("image-slot, a, button, input, textarea, select, label, [data-no-drag]")) {
      e.preventDefault();
      return;
    }
    dragIdRef.current = id;
    setDragId(id);
    e.dataTransfer.effectAllowed = "move";
    try { e.dataTransfer.setData("text/plain", id); } catch (err) {}
  };

  const onDragEnter = (e, overId) => {
    const from = dragIdRef.current;
    if (!from || from === overId) return;
    setOrder((cur) => {
      const next = cur.slice();
      const fi = next.indexOf(from);
      const ti = next.indexOf(overId);
      if (fi < 0 || ti < 0) return cur;
      next.splice(fi, 1);
      next.splice(ti, 0, from);
      return next;
    });
  };

  const onDragEnd = () => {
    dragIdRef.current = null;
    setDragId(null);
    setOrder((cur) => { try { localStorage.setItem(storeKey, JSON.stringify(cur)); } catch (e) {} return cur; });
  };

  return (
    <div className={"bento" + (dragId ? " is-dragging-board" : "")} onDragOver={(e) => e.preventDefault()}>
      {order.map((id) => {
        const t = byId[id];
        if (!t) return null;
        const dragging = dragId === id;
        return (
          <div
            key={id}
            className={"bento-tile" + (dragging ? " is-dragging" : "")}
            draggable
            style={{ gridColumn: `span ${t.col}`, gridRow: `span ${t.row}` }}
            onDragStart={(e) => onDragStart(e, id)}
            onDragEnter={(e) => onDragEnter(e, id)}
            onDragEnd={onDragEnd}
          >
            <span className="bento-grip" data-grip aria-hidden="true">
              <i data-lucide="grip-vertical"></i>
            </span>
            {t.render}
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { BentoBoard });
