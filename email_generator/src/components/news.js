import React from 'react';

import NewsItem from './newsItem';

const News = (props) => {
    const newsItems = props.news.map((obj, index) => {
        if (index < props.news.length - 1) {
            if (obj.tagline || obj.details) {
                return <NewsItem removeNews={props.removeNews} details={obj.details} tagline={obj.tagline} index={index} />;
            };
        }
        return '';
    });

    return (
        <div className="news">
            <h2>News</h2>
            {newsItems}
            <form onSubmit={props.addItem}>
                <div className="form-wrapper">
                    <div className="form--text__input">
                        <input
                            id="news"
                            className="form--text__input--input"
                            name="tagline"
                            onChange={props.handleChange}
                            placeholder="Lights"
                            type="text"
                            value={props.news[props.news.length - 1].tagline}
                        />
                        <label
                            htmlFor="news"
                            className="form--text__input--label label"
                        >
                            Tagline
                        </label>
                    </div>
                    <div className="form--text__input">
                        <input
                            id="details"
                            className="form--text__input--input"
                            name="details"
                            onChange={props.handleChange}
                            placeholder="West-side lights will be turned off again until noon. No shenanigans."
                            type="text"
                            value={props.news[props.news.length - 1].details}
                        />
                        <label
                            htmlFor="details"
                            className="form--text__input--label label"
                        >
                            Details
                        </label>
                    </div>
                </div>
                <button className="add-item" type="submit" >ADD</button>
            </form>
        </div>
    )
}

export default News;
