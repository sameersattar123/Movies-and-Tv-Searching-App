import React from 'react'
import { Link } from 'react-router-dom'
import { img_300 , img_not_available  } from "../../Config"


const Card = ({data, mediaType}) => {

 const id = data.id;
 const media_type = data.media_type ? data.media_type : data.type ? data.type : mediaType;
 const imgURL = data.poster_path ? img_300 + data.poster_path : img_not_available
 const title= data.original_title || data.title
 const vote_average = parseInt(data.vote_average);
 const original_language = data.original_language 
 const release_data = data.release_date || data.first_air_date;


  return (
    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6'>
       <Link to={`/details/${id}/${media_type}`} className="video-thumb">
            <figure className='video-image'>
                    <span>
                        <img src={imgURL} alt={title} />
                    </span>
                    <div className="circle-rate">
                    <svg className="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                <circle className="circle-chart__background" stroke="#2f3439" strokeWidth="2" fill="none" cx="15" cy="15" r="14"></circle>
                                <circle className="circle-chart__circle" stroke="#4eb04b" strokeWidth="2" strokeDasharray={`${vote_average}0,100`} cx="15" cy="15" r="14"></circle>
                            </svg>
                        <b>
                            {vote_average}
                        </b>
                    </div>
                    <div className="hd"> { media_type}
                    <b>{original_language}</b>
                    </div>
                    <div className="video-content">
                        <ul className='tags'>
                            <li>Releae Date</li>
                        </ul>
                        <small className="range">
                            {release_data}
                        </small>
                        <h3 className='name'>{title}</h3>
                    </div>
            </figure>
       </Link>
    </div>
  )
}

export default Card
