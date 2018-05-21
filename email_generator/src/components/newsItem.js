import React from 'react';

import './newsItem.css';

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <p className="tagline">{props.tagline}</p>
            <p className="details">{props.details}</p>
            <button className="remove-news" onClick={ () => props.removeNews(props.index) } >X</button>
        </div>
    )
}

export default NewsItem;
