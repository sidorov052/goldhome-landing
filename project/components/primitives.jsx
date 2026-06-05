/* Shared primitives — icons, placeholders, ratings */

function Icon({ name, size = 20, stroke = 1.6 }) {
  const s = size;
  const common = {
    width: s, height: s, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "arrow-right": return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "phone": return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    case "menu": return <svg {...common}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case "check": return <svg {...common}><path d="M4 12l5 5L20 6"/></svg>;
    case "plus": return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus": return <svg {...common}><path d="M5 12h14"/></svg>;
    case "calc": return <svg {...common}><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0M8 19h2M12 19h6"/></svg>;
    case "shield": return <svg {...common}><path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"/><path d="M9 12l2 2 4-4"/></svg>;
    case "factory": return <svg {...common}><path d="M3 21V10l6 4V10l6 4V5l6 16H3z"/><path d="M9 17h1M13 17h1M17 17h1"/></svg>;
    case "truck": return <svg {...common}><path d="M1 7h12v10H1zM13 10h5l3 3v4h-8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="17.5" cy="18.5" r="2.5"/></svg>;
    case "leaf": return <svg {...common}><path d="M11 20A7 7 0 0 1 4 13a7 7 0 0 1 7-7c5 0 9 4 9 9-1 5-7 7-9 5z"/><path d="M5 19c4-4 7-6 14-7"/></svg>;
    case "wallet": return <svg {...common}><path d="M3 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3z"/><path d="M3 7V5a2 2 0 0 1 2-2h11"/><circle cx="17" cy="14" r="1.5"/></svg>;
    case "ruler": return <svg {...common}><path d="M3 8l13-5 5 13L8 21z"/><path d="M7 9l1.5 1.5M10 8l1.5 1.5M13 7l1.5 1.5M16 6l1.5 1.5"/></svg>;
    case "home": return <svg {...common}><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2v-9z"/></svg>;
    case "users": return <svg {...common}><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case "tree": return <svg {...common}><path d="M12 2L7 9h3l-4 6h4l-3 5h10l-3-5h4l-4-6h3z"/><path d="M12 20v2"/></svg>;
    case "play": return <svg {...common}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/></svg>;
    case "chevron-down": return <svg {...common}><path d="M6 9l6 6 6-6"/></svg>;
    case "chevron-up": return <svg {...common}><path d="M18 15l-6-6-6 6"/></svg>;
    case "chevron-right": return <svg {...common}><path d="M9 18l6-6-6-6"/></svg>;
    case "chevron-left": return <svg {...common}><path d="M15 18l-6-6 6-6"/></svg>;
    case "star": return <svg {...common} fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    case "mail": return <svg {...common}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>;
    case "map": return <svg {...common}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    case "clock": return <svg {...common}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
    case "warehouse": return <svg {...common}><path d="M3 9l9-5 9 5v12H3z"/><path d="M7 21v-8h10v8M7 17h10"/></svg>;
    case "flame": return <svg {...common}><path d="M12 2s4 4 4 9a4 4 0 0 1-8 0c0-3 2-5 2-7-2 1-6 4-6 9a8 8 0 0 0 16 0c0-6-6-10-8-11z"/></svg>;
    case "thermo": return <svg {...common}><path d="M14 4v10.5a3.5 3.5 0 1 1-4 0V4a2 2 0 0 1 4 0z"/></svg>;
    case "spark": return <svg {...common}><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/></svg>;
    default: return null;
  }
}

function Stars({ value = 5, size = 14 }) {
  return (
    <span className="flex" style={{ gap: 2, color: "#E0A53D" }}>
      {[...Array(5)].map((_, i) =>
        <Icon key={i} name="star" size={size} />
      )}
    </span>
  );
}

function Placeholder({ label, h = 320, dark = false, style = {} }) {
  return (
    <div className={dark ? "ph ph-dark" : "ph"} style={{ height: h, ...style }}>
      <span className="ph-label">{label}</span>
    </div>
  );
}

function Photo({ src, alt = "", h = 320, style = {}, objectPosition = "center" }) {
  return (
    <div style={{
      position: "relative",
      height: h,
      borderRadius: 18,
      overflow: "hidden",
      background: "var(--bg-soft)",
      ...style
    }}>
      <img src={src} alt={alt} loading="lazy" style={{
        width: "100%", height: "100%", objectFit: "cover",
        objectPosition, display: "block"
      }}/>
    </div>
  );
}

const GH = "https://goldhome.life";
const IMG = {
  hero: GH + "/img/house-sip.png",
  houseSip: GH + "/img/house-sip.png",
  houseStone: GH + "/img/house-stone.png",
  houseFrame: GH + "/img/house-frame.png",
  houseWood: GH + "/img/house-wood.jpg",
  ikos: GH + "/uploads/houses/1775751605152-572673618.png",
  oykia: GH + "/uploads/houses/1775751299742-887128857.png",
  amaltea: GH + "/uploads/houses/1775751083263-334411630.png",
  svcDesign: GH + "/img/placeholder-design.png",
  svcProduction: GH + "/img/placeholder-production.png",
  svcGeology: GH + "/img/placeholder-geology.png",
  svcConstruction: GH + "/img/placeholder-construction.png",
  svcMortgage: GH + "/img/placeholder-mortgage.png",
  svcConsult: GH + "/img/placeholder-consult.png",
  svcCalc: GH + "/img/placeholder-calc.png",
  logo: GH + "/img/logo.svg",
};

function RatingPill({ logo, name, value, color }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      background: "#fff", border: "1px solid var(--line)",
      borderRadius: 14, padding: "10px 14px",
      minWidth: 0, flex: "1 1 0"
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        background: color || "var(--bg-soft)",
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
        flexShrink: 0
      }}>{logo}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 12, color: "var(--ink-3)", fontWeight: 500 }}>{name}</div>
        <div className="flex" style={{ alignItems: "center", gap: 6 }}>
          <span className="num" style={{ fontWeight: 600, fontSize: 15 }}>{value}</span>
          <Stars size={11}/>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Icon, Stars, Placeholder, Photo, IMG, RatingPill });
