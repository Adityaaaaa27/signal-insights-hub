import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const signalData = [
  { time: "12:00 PM", s15: 30, s30: 25, s60: 20 },
  { time: "12:15 PM", s15: 35, s30: 28, s60: 22 },
  { time: "12:30 PM", s15: 55, s30: 42, s60: 30 },
  { time: "12:45 PM", s15: 50, s30: 45, s60: 35 },
  { time: "01:00 PM", s15: 45, s30: 40, s60: 32 },
];

const heatmapData = [
  { name: "The Burger Joint", values: [2, 3, 4, 5, 3, 4, 3] },
  { name: "Sushi Zen", values: [3, 4, 3, 4, 5, 5, 4] },
  { name: "Pasta & Co", values: [4, 3, 5, 3, 3, 4, 3] },
  { name: "Taco Hub", values: [5, 5, 3, 4, 3, 4, 5] },
];

const heatColors = ["bg-tertiary-container", "bg-primary-container", "bg-tertiary-container", "bg-secondary-container", "bg-secondary"];
const timeSlots = ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00"];

const KitchenLoadMonitor = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Hero Metric */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-secondary mb-2">Unified Pressure Index</p>
            <p className="text-6xl font-extrabold text-on-surface">84.2</p>
            <p className="text-sm text-on-surface/50 mt-2">↝ +12.4% vs. last hour</p>
          </div>
          <div className="w-28 h-28 relative">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(273 10% 82% / 0.3)" strokeWidth="8" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#655974" strokeWidth="8" strokeDasharray="251" strokeDashoffset="40" strokeLinecap="round" />
            </svg>
            <span className="material-symbols-outlined text-3xl text-primary absolute inset-0 flex items-center justify-center">bolt</span>
          </div>
        </div>

        <div className="bg-secondary-container rounded-2xl p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="material-symbols-outlined text-secondary text-2xl">offline_bolt</span>
            <span className="text-[10px] uppercase tracking-widest font-bold bg-surface-container-lowest px-2 py-1 rounded text-on-surface/60">Active Proxies</span>
          </div>
          <h3 className="text-lg font-bold text-on-surface mb-1">Rush Estimator</h3>
          <p className="text-sm text-on-surface/50 mb-3">External signal-based proxy load</p>
          <p className="text-4xl font-extrabold text-on-surface">High</p>
          <div className="w-full h-2 bg-on-surface/10 rounded-full mt-2">
            <div className="h-full bg-on-surface rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>

      {/* Rolling Signals Chart */}
      <div className="bg-surface-container-lowest rounded-2xl p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-on-surface">Rolling Zomato Signals</h3>
            <p className="text-sm text-on-surface/50">Real-time load frequency analysis</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            {[
              { label: "15 min", color: "bg-primary" },
              { label: "30 min", color: "bg-secondary" },
              { label: "60 min", color: "bg-tertiary" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${l.color}`}></span>
                <span className="text-on-surface/60">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={signalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(273 10% 82% / 0.2)" />
            <XAxis dataKey="time" tick={{ fontSize: 11, fill: "#7a757d" }} />
            <YAxis tick={{ fontSize: 11, fill: "#7a757d" }} />
            <Tooltip />
            <Area type="monotone" dataKey="s60" stroke="#566343" fill="#C9D8B1" fillOpacity={0.3} strokeWidth={2} />
            <Area type="monotone" dataKey="s30" stroke="#7b5365" fill="#FFCCE2" fillOpacity={0.2} strokeWidth={2} strokeDasharray="5 5" />
            <Area type="monotone" dataKey="s15" stroke="#655974" fill="#DCCCEC" fillOpacity={0.15} strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Heatmap + Side Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-on-surface">Regional Intensity Map</h3>
            <div className="flex items-center gap-2 text-xs text-on-surface/50">
              <span>LOW</span>
              {heatColors.map((c, i) => (
                <span key={i} className={`w-5 h-4 rounded ${c}`}></span>
              ))}
              <span>PEAK</span>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-1">
            <div></div>
            {timeSlots.map((t) => (
              <div key={t} className="text-center text-[10px] text-on-surface/40 font-semibold pb-2">{t}</div>
            ))}
            {heatmapData.map((row) => (
              <>
                <div key={`label-${row.name}`} className="text-xs font-semibold text-on-surface flex items-center pr-2">{row.name}</div>
                {row.values.map((v, i) => (
                  <div
                    key={`${row.name}-${i}`}
                    className={`h-10 rounded ${heatColors[v - 1] || "bg-surface-container"}`}
                  />
                ))}
              </>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-tertiary-container rounded-2xl p-6">
            <span className="material-symbols-outlined text-tertiary text-xl mb-2 block">auto_awesome</span>
            <h3 className="text-sm font-bold text-on-surface mb-2">Optimization Insight</h3>
            <p className="text-xs text-on-surface/60">
              Shift predicted at 18:45 for Taco Hub. Recommend staging 15% more inventory based on signal bias.
            </p>
          </div>
          <div className="bg-primary-container rounded-2xl p-6">
            <span className="material-symbols-outlined text-primary text-xl mb-2 block">verified</span>
            <h3 className="text-sm font-bold text-on-surface mb-2">Model Confidence</h3>
            <p className="text-4xl font-extrabold text-on-surface">98 <span className="text-lg text-on-surface/40">%</span></p>
            <p className="text-[10px] uppercase tracking-widest font-semibold text-on-surface/40 mt-1">Signal Accuracy Level</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenLoadMonitor;
