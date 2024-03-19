import React from 'react'
import { useParams } from 'react-router-dom';
import { useDetailProduct } from "./../../hooks/useDetailProduct";
import { configVars } from '../../../config';
import { formatDecimals, formatPrice, formatPriceDetail } from '../../helpers';
import BreadcrumbDetail from '../breadCrumbDetail/BreadCrumbDetail';
import "./DetailProduct.sass"

const DetailProduct: React.FC = () => {
  const { id } = useParams();
  const { detailProduct } = useDetailProduct(id)

  if (detailProduct?.isPending) {
    return <div className='listSearch'>Loading...</div>
  }
  if (detailProduct?.isError) {
    return <span>Error: {detailProduct.error.message}</span>
  }
  return (
    <main>
      <BreadcrumbDetail categories={detailProduct?.data?.data?.item?.categories || []} />
      <article>
        <div className='articleDescription'>
          <section>
            <figure>
              <img src={detailProduct?.data.data.item.picture} alt={detailProduct?.data.data.item.title} />  
            </figure>
            <div>
              <h2>
                {configVars.DESCRIPTION_TXT}
              </h2>
              <p>
                {detailProduct?.data.data.item.description}
              </p>
            </div>
          </section>
        </div>
        <div className='articlePrice'>
          <section>
            <div>
              <h5>
                {detailProduct?.data.data.item.condition} - {detailProduct?.data.data.item.sold_quantity}
              </h5>
              <h3>
                {detailProduct?.data.data.item.title}
              </h3>
              <h1>
                {formatPriceDetail(detailProduct?.data.data.item.price.amount)}
                <small>
                  {formatDecimals(detailProduct?.data.data.item.price.decimals)}
                </small>
              </h1>
            </div>
            <button> Comprar </button>
          </section>
        </div> 
      </article>
    </main>
  )
}

export default DetailProduct