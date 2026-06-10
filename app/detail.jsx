/* global React, BentoBoard */
/* =====================================================================
   PropertyDetail — a bento canvas for one property. Works for Saranda
   apartments and Prishtina homes alike; accent + tone come from the
   wrapper's --accent* vars (set per property in app.jsx).
   ===================================================================== */
(function () {
  const W = window.YTMW;
  const Y = window.YTM;

  const ORDER = ["title", "gallery", "capacity", "location", "booking", "description", "amenities", "practical", "spotify", "nearby", "recommend", "airbnb", "checkin", "rules", "quote"];
  // Detail board uses a FINER row unit (set on the wrapper below) so each
  // card is sized close to its content. Row spans below assume ~76px rows.
  const SPAN = {
    title: [2, 3], gallery: [2, 5], capacity: [1, 2], location: [1, 2], booking: [1, 4],
    description: [2, 3], amenities: [2, 3], practical: [2, 3], spotify: [1, 3], nearby: [1, 3],
    recommend: [1, 4], airbnb: [1, 3], checkin: [1, 3], rules: [1, 3], quote: [2, 3],
  };

  function PropertyDetail({ id, onBook, resetSignal }) {
    const p = Y.byId[id];
    if (!p) return null;
    const content = {
      title: <W.TitleTile p={p} />,
      gallery: <W.GalleryTile p={p} />,
      capacity: <W.CapacityTile p={p} />,
      location: <W.LocationTile p={p} />,
      booking: <W.BookingTile p={p} onBook={onBook} />,
      description: <W.DescriptionTile p={p} />,
      amenities: <W.AmenitiesTile p={p} />,
      practical: <W.PracticalTile p={p} />,
      spotify: <W.SpotifyTile />,
      nearby: <W.NearbyTile p={p} />,
      recommend: <W.RecommendTile p={p} />,
      airbnb: <W.AirbnbTile p={p} />,
      checkin: <W.CheckinTile p={p} />,
      rules: <W.RulesTile p={p} />,
      quote: <W.QuoteTile review={p.review} />,
    };
    const tileList = ORDER.filter((k) => content[k]).map((k) => ({ id: k, col: SPAN[k][0], row: SPAN[k][1], render: content[k] }));
    return (
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--page-pad)", "--bento-row": "76px" }}>
        <BentoBoard boardId={"detail-" + id} preset="default" tiles={tileList} resetSignal={resetSignal} />
      </div>
    );
  }

  window.PropertyDetail = PropertyDetail;
})();
