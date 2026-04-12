import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const waitTimeData = [
  { day: "MON", signal: 3.0, baseline: 5.2 },
  { day: "TUE", signal: 2.8, baseline: 5.5 },
  { day: "WED", signal: 3.1, baseline: 5.8 },
  { day: "THU", signal: 3.4, baseline: 6.0 },
  { day: "FRI", signal: 2.5, baseline: 5.3 },
  { day: "SAT", signal: 4.0, baseline: 6.5 },
  { day: "SUN", signal: 3.8, baseline: 6.2 },
];

const comparisonData = [
  { category: "Auto-Prep Accuracy", sub: "Merchant Confirmation Lag", baseline: "78.2%", improved: "94.5%", delta: "+16.3%", positive: true },
  { category: "Pickup Success Rate", sub: "First Attempt Completion", baseline: "91.4%", improved: "98.2%", delta: "+6.8%", positive: true },
  { category: "Order Cancellation", sub: "Wait-time Related Drops", baseline: "2.45%", improved: "0.82%", delta: "-66.5%", positive: true },
  { category: "Rider Re-assignments", sub: "Manual Dispatches", baseline: "12.1%", improved: "3.4%", delta: "-71.9%", positive: true },
];

const topContributors = [
  { rank: 1, name: "The Burger Collective", lag: "4.2 min", orders: "84 Orders" },
  { rank: 2, name: "Noodle Zen Central", lag: "3.8 min", orders: "122 Orders" },
  { rank: 3, name: "Pasta & Soul Depot", lag: "2.1 min", orders: "56 Orders" },
  { rank: 4, name: "Green Garden Grill", lag: "1.8 min", orders: "201 Orders" },
];

const SuccessMetrics = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-3">Success Metrics Tracker</h1>
        <p className="text-on-surface/60 max-w-2xl leading-relaxed">
          Detailed analysis of the improved signal system performance against regional baselines for the Q3 Pilot period.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Wait Time Chart */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-tertiary block mb-1">Efficiency</span>
              <h3 className="text-xl font-bold text-on-surface">Rider Wait Time Trend</h3>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                <span>New Signal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                <span>Baseline</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={waitTimeData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(273 10% 82% / 0.3)" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#7a757d" }} />
              <YAxis tick={{ fontSize: 11, fill: "#7a757d" }} />
              <Tooltip />
              <Bar dataKey="signal" fill="#7b5365" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="baseline" fill="#DCCCEC" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-3 gap-8 mt-6 pt-6 border-t border-outline-variant/15">
            <div>
              <p className="text-xs text-on-surface/50 mb-1">Avg Wait (Signal)</p>
              <p className="text-2xl font-extrabold text-on-surface">3.2 <span className="text-sm font-normal text-on-surface/50">min</span></p>
            </div>
            <div>
              <p className="text-xs text-on-surface/50 mb-1">Avg Wait (Base)</p>
              <p className="text-2xl font-extrabold text-on-surface">5.8 <span className="text-sm font-normal text-on-surface/50">min</span></p>
            </div>
            <div>
              <p className="text-xs text-on-surface/50 mb-1">Reduction</p>
              <p className="text-2xl font-extrabold text-secondary">-44.8%</p>
            </div>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="space-y-6">
          <div className="bg-primary-container rounded-2xl p-6">
            <span className="text-xs uppercase tracking-widest font-bold text-secondary block mb-2">Accuracy</span>
            <h3 className="text-2xl font-bold text-on-surface mb-4">ETA Error P50/P90</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface/70">P50 (Median)</span>
                <span className="text-xl font-extrabold text-on-surface">1.1 min</span>
              </div>
              <div className="w-full h-2 bg-on-surface/10 rounded-full">
                <div className="h-full bg-on-surface rounded-full" style={{ width: "40%" }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-on-surface/70">P90 (Worst Case)</span>
                <span className="text-xl font-extrabold text-on-surface">2.8 min</span>
              </div>
              <div className="w-full h-2 bg-on-surface/10 rounded-full">
                <div className="h-full bg-on-surface rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
          <div className="bg-secondary-container rounded-2xl p-6">
            <span className="text-xs uppercase tracking-widest font-bold text-secondary block mb-2">Resource</span>
            <h3 className="text-2xl font-bold text-on-surface mb-2">Rider Idle Time</h3>
            <p className="text-4xl font-extrabold text-on-surface mb-1">12.4%</p>
            <p className="text-sm text-on-surface/60">↝ 3.2% from last week</p>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Comparison Table */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-on-surface">Signal Comparison Baseline</h3>
            <button className="text-sm font-medium text-primary flex items-center gap-1">
              Export CSV <span className="material-symbols-outlined text-base">download</span>
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-[10px] uppercase tracking-widest font-semibold text-on-surface/50 pb-4">Metric Category</th>
                <th className="text-left text-[10px] uppercase tracking-widest font-semibold text-on-surface/50 pb-4">Baseline</th>
                <th className="text-left text-[10px] uppercase tracking-widest font-semibold text-on-surface/50 pb-4">Improved Signal</th>
                <th className="text-left text-[10px] uppercase tracking-widest font-semibold text-on-surface/50 pb-4">Delta</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.category} className="border-t border-outline-variant/15">
                  <td className="py-4">
                    <p className="text-sm font-semibold text-on-surface">{row.category}</p>
                    <p className="text-xs text-on-surface/40">{row.sub}</p>
                  </td>
                  <td className="py-4 text-sm text-on-surface">{row.baseline}</td>
                  <td className="py-4 text-sm font-semibold text-on-surface">{row.improved}</td>
                  <td className="py-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      row.delta.startsWith("+") ? "bg-tertiary-container text-tertiary" : "bg-secondary-container text-secondary"
                    }`}>
                      {row.delta}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Contributors */}
        <div className="bg-tertiary-container rounded-2xl p-6">
          <h3 className="text-xl font-bold text-on-surface mb-2">Top Contributors to Wait</h3>
          <p className="text-xs text-on-surface/60 mb-4">Identifying high-friction nodes requiring manual signal adjustment.</p>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold mb-6 flex items-center gap-1">
            <span className="material-symbols-outlined text-base">auto_awesome</span>
            Generate Report
          </button>
          <div className="space-y-4">
            {topContributors.map((c) => (
              <div key={c.rank} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-sm font-bold text-primary">
                  {c.rank}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-on-surface">{c.name}</p>
                  <p className="text-xs text-on-surface/50">Signal Lag: {c.lag}</p>
                  <div className="w-full h-1.5 bg-primary/20 rounded-full mt-1">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${Math.random() * 60 + 20}%` }}></div>
                  </div>
                </div>
                <span className="text-xs font-bold bg-surface-container-lowest px-2 py-1 rounded">{c.orders}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-outline-variant/15 flex justify-between items-center text-xs text-on-surface/40">
        <span>© 2024 KPT Signal Intelligence — Confidential Editorial Analytics</span>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>System Status: Operational</span>
        </div>
      </footer>
    </div>
  );
};

export default SuccessMetrics;
