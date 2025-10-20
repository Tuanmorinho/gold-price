import { apiFetch } from './api'

export interface Credentials {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  user: { id: number | string; name: string }
}

export const authService = {
  login(credentials: Credentials) {
    return apiFetch<LoginResponse>('/auth/login', { method: 'POST', body: JSON.stringify(credentials) })
  },
  me() {
    return apiFetch<{ id: number | string; name: string }>('/auth/me')
  },
  logout() {
    return Promise.resolve(true as const)
  }
}


