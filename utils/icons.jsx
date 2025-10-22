// ============================================================================
// ICONE SVG GLOBALI - Caricate per prime per tutti i moduli
// ============================================================================
// Questo file definisce TUTTE le icone usate nella presentazione come variabili
// globali accessibili da tutti i moduli senza import ES6
// ============================================================================

// IconWrapper base per tutte le icone
window.IconWrapper = ({ children, className = "", ...props }) => (
  React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  }, children)
);

// Icone di navigazione
window.ChevronLeft = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("polyline", { points: "15 18 9 12 15 6" })
);

window.ChevronRight = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("polyline", { points: "9 18 15 12 9 6" })
);

window.Home = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
  React.createElement("polyline", { points: "9 22 9 12 15 12 15 22" })
);

window.Menu = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
  React.createElement("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
  React.createElement("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
);

window.X = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M18 6 6 18" }),
  React.createElement("path", { d: "m6 6 12 12" })
);

// Icone OOP
window.Code = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("polyline", { points: "16 18 22 12 16 6" }),
  React.createElement("polyline", { points: "8 6 2 12 8 18" })
);

window.Box = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
  React.createElement("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
  React.createElement("line", { x1: "12", x2: "12", y1: "22.08", y2: "12" })
);

window.GitBranch = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
  React.createElement("circle", { cx: "18", cy: "6", r: "3" }),
  React.createElement("circle", { cx: "6", cy: "18", r: "3" }),
  React.createElement("path", { d: "M18 9a9 9 0 0 1-9 9" })
);

window.Link2 = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }),
  React.createElement("path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }),
  React.createElement("line", { x1: "8", x2: "16", y1: "12", y2: "12" })
);

window.Eye = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
  React.createElement("circle", { cx: "12", cy: "12", r: "3" })
);

window.Lock = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }),
  React.createElement("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
);

window.Layers = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" }),
  React.createElement("path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" }),
  React.createElement("path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" })
);

window.Zap = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
);

// Icone feedback
window.CheckCircle = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
  React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })
);

window.XCircle = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
  React.createElement("line", { x1: "15", x2: "9", y1: "9", y2: "15" }),
  React.createElement("line", { x1: "9", x2: "15", y1: "9", y2: "15" })
);

window.HelpCircle = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
  React.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
  React.createElement("line", { x1: "12", x2: "12.01", y1: "17", y2: "17" })
);

// Icone utility
window.Award = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("circle", { cx: "12", cy: "8", r: "7" }),
  React.createElement("polyline", { points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" })
);

window.Target = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
  React.createElement("circle", { cx: "12", cy: "12", r: "6" }),
  React.createElement("circle", { cx: "12", cy: "12", r: "2" })
);

window.Lightbulb = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("line", { x1: "9", x2: "15", y1: "18", y2: "18" }),
  React.createElement("line", { x1: "10", x2: "14", y1: "22", y2: "22" }),
  React.createElement("path", { d: "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" })
);

window.Brain = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" }),
  React.createElement("path", { d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" })
);

window.MessageCircle = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
);

window.Sparkles = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
  React.createElement("path", { d: "M5 3v4" }),
  React.createElement("path", { d: "M19 17v4" }),
  React.createElement("path", { d: "M3 5h4" }),
  React.createElement("path", { d: "M17 19h4" })
);

window.AlertCircle = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
  React.createElement("line", { x1: "12", x2: "12", y1: "8", y2: "12" }),
  React.createElement("line", { x1: "12", x2: "12.01", y1: "16", y2: "16" })
);

window.Settings = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }),
  React.createElement("circle", { cx: "12", cy: "12", r: "3" })
);

window.Database = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
  React.createElement("path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }),
  React.createElement("path", { d: "M3 12a9 3 0 0 0 18 0" })
);

window.Package = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M16.5 9.4 7.55 4.24" }),
  React.createElement("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
  React.createElement("polyline", { points: "3.29 7 12 12 20.71 7" }),
  React.createElement("line", { x1: "12", x2: "12", y1: "22", y2: "12" })
);

window.Users = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
  React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
  React.createElement("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
  React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
);

window.BookOpen = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
  React.createElement("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
);

window.Send = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "m22 2-7 20-4-9-9-4Z" }),
  React.createElement("path", { d: "M22 2 11 13" })
);

window.ThumbsUp = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M7 10v12" }),
  React.createElement("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" })
);

window.MessageSquare = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
);

window.Rocket = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
  React.createElement("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
  React.createElement("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
  React.createElement("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
);

window.Clock = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
  React.createElement("polyline", { points: "12 6 12 12 16 14" })
);

window.TrendingUp = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }),
  React.createElement("polyline", { points: "17 6 23 6 23 12" })
);

window.Shield = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
);

window.GripVertical = (props) => React.createElement(window.IconWrapper, props,
  React.createElement("circle", { cx: "9", cy: "12", r: "1" }),
  React.createElement("circle", { cx: "9", cy: "5", r: "1" }),
  React.createElement("circle", { cx: "9", cy: "19", r: "1" }),
  React.createElement("circle", { cx: "15", cy: "12", r: "1" }),
  React.createElement("circle", { cx: "15", cy: "5", r: "1" }),
  React.createElement("circle", { cx: "15", cy: "19", r: "1" })
);

console.log("✅ Icone globali caricate con successo!");
