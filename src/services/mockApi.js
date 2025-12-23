import visitsSeed from '../data/visits.json'
import adminRequestsSeed from '../data/adminRequests.json'
import visitorsSeed from '../data/visitors.json'
import qrLogsSeed from '../data/qrLogs.json'
import { getStoredList, setStoredList, getStoredValue, setStoredValue } from './mockStorage'

const VISITS_KEY = 'sakura-visits'
const ADMINS_KEY = 'sakura-admin-requests'
const VISITORS_KEY = 'sakura-visitors'
const QR_KEY = 'sakura-qr-logs'
const USER_KEY = 'sakura-user'
const QUOTA_KEY = 'sakura-quota'

const quotaSeed = {
  total: 80,
  used: 54,
}

export const login = ({ username, role }) => {
  const user = {
    username: username.trim() || 'Petugas',
    role,
  }
  setStoredValue(USER_KEY, user)
  return user
}

export const getCurrentUser = () => getStoredValue(USER_KEY, null)

export const logout = () => {
  localStorage.removeItem(USER_KEY)
}

export const getVisits = () => getStoredList(VISITS_KEY, visitsSeed)

export const updateVisitStatus = (visitId, status) => {
  const visits = getVisits().map((visit) =>
    visit.id === visitId ? { ...visit, status } : visit,
  )
  return setStoredList(VISITS_KEY, visits)
}

export const getAdminRequests = () =>
  getStoredList(ADMINS_KEY, adminRequestsSeed)

export const updateAdminRequestStatus = (requestId, status) => {
  const requests = getAdminRequests().map((request) =>
    request.id === requestId ? { ...request, status } : request,
  )
  return setStoredList(ADMINS_KEY, requests)
}

export const getVisitors = () => getStoredList(VISITORS_KEY, visitorsSeed)

export const getQrLogs = () => getStoredList(QR_KEY, qrLogsSeed)

export const getQuota = () => getStoredValue(QUOTA_KEY, quotaSeed)

export const updateQuotaUsed = (used) => {
  const quota = { ...getQuota(), used }
  return setStoredValue(QUOTA_KEY, quota)
}

export const getDashboardStats = () => {
  const visits = getVisits()
  const adminRequests = getAdminRequests()
  const today = new Date().toISOString().slice(0, 10)
  const todayVisits = visits.filter((visit) => visit.requestedDate === today)
  const pendingVisits = visits.filter((visit) => visit.status === 'pending')
  const quota = getQuota()

  return {
    totalToday: todayVisits.length,
    pendingVisits: pendingVisits.length,
    totalAdminRequests: adminRequests.length,
    quota,
    chart: {
      weeklyVisits: [12, 18, 9, 14, 20, 16, 11],
      statusBreakdown: {
        confirmed: visits.filter((visit) => visit.status === 'confirmed').length,
        pending: pendingVisits.length,
        rejected: visits.filter((visit) => visit.status === 'rejected').length,
      },
    },
  }
}
