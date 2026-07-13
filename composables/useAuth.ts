export const useAuth = () => {
  const isLoggedIn = useState('auth:isLoggedIn', () => false)
  return { isLoggedIn }
}
