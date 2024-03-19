import React from 'react';
import { BreadcrumbProps } from '../../interfaces';
import "./BreadCrumbDetail.sass";

const BreadcrumbDetail: React.FC<BreadcrumbProps> = ({ categories }) => {
  return (
    <nav className='breadcrumbDetail'>
       <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
            {index < categories.length - 1 && ' > '}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadcrumbDetail;
