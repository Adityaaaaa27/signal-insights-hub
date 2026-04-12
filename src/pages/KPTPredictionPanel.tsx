const KPTPredictionPanel = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Configuration Canvas */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-surface-container-low rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-on-surface">Configuration Canvas</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-tertiary-container text-tertiary text-xs font-bold rounded-full">Tier 1 Kitchen</span>
              <span className="px-3 py-1 bg-secondary-container text-secondary text-xs font-bold rounded-full">Live Mode</span>
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface/50 block mb-2">Target Dish</label>
              <div className="bg-surface-container-lowest rounded-full px-4 py-2.5 flex items-center justify-between">
                <span className="text-sm text-on-surface">Smoked Wagyu Burger</span>
                <span className="material-symbols-outlined text-on-surface/40 text-base">close</span>
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface/50 block mb-2">Merchant Location</label>
              <div className="bg-surface-container-lowest rounded-full px-4 py-2.5 flex items-center justify-between">
                <span className="text-sm text-on-surface">Bistro 88 - Downtown</span>
                <span className="material-symbols-outlined text-primary text-base">location_on</span>
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface/50 block mb-2">Delivery Window</label>
              <div className="bg-surface-container-lowest rounded-full px-4 py-2.5 flex items-center justify-between">
                <span className="text-sm text-on-surface">Today, 19:30 - 20:00</span>
                <span className="material-symbols-outlined text-on-surface/40 text-base">schedule</span>
              </div>
            </div>
          </div>

          {/* Context Cards */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: "cloud", label: "Weather", value: "Overcast, 18°C" },
              { icon: "traffic", label: "Traffic", value: "Moderate (+4m)" },
              { icon: "receipt_long", label: "Recent Volume", value: "12 Orders/Hr" },
              { icon: "history", label: "Bias History", value: "-2.4% Adjustment" },
            ].map((c) => (
              <div key={c.label} className="bg-surface-container-lowest rounded-xl p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">{c.icon}</span>
                <div>
                  <p className="text-[10px] text-on-surface/40">{c.label}</p>
                  <p className="text-xs font-bold text-on-surface">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Prediction */}
        <div className="bg-secondary-container rounded-2xl p-6 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest font-bold text-on-surface/50 mb-2">Predicted KPT</p>
          <p className="text-6xl font-extrabold text-on-surface">14:42</p>
          <div className="bg-tertiary-container rounded-lg px-3 py-1.5 mt-3 inline-block">
            <span className="text-sm font-bold text-tertiary">Optimized Estimate</span>
          </div>
        </div>
      </section>

      {/* Kitchen Load + Signal Breakdown */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface-container-lowest rounded-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-on-surface">Kitchen Load</h3>
            <span className="material-symbols-outlined text-on-surface/30">monitor_heart</span>
          </div>
          {/* Gauge */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-48 h-24 overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 100">
                <path d="M20,100 A80,80 0 0,1 180,100" fill="none" stroke="hsl(273 10% 82% / 0.3)" strokeWidth="12" strokeLinecap="round" />
                <path d="M20,100 A80,80 0 0,1 130,25" fill="none" stroke="#655974" strokeWidth="12" strokeLinecap="round" />
              </svg>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                <p className="text-2xl font-extrabold text-tertiary">Moderate</p>
                <p className="text-[10px] uppercase tracking-widest text-on-surface/40">Current Intensity</p>
              </div>
            </div>
            <div className="flex gap-8 mt-4 text-xs text-on-surface/40">
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>Low</div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span>Moderate</div>
              <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>Critical</div>
            </div>
          </div>
          {/* Quality Score */}
          <div className="bg-surface-container rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface/40">Signal Quality Score</p>
              <p className="text-2xl font-extrabold text-on-surface">94.8%</p>
              <p className="text-xs text-on-surface/50">High Confidence Level</p>
            </div>
            <span className="material-symbols-outlined text-4xl text-primary/30">star</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-on-surface">Signal Complexity Breakdown</h3>
              <p className="text-sm text-on-surface/50">Contribution weighting for current prediction</p>
            </div>
            <button className="px-3 py-1.5 bg-surface-container text-on-surface/60 rounded-lg text-xs font-semibold">Download Log</button>
          </div>
          <div className="space-y-5">
            {[
              { icon: "restaurant_menu", label: "Dish Complexity", pct: 42, color: "bg-primary" },
              { icon: "groups", label: "Kitchen Load", pct: 28, color: "bg-secondary" },
              { icon: "schedule", label: "Time-of-Day Drift", pct: 18, color: "bg-primary" },
              { icon: "thermostat", label: "External Weather Factor", pct: 12, color: "bg-primary" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface/40 text-lg">{item.icon}</span>
                    <span className="text-sm font-semibold text-on-surface">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold text-on-surface">{item.pct}%</span>
                </div>
                <div className="w-full h-2.5 bg-surface-container rounded-full">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          {/* Confidence Interval */}
          <div className="mt-6 pt-4 border-t border-outline-variant/15">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface/40">Confidence Interval (95%)</span>
              <span className="text-xs text-on-surface/40">12:30 — 16:15</span>
            </div>
            <div className="relative w-full h-3 bg-surface-container rounded-full">
              <div className="absolute h-full bg-tertiary-container rounded-full" style={{ left: "20%", width: "60%" }}></div>
              <div className="absolute w-3 h-3 bg-tertiary rounded-full top-0" style={{ left: "50%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Update Forecast Button */}
      <div className="flex justify-end">
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-base">bolt</span>
          Update Forecast
        </button>
      </div>

      {/* Model Comparison Matrix */}
      <section>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-on-surface">Model Comparison Matrix</h3>
          <p className="text-sm text-on-surface/50">Comparative performance of predictive adjustment layers</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-surface-container-low rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] uppercase tracking-widest font-bold text-secondary">Base Model</p>
              <span className="material-symbols-outlined text-on-surface/20">data_object</span>
            </div>
            <p className="text-4xl font-extrabold text-on-surface">16:30 <span className="text-lg font-normal text-on-surface/40">mins</span></p>
            <p className="text-xs text-on-surface/50 mt-2">Standard historical average without real-time signal injection.</p>
          </div>
          <div className="bg-secondary-container rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] uppercase tracking-widest font-bold text-secondary">Signal-Improved</p>
              <span className="material-symbols-outlined text-on-surface/20">cell_tower</span>
            </div>
            <p className="text-4xl font-extrabold text-on-surface">15:10 <span className="text-lg font-normal text-on-surface/40">mins</span></p>
            <p className="text-xs text-on-surface/50 mt-2">↝ -7.3% Variance Reduction</p>
          </div>
          <div className="bg-tertiary-container rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] uppercase tracking-widest font-bold text-tertiary">Bias-Corrected</p>
              <span className="material-symbols-outlined text-on-surface/20">network_check</span>
            </div>
            <p className="text-4xl font-extrabold text-on-surface">14:42 <span className="text-lg font-normal text-on-surface/40">mins</span></p>
            <div className="flex items-center gap-1 mt-2">
              <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
              <span className="text-xs font-bold text-tertiary">Target Optimization Achieved</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KPTPredictionPanel;
