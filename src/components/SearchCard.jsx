import React from "react";

import moment from "moment";
import { Link } from "react-router-dom";

const SearchCard = ({ search }) => {
    return (
        <div>
            <Link to={"/video/"+ search?.id.videoId}>
                <div className="flex space-x-5 justify-center mx-8 my-10 cursor-pointer">
                    <img src={search?.snippet?.thumbnails?.medium?.url} alt="" />
                    <div className="w-2/3 space-y-2">
                        <div className="font-bold text-lg">
                            {search?.snippet?.title}
                        </div>
                        <div className="text-sm text-gray-700">
                            <span>3,5 B Görüntülenme</span>
                            <span> - </span>
                            <span>{moment(search?.snippet?.publishedAt).startOf('day').fromNow()}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            <div className="text-gray-700">{search?.snippet?.channelTitle}</div>
                        </div>
                        <div className="w-2/3 text-sm text-gray-700">
                            {search?.snippet?.description}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SearchCard;
