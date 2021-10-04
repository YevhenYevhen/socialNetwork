import { useState, useRef, useCallback, useEffect } from "react";
import { newsAPI } from "../../Api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import News from './News'

const NewsInfiniteScroll = () => {
    const [isFetching, setIsFetching] = useState(false)
    const [news, setNews] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect( () => {
        const getNews = async () => {
            setIsFetching(true)
            let response = await newsAPI.getNews();
            setNews([response.data.news])
            setIsFetching(false)
            console.log(response);
        }
        getNews();
    }, [])

    useEffect( () => {
        const getOlderNews = async () => {
            if (pageNumber > 0) {
                setIsFetching(true)
                let response = await newsAPI.getOlderNews(pageNumber);
                setNews(news => [...news, response.data.news])
                setIsFetching(false)
            }
        }
        getOlderNews();
    }, [pageNumber])



    const observer = useRef()
    const lastUserElementRef = useCallback(node => {
        if (isFetching) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            console.log(entries)
            if (entries[0].isIntersecting) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [isFetching])


    return <News isFetching={isFetching} news={news} lastUserElementRef={lastUserElementRef} />
}

export default withAuthRedirect(NewsInfiniteScroll);

