import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)


    const fetchArticles = async () => {
        props.setProgress(10)
        const { country, category, pageSize } = props;

        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=82d7407671b1476f87c835f740f9b612&page=${page}&pageSize=${pageSize}`;


        try {
            const response = await fetch(url);
            props.setProgress(30)
            const data = await response.json();
            props.setProgress(70)

            setArticles(data.articles)

            props.setProgress(100)
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    const capitallizeFirstLatter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        fetchArticles();
        document.title = `${capitallizeFirstLatter(props.category)} - News`;
    }, [])



    const fetchMoreData = async () => {
        const { country, category, pageSize } = props;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=82d7407671b1476f87c835f740f9b612&page=${page + 1}&pageSize=${pageSize}`;
        setPage(page + 1)


        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.articles.length < pageSize) {
                setHasMore(false)
            }

            setArticles([...articles, ...data.articles])

        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    }


    const { category } = props;

    return (
        <>
            <div className='d-flex flex-column align-items-center mb-5'>
                <h2 className='fw-bold text-center border-bottom pb-2'>
                    📰 {category.charAt(0).toUpperCase() + category.slice(1)} News
                </h2>
                <p className='text-muted small mt-2'>
                    Latest curated news for <strong>{category}</strong> category.
                </p>
            </div>

            <InfiniteScroll
                dataLength={articles.length}
                next={() => fetchMoreData()}
                hasMore={hasMore}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4'>
                        {articles.map((article) => (
                            <div key={article.url}>
                                <NewsItem
                                    key={article.url}
                                    title={article.title}
                                    description={article.description}
                                    imageUrl={article.urlToImage}
                                    newsUrl={article.url}
                                    author={article.author}
                                    publishedAt={article.publishedAt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}

News.defaultProps = {
    country: 'us',
    pageSize: 10,
    category: 'general',
};

export default News;
