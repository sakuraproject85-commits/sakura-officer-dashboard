const parseJSON = (value, fallback) => {
  if (!value) return fallback
  try {
    return JSON.parse(value)
  } catch {
    return fallback
  }
}

export const getStoredList = (key, fallback) => {
  const stored = parseJSON(localStorage.getItem(key), null)
  if (stored) return stored
  localStorage.setItem(key, JSON.stringify(fallback))
  return fallback
}

export const setStoredList = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
  return value
}

export const getStoredValue = (key, fallback) => {
  const stored = parseJSON(localStorage.getItem(key), null)
  if (stored !== null) return stored
  localStorage.setItem(key, JSON.stringify(fallback))
  return fallback
}

export const setStoredValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
  return value
}
