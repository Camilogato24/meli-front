import React from 'react';
import { BreadcrumbProps } from '../../interfaces';
import "./BreadCrumb.sass";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categories }) => {

  return (
    <nav aria-label="breadcrumb" className='breadcrumbContainer'>
      <ol className="breadcrumb">
        {categories.map((category, index) => (
          <><li className="breadcrumb-item">
            Categorías
            <span className="breadcrumb-divider">{' > '}</span>
          </li><li className="breadcrumb-item">
              {categories[0]}
            </li></>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
