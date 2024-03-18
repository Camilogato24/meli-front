import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSearch } from "./../../hooks/useSearch"
import Breadcrumb from '../breadCrumb/BreadCrumb';
import "./ResultSearch.sass"
import shippingImg from "./../../assets/img/shipping.png"
import { formatPrice } from '../../helpers';

const ResultSearchComponent: React.FC = () => {
  const { search } = useLocation();
  const paramSearch = new URLSearchParams(search).get('search') || '';
  const { resultSearch } = useSearch(paramSearch)

  useEffect(() => {
    resultSearch.refetch()
  }, [search])

  if (resultSearch.isPending) {
    return <span>Loading...</span>
  }
  if (resultSearch.isError) {
    return <span>Error: {resultSearch.error.message}</span>
  }
  return (
    <div>
      <Breadcrumb categories={resultSearch.data.categories} />
      <div className='listSearch'>
        {resultSearch.data.items?.map(item => (
          <div key={item.id} className="item">
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
              <p> { item.id} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultSearchComponent