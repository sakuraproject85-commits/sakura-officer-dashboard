import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Administrasi from './pages/Administrasi'
import Dashboard from './pages/Dashboard'
import Kunjungan from './pages/Kunjungan'
import Login from './pages/Login'
import Pengunjung from './pages/Pengunjung'
import QrLogs from './pages/QrLogs'
import { getCurrentUser, login, logout } from './services/mockApi'

const pageMap = {
  dashboard: Dashboard,
  kunjungan: Kunjungan,
  administrasi: Administrasi,
  pengunjung: Pengunjung,
  'qr-logs': QrLogs,
}

function App() {
  const [user, setUser] = useState(null)
  const [activePage, setActivePage] = useState('dashboard')

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  const handleLogin = (payload) => {
    setUser(login(payload))
  }

  const handleLogout = () => {
    logout()
    setUser(null)
  }

  if (!user) {
    return <Login onLogin={handleLogin} />
  }

  const ActivePage = pageMap[activePage] || Dashboard

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <Sidebar active={activePage} onSelect={setActivePage} />
      <div className="flex flex-1 flex-col">
        <TopBar user={user} onLogout={handleLogout} />
        <main className="flex-1 px-8 py-6">
          <ActivePage />
        </main>
      </div>
    </div>
  )
}

export default App
