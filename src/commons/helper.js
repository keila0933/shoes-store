export const formatPrice = (cents) => {
  return (cents / 100).toLocaleString('zh-tw', {
    style: 'currency',
    currency: 'TWD',
  })
}
