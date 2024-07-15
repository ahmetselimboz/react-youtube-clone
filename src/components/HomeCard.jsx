import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'




const HomeCard = ({ video }) => {
    return (
        <>
            <Link to={"/video/"+ video?.id.videoId}>
                <div className='w-[280px] m-3 cursor-pointer'>
                    <img src={video?.snippet?.thumbnails?.medium?.url} alt="" />
                    <div className='font-bold mt-1'>{(video?.snippet?.title).substring(0, 50)}...</div>
                    <div className='text-xs mt-1 tracking-wider text-gray-700'>{video?.snippet?.channelTitle}</div>
                    <div className='text-xs mt-1 tracking-wider text-gray-700'>
                        <span>100K Görüntülenme</span>
                        <span> - </span>
                        <span>{moment(video?.snippet?.publishedAt).startOf("day").fromNow()}</span>
                    </div>
                </div>
            </Link>

        </>


    )
}

export default HomeCard