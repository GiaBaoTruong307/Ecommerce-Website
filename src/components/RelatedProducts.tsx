import { useContext, useEffect, useState } from 'react'
import { ShopContext, type Product } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

interface Props {
  category: string
  subCategory: string
}

const RelatedProducts = ({ category, subCategory }: Props) => {
  const { products } = useContext(ShopContext)!
  const [related, setRelated] = useState<Product[]>([])

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice()

      productsCopy = productsCopy.filter(
        (item) => item.category === category && item.subCategory === subCategory
      )
      setRelated(productsCopy)
    }
  }, [products])

  return (
    <div className="my-24">
      <div className="py-2 text-center text-3xl">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {related.slice(0, 5).map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
