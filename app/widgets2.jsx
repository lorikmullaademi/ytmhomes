/* global React */
/* =====================================================================
   Detail-page bento widgets — gallery, amenities, practical info,
   check-in, house rules, nearby, recommendations, Airbnb, capacity.
   Extends window.YTMW.
   ===================================================================== */
(function () {
  const W = window.YTMW;
  const DSC = window.YTMHomesMoreDesignSystem_3b4e5e;
  const { Button, Badge, AmenityItem, Tag } = DSC;
  const { BentoCard, Photo, eyebrow, serif, body, script, I, Wa } = W;

  // ---- GALLERY: big slot + two small slots ------------------------
  function GalleryTile({ p }) {
    return (
      <BentoCard pad={0}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridTemplateRows: "1fr 1fr", gap: 4, height: "100%" }}>
          <div style={{ position: "relative", gridRow: "span 2" }}>
            <Photo id={"gal-" + p.id + "-1"} label="Hero photo" icon="image" w={p.wash} />
          </div>
          <div style={{ position: "relative" }}>
            <Photo id={"gal-" + p.id + "-2"} label="Terrace" icon="sun" w={p.wash} />
          </div>
          <div style={{ position: "relative" }}>
            <Photo id={"gal-" + p.id + "-3"} label="Interior" icon="bed-double" w="dusk" />
            <span style={{ position: "absolute", bottom: 10, right: 10, padding: "5px 11px", borderRadius: 999, background: "rgba(255,255,255,.9)", backdropFilter: "blur(6px)", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "var(--ink-800)", display: "inline-flex", alignItems: "center", gap: 5, pointerEvents: "none" }}>
              <span style={{ display: "inline-flex", width: 12, height: 12 }}>{I("images")}</span>+ photos
            </span>
          </div>
        </div>
      </BentoCard>
    );
  }

  // ---- TITLE ------------------------------------------------------
  function TitleTile({ p }) {
    return (
      <BentoCard pad={26} style={{ justifyContent: "center", gap: 10 }}>
        <p style={W.eyebrow}>{p.eyebrow}</p>
        <h1 style={serif("clamp(30px,3.2vw,46px)")}>{p.name}</h1>
        <p style={{ ...body("var(--text-md)"), color: "var(--text-body)" }}>{p.mood}</p>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 4 }}>
          {p.badges.map((b, i) => <Badge key={i} tone={b.tone}>{b.label}</Badge>)}
          <Badge tone="sun">★ {p.rating} · {p.reviews}</Badge>
        </div>
      </BentoCard>
    );
  }

  // ---- DESCRIPTION ------------------------------------------------
  function DescriptionTile({ p }) {
    return (
      <BentoCard pad={24} style={{ justifyContent: "center", gap: 12 }}>
        <span style={{ display: "inline-flex", width: 34, height: 34, borderRadius: 10, background: "var(--accent-soft)", color: "var(--accent-deep)", alignItems: "center", justifyContent: "center" }}>{I("feather")}</span>
        <h3 style={serif("var(--text-xl)")}>About this stay</h3>
        <p style={body("var(--text-base)")}>{p.description}</p>
        <p style={{ ...script, fontSize: 24, marginTop: 2 }}>Enjoy your stay ♥</p>
      </BentoCard>
    );
  }

  // ---- CAPACITY ---------------------------------------------------
  function CapacityTile({ p }) {
    return (
      <BentoCard tone="tint" pad={22} style={{ justifyContent: "center", gap: 10 }}>
        <span style={{ display: "inline-flex", width: 36, height: 36, borderRadius: 10, background: "var(--white)", color: "var(--accent-deep)", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-xs)" }}>{I("users")}</span>
        <h3 style={serif("var(--text-2xl)")}>{p.sleeps}</h3>
        <p style={body("var(--text-sm)")}>{p.bedrooms}</p>
      </BentoCard>
    );
  }

  // ---- AMENITIES --------------------------------------------------
  function AmenitiesTile({ p }) {
    return (
      <BentoCard pad={22}>
        <h3 style={{ ...serif("var(--text-xl)"), marginBottom: 16 }}>What’s here</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px 16px" }}>
          {p.amenities.map((a, i) => {
            const tone = i % 2 ? { bg: "var(--sage-100)", fg: "var(--sage-700)" } : { bg: "var(--sea-100)", fg: "var(--sea-600)" };
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, minWidth: 0 }}>
                <span style={{ display: "inline-flex", flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: tone.bg, color: tone.fg, alignItems: "center", justifyContent: "center" }}><span style={{ width: 18, height: 18, display: "inline-flex" }}>{I(a.icon)}</span></span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--ink-800)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.label}</div>
                  {a.detail && <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.detail}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </BentoCard>
    );
  }

  // ---- PRACTICAL key/value grid -----------------------------------
  function PracticalTile({ p, title = "Good to know" }) {
    return (
      <BentoCard pad={22}>
        <h3 style={{ ...serif("var(--text-xl)"), marginBottom: 16 }}>{title}</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px 16px" }}>
          {p.practical.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, minWidth: 0 }}>
              <span style={{ display: "inline-flex", width: 32, height: 32, flexShrink: 0, borderRadius: 9, background: "var(--accent-tint)", color: "var(--accent-deep)", alignItems: "center", justifyContent: "center" }}><span style={{ width: 16, height: 16, display: "inline-flex" }}>{I(r.icon)}</span></span>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10.5, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: ".07em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.k}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--ink-900)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.v}</div>
              </div>
            </div>
          ))}
        </div>
      </BentoCard>
    );
  }

  // ---- CHECK-IN ---------------------------------------------------
  function CheckinTile({ p }) {
    return (
      <BentoCard tone="sand" pad={22} style={{ gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-flex", width: 32, height: 32, borderRadius: 9, background: "var(--white)", color: "var(--accent-deep)", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-xs)" }}>{I("key-round")}</span>
          <h3 style={serif("var(--text-lg)")}>Easy self check-in</h3>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {p.checkin.map((s, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: 1.5 }}>
              <span style={{ display: "inline-flex", width: 16, height: 16, marginTop: 2, color: "var(--success-500)", flexShrink: 0 }}>{I("check")}</span>{s}
            </li>
          ))}
        </ul>
      </BentoCard>
    );
  }

  // ---- HOUSE RULES ------------------------------------------------
  function RulesTile({ p }) {
    return (
      <BentoCard pad={22} style={{ gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-flex", width: 32, height: 32, borderRadius: 9, background: "var(--accent-soft)", color: "var(--accent-deep)", alignItems: "center", justifyContent: "center" }}>{I("heart-handshake")}</span>
          <h3 style={serif("var(--text-lg)")}>House, with care</h3>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
          {p.rules.map((s, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: 1.5 }}>
              <span style={{ display: "inline-flex", width: 6, height: 6, marginTop: 8, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }}></span>{s}
            </li>
          ))}
        </ul>
      </BentoCard>
    );
  }

  // ---- NEARBY -----------------------------------------------------
  function NearbyTile({ p }) {
    return (
      <BentoCard pad={22}>
        <h3 style={{ ...serif("var(--text-xl)"), marginBottom: 10 }}>Nearby</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {p.nearby.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 0", borderBottom: i < p.nearby.length - 1 ? "1px solid var(--border-soft)" : "none", minWidth: 0 }}>
              <span style={{ display: "inline-flex", width: 30, height: 30, flexShrink: 0, borderRadius: 9, background: "var(--accent-tint)", color: "var(--accent-deep)", alignItems: "center", justifyContent: "center" }}><span style={{ width: 15, height: 15, display: "inline-flex" }}>{I(r.icon)}</span></span>
              <span style={{ flex: 1, minWidth: 0, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--ink-900)", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.k}</span>
              <span style={{ flexShrink: 0, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{r.v}</span>
            </div>
          ))}
        </div>
      </BentoCard>
    );
  }

  // ---- LOCAL RECOMMENDATIONS --------------------------------------
  function RecommendTile({ p }) {
    return (
      <BentoCard tone="tint" pad={24}>
        <p style={eyebrow}>From your hosts</p>
        <h3 style={{ ...serif("var(--text-xl)"), margin: "8px 0 16px" }}>Our little guide</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {p.recommendations.map((r, i) => (
            <div key={i} style={{ display: "flex", gap: 12 }}>
              <span style={{ fontFamily: "var(--font-script)", fontSize: 22, color: "var(--accent-deep)", minWidth: 64, lineHeight: 1 }}>{r.title}</span>
              <p style={{ ...body("var(--text-sm)"), color: "var(--text-body)", flex: 1 }}>{r.text}</p>
            </div>
          ))}
        </div>
      </BentoCard>
    );
  }

  // ---- AIRBNB / LISTING LINK --------------------------------------
  function AirbnbTile({ p }) {
    return (
      <BentoCard pad={22} style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#FF5A5F", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "var(--text-sm)" }}>
            <span style={{ display: "inline-flex", width: 20, height: 20 }}>{I("badge-check")}</span>Airbnb listing
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--ink-800)" }}>
            <span style={{ display: "inline-flex", width: 14, height: 14, color: "var(--sun-600)" }}>{I("star", { fill: "currentColor" })}</span>{p.rating}
          </span>
        </div>
        <div>
          <p style={body("var(--text-sm)")}>See the full listing, calendar and {p.reviews} guest reviews on Airbnb — or book direct with us and save the platform fee.</p>
        </div>
        <a href={p.airbnb} data-no-drag target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
          <Button variant="ghost" fullWidth iconRight={I("arrow-up-right")}>View on Airbnb</Button>
        </a>
      </BentoCard>
    );
  }

  // ---- BOOKING (CTA) ----------------------------------------------
  function BookingTile({ p, onBook }) {
    const c = window.YTM.collections[p.collection];
    return (
      <BentoCard tone="ink" pad={24} style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "var(--text-xl)", color: "#fff" }}>{c.letLabel}</span>
          <span style={{ marginLeft: "auto" }}><Badge tone="success">Direct booking</Badge></span>
        </div>
        <p style={{ ...body("var(--text-sm)"), color: "rgba(255,255,255,.72)", margin: "12px 0 16px" }}>You won’t be charged yet — we’ll confirm your dates by WhatsApp.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          <Button variant="primary" fullWidth iconRight={I("arrow-right")} onClick={onBook}>Request these dates</Button>
          <a href={"https://wa.me/" + window.YTM.contact.whatsapp.replace(/[^\d]/g, "")} data-no-drag target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, color: "rgba(255,255,255,.82)", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", textDecoration: "none", whiteSpace: "nowrap" }}>
            <span style={{ display: "inline-flex", width: 15, height: 15 }}><Wa /></span>Ask a question
          </a>
        </div>
      </BentoCard>
    );
  }

  // ---- LOCATION MINI MAP ------------------------------------------
  function LocationTile({ p }) {
    const c = window.YTM.collections[p.collection];
    return (
      <BentoCard pad={0} style={{ justifyContent: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--wash-coast)" }}></div>
        <svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <rect width="300" height="220" fill="var(--sea-100)" opacity="0.5" />
          <path d="M0,150 C60,130 90,160 140,120 C180,90 240,110 300,70 L300,220 L0,220 Z" fill="var(--sage-200)" opacity="0.85" />
          <circle cx="155" cy="120" r="60" fill="var(--accent-soft)" opacity="0.5" />
        </svg>
        <div style={{ position: "absolute", left: "52%", top: "55%", transform: "translate(-50%,-100%)", textAlign: "center" }}>
          <span style={{ display: "inline-flex", width: 20, height: 20, borderRadius: "50%", background: "var(--accent-deep)", border: "3px solid #fff", boxShadow: "var(--shadow-sm)" }}></span>
        </div>
        <div style={{ position: "relative", margin: 16, padding: "12px 16px", borderRadius: 16, background: "rgba(255,255,255,.92)", backdropFilter: "blur(8px)", boxShadow: "var(--shadow-sm)" }}>
          <p style={eyebrow}>Location</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--ink-900)", margin: "4px 0 2px", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ display: "inline-flex", width: 14, height: 14, color: "var(--accent-deep)" }}>{I("map-pin")}</span>{p.location}
          </p>
          <p style={{ ...body("var(--text-xs)") }}>{c.eyebrow} · approximate area</p>
        </div>
      </BentoCard>
    );
  }

  Object.assign(window.YTMW, {
    GalleryTile, TitleTile, DescriptionTile, CapacityTile, AmenitiesTile,
    PracticalTile, CheckinTile, RulesTile, NearbyTile, RecommendTile,
    AirbnbTile, BookingTile, LocationTile,
  });
})();
