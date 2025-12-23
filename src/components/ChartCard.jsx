const ChartCard = ({ title, children, footer }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold text-slate-700">{title}</p>
      {footer && <p className="text-xs text-slate-400">{footer}</p>}
    </div>
    <div className="mt-4">{children}</div>
  </div>
)

export default ChartCard
