import { useEffect, useState } from 'react'
import { useShopContext } from '../../hooks/useShopContext'
import type { CartItemData } from '../../types'
import Title from '../../components/ui/Title'
import { assets } from '../../constants/assets'
import CartTotal from './components/CartTotal'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useShopContext()

  const [cartData, setCartData] = useState<CartItemData[]>([])

  useEffect(() => {
    const tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
            details: products.find((product) => product.id === items),
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product.id === item.id)

          return (
            <div
              key={index}
              className="grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 border-y py-4 text-gray-700 sm:grid-cols-[4fr_2fr_0.5fr]"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData?.image[0]} alt="Image" />
                <div>
                  <p className="text-xs font-medium md:text-lg">{productData?.name}</p>
                  <div className="mt-2 flex items-center gap-5">
                    <p>
                      {currency}
                      {productData?.price}
                    </p>
                    <p className="border bg-slate-50 px-2 sm:px-3 sm:py-1">{item.size}</p>
                  </div>
                </div>
              </div>
              <input
                className="max-w-10 border p-1 sm:max-w-20 sm:px-2"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === '' || e.target.value === '0'
                    ? null
                    : updateQuantity(item.id, item.size, Number(e.target.value))
                }
              />
              <img
                onClick={() => updateQuantity(item.id, item.size, 0)}
                className="mr-4 w-4 cursor-pointer sm:w-5"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          )
        })}
      </div>

      <div className="my-20 flex justify-end">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="my-8 bg-black px-8 py-3 text-sm text-white"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
