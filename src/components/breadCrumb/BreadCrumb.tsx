import React from 'react';
import { BreadcrumbProps } from '../../interfaces';
import "./BreadCrumb.sass";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categories }) => {
  return (
    <nav aria-label="breadcrumb" className='breadcrumbContainer'>
      <ul className="breadcrumb">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <li className="breadcrumb-item">
              Categorías
              <span className="breadcrumb-divider">{' > '}</span>
            </li>
            <li key={index} className="breadcrumb-item">
              {category}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;

