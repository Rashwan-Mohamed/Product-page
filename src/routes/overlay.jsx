import React from 'react'
import { useState } from 'react'

function Overlay({ smlmgs, bglmgs, sel, setSelected, setOver }) {
  const [rero, setRero] = useState(sel)
  return (
    <>
      <section className='overlay'>
        <article>
          <button onClick={() => setOver(false)}>
            <img src='images/icon-close.svg' alt='' />
          </button>
          <div className='Ovcn'>
            <button
              onClick={() => {
                setRero((old) => {
                  if (old <= 0) {
                    return bglmgs.length - 1
                  } else {
                    return old - 1
                  }
                })
              }}
              className='CVleft'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='1em'
                viewBox='0 0 320 512'
              >
                <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
              </svg>
            </button>
            <img src={`images/${bglmgs[rero]}`} alt='' />
            <button
              onClick={() => {
                setRero((old) => {
                  if (old >= bglmgs.length - 1) {
                    return 0
                  } else {
                    return old + 1
                  }
                })
              }}
              className='CVright'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='1em'
                viewBox='0 0 320 512'
              >
                <path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
              </svg>
            </button>
          </div>
          <ul className='megos'>
            {smlmgs.map((nerm, index) => {
              let sero = `images/${nerm}`
              return (
                <li
                  className={rero === index ? 'selected' : ''}
                  onClick={() => {
                    setRero(index)
                  }}
                  key={nerm}
                >
                  <img src={sero} alt='' />
                </li>
              )
            })}
          </ul>
        </article>
      </section>
    </>
  )
}

export default Overlay
