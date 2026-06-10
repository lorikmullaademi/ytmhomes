/* global React */
/* =====================================================================
   Homepage — structured two-column layout.
   Left (1.5/4): brand identity card + "our story" box.
   Right (2.5/4): Saranda, Albania (3 stays) then Prishtina, Kosovo
   (2 homes; YTM Center is commercial — no sleeps).
   ===================================================================== */
(function () {
  const W = window.YTMW;
  const Y = window.YTM;

  function SectionTitle({ eyebrow, title, count }) {
    return (
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, padding: "2px 4px" }}>
        <div>
          <p style={W.eyebrow}>{eyebrow}</p>
          <h2 style={{ ...W.serif("var(--text-2xl)"), marginTop: 6 }}>{title}</h2>
        </div>
        {count && (
          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", whiteSpace: "nowrap", paddingBottom: 4 }}>{count}</span>
        )}
      </div>
    );
  }

  function Homepage({ onOpen }) {
    const saranda = ["lovely", "dreamy", "horizon"].map((id) => Y.byId[id]);
    const prishtina = ["taslixhe", "center"].map((id) => Y.byId[id]);
    return (
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--page-pad)" }}>
        <div className="home-split">
          {/* ---- left column · 1.5fr ---- */}
          <div className="home-left">
            <div className="home-brand"><W.BrandTile /></div>
            <W.StoryTile />
          </div>

          {/* ---- right column · 2.5fr ---- */}
          <div className="home-right">
            <SectionTitle
              eyebrow={Y.collections.saranda.eyebrow}
              title="Saranda, Albania"
              count="3 stays"
            />
            <div className="home-cards home-cards-3">
              {saranda.map((p) => (
                <div key={p.id} className="home-card"><W.PropertyThumb p={p} onOpen={onOpen} tall /></div>
              ))}
            </div>

            <SectionTitle
              eyebrow={Y.collections.prishtina.eyebrow}
              title="Prishtina, Kosovo"
              count="2 homes"
            />
            <div className="home-cards home-cards-2">
              {prishtina.map((p) => (
                <div key={p.id} className="home-card"><W.PropertyThumb p={p} onOpen={onOpen} tall /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  window.Homepage = Homepage;
})();
