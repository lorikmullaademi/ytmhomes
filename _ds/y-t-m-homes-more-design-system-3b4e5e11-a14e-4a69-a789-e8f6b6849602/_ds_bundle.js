/* @ds-bundle: {"format":3,"namespace":"YTMHomesMoreDesignSystem_3b4e5e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"AmenityItem","sourcePath":"components/hospitality/AmenityItem.jsx"},{"name":"Avatar","sourcePath":"components/hospitality/Avatar.jsx"},{"name":"ListingCard","sourcePath":"components/hospitality/ListingCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"513ee51ac02b","components/core/Button.jsx":"3a6a6f8957d7","components/core/Card.jsx":"e70dcbe9da5c","components/core/IconButton.jsx":"9ce79d3cd6e3","components/core/Tag.jsx":"bd6cfa943dd0","components/forms/Checkbox.jsx":"567bbdc58f23","components/forms/Input.jsx":"cb3fed0e8265","components/forms/Select.jsx":"b4fdfedea3f9","components/hospitality/AmenityItem.jsx":"7e1e852858f2","components/hospitality/Avatar.jsx":"3768f37271c6","components/hospitality/ListingCard.jsx":"ee603730d640","ui_kits/guest-guide/GuestGuide.jsx":"7f360f3b0c21","ui_kits/website/Homepage.jsx":"811bd430e262","ui_kits/website/ListingPage.jsx":"8dd022545cb8","ui_kits/website/Shared.jsx":"6af387b04793","ui_kits/website/SiteChrome.jsx":"f0e8be3d0062"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YTMHomesMoreDesignSystem_3b4e5e = window.YTMHomesMoreDesignSystem_3b4e5e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / label pill. Tones map to the brand + functional palette.
 * Use for availability, ratings context, "Superhost"-style trust marks.
 */
function Badge({
  children,
  tone = 'sage',
  icon = null,
  size = 'md',
  style = {},
  ...rest
}) {
  const tones = {
    sage: {
      bg: 'var(--sage-100)',
      fg: 'var(--sage-800)'
    },
    lavender: {
      bg: 'var(--lavender-100)',
      fg: 'var(--lavender-800)'
    },
    sun: {
      bg: 'var(--sun-100)',
      fg: 'var(--sun-800)'
    },
    sea: {
      bg: 'var(--sea-100)',
      fg: 'var(--sea-700)'
    },
    clay: {
      bg: 'var(--clay-100)',
      fg: 'var(--clay-700)'
    },
    neutral: {
      bg: 'var(--stone-100)',
      fg: 'var(--ink-700)'
    },
    success: {
      bg: 'var(--success-50)',
      fg: 'var(--success-500)'
    },
    solid: {
      bg: 'var(--ink-900)',
      fg: 'var(--cream)'
    }
  };
  const t = tones[tone] || tones.sage;
  const pad = size === 'sm' ? '3px 10px' : '5px 13px';
  const fs = size === 'sm' ? 'var(--text-xs)' : 'var(--text-sm)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4em',
      background: t.bg,
      color: t.fg,
      padding: pad,
      fontFamily: 'var(--font-body)',
      fontSize: fs,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.01em',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.05em',
      height: '1.05em'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Y.T.M. primary button. Soft pill, calm motion, warm palette.
 * Variants: primary (sage), secondary (lavender outline-soft),
 * ghost, sea, and quiet. Sizes: sm / md / lg.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 'var(--control-h-sm)',
      padding: '0 18px',
      font: 'var(--text-sm)'
    },
    md: {
      height: 'var(--control-h)',
      padding: '0 26px',
      font: 'var(--text-base)'
    },
    lg: {
      height: 'var(--control-h-lg)',
      padding: '0 34px',
      font: 'var(--text-md)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action-bg)',
      color: 'var(--action-fg)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--lavender-100)',
      color: 'var(--lavender-800)',
      border: '1.5px solid var(--lavender-300)',
      boxShadow: 'none'
    },
    sea: {
      background: 'var(--sea-600)',
      color: 'var(--white)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-800)',
      border: '1.5px solid var(--border-default)',
      boxShadow: 'none'
    },
    quiet: {
      background: 'transparent',
      color: 'var(--sea-600)',
      border: '1.5px solid transparent',
      boxShadow: 'none',
      padding: '0 8px'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: "ytm-btn",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.55em',
      height: s.height,
      padding: v.padding || s.padding,
      fontFamily: 'var(--font-body)',
      fontSize: s.font,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? '100%' : 'auto',
      transition: 'var(--transition-base)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--action-bg-hover)';
    },
    onMouseLeave: e => {
      if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--action-bg)';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.1em',
      height: '1.1em'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.1em',
      height: '1.1em'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Soft container surface — the brand's workhorse. Rounded corners,
 * warm shadow, optional hover-lift. Compose listings, info panels,
 * guide cards, booking summaries inside.
 */
