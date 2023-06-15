import React from 'react'

function Cart({ sum, setSum }) {
  console.log(sum, 'here it is')
  return (
    <section className='carto'>
      <h5>Cart</h5>
      <div>
        {sum === 0 ? (
          <p className='empty'>Your cart is empty.</p>
        ) : (
          <div className='noempty'>
            <div>
              <img src='images/image-product-1-thumbnail.jpg' alt='' />
              <p>Fall Limited Edition Sneakers $125.00 x {sum}</p>
              <button onClick={()=>setSum(0)}>
                <img src='images/icon-delete.svg' alt='' />
              </button>
            </div>
            <button className='chekout'>Checkout</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
