import { apiFetch } from './api'

export interface UserProfile {
  id: number | string
  name: string
  email?: string
}

export const userService = {
  getProfile() {
    return apiFetch<UserProfile>('/users/me')
  },
  updateProfile(payload: Partial<UserProfile>) {
    return apiFetch<UserProfile>('/users/me', { method: 'PATCH', body: JSON.stringify(payload) })
  }
}


