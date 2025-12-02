import { useEffect, useState } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'
import type { Product } from '../../types'
import { useShopContext } from '../../context/useShopContext'

const LatestCollection = () => {
  const { products } = useShopContext()
  const [latestProducts, setLatestProducts] = useState<Product[]>([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [])

  return (
    <div className="my-10">
      <div className="py-8 text-center text-3xl">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="m-auto w-3/4 text-xs text-gray-600 sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsum vitae omnis minima?
          Ab perferendis temporibus harum quisquam sit laborum ipsa quibusdam neque illum accusamus.
          Laboriosam dolorum velit modi ex!
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
