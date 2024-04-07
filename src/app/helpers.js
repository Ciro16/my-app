export const generateUUID = () => {
  return typeof window !== 'undefined' ? window.crypto.randomUUID() : ''
}