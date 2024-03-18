import React from 'react';
import { BreadcrumbProps } from '../../interfaces';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categories }) => {
  console.log(categories, "categories")
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {categories.map((category, index) => (
          <li key={index} className="breadcrumb-item">
            {category}
            {index !== categories.length - 1 && <span className="breadcrumb-divider">{' > '}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
