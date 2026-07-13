export const useRegisterModal = () => {
  const isOpen = useState('registerModal', () => false)
  const open = () => { isOpen.value = true }
  const close = () => { isOpen.value = false }
  return { isOpen, open, close }
}
