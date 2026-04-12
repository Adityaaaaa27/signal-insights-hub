import { NavLink } from "react-router-dom";

const navItems = [
  { icon: "dashboard", label: "Operations", path: "/" },
  { icon: "precision_manufacturing", label: "Predictions", path: "/predictions" },
  { icon: "analytics", label: "Signal Bias", path: "/signal-bias" },
  { icon: "restaurant", label: "Kitchen Load", path: "/kitchen-load" },
  { icon: "group", label: "Merchant Behavior", path: "/merchant-behavior" },
  { icon: "query_stats", label: "Signal Quality", path: "/signal-quality" },
  { icon: "speed", label: "Scalability", path: "/scalability" },
  { icon: "settings_backup_restore", label: "Simulation", path: "/simulation" },
  { icon: "stars", label: "Success Metrics", path: "/success-metrics" },
];

const Sidebar = () => {
  return (
    <aside className="h-screen w-72 flex flex-col fixed left-0 top-0 bg-surface-container-low py-8 px-4 z-50">
      <div className="mb-10 px-4">
        <h1 className="text-xl font-bold text-primary">KPT Signal</h1>
        <p className="text-xs font-medium text-primary/60 uppercase tracking-widest mt-1">
          Intelligence Dashboard
        </p>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "text-primary font-semibold border-r-4 border-primary bg-surface-container-highest/50"
                  : "text-on-surface/60 font-normal hover:text-primary hover:bg-surface-container-highest"
              }`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto px-4 pt-6 border-t border-primary/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">account_circle</span>
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">Alex Mercer</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
              Lead Curator
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
