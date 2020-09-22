import { useState, useEffect } from 'react'

const useSectorPress = () => {
  const [pressedSector, setPressedSector] = useState(null)

  const handleKeyDown = e => {
    let newPressedSector = null
    switch (e.key) {
      case '1': {
        newPressedSector = 1
        break
      }
      case '2': {
        newPressedSector = 2
        break
      }
      case '3': {
        newPressedSector = 3
        break
      }
      case '4': {
        newPressedSector = 4
        break
      }
      default: {
        newPressedSector = null
      }
    }
    setPressedSector(currentSector => {
      if (newPressedSector !== currentSector) {
        console.log('Cheat:', newPressedSector)
      }
      return newPressedSector
    })
  }

  // setup event listening
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const resetPressedSector = () => {
    setPressedSector(null)
  }

  return { pressedSector, resetPressedSector }
}

export default useSectorPress
