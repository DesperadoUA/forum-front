export const useComplaintModal = () => {
  const isOpen = useState('complaintModal', () => false)
  const open = () => { isOpen.value = true }
  const close = () => { isOpen.value = false }
  return { isOpen, open, close }
}
