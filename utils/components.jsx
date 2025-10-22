// Componenti condivisi per tutte le slide

// Icon Components (inline SVG)
const IconWrapper = ({ children, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {children}
  </svg>
);

const ChevronLeft = (props) => <IconWrapper {...props}><polyline points="15 18 9 12 15 6"></polyline></IconWrapper>;
const ChevronRight = (props) => <IconWrapper {...props}><polyline points="9 18 15 12 9 6"></polyline></IconWrapper>;
const Home = (props) => <IconWrapper {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></IconWrapper>;
const Menu = (props) => <IconWrapper {...props}><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></IconWrapper>;
const X = (props) => <IconWrapper {...props}><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></IconWrapper>;
const Code = (props) => <IconWrapper {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></IconWrapper>;
const Box = (props) => <IconWrapper {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></IconWrapper>;
const GitBranch = (props) => <IconWrapper {...props}><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></IconWrapper>;
const Link2 = (props) => <IconWrapper {...props}><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></IconWrapper>;
const Eye = (props) => <IconWrapper {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></IconWrapper>;
const Lock = (props) => <IconWrapper {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></IconWrapper>;
const Layers = (props) => <IconWrapper {...props}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></IconWrapper>;
const Zap = (props) => <IconWrapper {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></IconWrapper>;
const CheckCircle = (props) => <IconWrapper {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></IconWrapper>;
const XCircle = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><line x1="15" x2="9" y1="9" y2="15"></line><line x1="9" x2="15" y1="9" y2="15"></line></IconWrapper>;
const HelpCircle = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" x2="12.01" y1="17" y2="17"></line></IconWrapper>;
const Award = (props) => <IconWrapper {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></IconWrapper>;
const Target = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></IconWrapper>;
const Lightbulb = (props) => <IconWrapper {...props}><line x1="9" x2="15" y1="18" y2="18"></line><line x1="10" x2="14" y1="22" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></IconWrapper>;
const Brain = (props) => <IconWrapper {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></IconWrapper>;
const MessageCircle = (props) => <IconWrapper {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></IconWrapper>;

// Componente per animazioni di entrata
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
    >
      {children}
    </div>
  );
};

// Componente per code block con syntax highlighting
const CodeBlock = ({ code, language = "csharp", className = "" }) => (
  <div className={`bg-gray-900 p-6 rounded-xl border border-blue-500/30 font-mono text-sm overflow-x-auto ${className}`}>
    <pre className="text-gray-300">{code}</pre>
  </div>
);

// Componente per highlight box
const HighlightBox = ({ children, color = "blue", icon: Icon, className = "" }) => {
  const colors = {
    blue: "bg-blue-900/20 border-blue-400 text-blue-300",
    cyan: "bg-cyan-900/20 border-cyan-400 text-cyan-300",
    green: "bg-green-900/20 border-green-400 text-green-300",
    yellow: "bg-yellow-900/20 border-yellow-400 text-yellow-300",
    red: "bg-red-900/20 border-red-400 text-red-300"
  };

  return (
    <div className={`${colors[color]} p-6 rounded-xl border-l-4 ${className}`}>
      {Icon && (
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-8 h-8" />
          <div className="flex-1">{children}</div>
        </div>
      )}
      {!Icon && children}
    </div>
  );
};

// Componente per card informativa
const InfoCard = ({ title, description, icon: Icon, color = "blue", className = "" }) => {
  const colors = {
    blue: "bg-blue-900/30 border-blue-500/30 text-blue-300",
    cyan: "bg-cyan-900/30 border-cyan-500/30 text-cyan-300",
    green: "bg-green-900/30 border-green-500/30 text-green-300"
  };

  return (
    <div className={`${colors[color]} p-6 rounded-xl border ${className}`}>
      {Icon && <Icon className="w-12 h-12 mx-auto mb-4" />}
      <p className="font-bold mb-2">{title}</p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};
