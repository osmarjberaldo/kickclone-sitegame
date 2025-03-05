
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    imageUrl: string;
    viewerCount: number;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/category/${category.id}`} className="block card-hover">
      <div className="bg-streamBlack-lighter rounded-lg overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={category.imageUrl} 
            alt={category.name} 
            className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
        <div className="p-3">
          <h3 className="text-white font-medium truncate">{category.name}</h3>
          <p className="text-streamGray-darker text-xs">{category.viewerCount.toLocaleString()} viewers</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
