import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSearch } from "./../../hooks/useSearch"
import Breadcrumb from '../breadCrumb/BreadCrumb';

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
      {resultSearch.data.items?.map(item => item.title)}
    </div>
  )
}

export default ResultSearchComponent