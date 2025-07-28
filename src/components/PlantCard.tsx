'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Plant } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

interface PlantCardProps {
  plant: Plant;
  className?: string;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, className }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(plant);
  };

  return (
    <div className={cn("group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", className)}>
      <Link href={`/plants/${plant.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={plant.image}
            alt={plant.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Sale Badge */}
          {plant.originalPrice && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>
          )}

          {/* Stock Status */}
          {!plant.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}

          {/* Wishlist Button */}
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        <div className="p-4">
          {/* Category */}
          <span className="text-xs text-green-600 font-medium uppercase tracking-wide">
            {plant.category}
          </span>

          {/* Plant Name */}
          <h3 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
            {plant.name}
          </h3>

          {/* Scientific Name */}
          <p className="text-sm text-gray-500 italic">{plant.scientificName}</p>

          {/* Rating */}
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < Math.floor(plant.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="ml-1 text-sm text-gray-600">
              ({plant.reviewCount})
            </span>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mt-2">
            {plant.features.slice(0, 2).map((feature) => (
              <span
                key={feature}
                className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ${plant.price.toFixed(2)}
              </span>
              {plant.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${plant.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!plant.inStock}
              className={cn(
                "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                plant.inStock
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              )}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>

          {/* Care Level */}
          <div className="flex items-center justify-between mt-3 text-xs text-gray-600">
            <span>Care: {plant.difficulty}</span>
            <span>Light: {plant.lightRequirement}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlantCard;