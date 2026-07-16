// @/database/data/cart.constants.ts

import { Cart } from "../types/cart.type"

export const mockCart: Cart = {
  items: [
    {
      // Oxford Classic Shirt → blue + L
      product: {
        id:        "prod_1",
        title:     "Oxford Classic Shirt",
        slug:      "oxford-classic-shirt",
        category:  "shirt",
        image:     "/products/t-shirt-too-blue.jpg",
        variantId: "var_6",
        color:     "blue",
        size:      "L",
      },
      quantity:           2,
      basePrice:          49.99,
      discountPercentage: 20,
      finalPrice:         39.99,
      lineTotal:          79.98,
    },
    {
      // Urban Graphic Tee → red + M
      product: {
        id:        "prod_2",
        title:     "Urban Graphic Tee",
        slug:      "urban-graphic-tee",
        category:  "t-shirt",
        image:     "/products/product_image.png",
        variantId: "var_22",
        color:     "red",
        size:      "M",
      },
      quantity:           1,
      basePrice:          29.99,
      discountPercentage: 0,
      finalPrice:         29.99,
      lineTotal:          29.99,
    },
    {
      // Slim Fit Denim Jeans → indigo + 32
      product: {
        id:        "prod_3",
        title:     "Slim Fit Denim Jeans",
        slug:      "slim-fit-denim-jeans",
        category:  "jeans",
        image:     "/products/Jeans/too-blue-jeans.jpg",
        variantId: "var_26",
        color:     "indigo",
        size:      "32",
      },
      quantity:           1,
      basePrice:          69.99,
      discountPercentage: 15,
      finalPrice:         59.49,
      lineTotal:          59.49,
    },
    {
      // Essential Pullover Hoodie → navy + M
      product: {
        id:        "prod_4",
        title:     "Essential Pullover Hoodie",
        slug:      "essential-pullover-hoodie",
        category:  "hoodie",
        image:     "/products/product_image.png",
        variantId: "var_43",
        color:     "navy",
        size:      "M",
      },
      quantity:           3,
      basePrice:          59.99,
      discountPercentage: 10,
      finalPrice:         53.99,
      lineTotal:          161.97,
    },
  ],

  itemCount: 7,
  subtotal:  331.43,
}