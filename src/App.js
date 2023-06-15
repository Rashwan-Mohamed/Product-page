import Root from './routes/root'
import Cate from './routes/Cate'
import { useState } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const [sum, setSum] = useState(0)
  const smlmgs = [
    'image-product-1-thumbnail.jpg',
    'image-product-2-thumbnail.jpg',
    'image-product-3-thumbnail.jpg',
    'image-product-4-thumbnail.jpg',
  ]
  const bglmgs = [
    'image-product-1.jpg',
    'image-product-2.jpg',
    'image-product-3.jpg',
    'image-product-4.jpg',
  ]
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root sum={sum} setSum={setSum} />,
      children: [
        {
          element: (
            <Cate smlmgs={smlmgs} bglmgs={bglmgs} sum={sum} setSum={setSum} />
          ),
          index: true,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
