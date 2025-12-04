import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../../context/ShopContext'
import type { Product } from '../../../types'

import Title from '../../../components/ui/Title'
import ProductItem from '../../../components/products/ProductItem'

const BestSeller = () => {
  const { products } = useContext(ShopContext)!
  const [bestSeller, setBestSeller] = useState<Product[]>([])

  useEffect(() => {
    const bestProduct = products.filter((item: Product) => item.bestseller)
    setBestSeller(bestProduct.slice(0, 5))
  }, [])

  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Title text1="BEST" text2="SELLER" />
        <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
          Loved by thousands of customers worldwide. These are the pieces everyone is adding to
          their cart right now — timeless styles, perfect fits, and unbeatable quality that keep
          coming back season after season.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default BestSeller
