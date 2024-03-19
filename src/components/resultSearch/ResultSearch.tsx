import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSearch } from "./../../hooks/useSearch"
import Breadcrumb from '../breadCrumb/BreadCrumb';
import "./ResultSearch.sass"
import shippingImg from "./../../assets/img/shipping.png"
import { formatPrice } from '../../helpers';
import { Item } from '../../../modules/domain/models/searchModel';
import { useNavigate } from 'react-router-dom'

const ResultSearchComponent: React.FC = () => {
  const { search } = useLocation();
  const paramSearch = new URLSearchParams(search).get('search') || '';
  const { resultSearch } = useSearch(paramSearch)
  const navigate = useNavigate();

  useEffect(() => {
    resultSearch.refetch()
  }, [search])

  const handleItemClick = (item: Item) => {
    navigate(`/items/${item.id}`);
  };

  if (resultSearch.isPending) {
    return <div className='listSearch'>Loading...</div>
  }
  if (resultSearch.isError) {
    return <span>Error: {resultSearch.error.message}</span>
  }
  return (
    <div>
      <Breadcrumb categories={resultSearch.data.categories} />
      <div className='listSearch'>
        {resultSearch.data.items?.map(item => (
          <div key={item.id} className="item" onClick={() => handleItemClick(item)}>
            <img src={item.picture} alt={item.title} />
            <div className='detailItem'>
              <h2 
                className='price'>
                  $ {formatPrice(item.price?.amount, item.price?.decimals)} 
                  {item.free_shipping && (
                    <img src={shippingImg} alt="shipping free" />
                  )}
              </h2>
              <h3 className='title'>{item.title}</h3>
            </div>
            <div className='cityItem'>
              <p> { item.location} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultSearchComponent