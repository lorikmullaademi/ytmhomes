/* global React */
/* =====================================================================
   PropertyDetail — structured two-column layout, matching the homepage.
   Left (1.5/4): title card + "About this stay".
   Right (2.5/4): photo gallery first, then the widget grid.
   Works for Saranda apartments and Prishtina homes alike; accent +
   tone come from the wrapper's --accent* vars (set per property).
   ===================================================================== */
(function () {
  const W = window.YTMW;
  const Y = window.YTM;

  // right-column rows: tiles in the same row stretch to the same height,
  // and every row sizes itself to its content — nothing overlaps or clips
  const ROWS = [
    ["spotify", "nearby"],
    ["amenities"],
    ["practical"],
    ["recommend", "checkin"],
    ["rules", "airbnb"],
  ];

  function PropertyDetail({ id }) {
    const p = Y.byId[id];
    if (!p) return null;
    const content = {
      spotify: <W.SpotifyEmbedTile />,
      nearby: <W.NearbyTile p={p} />,
      amenities: <W.AmenitiesTile p={p} />,
      practical: <W.PracticalTile p={p} />,
      recommend: <W.RecommendTile p={p} />,
      checkin: <W.CheckinTile p={p} />,
      rules: <W.RulesTile p={p} />,
      airbnb: <W.AirbnbTile p={p} />,
    };
    return (
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--page-pad)" }}>
        <div className="detail-split">
          {/* ---- left column · 1.5fr ---- */}
          <div className="detail-left">
            <W.TitleTile p={p} />
            <W.DescriptionTile p={p} />
            <W.QuoteTile review={p.review} />
            <div className="detail-loc"><W.LocationTile p={p} /></div>
          </div>

          {/* ---- right column · 2.5fr ---- */}
          <div className="detail-right">
            <div className="detail-gallery"><W.GalleryTile p={p} /></div>
            {ROWS.map((row, i) => (
              <div key={i} className={"detail-row" + (row.length === 1 ? " full" : "")}>
                {row.map((k) => (
                  <div key={k} style={k === "spotify" ? { minHeight: 352 } : undefined}>{content[k]}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  window.PropertyDetail = PropertyDetail;
})();
