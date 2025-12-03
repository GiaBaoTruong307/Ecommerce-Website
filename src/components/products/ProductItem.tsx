import { Link } from 'react-router'
import { useShopContext } from '../../hooks/useShopContext'

interface Props {
  id: string
  image: any[]
  name: string
  price: number
}

const ProductItem = ({ id, image, name, price }: Props) => {
  const { currency } = useShopContext()

  return (
    <Link className="cursor-pointer text-gray-700" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img className="transition ease-in-out hover:scale-110" src={image[0]} alt="" />
      </div>
      <p className="pb-1 pt-3 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  )
}

export default ProductItem
