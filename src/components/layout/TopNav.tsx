const TopNav = () => {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-18rem)] h-16 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-8 z-40">
      <div className="flex items-center gap-8">
        <h2 className="text-lg font-black tracking-tighter text-primary">
          Signal Intelligence
        </h2>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <button className="text-primary border-b-2 border-primary py-1">
            Restaurant Select
          </button>
          <button className="text-on-surface/40 hover:text-primary transition-all py-1">
            Date Range
          </button>
          <button className="text-on-surface/40 hover:text-primary transition-all py-1">
            Model v2.4
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 text-primary">
        <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors">
          <span className="material-symbols-outlined">help_outline</span>
        </button>
      </div>
    </header>
  );
};

export default TopNav;
