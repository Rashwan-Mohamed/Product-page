import React from 'react'
import { useState, useEffect } from 'react'
import Overlay from './overlay'
function Cate({ smlmgs, bglmgs, sum, setSum }) {
  const [sel, setSelected] = useState(0)
  const [quan, setQuan] = useState(0)
  const [over, setOver] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])
  return (
    <>
      <article>
        <div className={width <= 480 ? 'Ovcn' : ''}>
          {width <= 480 && (
            <button
              onClick={() => {
                setSelected((old) => {
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
          )}
          <img
            src={`images/${bglmgs[sel]}`}
            onClick={() => {
              if (width > 480) {
                setOver(true)
              }
            }}
            alt=''
          />
          {width <= 480 && (
            <button
              onClick={() => {
                setSelected((old) => {
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
          )}
        </div>
        <div className='Ovcn'></div>
        <ul className='megos'>
          {smlmgs.map((nerm, index) => {
            let sero = `images/${nerm}`
            return (
              <li
                className={sel === index ? 'selected' : ''}
                onClick={() => {
                  setSelected(index)
                }}
                key={nerm}
              >
                <img src={sero} alt='' />
              </li>
            )
          })}
        </ul>
      </article>
      <article className='wordss'>
        <h5> Sneaker Company</h5>
        <h2> Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className='prices'>
          <h2> $125.00</h2>
          <span> 50%</span>
          <h4> $250.00</h4>
        </div>
        <div className='lasto'>
          <div>
            <button
              onClick={() => {
                console.log(quan)
                setQuan((old) => {
                  if (old <= 0) {
                    return 0
                  } else {
                    return old - 1
                  }
                })
              }}
            >
              {' '}
              <img src='images/icon-minus.svg' alt='' />
            </button>
            <span>{quan}</span>
            <button
              onClick={() => {
                console.log(quan)
                setQuan((old) => old + 1)
              }}
            >
              <img src='images/icon-plus.svg' alt='' />
            </button>
          </div>
          <button
            className={quan === 0 ? 'blocked' : ''}
            onClick={() => {
              setSum(sum + quan)
              setQuan(0)
            }}
          >
            <span>
              <img src='images/icon-cartw.svg' alt='' />
            </span>
            Add to cart
          </button>
        </div>
      </article>
      {over && (
        <Overlay
          smlmgs={smlmgs}
          bglmgs={bglmgs}
          sel={sel}
          setSelected={setSelected}
          setOver={setOver}
        />
      )}
    </>
  )
}

export default Cate
