import { useState } from "react";

const anomalies = [
  { name: "The Burger Collective", id: "#88219", bias: "+4.2m", gap: "-3.4 min", status: "HIGH VARIANCE", statusBg: "bg-secondary-container text-secondary" },
  { name: "Pizzeria Napoli", id: "#11044", bias: "+2.8m", gap: "-2.1 min", status: "PERSISTENT", statusBg: "bg-secondary-container text-secondary" },
  { name: "Dim Sum House", id: "#09022", bias: "+1.5m", gap: "-1.2 min", status: "STABLE WARNING", statusBg: "bg-surface-container-highest text-on-surface/60" },
];

const SignalBiasAnalyzer = () => {
  const [biasPercent, setBiasPercent] = useState(15);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-3">Bias Analyzer</h1>
        <p className="text-on-surface/60 max-w-2xl leading-relaxed">
          Detecting systemic "Food On Runner" (FOR) marking anomalies and their impact on predictive ETA accuracy across the merchant network.
        </p>
      </div>

      {/* FOR Marking Behavior + Network Reliability */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold text-on-surface">FOR Marking Behavior</h3>
              <p className="text-sm text-on-surface/50">Time-gap distribution between kitchen completion and runner pickup.</p>
            </div>
            <span className="px-3 py-1 bg-tertiary-container text-tertiary-container-foreground text-[10px] font-bold rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              Live Distribution
            </span>
          </div>
          {/* Bar chart placeholder */}
          <div className="h-52 flex items-end justify-center gap-3 px-4">
            {[35, 45, 80, 100, 55, 40, 30, 25, 20].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full rounded-t-md ${i === 2 || i === 3 ? "bg-primary" : "bg-primary-container"}`}
                  style={{ height: `${h * 2}px` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-[10px] uppercase tracking-widest font-semibold text-on-surface/40 px-4">
            <span>-5 Min</span>
            <span>Early Marking (Bias)</span>
            <span>0 Min (Optimal)</span>
            <span>Late Marking</span>
            <span>+10 Min</span>
          </div>
        </div>

        <div className="bg-secondary-container/30 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-secondary mb-1">Network Reliability</h3>
          <p className="text-sm text-on-surface/50 mb-6">Aggregate truth-to-signal ratio.</p>
          <p className="text-6xl font-extrabold text-on-surface mb-2">84.2<span className="text-3xl text-on-surface/40">%</span></p>
          <p className="text-xs text-on-surface/50 uppercase tracking-wider mb-4">↝ +2.4% From Last Week</p>
          <p className="text-sm text-on-surface/60">Top Performer <span className="font-bold text-on-surface">Green Garden Cafe</span></p>
          <div className="w-full h-2 bg-primary/20 rounded-full mt-2">
            <div className="h-full bg-primary rounded-full" style={{ width: "84%" }}></div>
          </div>
        </div>
      </div>

      {/* Bias Injection Simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-container-lowest rounded-2xl p-8">
          <h3 className="text-lg font-bold text-on-surface mb-6">Bias Injection Simulation</h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-on-surface/50">Simulated Bias %</span>
            <span className="text-lg font-bold text-on-surface">{biasPercent}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={biasPercent}
            onChange={(e) => setBiasPercent(Number(e.target.value))}
            className="w-full h-2 bg-primary-container rounded-full appearance-none cursor-pointer accent-primary"
          />
          <div className="mt-6 bg-surface-container rounded-xl p-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface/40 mb-3">Degradation Curve Impact</p>
            <div className="h-20 relative">
              <svg className="w-full h-full" viewBox="0 0 200 80">
                <path d="M0,60 Q50,55 100,40 T200,10" fill="none" stroke="#655974" strokeWidth="2" strokeDasharray="4 2" />
                <path d="M0,60 Q50,50 100,35 T200,5" fill="none" stroke="#7b5365" strokeWidth="2" />
              </svg>
              <span className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-[10px] font-bold">
                +4.2M ETA Error
              </span>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-center justify-center">
          <p className="text-xs uppercase tracking-widest font-bold text-on-surface/40 mb-3">Naive Model Error</p>
          <p className="text-5xl font-extrabold text-on-surface mb-1">6.8 <span className="text-lg font-normal text-on-surface/50">min</span></p>
          <div className="w-24 h-1 bg-on-surface/10 rounded-full mt-3"></div>
        </div>

        <div className="bg-surface-container rounded-2xl p-8 flex flex-col items-center justify-center">
          <p className="text-xs uppercase tracking-widest font-bold text-on-surface/40 mb-3">Bias-Corrected</p>
          <p className="text-5xl font-extrabold text-on-surface mb-1">2.1 <span className="text-lg font-normal text-on-surface/50">min</span></p>
          <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
        </div>
      </div>

      {/* Success Banner */}
      <div className="bg-tertiary-container rounded-2xl p-6 flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-tertiary text-xl">lightbulb</span>
          <div>
            <p className="text-sm font-bold text-on-surface">Corrective logic successfully mitigated 68% of signal noise.</p>
            <p className="text-xs text-on-surface/50">Calculated across 14,200 transactions this session.</p>
          </div>
        </div>
        <button className="bg-surface-container-lowest text-on-surface px-4 py-2 rounded-lg text-sm font-semibold">
          Deploy Update
        </button>
      </div>

      {/* Flagged Anomalies Table */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-on-surface">Flagged Anomalies</h3>
          <div className="flex gap-3">
            <button className="flex items-center gap-1 text-sm font-medium text-on-surface/60">
              <span className="material-symbols-outlined text-base">tune</span> Filter Bias
            </button>
            <button className="flex items-center gap-1 text-sm font-medium text-on-surface/60">
              <span className="material-symbols-outlined text-base">download</span> Export Logs
            </button>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                {["Restaurant Entity", "Bias Magnitude", "Avg Time Gap", "Status", "Action"].map((h) => (
                  <th key={h} className="text-left text-[10px] uppercase tracking-widest font-semibold text-on-surface/50 px-6 py-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {anomalies.map((a) => (
                <tr key={a.id} className="border-t border-outline-variant/15">
                  <td className="px-6 py-5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">storefront</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">{a.name}</p>
                      <p className="text-xs text-on-surface/40">Merchant ID: {a.id}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-secondary">{a.bias}</td>
                  <td className="px-6 py-5 text-sm text-on-surface">{a.gap}</td>
                  <td className="px-6 py-5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${a.statusBg}`}>{a.status}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="material-symbols-outlined text-on-surface/40 cursor-pointer hover:text-primary">chevron_right</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SignalBiasAnalyzer;
