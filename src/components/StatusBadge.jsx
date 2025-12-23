const statusStyles = {
  pending: 'bg-amber-100 text-amber-700',
  confirmed: 'bg-emerald-100 text-emerald-700',
  rejected: 'bg-rose-100 text-rose-700',
  processed: 'bg-emerald-100 text-emerald-700',
}

const StatusBadge = ({ status }) => (
  <span
    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
      statusStyles[status] || 'bg-slate-100 text-slate-600'
    }`}
  >
    {status}
  </span>
)

export default StatusBadge
