export const getSectorStart = (sizes, index) => {
  const sizesToSum = sizes.slice(0, index)
  const sum = sizesToSum.reduce((total, size) => total + size, 0)
  return sum
}
