import { ref, computed, type Ref } from 'vue'

export interface AuthUser {
  id: number | string
  name: string
}

export interface LoginPayload {
  token?: string
  user?: AuthUser
}

const token: Ref<string | null> = ref(null)
const user: Ref<AuthUser | null> = ref(null)

export function useAuth() {
  function login(payload: LoginPayload) {
    token.value = payload?.token || 'mock-token'
    user.value = payload?.user || { id: 1, name: 'Guest' }
  }

  function logout() {
    token.value = null
    user.value = null
  }

  const isAuthenticated = computed<boolean>(() => Boolean(token.value))

  return { token, user, isAuthenticated, login, logout }
}


