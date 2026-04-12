const ScalabilityView = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-3">Scalability View</h1>
          <p className="text-on-surface/60 max-w-xl leading-relaxed">
            Curated intelligence across tiers. Transitioning from data-rich cloud kitchens to sparse signal small-merchants.
          </p>
        </div>
        <div className="bg-surface-container-lowest rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-xs uppercase tracking-widest font-bold text-on-surface/60">Live Coverage</span>
          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
          <span className="text-lg font-extrabold text-on-surface">84.2%</span>
        </div>
      </div>

      {/* Restaurant Segmentation + Signal Reliability */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-on-surface">Restaurant Segmentation</h3>
            <button className="text-on-surface/40 hover:text-primary">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { tier: "TIER 1", label: "Small", desc: "Family-owned, low volume", count: "4,281", bg: "bg-secondary-container" },
              { tier: "TIER 2", label: "Mid-Market", desc: "Regional chains, high frequency", count: "1,942", bg: "bg-primary-container" },
              { tier: "TIER 3", label: "Cloud/Large", desc: "Global brands, data density", count: "856", bg: "bg-tertiary-container" },
            ].map((t) => (
              <div key={t.tier} className={`${t.bg} rounded-2xl p-5`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="material-symbols-outlined text-on-surface/40">
                    {t.tier === "TIER 1" ? "storefront" : t.tier === "TIER 2" ? "business" : "cloud"}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface/50">{t.tier}</span>
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-1">{t.label}</h4>
                <p className="text-xs text-on-surface/50 mb-3">{t.desc}</p>
                <p className="text-3xl font-extrabold text-on-surface">{t.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Signal Reliability */}
        <div className="bg-surface-container-lowest rounded-2xl p-6">
          <h3 className="text-lg font-bold text-on-surface mb-6">Signal Reliability by Tier</h3>
          {[
            { label: "FOR Bias", value: "0.14 ms", colors: ["bg-secondary", "bg-primary", "bg-secondary-container"] },
            { label: "Load Accuracy", value: "98.2%", colors: ["bg-primary-container", "bg-primary", "bg-primary-container"] },
            { label: "System Error", value: "0.02%", colors: ["bg-tertiary-container", "bg-primary", "bg-tertiary-container"] },
          ].map((item) => (
            <div key={item.label} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-sm font-semibold text-on-surface">{item.label}</span>
                </div>
                <span className="text-sm font-bold text-on-surface">{item.value}</span>
              </div>
              <div className="flex gap-1 h-3">
                {item.colors.map((c, i) => (
                  <div key={i} className={`flex-1 ${c} rounded`}></div>
                ))}
              </div>
              <p className="text-[10px] text-on-surface/40 mt-1">
                {item.label === "FOR Bias" ? "Latency spikes detected in Tier 1 during lunch hours." :
                 item.label === "Load Accuracy" ? "Cloud kitchens showing 100% precision with V2.4." :
                 "Global stability remains within safe curated thresholds."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Data Coverage + Fallback Strategy + Infrastructure */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-container-lowest rounded-2xl p-8">
          <h3 className="text-lg font-bold text-on-surface mb-4">Data Coverage</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-extrabold text-on-surface">72%</span>
            <span className="text-sm font-semibold text-tertiary">↑ 4.1%</span>
          </div>
          <p className="text-sm text-on-surface/50 mb-4">Restaurants with sufficient signal data for Model v2.4.</p>
          <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "72%" }}></div>
          </div>
          <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest font-semibold text-on-surface/40">
            <span>Sparse Data</span>
            <span>Signal Ready</span>
          </div>
        </div>

        <div className="bg-tertiary-container rounded-2xl p-6">
          <span className="material-symbols-outlined text-tertiary text-3xl mb-3 block">auto_awesome</span>
          <h3 className="text-xl font-bold text-on-surface mb-2">Fallback Strategy</h3>
          <p className="text-sm text-on-surface/60 mb-4">Active for low-data scenarios in Tier 1 segments.</p>
          <div className="bg-surface-container-lowest/50 rounded-xl p-4 mb-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface/50 mb-1">Current Active</p>
            <p className="text-sm font-bold text-on-surface">Bayesian Neighborhood Inference</p>
          </div>
          <button className="bg-surface-container-lowest text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-surface-container transition-colors">
            Adjust Policy
          </button>
        </div>

        <div className="bg-secondary-container/30 rounded-2xl p-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface/50 mb-4">Infrastructure Status</p>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl bg-primary-container p-2 rounded-xl">hub</span>
            <div>
              <p className="text-sm font-bold text-on-surface">Nodal Processing</p>
              <p className="text-xs text-on-surface/50">Distributed edge scaling active.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Zero-Data Estimation Banner */}
      <div className="bg-surface-container-lowest rounded-2xl p-8 flex items-center gap-8">
        <div className="w-64 h-40 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-2xl flex items-center justify-center">
          <span className="material-symbols-outlined text-6xl text-primary/40">data_exploration</span>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-tertiary bg-tertiary-container px-3 py-1 rounded-full inline-block mb-3">
            Efficiency Milestone
          </span>
          <h3 className="text-2xl font-bold text-on-surface mb-2">Zero-Data Estimation v3</h3>
          <p className="text-sm text-on-surface/60 max-w-xl mb-4">
            Our new scalability engine allows the dashboard to provide high-confidence predictions for restaurants with less than 5 orders per week by leveraging collective "Neighborhood" behavioral patterns.
          </p>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-full border border-outline-variant text-sm font-semibold text-on-surface hover:bg-surface-container transition-colors">
              Review Whitepaper
            </button>
            <button className="px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              Deploy Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalabilityView;
