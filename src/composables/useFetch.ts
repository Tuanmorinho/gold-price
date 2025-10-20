import { ref, type Ref } from 'vue'

export function useFetch<T = unknown>(url: string, options: RequestInit = {}) {
  const data: Ref<T | null> = ref(null)
  const error: Ref<unknown | null> = ref(null)
  const loading: Ref<boolean> = ref(false)

  async function execute(override: RequestInit = {}): Promise<T> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(url, { ...options, ...override })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = (await res.json()) as T
      data.value = json
      return json
    } catch (e) {
      error.value = e
      throw e
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, execute }
}