function Card({
  children,
  elevation = 'card',
  padding = 'md',
  interactive = false,
  tone = 'surface',
  style = {},
  ...rest
}) {
  const shadows = {
    flat: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    card: 'var(--shadow-card)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const pads = {
    none: '0',
    sm: 'var(--pad-card-sm)',
    md: 'var(--pad-card)',
    lg: 'var(--space-7)'
  };
  const tones = {
    surface: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)'
    },
    sand: {
      background: 'var(--surface-sand)',
      border: '1px solid var(--sand-200)'
    },
    sunk: {
      background: 'var(--surface-sunk)',
      border: '1px solid var(--border-soft)'
    },
    sea: {
      background: 'var(--sea-50)',
      border: '1px solid var(--sea-100)'
    },
    sage: {
      background: 'var(--sage-50)',
      border: '1px solid var(--sage-100)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid transparent',
      color: 'var(--text-on-inverse)'
    }
  };
  const t = tones[tone] || tones.surface;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: interactive ? 'ytm-card-interactive' : undefined,
    style: {
      borderRadius: 'var(--radius-lg)',
      boxShadow: shadows[elevation] ?? shadows.card,
      padding: pads[padding] ?? pads.md,
      overflow: 'hidden',
      transition: 'var(--transition-base)',
      cursor: interactive ? 'pointer' : 'default',
      ...t,
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = shadows[elevation] ?? shadows.card;
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon-only button — nav controls, favorites, close, gallery arrows.
 * Pass a single Lucide icon node as children.
 */
function IconButton({
  children,
  variant = 'soft',
  size = 'md',
  'aria-label': ariaLabel,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 44,
    lg: 52
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    soft: {
      background: 'var(--white)',
      color: 'var(--ink-800)',
      border: '1.5px solid var(--border-default)',
      boxShadow: 'var(--shadow-xs)'
    },
    glass: {
      background: 'rgba(255,255,255,0.82)',
      color: 'var(--ink-900)',
      border: '1.5px solid rgba(255,255,255,0.6)',
      backdropFilter: 'blur(var(--blur-sm))',
      boxShadow: 'var(--shadow-sm)'
    },
    solid: {
      background: 'var(--action-bg)',
      color: 'var(--white)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-700)',
      border: '1.5px solid transparent',
      boxShadow: 'none'
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'var(--transition-base)',
      ...v,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: dim * 0.42,
      height: dim * 0.42
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Interactive filter / category chip — selectable. Used in search filters,
 * amenity toggles, guide categories.
 */
function Tag({
  children,
  selected = false,
  icon = null,
  onClick,
  disabled = false,
  style = {},
  ...rest
}) {
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    "aria-pressed": interactive ? selected : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.45em',
      height: '36px',
      padding: '0 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : interactive ? 'pointer' : 'default',
      opacity: disabled ? 0.5 : 1,
      transition: 'var(--transition-base)',
      background: selected ? 'var(--sage-600)' : 'var(--white)',
      color: selected ? 'var(--white)' : 'var(--ink-800)',
      border: selected ? '1.5px solid var(--sage-600)' : '1.5px solid var(--border-default)',
      boxShadow: selected ? 'var(--shadow-xs)' : 'none',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.05em',
      height: '1.05em'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label — house rules acknowledgement, filters, opt-ins. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '11px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-800)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--sage-600)' : 'var(--white)',
      border: checked ? '1.5px solid var(--sage-600)' : '1.5px solid var(--border-strong)',
      transition: 'var(--transition-base)',
      color: 'var(--white)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label, leading icon and helper/error text.
 * Soft rounded field on white, sand border, sea focus ring.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon = null,
  helper,
  error,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--ink-800)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay-600)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--stone-400)',
      pointerEvents: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    disabled: disabled,
    style: {
      width: '100%',
      height: 'var(--control-h)',
      padding: icon ? '0 16px 0 42px' : '0 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--ink-900)',
      background: disabled ? 'var(--surface-sunk)' : 'var(--white)',
      border: `1.5px solid ${error ? 'var(--error-500)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'var(--transition-base)'
    },
    onFocus: e => {
      if (!error) e.currentTarget.style.borderColor = 'var(--sea-500)';
      e.currentTarget.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? 'var(--error-500)' : 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--error-500)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with brand field treatment. */
function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  placeholder,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--ink-800)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--clay-600)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    onChange: onChange,
    required: required,
    disabled: disabled,
    style: {
      width: '100%',
      height: 'var(--control-h)',
      padding: '0 42px 0 16px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: value ? 'var(--ink-900)' : 'var(--stone-400)',
      background: disabled ? 'var(--surface-sunk)' : 'var(--white)',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer',
      transition: 'var(--transition-base)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--sea-500)';
      e.currentTarget.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--stone-400)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/hospitality/AmenityItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Amenity row item — a soft icon tile + label, optionally with a
 * short detail line. Used in listings, guest guides and check-in cards
 * for Wi-Fi, parking, coffee, AC, sea view, etc.
 */
function AmenityItem({
  icon,
  label,
  detail,
  tone = 'sage',
  layout = 'row',
  style = {},
  ...rest
}) {
  const tones = {
    sage: {
      bg: 'var(--sage-100)',
      fg: 'var(--sage-700)'
    },
    lavender: {
      bg: 'var(--lavender-100)',
      fg: 'var(--lavender-700)'
    },
    sun: {
      bg: 'var(--sun-100)',
      fg: 'var(--sun-800)'
    },
    sea: {
      bg: 'var(--sea-100)',
      fg: 'var(--sea-600)'
    },
    clay: {
      bg: 'var(--clay-100)',
      fg: 'var(--clay-600)'
    }
  };
  const t = tones[tone] || tones.sage;
  const col = layout === 'stack';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: col ? 'column' : 'row',
      alignItems: col ? 'flex-start' : 'center',
      gap: col ? '10px' : '13px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      color: t.fg
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 21,
      height: 21
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--ink-800)'
    }
  }, label), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, detail)));
}
Object.assign(__ds_scope, { AmenityItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hospitality/AmenityItem.jsx", error: String((e && e.message) || e) }); }

// components/hospitality/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Round avatar for host / guest — image or initials fallback. */
function Avatar({
  src,
  name = '',
  size = 'md',
  tone = 'sage',
  style = {},
  ...rest
}) {
  const sizes = {
    xs: 28,
    sm: 36,
    md: 48,
    lg: 64,
    xl: 88
  };
  const dim = sizes[size] || sizes.md;
  const tones = {
    sage: {
      bg: 'var(--sage-200)',
      fg: 'var(--sage-800)'
    },
    lavender: {
      bg: 'var(--lavender-200)',
      fg: 'var(--lavender-800)'
    },
    sun: {
      bg: 'var(--sun-200)',
      fg: 'var(--sun-800)'
    },
    sea: {
      bg: 'var(--sea-200)',
      fg: 'var(--sea-700)'
    }
  };
  const t = tones[tone] || tones.sage;
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: dim * 0.38,
      border: '2px solid var(--white)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hospitality/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/hospitality/ListingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Apartment listing card — image with glass favorite button, title,
 * location, rating, amenity badges and price. The hero unit of the
 * website and search results.
 */
function ListingCard({
  image,
  title,
  location = 'Bougainvillea Bay · Saranda',
  badges = [],
  rating,
  reviews,
  price,
  unit = 'night',
  favorite = false,
  onFavorite,
  onClick,
  wash = 'coast',
  placeholderLabel,
  style = {}
}) {
  const washes = {
    coast: 'var(--wash-coast)',
    sunrise: 'var(--wash-sunrise)',
    dusk: 'var(--wash-dusk)'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: "ytm-card-interactive",
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-base)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: washes[wash] || washes.coast
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      color: 'var(--stone-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 28,
      height: 28,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image"
  })), placeholderLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500
    }
  }, placeholderLabel)), badges.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      display: 'flex',
      gap: '7px'
    }
  }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: b.tone || 'solid'
  }, b.label || b))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": favorite ? 'Remove from wishlist' : 'Save to wishlist',
    onClick: e => {
      e.stopPropagation();
      onFavorite && onFavorite();
    },
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      width: 40,
      height: 40,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid rgba(255,255,255,0.6)',
      background: 'rgba(255,255,255,0.82)',
      backdropFilter: 'blur(var(--blur-sm))',
      cursor: 'pointer',
      color: favorite ? 'var(--clay-500)' : 'var(--ink-800)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("i", _extends({
    "data-lucide": "heart"
  }, favorite ? {
    fill: 'currentColor'
  } : {}))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)',
      margin: 0,
      lineHeight: 1.2
    }
  }, title), rating && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--ink-800)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 15,
      height: 15,
      color: 'var(--sun-600)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "star",
    fill: "currentColor"
  })), rating, reviews && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-regular)'
    }
  }, "\xA0(", reviews, ")"))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  })), location), price != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px',
      display: 'flex',
      alignItems: 'baseline',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)'
    }
  }, "\u20AC", price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "/ ", unit))));
}
Object.assign(__ds_scope, { ListingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hospitality/ListingCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guest-guide/GuestGuide.jsx
try { (() => {
/* global React */
function GuestGuide() {
  const {
    Card,
    Badge,
    Button,
    AmenityItem,
    Avatar
  } = window.YTMHomesMoreDesignSystem_3b4e5e;
  const I = n => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  const [copied, setCopied] = React.useState(false);
  const sections = [{
    icon: 'key-round',
    tone: 'sun',
    title: 'Arrival & keys',
    body: 'Park in spot #12. Your key is in the black lockbox by the door — code 2480. Lift the cover, enter the code, turn the dial down.'
  }, {
    icon: 'flame',
    tone: 'clay',
    title: 'Hot water & AC',
    body: 'The boiler switch is by the bathroom door (leave it on). The AC remote is on the console — 24°C is just right.'
  }, {
    icon: 'trash-2',
    tone: 'sage',
    title: 'Recycling',
    body: 'Bins are by the gate. Green for general, yellow for plastic & paper. Collection is every morning at 8.'
  }, {
    icon: 'waves',
    tone: 'sea',
    title: 'The beach',
    body: 'Turn left out of the gate and follow the path down — five minutes to the promenade and the nearest swimming spot.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440,
      margin: '0 auto',
      background: 'var(--surface-page)',
      minHeight: '100%',
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 230,
      borderRadius: '0 0 var(--radius-xl) var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--sage-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'var(--sage-600)',
      top: -70,
      right: -50,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: 'var(--sun-500)',
      top: 30,
      right: 40,
      opacity: 0.28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 90,
      height: 90,
      borderRadius: '50%',
      background: 'var(--lavender-400)',
      bottom: -20,
      left: 30,
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/ytm-mark.png",
    alt: "Y.T.M.",
    style: {
      position: 'absolute',
      top: 22,
      left: 22,
      height: 30,
      filter: 'brightness(0) invert(1)',
      opacity: 0.92
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      bottom: 24,
      color: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 38,
      lineHeight: 1,
      color: 'var(--sun-200)'
    }
  }, "Welcome,"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 32,
      lineHeight: 1.1,
      marginTop: 2
    }
  }, "the Bianchi family"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "We're so happy to have you at Apt 12. Here's everything you need for a restful stay \u2014 and we're a message away if anything comes up."), /*#__PURE__*/React.createElement(Card, {
    tone: "sage",
    elevation: "sm",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--white)',
      color: 'var(--sage-700)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wifi"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, "Wi-Fi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--sage-800)'
    }
  }, "Connect & relax"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '84px 1fr',
      rowGap: 10,
      columnGap: 8,
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage-800)'
    }
  }, "Network"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-900)',
      whiteSpace: 'nowrap',
      justifySelf: 'end'
    }
  }, "YTM-Apt12"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sage-800)'
    }
  }, "Password"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    },
    style: {
      justifySelf: 'end',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--white)',
      border: '1.5px solid var(--sage-200)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 12px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      color: 'var(--ink-900)',
      whiteSpace: 'nowrap'
    }
  }, "seaview2026 ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 14,
      height: 14,
      color: 'var(--sage-700)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": copied ? 'check' : 'copy'
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "sand",
    elevation: "flat",
    padding: "sm"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--sage-700)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "log-in"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Check-in"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-900)'
    }
  }, "3:00 pm")), /*#__PURE__*/React.createElement(Card, {
    tone: "sand",
    elevation: "flat",
    padding: "sm"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--clay-600)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "log-out"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Check-out"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--ink-900)'
    }
  }, "11:00 am"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--sage-700)',
      marginTop: 6
    }
  }, "In the apartment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, sections.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    elevation: "sm",
    padding: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0,
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: `var(--${s.tone}-100)`,
      color: `var(--${s.tone}-700)`,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--ink-900)',
      marginBottom: 3
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, s.body)))))), /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    elevation: "md",
    padding: "md",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Yllka T.",
    size: "md",
    tone: "lavender"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--cream)'
    }
  }, "Your host, Yllka"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'rgba(251,248,241,0.65)'
    }
  }, "Usually replies in minutes"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    iconLeft: I('message-circle')
  }, "Message us on WhatsApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-script)',
      fontSize: 28,
      color: 'var(--lavender-600)',
      marginTop: 8
    }
  }, "Enjoy Saranda \u2665")));
}
Object.assign(window, {
  GuestGuide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guest-guide/GuestGuide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
/* global React, PhotoFrame, SectionHead */
function Homepage({
  onOpenListing,
  onBook
}) {
  const {
    Button,
    Badge,
    Tag,
    ListingCard,
    AmenityItem,
    Avatar,
    Card
  } = window.YTMHomesMoreDesignSystem_3b4e5e;
  const I = n => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  const [fav, setFav] = React.useState({});
  const apts = [{
    id: 'apt12',
    title: 'Sea-View Suite · Apt 12',
    wash: 'sunrise',
    badges: [{
      label: 'Sea view',
      tone: 'sea'
    }, {
      label: 'Superhost',
      tone: 'sun'
    }],
    rating: '4.94',
    reviews: 128,
    price: 95,
    label: 'Sea-view living room'
  }, {
    id: 'apt7',
    title: 'Garden Studio · Apt 7',
    wash: 'coast',
    badges: [{
      label: 'Pool access',
      tone: 'sage'
    }],
    rating: '4.89',
    reviews: 86,
    price: 72,
    label: 'Garden studio'
  }];
  const perks = [{
    icon: 'badge-percent',
    label: 'Best price, direct',
    detail: 'No platform fees — book with us and save up to 15%.'
  }, {
    icon: 'message-circle',
    label: 'Talk to your host',
    detail: 'A real family in Saranda, replying within the hour.'
  }, {
    icon: 'sparkles',
    label: 'Spotless & ready',
    detail: 'Professionally cleaned and checked before every arrival.'
  }, {
    icon: 'key-round',
    label: 'Easy self check-in',
    detail: 'Lockbox keys and clear instructions sent ahead.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '56px 32px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--sage-700)'
    }
  }, "Bougainvillea Bay \xB7 Saranda, Albania"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--text-4xl)',
      lineHeight: 1.02,
      letterSpacing: '-.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Your home", /*#__PURE__*/React.createElement("br", null), "by the ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--sage-700)'
    }
  }, "sea")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: 420,
      margin: 0
    }
  }, "Two warm, well-kept holiday apartments on the Albanian Riviera \u2014 looked after by our family, ready for yours."), /*#__PURE__*/React.createElement(Card, {
    elevation: "md",
    padding: "sm",
    style: {
      borderRadius: 'var(--radius-pill)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '2px 4px 2px 14px'
    }
  }, [['calendar', 'Check-in'], ['calendar-check', 'Check-out'], ['users', '2 guests']].map(([ic, tx], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: tx
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 16,
      height: 16,
      color: 'var(--sage-700)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic
  })), tx), i < 2 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border-default)'
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    variant: "primary",
    style: {
      marginLeft: 'auto'
    },
    onClick: onBook,
    iconLeft: I('search')
  }, "Search"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, ['Y', 'D', 'A'].map((n, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: n,
    name: n,
    size: "sm",
    tone: ['lavender', 'sage', 'sun'][i],
    style: {
      marginLeft: i ? -10 : 0
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-900)'
    }
  }, "4.9\u2605"), " from 214 happy guests"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      aspectRatio: '1 / 1'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/saranda-sunset-terrace.png",
    alt: "Bougainvillea Bay at golden hour",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -18,
      left: -18,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      background: 'var(--sun-100)',
      color: 'var(--sun-800)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sun"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-900)'
    }
  }, "300+ sunny days"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "a year on the Riviera"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Our apartments",
    title: "Two homes, one beautiful bay"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: I('arrow-right')
  }, "See availability")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 26
    }
  }, apts.map(a => /*#__PURE__*/React.createElement(ListingCard, {
    key: a.id,
    wash: a.wash,
    placeholderLabel: a.label,
    title: a.title,
    badges: a.badges,
    rating: a.rating,
    reviews: a.reviews,
    price: a.price,
    favorite: !!fav[a.id],
    onFavorite: () => setFav(f => ({
      ...f,
      [a.id]: !f[a.id]
    })),
    onClick: () => onOpenListing(a.id)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--shell)',
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    align: "center",
    eyebrow: "Why book direct",
    title: "The warmth of a host, the ease of a hotel",
    lead: "Everything you'd expect from a professional stay \u2014 with a family who actually answers.",
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22
    }
  }, perks.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.label,
    tone: "surface",
    elevation: "sm",
    padding: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--sage-100)',
      color: 'var(--sage-700)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, p.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, p.detail)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '72px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    label: "Saranda waterfront",
    wash: "dusk",
    icon: "palmtree",
    aspect: "5 / 4",
    radius: "var(--radius-xl)",
    style: {
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Your neighbourhood",
    title: "Five minutes from the promenade",
    lead: "Bougainvillea Bay sits just above Saranda's seafront \u2014 close to the beaches, tavernas and the boats to Ksamil and Corfu, yet quiet enough to hear the cicadas."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, ['Beaches', 'Tavernas', 'Ksamil', 'Butrint', 'Old town', 'Corfu ferry'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      padding: '8px 32px 16px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 30,
      height: 30,
      color: 'var(--sun-600)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "quote"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: 'var(--text-2xl)',
      lineHeight: 1.3,
      color: 'var(--text-strong)',
      margin: '14px 0 20px'
    }
  }, "\u201CSpotless, calm and the sunset from the terrace is unreal. Yllka thought of everything \u2014 it felt like staying with friends.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Marta R.",
    tone: "sage"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-900)'
    }
  }, "Marta R."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Stayed July 2025 \xB7 Apt 12")))));
}
Object.assign(window, {
  Homepage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ListingPage.jsx
try { (() => {
/* global React, PhotoFrame, SectionHead */
function ListingPage({
  onBack,
  onBooked
}) {
  const {
    Button,
    Badge,
    Tag,
    Card,
    AmenityItem,
    Avatar,
    Input,
    Select,
    Checkbox,
    IconButton
  } = window.YTMHomesMoreDesignSystem_3b4e5e;
  const I = n => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n
  });
  const [guests, setGuests] = React.useState('2 guests');
  const [agree, setAgree] = React.useState(false);
  const nights = 5;
  const rate = 95;
  const cleaning = 25;
  const total = rate * nights + cleaning;
  const amenities = [{
    icon: 'waves',
    label: 'Sea view',
    tone: 'sea'
  }, {
    icon: 'wifi',
    label: 'Fast Wi-Fi',
    detail: '200 Mbps',
    tone: 'sea'
  }, {
    icon: 'square-parking',
    label: 'Free parking',
    tone: 'sage'
  }, {
    icon: 'wind',
    label: 'Air conditioning',
    tone: 'lavender'
  }, {
    icon: 'coffee',
    label: 'Coffee & tea',
    tone: 'clay'
  }, {
    icon: 'utensils',
    label: 'Full kitchen',
    tone: 'sage'
  }, {
    icon: 'washing-machine',
    label: 'Washing machine',
    tone: 'lavender'
  }, {
    icon: 'tv',
    label: 'Smart TV',
    tone: 'sun'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '24px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left"
  })), " All apartments"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--text-3xl)',
      letterSpacing: '-.01em',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, "Sea-View Suite \xB7 Apt 12"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      color: 'var(--ink-800)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 15,
      height: 15,
      color: 'var(--sun-600)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "star",
    fill: "currentColor"
  })), "4.94 \xB7 128 reviews"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  })), "Bougainvillea Bay, Saranda"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "soft",
    "aria-label": "Share"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "share-2"
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "soft",
    "aria-label": "Save"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "heart"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 10,
      height: 420,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridRow: '1 / 3',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/saranda-sunset-terrace.png",
    alt: "Sea view",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement(PhotoFrame, {
    label: "Living room",
    wash: "sunrise",
    icon: "sofa",
    aspect: "auto",
    radius: "var(--radius-lg)",
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    label: "Bedroom",
    wash: "dusk",
    icon: "bed-double",
    aspect: "auto",
    radius: "var(--radius-lg)",
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    label: "Kitchen",
    wash: "coast",
    icon: "utensils",
    aspect: "auto",
    radius: "var(--radius-lg)",
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    label: "Terrace",
    wash: "sunrise",
    icon: "sun",
    aspect: "auto",
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'absolute',
      right: 12,
      bottom: 12,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid rgba(255,255,255,0.6)',
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(6px)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "images"
  })), "All 24 photos"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 56,
      alignItems: 'start',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      paddingBottom: 24,
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Yllka T.",
    size: "lg",
    tone: "lavender"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, "Hosted by Yllka & family"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Superhost \xB7 3 years hosting \xB7 responds within an hour")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sun"
  }, "Superhost"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 0',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      margin: 0,
      maxWidth: '62ch'
    }
  }, "A bright one-bedroom suite with an open sea view from the terrace \u2014 perfect for couples or a small family. Wake to the sound of the bay, make a slow coffee, and watch the ferries drift toward Corfu. It's calm, spotless and a five-minute walk down to the promenade.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 0',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)',
      margin: '0 0 20px'
    }
  }, "What this place offers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, amenities.map(a => /*#__PURE__*/React.createElement(AmenityItem, {
    key: a.label,
    icon: I(a.icon),
    label: a.label,
    detail: a.detail,
    tone: a.tone
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)',
      margin: '0 0 18px'
    }
  }, "Good to know"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 14
    }
  }, [['log-in', 'Check-in', 'From 3:00 pm · self check-in'], ['log-out', 'Check-out', 'By 11:00 am'], ['moon', 'Quiet hours', '11 pm – 8 am']].map(([ic, h, d]) => /*#__PURE__*/React.createElement(Card, {
    key: h,
    tone: "sand",
    elevation: "flat",
    padding: "sm"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--sage-700)',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-900)'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, d)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 92
    }
  }, /*#__PURE__*/React.createElement(Card, {
    elevation: "lg",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)'
    }
  }, "\u20AC", rate), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "/ night"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage",
    size: "sm",
    icon: I('check')
  }, "Available"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Check-in",
    placeholder: "12 Jul",
    icon: I('calendar')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Check-out",
    placeholder: "17 Jul",
    icon: I('calendar')
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Guests",
    value: guests,
    onChange: e => setGuests(e.target.value),
    options: ['1 guest', '2 guests', '3 guests', '4 guests'],
    style: {
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      marginBottom: 16,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u20AC", rate, " \xD7 ", nights, " nights"), /*#__PURE__*/React.createElement("span", null, "\u20AC", rate * nights)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Cleaning fee"), /*#__PURE__*/React.createElement("span", null, "\u20AC", cleaning)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 9,
      borderTop: '1px solid var(--border-soft)',
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "\u20AC", total))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to the house rules",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    size: "lg",
    disabled: !agree,
    onClick: onBooked
  }, "Book direct \xB7 \u20AC", total), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-soft)',
      margin: '12px 0 0'
    }
  }, "You won't be charged yet \u2014 we'll confirm by WhatsApp.")))));
}
Object.assign(window, {
  ListingPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ListingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
/* global React */
// Shared photo treatment for the Y.T.M. UI kits.
// Renders a real image when `src` is given, otherwise a tasteful
// brand-wash placeholder with a Lucide glyph + caption. This keeps
// the kit looking intentional until real apartment photography lands.
function PhotoFrame({
  src,
  label,
  wash = 'coast',
  icon = 'image',
  aspect = '4 / 3',
  radius = 'var(--radius-lg)',
  children,
  style = {}
}) {
  const washes = {
    coast: 'var(--wash-coast)',
    sunrise: 'var(--wash-sunrise)',
    dusk: 'var(--wash-dusk)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: aspect,
      borderRadius: radius,
      overflow: 'hidden',
      background: washes[wash] || washes.coast,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      color: 'var(--stone-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 30,
      height: 30,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      letterSpacing: '.01em'
    }
  }, label)), children);
}

// Small section eyebrow + heading block used across pages.
function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'left',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: align === 'center' ? 640 : 'none',
      margin: align === 'center' ? '0 auto' : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-xs)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--sage-700)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'var(--text-2xl)',
      lineHeight: 1.1,
      letterSpacing: '-.01em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, lead));
}
Object.assign(window, {
  PhotoFrame,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* global React */
// Site header + footer for the Y.T.M. marketing website.
function SiteHeader({
  onNav,
  active = 'home',
  onBook
}) {
  const {
    Button
  } = window.YTMHomesMoreDesignSystem_3b4e5e;
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'apartments',
    label: 'Apartments'
  }, {
    id: 'saranda',
    label: 'Saranda'
  }, {
    id: 'guide',
    label: 'Guest guide'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(251,248,241,0.82)',
      backdropFilter: 'blur(var(--blur-md))',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('home');
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/ytm-mark.png",
    alt: "Y.T.M. Homes & More",
    style: {
      height: 34
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l.id);
    },
    style: {
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: active === l.id ? 600 : 500,
      color: active === l.id ? 'var(--ink-900)' : 'var(--text-muted)',
      textDecoration: 'none',
      background: active === l.id ? 'var(--shell)' : 'transparent'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  })), /*#__PURE__*/React.createElement("span", {
    className: "hide-sm"
  }, "+355 69 000 0000")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: onBook
  }, "Book direct"))));
}
function SiteFooter() {
  const cols = [{
    h: 'Apartments',
    items: ['Sea-View Suite · Apt 12', 'Garden Studio · Apt 7', 'Bougainvillea Bay', 'Availability']
  }, {
    h: 'Guests',
    items: ['Guest guide', 'Check-in & keys', 'House rules', 'Getting to Saranda']
  }, {
    h: 'Y.T.M.',
    items: ['Our story', 'Contact', 'Reviews', 'Direct-booking perks']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--cream)',
      marginTop: 'var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '64px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/ytm-mark.png",
    alt: "Y.T.M.",
    style: {
      height: 38,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.7,
      color: 'rgba(251,248,241,0.7)',
      maxWidth: 260,
      margin: 0
    }
  }, "Family-run holiday apartments inside Bougainvillea Bay, Saranda. Warm, clean and well looked-after \u2014 every stay."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 30,
      color: 'var(--lavender-300)',
      marginTop: 12
    }
  }, "Homes & More")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--sun-300)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'rgba(251,248,241,0.72)',
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(251,248,241,0.12)',
      padding: '20px 32px',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'rgba(251,248,241,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Y.T.M. Homes & More \xB7 Saranda, Albania"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Cancellation")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.AmenityItem = __ds_scope.AmenityItem;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.ListingCard = __ds_scope.ListingCard;

})();
