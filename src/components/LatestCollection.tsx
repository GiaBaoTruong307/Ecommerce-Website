import { useEffect, useState } from 'react'
import { useShopContext } from '../context/useShopContext'
import Title from './Title'
import type { Product } from '../context/ShopContext'
import ProductItem from './ProductItem'

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
      <div className="md:grid-col-4 grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
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
