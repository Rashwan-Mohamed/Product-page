import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Cart from './Cart'
function Root({ sum, setSum }) {
  const [cart, setCart] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [side, setSide] = useState(false)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    let boo = document.body
    if (cart) {
      boo.style.backgroundColor = 'hsl(223, 64%, 98%)'
    }
    return () => {
      boo.style.backgroundColor = ''
    }
  }, [cart])
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
  useEffect(() => {
    if (side) {
      document.body.style.overflow = 'hidden'
    } else if (!side) {
      document.body.style.overflow = 'scroll'
    }
    return () => {
      document.body.style.overflow = 'scroll'
    }
  }, [side])
  return (
    <>
      <nav>
        <article>
          {width <= 480 && (
            <button onClick={() => setSide(true)}>
              <img src='images/icon-menu.svg' alt='' />
            </button>
          )}
          <h4>Sneakers</h4>
          {width > 480 && (
            <ul>
              <li>Collection</li>
              <li>Men</li>
              <li>Woman</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          )}
          {width <= 480 && (
            <aside className={side ? 'reside asido' : 'asido'}>
              <button onClick={() => setSide(false)}>
                <img src='images/icon-closeb.svg' alt='' />
              </button>
              <div className='sidel'>
                <li>Collection</li>
                <li>Men</li>
                <li>Woman</li>
                <li>About</li>
                <li>Contact</li>
              </div>
            </aside>
          )}
        </article>
        <div className='rightC'>
          <div onClick={() => setCart(!cart)} className='spancon'>
            <img src='images\icon-cart.svg' alt='' />
            <span>{sum}</span>
          </div>
          <div className='avatar'>
            <img src='images\image-avatar.png' alt='' />
          </div>
        </div>
        {cart && <Cart sum={sum} setSum={setSum} />}
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default Root
//public\images\image-avatar.png
