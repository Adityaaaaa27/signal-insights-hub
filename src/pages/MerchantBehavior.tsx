const MerchantBehavior = () => {
  const clusters = [
    { name: "Standard Professional", wait: "1.2 mins", error: "± 0.4 min", errorBg: "bg-primary-container", volume: "45,102", action: "Auto-Approve" },
    { name: "Peak Rush Aggressive", wait: "4.8 mins", error: "± 2.1 mins", errorBg: "bg-secondary-container", volume: "12,490", action: "Dynamic Pad (3m)" },
    { name: "Rider Pressure Bias", wait: "7.2 mins", error: "± 5.5 mins", errorBg: "bg-secondary-container", volume: "3,118", action: "Signal Dampening" },
  ];

  const restaurants = [
    { name: "The Burger Collective", id: "#B9281-Z", status: "RELIABLE", statusColor: "text-tertiary" },
    { name: "Noodle Nirvana Station", id: "#N1022-X", status: "BIASED", statusColor: "text-secondary" },
    { name: "Green Leaf Bistro", id: "#G5509-P", status: "STABLE", statusColor: "text-primary" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Merchant Intelligence</span>
        <h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-4">Behavior Analysis</h1>
        <div className="flex gap-3">
          <span className="px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
            Live: 1,248 Merchants
          </span>
          <span className="px-4 py-1.5 bg-tertiary-container text-tertiary-container-foreground text-xs font-bold rounded-full">
            Health: Optimal
          </span>
        </div>
      </div>

      {/* Clustering + Behavioral Drift */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-on-surface">Behavioral Clustering</h3>
              <p className="text-sm text-on-surface/50">Reliable Markers vs Rider-Triggered Bias</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-tertiary"></span>Merchant Logic</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-secondary"></span>Rider Intercept</div>
            </div>
          </div>
          {/* Scatter Plot Placeholder */}
          <div className="h-64 bg-surface-container rounded-xl flex items-center justify-center relative">
            <span className="text-[10px] absolute left-2 top-1/2 -rotate-90 uppercase tracking-widest font-bold text-on-surface/30">Wait Time Delta</span>
            <span className="text-[10px] absolute bottom-2 left-1/2 -translate-x-1/2 uppercase tracking-widest font-bold text-on-surface/30">Marking Frequency</span>
            {/* Scatter dots */}
            {[
              { x: 25, y: 70, size: 8, color: "bg-on-surface/20" },
              { x: 30, y: 65, size: 14, color: "bg-primary" },
              { x: 35, y: 60, size: 12, color: "bg-primary" },
              { x: 50, y: 40, size: 10, color: "bg-on-surface/30" },
              { x: 55, y: 35, size: 8, color: "bg-on-surface/20" },
              { x: 60, y: 30, size: 20, color: "bg-primary/60" },
              { x: 65, y: 25, size: 14, color: "bg-secondary/60" },
              { x: 70, y: 35, size: 10, color: "bg-primary/40" },
            ].map((dot, i) => (
              <div
                key={i}
                className={`absolute rounded-full ${dot.color}`}
                style={{ left: `${dot.x}%`, bottom: `${dot.y}%`, width: dot.size * 2, height: dot.size * 2 }}
              />
            ))}
          </div>
        </div>

        <div className="bg-secondary-container/40 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-on-surface mb-2">Behavioral Drift</h3>
          <p className="text-sm text-on-surface/50 mb-4">Historical pattern variance</p>
          {[
            { period: "30 Days", value: "+2.4% stability", color: "bg-tertiary" },
            { period: "60 Days", value: "-1.8% noise", color: "bg-secondary" },
            { period: "90 Days", value: "+12.1% accuracy", color: "bg-primary" },
          ].map((item) => (
            <div key={item.period} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-on-surface">{item.period}</span>
                <span className="text-sm font-semibold text-on-surface/70">{item.value}</span>
              </div>
              <div className="w-full h-2 bg-on-surface/10 rounded-full">
                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${Math.random() * 40 + 50}%` }}></div>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Summary Insight</p>
            <p className="text-sm italic text-on-surface/60">
              "Merchants are converging toward standard prep intervals, reducing unexpected rider arrivals."
            </p>
          </div>
        </div>
      </div>

      {/* Restaurant Marking Timeline */}
      <div className="bg-surface-container-lowest rounded-2xl p-8 mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-bold text-on-surface">Restaurant Marking Timeline</h3>
            <p className="text-sm text-on-surface/50">Live temporal analysis per restaurant node</p>
          </div>
          <div className="flex gap-2">
            {["Today", "Week", "Month"].map((btn) => (
              <button key={btn} className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
                btn === "Today" ? "bg-primary text-primary-foreground" : "bg-surface-container text-on-surface/60"
              }`}>
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {restaurants.map((r) => (
            <div key={r.id} className="flex items-center gap-4">
              <div className="w-48">
                <p className="text-sm font-bold text-on-surface">{r.name}</p>
                <p className="text-xs text-on-surface/40">ID: {r.id}</p>
              </div>
              <div className="flex-1 h-10 bg-surface-container rounded-lg flex items-center px-2 gap-2 relative">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-7 w-2 rounded-sm ${
                      Math.random() > 0.5 ? "bg-primary/60" : "bg-tertiary/60"
                    }`}
                    style={{ marginLeft: `${Math.random() * 20}px` }}
                  />
                ))}
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider ${r.statusColor}`}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cluster Impact Table */}
      <div className="bg-surface-container-lowest rounded-2xl p-8">
        <h3 className="text-xl font-bold text-on-surface mb-6">Cluster Impact Analysis</h3>
        <table className="w-full">
          <thead>
            <tr>
              {["Behavior Cluster", "Rider Wait Time", "Prediction Error", "Volume (Orders)", "System Action"].map((h) => (
                <th key={h} className="text-left text-[10px] uppercase tracking-widest font-semibold text-on-surface/50 pb-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clusters.map((c) => (
              <tr key={c.name} className="border-t border-outline-variant/15">
                <td className="py-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${c.name === "Standard Professional" ? "bg-tertiary" : c.name === "Peak Rush Aggressive" ? "bg-primary" : "bg-secondary"}`}></span>
                  <span className="text-sm font-bold text-on-surface">{c.name}</span>
                </td>
                <td className="py-4 text-sm text-on-surface">{c.wait}</td>
                <td className="py-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${c.errorBg}`}>{c.error}</span>
                </td>
                <td className="py-4 text-sm font-semibold text-on-surface">{c.volume}</td>
                <td className="py-4 text-sm text-on-surface/60">{c.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MerchantBehavior;
