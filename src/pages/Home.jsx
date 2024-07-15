import React, { useEffect, useState } from 'react'
import HomeCard from '../components/HomeCard'
import Filter from '../components/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { homeAction } from '../redux/actions/HomeData'

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.home.getVideos);
  const [letter, setLetter] = useState("new")

  useEffect(() => {
    dispatch(homeAction(letter))
    console.log(letter)
  }, [dispatch, letter])


  return (
    <div className='m-3'>
      <Filter setLetter={setLetter}/>
      <div className='flex flex-wrap m-2 justify-center'>
        {
          videos?.map((video, i) => (
            <HomeCard key={i} video={video} />
          ))
        }
      </div>


    </div>
  )
}

export default Home