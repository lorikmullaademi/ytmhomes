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

  // right-column grid tiles: [key, colSpan, rowSpan] on a ~76px row unit.
  // Every row holds tiles of equal height — boxes never stack unevenly.
  const GRID = [
    ["spotify", 1, 4],
    ["nearby", 1, 4],
    ["amenities", 2, 3],
    ["practical", 2, 3],
    ["recommend", 1, 4],
    ["checkin", 1, 4],
    ["rules", 1, 3],
    ["airbnb", 1, 3],
    ["location", 2, 3],
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
      location: <W.LocationTile p={p} />,
    };
    return (
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--page-pad)" }}>
        <div className="detail-split">
          {/* ---- left column · 1.5fr ---- */}
          <div className="detail-left">
            <W.TitleTile p={p} />
            <W.DescriptionTile p={p} />
            <W.QuoteTile review={p.review} />
          </div>

          {/* ---- right column · 2.5fr ---- */}
          <div className="detail-right">
            <div className="detail-gallery"><W.GalleryTile p={p} /></div>
            <div className="detail-cards">
              {GRID.map(([k, c, r]) => (
                <div key={k} style={{ gridColumn: "span " + c, gridRow: "span " + r, display: "flex", minWidth: 0 }}>
                  {content[k]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  window.PropertyDetail = PropertyDetail;
})();
