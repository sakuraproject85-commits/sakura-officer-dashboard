import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { getAdminRequests, updateAdminRequestStatus } from '../services/mockApi'

const Administrasi = () => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    setRequests(getAdminRequests())
  }, [])

  const handleProcessed = (requestId) => {
    const updated = updateAdminRequestStatus(requestId, 'processed')
    setRequests(updated)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Administrasi"
        description="Pantau dan proses permohonan administrasi." 
      />
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-6 py-3">Request Type</th>
              <th className="px-6 py-3">Visitor Phone</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {requests.map((request) => (
              <tr key={request.id} className="text-slate-600">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-800">{request.type}</p>
                  <p className="text-xs text-slate-400">{request.id}</p>
                </td>
                <td className="px-6 py-4">{request.phone}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={request.status} />
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    onClick={() => handleProcessed(request.id)}
                    className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    Mark as processed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Administrasi
