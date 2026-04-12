import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const biasData = [
  { time: "11:00 AM", base: 16, signal: 14 },
  { time: "12:00 PM", base: 18, signal: 15 },
  { time: "01:00 PM", base: 17, signal: 14 },
  { time: "02:00 PM", base: 16, signal: 13 },
  { time: "03:00 PM", base: 15, signal: 13 },
  { time: "04:00 PM", base: 16, signal: 14 },
];

const SignalQualityExplorer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Signal Quality Explorer</h1>
        <p className="text-on-surface/60 max-w-2xl leading-relaxed">
          Analyze prediction fidelity across dynamic environmental variables. Drill down into the causal drivers affecting Kitchen Prep Time (KPT) accuracy.
        </p>
      </div>

      {/* Input Panel + Metrics */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        {/* Input Panel */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-on-surface">Input Panel</h3>
            <span className="material-symbols-outlined text-on-surface/40">tune</span>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface/50 block mb-2">Restaurant</label>
              <div className="bg-surface-container-lowest rounded-lg px-4 py-3 flex items-center justify-between">
                <span className="text-sm text-on-surface">The Golden Wok (Central)</span>
                <span className="material-symbols-outlined text-on-surface/40 text-base">expand_more</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface/50 block mb-2">Time Window</label>
                <div className="bg-surface-container-lowest rounded-lg px-4 py-3 flex items-center justify-between">
                  <span className="text-sm text-on-surface">Lunch Rush</span>
                  <span className="material-symbols-outlined text-on-surface/40 text-base">expand_more</span>
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface/50 block mb-2">Load Index</label>
                <div className="bg-surface-container-lowest rounded-lg px-4 py-3 flex items-center justify-between">
                  <span className="text-sm text-on-surface">85% - Heavy</span>
                  <span className="material-symbols-outlined text-on-surface/40 text-base">expand_more</span>
                </div>
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface/50 block mb-2">Environmental Bias</label>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                  <span className="material-symbols-outlined text-base">cloud</span> Rain
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest text-on-surface rounded-full text-sm font-medium">
                  <span className="material-symbols-outlined text-base">location_city</span> Dense
                </button>
              </div>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2">
              Update Analysis <span className="material-symbols-outlined text-base">refresh</span>
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-4">
          <div className="bg-tertiary-container rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">Predicted KPT</p>
            <p className="text-4xl font-extrabold text-on-surface">14.2</p>
            <p className="text-sm text-on-surface/50">minutes</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-on-surface/40"></span>
              <span className="text-xs text-on-surface/50">Baseline: 12.5m</span>
            </div>
          </div>
          <div className="bg-primary-container rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest font-bold text-on-surface/50 mb-3">Confidence Interval</p>
            <p className="text-4xl font-extrabold text-on-surface">±1.4</p>
            <p className="text-sm text-on-surface/50">variance range</p>
            <div className="w-20 h-1.5 bg-on-surface/10 rounded-full mt-4"></div>
          </div>
          <div className="bg-secondary-container rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest font-bold text-on-surface/50 mb-3">Reliability Score</p>
            <p className="text-4xl font-extrabold text-on-surface">94%</p>
            <p className="text-sm text-on-surface/50">signal fidelity</p>
            <div className="flex items-center gap-1 mt-4">
              <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
              <span className="text-xs font-bold text-tertiary uppercase">High Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Attribution Model */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 bg-surface-container-lowest rounded-2xl p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-on-surface">Attribution Model</h3>
              <p className="text-sm text-on-surface/50">Identifying the specific impact of each input variable</p>
            </div>
            <button className="px-3 py-1.5 bg-surface-container text-on-surface/60 rounded-lg text-xs font-semibold">
              SHAP Value Analysis
            </button>
          </div>
          <div className="space-y-4">
            {[
              { label: "Kitchen Load", impact: "+3.4m impact", width: "80%", bg: "bg-primary-container" },
              { label: "Weather Bias", impact: "+1.8m impact", width: "55%", bg: "bg-secondary-container" },
              { label: "Historic Trend", impact: "-0.9m reduction", width: "35%", bg: "bg-tertiary-container" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface/50 w-32">{item.label}</span>
                <div className="flex-1 h-10 bg-surface-container rounded relative">
                  <div className={`h-full ${item.bg} rounded flex items-center justify-center`} style={{ width: item.width }}>
                    <span className="text-xs font-bold text-on-surface/70">{item.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bias Correction Pulse */}
      <div className="bg-surface-container rounded-2xl p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold italic text-on-surface">Bias Correction Pulse</h3>
            <p className="text-sm text-on-surface/50">Real-time comparison between raw historical averages and our dynamic bias-corrected engine.</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full border-2 border-on-surface/30"></span>Base Average</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span>Signal v2.4</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={biasData} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(273 10% 82% / 0.2)" />
            <XAxis dataKey="time" tick={{ fontSize: 11, fill: "#7a757d" }} />
            <YAxis tick={{ fontSize: 11, fill: "#7a757d" }} />
            <Tooltip />
            <Bar dataKey="base" fill="#E6E1E4" radius={[4, 4, 0, 0]} barSize={28} />
            <Bar dataKey="signal" fill="#655974" radius={[4, 4, 0, 0]} barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SignalQualityExplorer;
