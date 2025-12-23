import { useEffect, useMemo, useState } from 'react'
import ChartCard from '../components/ChartCard'
import PageHeader from '../components/PageHeader'
import SummaryCard from '../components/SummaryCard'
import { getDashboardStats } from '../services/mockApi'

const Dashboard = () => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    setStats(getDashboardStats())
  }, [])

  const weeklyMax = useMemo(() => {
    if (!stats?.chart?.weeklyVisits?.length) return 0
    return Math.max(...stats.chart.weeklyVisits, 1)
  }, [stats])

  if (!stats) return null

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard Overview"
        description="Ringkasan aktivitas kunjungan dan administrasi hari ini."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="Total kunjungan hari ini"
          value={stats.totalToday}
          subtitle="Berdasarkan jadwal yang masuk"
        />
        <SummaryCard
          title="Pending kunjungan"
          value={stats.pendingVisits}
          subtitle="Menunggu konfirmasi petugas"
        />
        <SummaryCard
          title="Total permohonan administrasi"
          value={stats.totalAdminRequests}
          subtitle="Permintaan yang terdaftar"
        />
        <SummaryCard
          title="Kuota terpakai / sisa"
          value={`${stats.quota.used} / ${stats.quota.total - stats.quota.used}`}
          subtitle="Kuota harian demo"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Kunjungan 7 hari terakhir" footer="Data mock">
          <div className="flex h-40 items-end gap-2">
            {stats.chart.weeklyVisits.map((value, index) => (
              <div key={value + index} className="flex flex-1 flex-col items-center">
                <div
                  className="w-full rounded-md bg-slate-900"
                  style={{ height: `${(value / weeklyMax) * 100}%` }}
                />
                <span className="mt-2 text-xs text-slate-400">H-{6 - index}</span>
              </div>
            ))}
          </div>
        </ChartCard>
        <ChartCard title="Status kunjungan" footer="Distribusi terbaru">
          <div className="space-y-4">
            {Object.entries(stats.chart.statusBreakdown).map(([status, value]) => (
              <div key={status}>
                <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="capitalize">{status}</span>
                  <span>{value}</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-slate-900"
                    style={{
                      width: `${(value / Math.max(stats.pendingVisits + stats.chart.statusBreakdown.confirmed + stats.chart.statusBreakdown.rejected, 1)) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  )
}

export default Dashboard
