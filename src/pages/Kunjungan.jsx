import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import { getVisits, updateVisitStatus } from '../services/mockApi'

const Kunjungan = () => {
  const [visits, setVisits] = useState([])

  useEffect(() => {
    setVisits(getVisits())
  }, [])

  const handleUpdate = (visitId, status) => {
    const updated = updateVisitStatus(visitId, status)
    setVisits(updated)
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Kunjungan"
        description="Kelola permintaan kunjungan yang masuk dari warga."
      />
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-6 py-3">Visitor</th>
              <th className="px-6 py-3">NIK</th>
              <th className="px-6 py-3">Requested Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visits.map((visit) => (
              <tr key={visit.id} className="text-slate-600">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-800">{visit.visitorName}</p>
                  <p className="text-xs text-slate-400">{visit.id}</p>
                </td>
                <td className="px-6 py-4">{visit.nik}</td>
                <td className="px-6 py-4">{visit.requestedDate}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={visit.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => handleUpdate(visit.id, 'confirmed')}
                      className="rounded-lg border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-50"
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      onClick={() => handleUpdate(visit.id, 'rejected')}
                      className="rounded-lg border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-700 transition hover:bg-rose-50"
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Kunjungan
