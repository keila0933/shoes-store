import React, { useState, useEffect } from 'react'

const ScrollButton = () => {
  const [visible, setVisible] = useState('scroll-btn')

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 200) {
      setVisible('scroll-btn visible')
    } else if (scrolled <= 200) {
      setVisible('scroll-btn')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <div className={visible} onClick={scrollToTop}>
      <i className="fas fa-arrow-up"></i>
    </div>
  )
}

export default ScrollButton
