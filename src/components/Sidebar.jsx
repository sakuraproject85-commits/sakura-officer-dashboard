const menuItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'kunjungan', label: 'Kunjungan' },
  { id: 'administrasi', label: 'Administrasi' },
  { id: 'pengunjung', label: 'Pengunjung' },
  { id: 'qr-logs', label: 'QR Logs' },
]

const Sidebar = ({ active, onSelect }) => (
  <aside className="flex h-full w-64 flex-col gap-6 border-r border-slate-200 bg-white p-6">
    <div>
      <p className="text-xs font-semibold uppercase text-slate-400">SAKURA</p>
      <h1 className="text-xl font-semibold text-slate-900">Officer Dashboard</h1>
      <p className="text-sm text-slate-500">Demo control center</p>
    </div>
    <nav className="flex flex-1 flex-col gap-2">
      {menuItems.map((item) => {
        const isActive = active === item.id
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`flex items-center justify-between rounded-lg px-4 py-2 text-left text-sm font-medium transition ${
              isActive
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>{item.label}</span>
            {isActive && <span className="text-xs text-slate-200">Active</span>}
          </button>
        )
      })}
    </nav>
    <div className="rounded-lg bg-slate-100 p-4 text-xs text-slate-600">
      <p className="font-semibold text-slate-700">Demo Notice</p>
      <p>Data berasal dari mock JSON dan local storage.</p>
    </div>
  </aside>
)

export default Sidebar
