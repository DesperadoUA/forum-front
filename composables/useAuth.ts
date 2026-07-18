const TOKEN_KEY = 'sweeps_access_token'

export const useAuth = () => {
  const accessToken = useState<string | null>('auth:accessToken', () => null)
  const isLoggedIn = computed(() => Boolean(accessToken.value))

  function setToken(token: string) {
    accessToken.value = token
    if (import.meta.client) {
      localStorage.setItem(TOKEN_KEY, token)
    }
  }

  function clearAuth() {
    accessToken.value = null
    if (import.meta.client) {
      localStorage.removeItem(TOKEN_KEY)
    }
  }

  function restoreToken() {
    if (!import.meta.client || accessToken.value) return
    const saved = localStorage.getItem(TOKEN_KEY)
    if (saved) accessToken.value = saved
  }

  return {
    accessToken,
    isLoggedIn,
    setToken,
    clearAuth,
    restoreToken,
  }
}
