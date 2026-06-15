// src/components/pages/home/TopLists.tsx
import ShopCart from "@/components/shared/carts/ShopCart";
import { shortProductList } from "@/database/constants"; 

export default function TopLists() {
  if (!shortProductList || shortProductList.length === 0) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-gray-500">No products found.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {shortProductList.map((product) => (
          <ShopCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}