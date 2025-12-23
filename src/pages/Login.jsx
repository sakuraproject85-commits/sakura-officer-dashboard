import { useState } from 'react'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('officer')

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin({ username, role })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase text-slate-400">SAKURA</p>
          <h1 className="text-2xl font-semibold text-slate-900">
            Officer Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Masuk untuk mengelola kunjungan dan administrasi.
          </p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Nama petugas"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="role">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:outline-none"
            >
              <option value="admin">Admin</option>
              <option value="officer">Officer</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Login
          </button>
        </form>
        <div className="mt-6 rounded-lg bg-slate-100 p-4 text-xs text-slate-500">
          Demo login tanpa password. Data tersimpan sementara di browser.
        </div>
      </div>
    </div>
  )
}

export default Login
