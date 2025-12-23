import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { getVisitors } from '../services/mockApi'

const Pengunjung = () => {
  const [visitors, setVisitors] = useState([])

  useEffect(() => {
    setVisitors(getVisitors())
  }, [])

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pengunjung"
        description="Daftar warga yang pernah melakukan kunjungan." 
      />
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase text-slate-500">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">NIK</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visitors.map((visitor) => (
              <tr key={visitor.id} className="text-slate-600">
                <td className="px-6 py-4 font-medium text-slate-800">
                  {visitor.name}
                </td>
                <td className="px-6 py-4">{visitor.phone}</td>
                <td className="px-6 py-4">{visitor.nik}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pengunjung
