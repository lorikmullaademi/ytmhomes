/* global React, lucide */
/* =====================================================================
   Y.T.M. bento widget library — the reusable card vocabulary.
   Every widget fills its tile (height:100%) and reads --accent* + theme
   CSS vars set by the page wrapper. Composes with the design-system
   components on window.YTMHomesMoreDesignSystem_3b4e5e.
   ===================================================================== */
(function () {
  const DSC = window.YTMHomesMoreDesignSystem_3b4e5e;
  const { Button, Badge, Tag, AmenityItem, Avatar } = DSC;
  const DS = window.YTM.DS;
  const ASSETS = window.YTM.ASSETS;
  const I = (n, extra) => <i data-lucide={n} {...(extra || {})}></i>;

  // ---- shared text styles ----
  const eyebrow = {
    fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--text-xs)",
    letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent-deep)", margin: 0,
  };
  const serif = (size) => ({
    fontFamily: "var(--font-display)", fontWeight: 300, fontSize: size,
    lineHeight: 1.05, letterSpacing: "-.02em", color: "var(--text-strong)", margin: 0,
  });
  const body = (size) => ({
    fontFamily: "var(--font-body)", fontWeight: 400, fontSize: size || "var(--text-sm)",
    lineHeight: 1.6, color: "var(--text-muted)", margin: 0,
  });
  const script = {
    fontFamily: "var(--font-script)", fontWeight: 400, color: "var(--accent-deep)",
  };

  // ---- card shell -------------------------------------------------
  function BentoCard({ children, pad = 20, tone = "surface", onClick, interactive, style = {} }) {
    const tones = {
      surface: { background: "var(--surface-card)", border: "1px solid var(--border-soft)" },
      sand: { background: "var(--surface-sand)", border: "1px solid var(--sand-200)" },
      sunk: { background: "var(--surface-sunk)", border: "1px solid var(--border-soft)" },
      tint: { background: "var(--accent-tint)", border: "1px solid var(--accent-soft)" },
      ink: { background: "var(--ink-tile)", border: "1px solid transparent", color: "var(--text-on-inverse)" },
      none: { background: "transparent", border: "none" },
    };
    const t = tones[tone] || tones.surface;
    return (
      <div
        onClick={onClick}
        className={interactive ? "ytm-lift" : undefined}
        style={{
          height: "100%", borderRadius: "var(--tile-radius)", boxShadow: "var(--tile-shadow)",
          padding: pad, overflow: "hidden", display: "flex", flexDirection: "column",
          cursor: onClick ? "pointer" : "default", position: "relative",
          transition: "var(--transition-base)", ...t, ...style,
        }}
      >
        {children}
      </div>
    );
  }

  // ---- image helpers ----------------------------------------------
  const wash = (w) => ({ coast: "var(--wash-coast)", sunrise: "var(--wash-sunrise)", dusk: "var(--wash-dusk)" }[w] || "var(--wash-coast)");

  // a full-bleed image slot with brand-wash fallback (styled via ::part in CSS)
  function Photo({ id, label = "Drop a photo", icon = "image", w = "coast", style = {} }) {
    return (
      <image-slot
        id={id}
        shape="rect"
        placeholder={label}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", "--slot-wash": wash(w), ...style }}
      ></image-slot>
    );
  }

  // ============================================================
  // BRAND IDENTITY
  // ============================================================
  function BrandTile() {
    return (
      <BentoCard tone="tint" pad={26} style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <img src={ASSETS + "/logo/ytm-logo.png"} alt="Y.T.M. Homes & More" style={{ width: "62%", maxWidth: 240, height: "auto" }} />
          <span style={{ ...eyebrow, color: "var(--accent-deep)", textAlign: "right", lineHeight: 1.5 }}>Albanian<br />Riviera<br />& beyond</span>
        </div>
        <div>
          <h1 style={{ ...serif("clamp(28px, 3.4vw, 46px)"), marginBottom: 10 }}>
            Homes by the sea,<br />and in the <em style={{ fontStyle: "italic", color: "var(--accent-deep)" }}>city</em>.
          </h1>
          <p style={{ ...body("var(--text-md)"), maxWidth: 420 }}>
            A small, family-run portfolio of holiday apartments and private homes — looked after with care, ready for yours.
          </p>
        </div>
        <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
          {["var(--sun-500)", "var(--lavender-500)", "var(--sage-500)"].map((c, i) => (
            <span key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }}></span>
          ))}
          <span style={{ ...script, fontSize: 26, marginLeft: 6 }}>Homes &amp; More</span>
        </div>
      </BentoCard>
    );
  }

  // ============================================================
  // INTRO / PORTFOLIO STATEMENT
  // ============================================================
  function IntroTile() {
    return (
      <BentoCard pad={24} style={{ justifyContent: "center", gap: 14 }}>
        <span style={{ display: "inline-flex", width: 34, height: 34, borderRadius: 10, background: "var(--accent-soft)", color: "var(--accent-deep)", alignItems: "center", justifyContent: "center" }}>{I("compass")}</span>
        <h2 style={serif("var(--text-2xl)")}>
          Three stays by the coast.<br />Two homes in the city.
        </h2>
        <p style={body("var(--text-md)")}>
          All managed with care by the same family — the warmth of a host, the ease of a hotel.
        </p>
      </BentoCard>
    );
  }

  // ============================================================
  // COLLECTION HEADER
  // ============================================================
  function CollectionTile({ c, onOpen }) {
    return (
      <BentoCard pad={0} interactive onClick={onOpen} style={{ justifyContent: "flex-end" }}>
        <Photo id={"col-" + c.id} label={c.name} icon={c.id === "saranda" ? "palmtree" : "building-2"} w={c.wash} />
        <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }}></div>
        <div style={{ position: "relative", padding: 22, color: "#fff" }}>
          <p style={{ ...eyebrow, color: "rgba(255,255,255,.82)" }}>{c.eyebrow}</p>
          <h2 style={{ ...serif("var(--text-3xl)"), color: "#fff", margin: "6px 0 6px" }}>{c.name}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "rgba(255,255,255,.9)" }}>
            <span>{c.count} {c.count > 2 ? "stays" : "homes"}</span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "currentColor" }}></span>
            <span>{c.mood}</span>
          </div>
        </div>
        <span style={{ position: "absolute", top: 18, right: 18, width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,.86)", backdropFilter: "blur(6px)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--ink-900)" }}>{I("arrow-up-right")}</span>
      </BentoCard>
    );
  }

  // ============================================================
  // PROPERTY THUMBNAIL  (the navigator)
  // ============================================================
  function PropertyThumb({ p, onOpen, tall }) {
    return (
      <BentoCard pad={0} interactive onClick={() => onOpen(p.id)} style={{ justifyContent: "flex-end" }}>
        <Photo id={"thumb-" + p.id} label={p.name} icon="image" w={p.wash} />
        <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }}></div>
        <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 7 }}>
          {p.badges.slice(0, tall ? 2 : 1).map((b, i) => <Badge key={i} tone={b.tone} size="sm">{b.label}</Badge>)}
        </div>
        <span style={{ position: "absolute", top: 12, right: 12, display: "inline-flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 999, background: "rgba(255,255,255,.86)", backdropFilter: "blur(6px)", fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--ink-800)" }}>
          <span style={{ display: "inline-flex", width: 12, height: 12, color: "var(--sun-600)" }}>{I("star", { fill: "currentColor" })}</span>{p.rating}
        </span>
        <div style={{ position: "relative", padding: 18, color: "#fff", display: "flex", flexDirection: "column", gap: 6 }}>
          <h3 style={{ ...serif("var(--text-xl)"), color: "#fff", margin: 0 }}>{p.name}</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "rgba(255,255,255,.9)", margin: 0, lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: tall ? 3 : 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{tall ? p.mood : p.glance}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginTop: 2 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "rgba(255,255,255,.85)", whiteSpace: "nowrap" }}>
              <span style={{ display: "inline-flex", width: 13, height: 13 }}>{I("users")}</span>{p.sleeps}
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "#fff", whiteSpace: "nowrap" }}>
              <b style={{ fontWeight: 700 }}>€{p.price}</b> <span style={{ opacity: .8 }}>/ night</span>
            </span>
          </div>
        </div>
      </BentoCard>
    );
  }

  // ============================================================
  // STYLISED MAP
  // ============================================================
  function MapTile({ pins = [], title = "Where we are", lead }) {
    return (
      <BentoCard pad={0} style={{ justifyContent: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, background: "var(--wash-coast)" }}></div>
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <rect width="400" height="300" fill="var(--sea-100)" opacity="0.55" />
          {/* abstract landmass */}
          <path d="M150,300 C120,250 180,210 160,170 C150,140 200,120 210,90 C220,60 280,55 320,40 C360,28 400,40 400,40 L400,300 Z" fill="var(--sage-200)" opacity="0.85" />
          <path d="M150,300 C120,250 180,210 160,170 C150,140 200,120 210,90 C220,60 280,55 320,40 C360,28 400,40 400,40 L400,300 Z" fill="none" stroke="var(--sage-400)" strokeWidth="1.5" opacity="0.5" />
          {/* roads */}
          <path d="M120,280 C180,230 220,200 300,90" fill="none" stroke="var(--white)" strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round" opacity="0.7" />
        </svg>
        <div style={{ position: "absolute", inset: 0 }}>
          {pins.map((pin, i) => (
            <div key={i} style={{ position: "absolute", left: pin.x + "%", top: pin.y + "%", transform: "translate(-50%,-100%)", textAlign: "center" }}>
              <span style={{ display: "block", padding: "3px 9px", borderRadius: 999, background: "var(--white)", boxShadow: "var(--shadow-sm)", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "var(--ink-800)", whiteSpace: "nowrap", marginBottom: 4 }}>{pin.label}</span>
              <span style={{ display: "inline-flex", width: 18, height: 18, borderRadius: "50%", background: "var(--accent-deep)", border: "3px solid #fff", boxShadow: "var(--shadow-sm)" }}></span>
            </div>
          ))}
        </div>
        <div style={{ position: "relative", margin: 16, padding: "12px 16px", borderRadius: 16, background: "rgba(255,255,255,.9)", backdropFilter: "blur(8px)", boxShadow: "var(--shadow-sm)" }}>
          <p style={eyebrow}>{title}</p>
          <p style={{ ...body("var(--text-sm)"), color: "var(--text-body)", marginTop: 4 }}>{lead || "Two shores, one family — the Albanian coast and the Kosovar capital."}</p>
        </div>
      </BentoCard>
    );
  }

  // ============================================================
  // CONTACT / BOOKING
  // ============================================================
  function ContactTile({ compact }) {
    const c = window.YTM.contact;
    return (
      <BentoCard tone="ink" pad={24} style={{ justifyContent: "space-between" }}>
        <div>
          <p style={{ ...eyebrow, color: "var(--accent)" }}>Booking &amp; questions</p>
          <h3 style={{ ...serif(compact ? "var(--text-xl)" : "var(--text-2xl)"), color: "#fff", margin: "8px 0 8px" }}>Talk to your host</h3>
          <p style={{ ...body("var(--text-sm)"), color: "rgba(255,255,255,.72)" }}>A real family in Saranda, replying within the hour. You won’t be charged until we confirm by WhatsApp.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 16 }}>
          <a href={"https://wa.me/" + c.whatsapp.replace(/[^\d]/g, "")} data-no-drag target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            <Button variant="primary" fullWidth iconLeft={I("message-circle")}>WhatsApp us</Button>
          </a>
          <a href={"mailto:" + c.email} data-no-drag style={{ display: "inline-flex", alignItems: "center", gap: 8, justifyContent: "center", color: "rgba(255,255,255,.82)", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", textDecoration: "none" }}>
            <span style={{ display: "inline-flex", width: 15, height: 15 }}>{I("mail")}</span>{c.email}
          </a>
        </div>
      </BentoCard>
    );
  }

  // ============================================================
  // TRUST — managed with care
  // ============================================================
  function TrustTile() {
    return (
      <BentoCard tone="tint" pad={22} style={{ justifyContent: "center", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar name="Yllka T." tone="lavender" size="md" />
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--ink-900)" }}>Yllka &amp; family</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Your hosts</div>
          </div>
        </div>
        <p style={{ ...serif("var(--text-lg)"), lineHeight: 1.2 }}>Managed with care</p>
        <p style={body("var(--text-sm)")}>Cleaned and checked before every arrival. We live nearby and answer ourselves.</p>
      </BentoCard>
    );
  }

  // ============================================================
  // STAT chip
  // ============================================================
  function StatTile({ icon, big, label, tone = "sand" }) {
    return (
      <BentoCard tone={tone} pad={20} style={{ justifyContent: "center", gap: 8 }}>
        <span style={{ display: "inline-flex", width: 36, height: 36, borderRadius: 10, background: "var(--white)", color: "var(--accent-deep)", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-xs)" }}>{I(icon)}</span>
        <div style={{ ...serif("var(--text-2xl)") }}>{big}</div>
        <p style={body("var(--text-sm)")}>{label}</p>
      </BentoCard>
    );
  }

  // ============================================================
  // SPOTIFY playlist
  // ============================================================
  function SpotifyTile({ compact }) {
    return (
      <BentoCard tone="ink" pad={0} style={{ justifyContent: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(150deg, #2b5d3e 0%, var(--ink-tile) 70%)" }}></div>
        <div style={{ position: "relative", padding: 22, display: "flex", flexDirection: "column", height: "100%", gap: 6 }}>
          <div style={{ flexShrink: 0, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ display: "inline-flex", width: 30, height: 30, color: "#1DB954" }}>{I("music")}</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.6)" }}>Playlist</span>
          </div>
          <div style={{ flex: 1 }}></div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 5 }}>
            <p style={{ ...script, fontSize: 23, color: "rgba(255,255,255,.85)", margin: 0, lineHeight: 1 }}>Sounds of</p>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "var(--text-lg)", lineHeight: 1.1, letterSpacing: "-.01em", color: "#fff", margin: 0 }}>Slow coast mornings</h3>
            <p style={{ ...body("var(--text-xs)"), color: "rgba(255,255,255,.6)", margin: 0 }}>The YTM mix — sun, sea &amp; easy evenings</p>
            <a href={window.YTM.SPOTIFY} data-no-drag target="_blank" rel="noopener" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, marginTop: 9, padding: "9px 16px", borderRadius: 999, background: "#1DB954", color: "#08130c", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "var(--text-sm)", textDecoration: "none" }}>
              <span style={{ display: "inline-flex", width: 15, height: 15 }}>{I("play", { fill: "currentColor" })}</span>Open in Spotify
            </a>
          </div>
        </div>
      </BentoCard>
    );
  }

  // ============================================================
  // ATMOSPHERIC mood tile (photo + word)
  // ============================================================
  function MoodPhotoTile({ id, word, sub, icon, w = "coast" }) {
    return (
      <BentoCard pad={0} style={{ justifyContent: "flex-end" }}>
        <Photo id={id} label={word} icon={icon} w={w} />
        <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }}></div>
        <div style={{ position: "relative", padding: 16, color: "#fff" }}>
          <h3 style={{ ...serif("var(--text-lg)"), color: "#fff", margin: 0 }}>{word}</h3>
          {sub && <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "rgba(255,255,255,.85)", margin: "3px 0 0" }}>{sub}</p>}
        </div>
      </BentoCard>
    );
  }

  // ============================================================
  // QUOTE / REVIEW
  // ============================================================
  function QuoteTile({ review }) {
    return (
      <BentoCard tone="sand" pad={24} style={{ justifyContent: "center", gap: 14 }}>
        <span style={{ flexShrink: 0, display: "inline-flex", width: 26, height: 26, color: "var(--accent-deep)" }}>{I("quote")}</span>
        <p style={{ flexShrink: 0, fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300, fontSize: "var(--text-lg)", lineHeight: 1.35, color: "var(--text-strong)", margin: 0 }}>“{review.quote}”</p>
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 10, marginTop: 2 }}>
          <Avatar name={review.name} tone={review.tone} size="sm" />
          <div>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--ink-900)" }}>{review.name}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{review.meta}</div>
          </div>
        </div>
      </BentoCard>
    );
  }

  window.YTMW = {
    BentoCard, Photo, wash, eyebrow, serif, body, script, I,
    BrandTile, IntroTile, CollectionTile, PropertyThumb, MapTile,
    ContactTile, TrustTile, StatTile, SpotifyTile, MoodPhotoTile, QuoteTile,
  };
})();
