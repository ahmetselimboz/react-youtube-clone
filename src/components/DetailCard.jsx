import moment from 'moment'
import React from 'react'
import ReactPlayer from 'react-player'
import icons from "../assets/icons"

const DetailCard = ({video}) => {
  return (
    <div className="max-w-[650px] my-10 mx-20">
    <ReactPlayer url={`https://www.youtube.com/watch?v=${video?.id}`} />
    <div className="font-bold text-2xl mt-1">{video?.snippet?.title}</div>
    <div className="space-x-2 text-gray-800 mt-1">
      <span>
        {video?.statistics?.viewCount} Görüntülenme
      </span>
      <span>
        {moment(video?.snippet?.publishedAt).startOf('day').fromNow()}
      </span>
    </div>
    <div className="text-gray-700 mt-2 text-sm">
      {(video?.snippet?.description).substring(0, 200)} ...
    </div>
    <div className="mt-2 text-xs text-blue-700">
      {video?.snippet?.tags?.map((tag, i) => `#${tag} `)}
    </div>
    <div className="align-items text-gray-800 mt-3">
    <span className='align-items'><icons.like className="icon-style"/>{video?.statistics?.likeCount}</span>
    <span className='align-items'><icons.dislike className="icon-style"/>Görüntüleme</span>
   
    </div>
  </div>
  
  )
}

export default DetailCard