import React from 'react'
import { signal } from "@preact/signals-react"
import { useLocation } from 'react-router-dom'
import { useSearch } from "./../../hooks/useSearch"

const param = signal<string>("")

const ResultSearchComponent: React.FC = () => {
  const { search } = useLocation();
  param.value = new URLSearchParams(search).get('search') || '';
  
  const { resultSearch } = useSearch(param.value)
  
  if (resultSearch.isPending) {
    return <span>Loading...</span>
  }
  if (resultSearch.isError) {
    return <span>Error: {resultSearch.error.message}</span>
  }
  return (
    <div>
      {resultSearch.data.items.map(item => item.name)}
    </div>
  )
}

export default ResultSearchComponent