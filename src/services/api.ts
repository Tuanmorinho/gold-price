const BASE_URL = (import.meta as any).env?.VITE_API_URL || ''

export async function apiFetch<T = unknown>(path: string, options: RequestInit = {}): Promise<T | string> {
  const url = `${BASE_URL}${path}`
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) }
  const res = await fetch(url, { ...options, headers })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const contentType = res.headers.get('content-type')
  if (contentType && contentType.includes('application/json')) {
    return (await res.json()) as T
  }
  return res.text()
}


