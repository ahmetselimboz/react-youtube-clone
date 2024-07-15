import React, { useEffect } from 'react'
import SearchCard from '../components/SearchCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchAction } from '../redux/actions/SearchData'

const Search = () => {

  const { keyword } = useParams()
  const dispatch = useDispatch()
  const getSearch = useSelector((state) => state.search.getSearch)

  useEffect(() => {
    dispatch(searchAction(keyword))
  }, [dispatch, keyword])
  console.log(keyword);
  console.log(getSearch);

  return (
    <div>
      {
        getSearch?.map((search, i) => (
          <SearchCard key={i} search={search} />

        ))
      }
    </div>
  )
}

export default Search