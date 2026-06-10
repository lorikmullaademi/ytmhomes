/* global React, BentoBoard */
/* =====================================================================
   Homepage — composes the bento tiles and offers 3 arrangements.
   Each preset maps tile id -> [colSpan, rowSpan] and an order.
   ===================================================================== */
(function () {
  const W = window.YTMW;
  const Y = window.YTM;

  function tiles(onOpen, onBook) {
    const P = Y.byId;
    return {
      brand: <W.BrandTile />,
      intro: <W.IntroTile />,
      "col-saranda": <W.CollectionTile c={Y.collections.saranda} onOpen={() => onOpen("dreamy")} />,
      "col-prishtina": <W.CollectionTile c={Y.collections.prishtina} onOpen={() => onOpen("taslixhe")} />,
      "p-dreamy": <W.PropertyThumb p={P.dreamy} onOpen={onOpen} tall />,
      "p-lovely": <W.PropertyThumb p={P.lovely} onOpen={onOpen} />,
      "p-horizon": <W.PropertyThumb p={P.horizon} onOpen={onOpen} tall />,
      "p-taslixhe": <W.PropertyThumb p={P.taslixhe} onOpen={onOpen} tall />,
      "p-center": <W.PropertyThumb p={P.center} onOpen={onOpen} />,
      map: <W.MapTile pins={[{ x: Y.collections.saranda.pinX, y: Y.collections.saranda.pinY, label: "Saranda" }, { x: Y.collections.prishtina.pinX, y: Y.collections.prishtina.pinY, label: "Prishtina" }]} />,
      contact: <W.ContactTile />,
      trust: <W.TrustTile />,
      spotify: <W.SpotifyTile />,
      "stat-sun": <W.StatTile icon="sun" big="300+" label="sunny days a year on the Riviera" tone="tint" />,
      "stat-guests": <W.StatTile icon="heart" big="4.9★" label="from 214 happy guests" tone="sand" />,
      "mood-sea": <W.MoodPhotoTile id="mood-sea" word="The sea" sub="Five minutes down" icon="waves" w="coast" />,
      "mood-coffee": <W.MoodPhotoTile id="mood-coffee" word="Slow mornings" sub="Coffee on the terrace" icon="coffee" w="sunrise" />,
      quote: <W.QuoteTile review={Y.byId.dreamy.review} />,
    };
  }

  // ---- arrangement presets ----
  const PRESETS = {
    editorial: {
      order: ["brand", "intro", "col-saranda", "p-dreamy", "p-horizon", "p-lovely", "stat-sun", "spotify", "map", "mood-sea", "col-prishtina", "p-taslixhe", "p-center", "trust", "contact", "quote", "stat-guests", "mood-coffee"],
      span: { brand: [2, 2], intro: [2, 1], "col-saranda": [2, 1], "p-dreamy": [1, 2], "p-horizon": [1, 2], "p-lovely": [1, 1], "stat-sun": [1, 1], spotify: [1, 2], map: [2, 2], "mood-sea": [1, 1], "col-prishtina": [2, 1], "p-taslixhe": [1, 2], "p-center": [1, 1], trust: [1, 1], contact: [2, 1], quote: [2, 1], "stat-guests": [1, 1], "mood-coffee": [1, 1] },
    },
    gallery: {
      order: ["col-saranda", "brand", "p-dreamy", "p-horizon", "mood-sea", "p-lovely", "intro", "map", "spotify", "col-prishtina", "p-taslixhe", "p-center", "mood-coffee", "quote", "contact", "trust", "stat-sun", "stat-guests"],
      span: { "col-saranda": [2, 2], brand: [2, 1], "p-dreamy": [2, 2], "p-horizon": [1, 2], "mood-sea": [1, 2], "p-lovely": [1, 1], intro: [1, 1], map: [2, 2], spotify: [1, 2], "col-prishtina": [2, 2], "p-taslixhe": [1, 2], "p-center": [1, 2], "mood-coffee": [1, 1], quote: [2, 1], contact: [2, 1], trust: [1, 1], "stat-sun": [1, 1], "stat-guests": [1, 1] },
    },
    compact: {
      order: ["brand", "intro", "p-dreamy", "p-lovely", "p-horizon", "col-saranda", "stat-sun", "stat-guests", "spotify", "p-taslixhe", "p-center", "col-prishtina", "trust", "mood-sea", "mood-coffee", "map", "contact", "quote"],
      span: { brand: [2, 1], intro: [2, 1], "p-dreamy": [1, 1], "p-lovely": [1, 1], "p-horizon": [1, 1], "col-saranda": [1, 1], "stat-sun": [1, 1], "stat-guests": [1, 1], spotify: [1, 1], "p-taslixhe": [1, 1], "p-center": [1, 1], "col-prishtina": [1, 1], trust: [1, 1], "mood-sea": [1, 1], "mood-coffee": [1, 1], map: [2, 1], contact: [2, 1], quote: [2, 1] },
    },
  };

  function Homepage({ onOpen, onBook, arrangement = "editorial", resetSignal }) {
    const content = tiles(onOpen, onBook);
    const preset = PRESETS[arrangement] || PRESETS.editorial;
    const tileList = preset.order
      .filter((id) => content[id])
      .map((id) => {
        const sp = preset.span[id] || [1, 1];
        return { id, col: sp[0], row: sp[1], render: content[id] };
      });
    return (
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--page-pad)" }}>
        <BentoBoard boardId="home" preset={arrangement} tiles={tileList} resetSignal={resetSignal} />
      </div>
    );
  }

  window.Homepage = Homepage;
})();
