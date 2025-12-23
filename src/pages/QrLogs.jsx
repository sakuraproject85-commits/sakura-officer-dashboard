import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { getQrLogs } from '../services/mockApi'

const QrLogs = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    setLogs(getQrLogs())
  }, [])

  return (
    <div className="space-y-6">
      <PageHeader
        title="QR Logs"
        description="Riwayat QR yang dihasilkan untuk kunjungan." 
      />
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-6 py-3">Visit ID</th>
              <th className="px-6 py-3">Generated Time</th>
              <th className="px-6 py-3">QR Signature</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {logs.map((log) => (
              <tr key={log.id} className="text-slate-600">
                <td className="px-6 py-4 font-medium text-slate-800">
                  {log.visitId}
                </td>
                <td className="px-6 py-4">{log.generatedAt}</td>
                <td className="px-6 py-4 text-xs text-slate-500">
                  {log.signature}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default QrLogs
