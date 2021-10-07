import { useState, useRef, useCallback, useEffect } from "react";
import { newsAPI } from "../../Api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import News from './News'

const NewsInfiniteScroll = () => {
    const [isFetching, setIsFetching] = useState(false)
    const [news, setNews] = useState([])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        const getNews = async () => {
            if (pageNumber === 1) {
                setIsFetching(true)
                let response = await newsAPI.getNews()
                setNews(response.data.news)
                setIsFetching(false)
            } else {
                setIsFetching(true)
                let response = await newsAPI.getOlderNews(pageNumber)
                setNews(news => [...news, ...response.data.news])
                setIsFetching(false)
            }
        }
        getNews();
    }, [pageNumber])

    const observer = useRef()
    const lastItemElementRef = useCallback(node => {
        if (isFetching) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [isFetching])


    return <News isFetching={isFetching} news={news} lastItemElementRef={lastItemElementRef} />
}

export default withAuthRedirect(NewsInfiniteScroll);

