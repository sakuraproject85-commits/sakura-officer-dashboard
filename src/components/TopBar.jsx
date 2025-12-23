const TopBar = ({ user, onLogout }) => (
  <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4">
    <div>
      <p className="text-sm text-slate-500">Logged in as</p>
      <p className="text-lg font-semibold text-slate-900">
        {user?.username} <span className="text-sm text-slate-500">({user?.role})</span>
      </p>
    </div>
    <button
      type="button"
      onClick={onLogout}
      className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
    >
      Logout
    </button>
  </header>
)

export default TopBar
