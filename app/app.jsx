/* global React, ReactDOM, Homepage, PropertyDetail, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSelect, TweakSlider, TweakToggle, TweakColor, TweakButton */
/* =====================================================================
   App shell — routing, chrome, theming, Tweaks, booking modal.
   ===================================================================== */
(function () {
  const Y = window.YTM;
  const { Button, Badge, Avatar } = window.YTMHomesMoreDesignSystem_3b4e5e;
  const I = (n, e) => <i data-lucide={n} {...(e || {})}></i>;

  // ---- accent palettes (light + warm-dark) ----
  const ACCENTS = {
    sage:     { l: ["#94A05C","#717C44","#EAEDD7","#F6F7EE","#94A05C","#717C44","#fff"], d: ["#B8C285","#C2CC93","#34382a","#2a2c22","#94A05C","#B8C285","#1a1712"] },
    lavender: { l: ["#AE8FC4","#8B68A6","#EFE6F4","#F8F4FB","#AE8FC4","#8B68A6","#fff"], d: ["#CFB8DF","#D5C0E3","#352d3c","#2a2530","#AE8FC4","#CFB8DF","#1a1712"] },
    sun:      { l: ["#D6C25C","#8A782B","#F8F2CF","#FCFAEC","#D6C25C","#B49E3B","#2E2A24"], d: ["#EBDB89","#EEDF92","#3a3520","#2c2818","#D6C25C","#EBDB89","#1a1712"] },
    sea:      { l: ["#548196","#385664","#D7E3E8","#EFF4F6","#45697B","#385664","#fff"], d: ["#84A9B7","#AFC8D1","#25343a","#1f2a2f","#548196","#84A9B7","#0e1518"] },
    stone:    { l: ["#948D7E","#38332C","#EDEAE3","#F1F1ED","#38332C","#2E2A24","#fff"], d: ["#B9B2A4","#D9D4C9","#34302a","#2a261f","#948D7E","#B9B2A4","#1a1712"] },
  };
  function accentVars(name, dark) {
    const a = (ACCENTS[name] || ACCENTS.sage)[dark ? "d" : "l"];
    return {
      "--accent": a[0], "--accent-deep": a[1], "--accent-soft": a[2], "--accent-tint": a[3],
      "--action-bg": a[4], "--action-bg-hover": a[5], "--action-fg": a[6],
    };
  }

  const DENSITY = {
    spacious: { "--bento-row": "224px", "--bento-gap": "24px", "--page-pad": "44px 32px 24px" },
    comfy:    { "--bento-row": "200px", "--bento-gap": "18px", "--page-pad": "32px 26px 20px" },
    compact:  { "--bento-row": "176px", "--bento-gap": "13px", "--page-pad": "24px 18px 16px" },
  };
  const SHADOWS = { flat: "var(--shadow-xs)", soft: "var(--shadow-card)", lifted: "var(--shadow-lg)" };
  const FONTS = {
    Newsreader: "'Newsreader', Georgia, serif",
    "Playfair Display": "'Playfair Display', Georgia, serif",
    "DM Serif Display": "'DM Serif Display', Georgia, serif",
    "Cormorant Garamond": "'Cormorant Garamond', Georgia, serif",
  };
  const DARK_VARS = {
    "--surface-page": "#211d18", "--surface-card": "#2b2620", "--surface-sand": "#322c24",
    "--surface-sunk": "#262119", "--ink-tile": "#16130f",
    "--text-strong": "#FBF8F1", "--text-body": "#E7DFD0", "--text-muted": "#B3A993", "--text-soft": "#8d8472",
    "--border-soft": "#3a342b", "--border-default": "#46402f", "--sand-200": "#3a342b",
    "--wash-coast": "linear-gradient(135deg,#2b3a40,#241f18 55%,#2a2c20)",
    "--wash-sunrise": "linear-gradient(135deg,#3a3320,#241f18 60%,#211d18)",
    "--wash-dusk": "linear-gradient(135deg,#2f2738,#211d18 70%)",
  };

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "arrangement": "editorial",
    "density": "comfy",
    "radius": 24,
    "shadow": "soft",
    "displayFont": "Newsreader",
    "accent": "sage",
    "dark": false
  }/*EDITMODE-END*/;

  // ---- chrome: detail top bar ----
  function DetailBar({ p, onHome, onSibling }) {
    const sibs = Y.propsOf(p.collection);
    const idx = sibs.findIndex((s) => s.id === p.id);
    const prev = sibs[(idx - 1 + sibs.length) % sibs.length];
    const next = sibs[(idx + 1) % sibs.length];
    return (
      <div className="ytm-bar">
        <button className="ytm-pill" onClick={onHome}>
          <span style={{ display: "inline-flex", width: 16, height: 16 }}>{I("arrow-left")}</span>All stays
        </button>
        <div className="ytm-bar-mid">
          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent-deep)", fontWeight: 600 }}>{Y.collections[p.collection].name}</span>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--text-soft)" }}></span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-md)", color: "var(--text-strong)" }}>{p.name}</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {sibs.length > 1 && <button className="ytm-icon" title={prev.name} onClick={() => onSibling(prev.id)}>{I("chevron-left")}</button>}
          {sibs.length > 1 && <button className="ytm-icon" title={next.name} onClick={() => onSibling(next.id)}>{I("chevron-right")}</button>}
        </div>
      </div>
    );
  }

  function Footer({ onHome }) {
    const c = Y.contact;
    return (
      <footer style={{ maxWidth: "var(--content-max)", margin: "8px auto 0", padding: "28px var(--footer-x) 48px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 18, borderTop: "1px solid var(--border-soft)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src={Y.ASSETS + "/logo/ytm-logo-square.png"} alt="" style={{ width: 40, height: 40, borderRadius: 10 }} onClick={onHome} />
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-md)", color: "var(--text-strong)" }}>Y.T.M. Homes &amp; More</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Saranda, Albania · Prishtina, Kosovo · managed with care</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)" }}>
          <a href={"https://wa.me/" + c.whatsapp.replace(/[^\d]/g, "")} target="_blank" rel="noopener" style={{ color: "var(--text-body)", textDecoration: "none", display: "inline-flex", gap: 6, alignItems: "center" }}><span style={{ width: 15, height: 15, display: "inline-flex" }}>{I("message-circle")}</span>WhatsApp</a>
          <a href={"mailto:" + c.email} style={{ color: "var(--text-body)", textDecoration: "none" }}>{c.email}</a>
          <a href="Design System.html" target="_blank" style={{ color: "var(--accent-deep)", textDecoration: "none", display: "inline-flex", gap: 6, alignItems: "center", fontWeight: 600 }}>Design system <span style={{ width: 14, height: 14, display: "inline-flex" }}>{I("arrow-up-right")}</span></a>
        </div>
      </footer>
    );
  }

  // ---- booking confirm modal ----
  function BookingModal({ p, onClose }) {
    return (
      <div className="ytm-ov" onClick={onClose}>
        <div className="ytm-modal" onClick={(e) => e.stopPropagation()}>
          <span style={{ display: "inline-flex", width: 56, height: 56, borderRadius: "50%", background: "var(--success-50)", color: "var(--success-500)", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>{I("check")}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "var(--text-2xl)", color: "var(--text-strong)", margin: "0 0 10px" }}>Request sent!</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 18px" }}>
            Thank you — we’ll confirm your dates for <b style={{ color: "var(--text-strong)" }}>{p ? p.name : "your stay"}</b> by WhatsApp within the hour. A warm welcome awaits.
          </p>
          <div style={{ fontFamily: "var(--font-script)", fontSize: 30, color: "var(--accent-deep)", marginBottom: 20 }}>Yllka &amp; family</div>
          <Button variant="primary" fullWidth onClick={onClose}>Back to the board</Button>
        </div>
      </div>
    );
  }

  // ---- drag hint ----
  function DragHint() {
    const [show, setShow] = React.useState(() => {
      try { return !localStorage.getItem("ytm:draghint"); } catch (e) { return true; }
    });
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
    if (!show) return null;
    const dismiss = () => { setShow(false); try { localStorage.setItem("ytm:draghint", "1"); } catch (e) {} };
    return (
      <div className="ytm-hint">
        <span style={{ display: "inline-flex", width: 16, height: 16, color: "var(--accent-deep)" }}>{I("move")}</span>
        Drag any card to rearrange your board.
        <button onClick={dismiss} aria-label="Dismiss" style={{ display: "inline-flex", marginLeft: 6, background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", width: 16, height: 16 }}>{I("x")}</button>
      </div>
    );
  }

  function App() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    const [view, setView] = React.useState("home");
    const [curId, setCurId] = React.useState(null);
    const [booked, setBooked] = React.useState(null);
    const [reset, setReset] = React.useState(0);

    const goHome = () => { setView("home"); setCurId(null); window.scrollTo({ top: 0 }); };
    const open = (id) => { setCurId(id); setView("detail"); window.scrollTo({ top: 0 }); };

    React.useEffect(() => { window.scrollTo(0, 0); }, [view, curId]);
    React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

    const cur = curId ? Y.byId[curId] : null;
    const baseAccent = view === "detail" && cur ? cur.accent : t.accent;

    const rootVars = {
      ...accentVars(baseAccent, t.dark),
      ...DENSITY[t.density],
      ...(t.dark ? DARK_VARS : {}),
      "--tile-radius": t.radius + "px",
      "--tile-shadow": SHADOWS[t.shadow],
      "--font-display": FONTS[t.displayFont] || FONTS.Newsreader,
      "--ink-tile": t.dark ? DARK_VARS["--ink-tile"] : "var(--ink-900)",
      "--glass": t.dark ? "rgba(43,38,32,.72)" : "rgba(255,255,255,.82)",
      "--footer-x": "28px",
      minHeight: "100vh",
      background: "var(--surface-page)",
      transition: "background .3s var(--ease-out)",
    };

    return (
      <div className="ytm ytm-root" style={rootVars}>
        {view === "detail" && cur && <DetailBar p={cur} onHome={goHome} onSibling={open} />}
        {view === "home" && <Homepage onOpen={open} onBook={() => {}} arrangement={t.arrangement} resetSignal={reset} />}
        {view === "detail" && cur && <PropertyDetail id={curId} onBook={() => setBooked(cur)} resetSignal={reset} />}
        <Footer onHome={goHome} />
        {booked && <BookingModal p={booked} onClose={() => setBooked(null)} />}
        <DragHint />

        <TweaksPanel>
          <TweakSection label="Layout" />
          {view === "home" && (
            <TweakRadio label="Arrangement" value={t.arrangement}
              options={["editorial", "gallery", "compact"]}
              onChange={(v) => setTweak("arrangement", v)} />
          )}
          <TweakRadio label="Density" value={t.density}
            options={["spacious", "comfy", "compact"]}
            onChange={(v) => setTweak("density", v)} />
          <TweakSlider label="Card roundness" value={t.radius} min={8} max={36} step={2} unit="px"
            onChange={(v) => setTweak("radius", v)} />
          <TweakRadio label="Shadow" value={t.shadow}
            options={["flat", "soft", "lifted"]}
            onChange={(v) => setTweak("shadow", v)} />
          <TweakButton label="Arrangement" onClick={() => setReset((r) => r + 1)}>Reset card order</TweakButton>

          <TweakSection label="Brand" />
          <TweakSelect label="Display font" value={t.displayFont}
            options={Object.keys(FONTS)}
            onChange={(v) => setTweak("displayFont", v)} />
          <TweakRadio label="Accent" value={t.accent}
            options={["sage", "lavender", "sun"]}
            onChange={(v) => setTweak("accent", v)} />
          <TweakToggle label="Warm dark mode" value={t.dark}
            onChange={(v) => setTweak("dark", v)} />
        </TweaksPanel>
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  setTimeout(() => window.lucide && window.lucide.createIcons(), 150);
})();
