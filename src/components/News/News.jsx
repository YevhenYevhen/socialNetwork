import classes from "./News.module.css";
import Preloader from "../Common/Preloader";
import newsImage from '../../assets/images/news.png'
import { NewsItem } from "./NewsItem";

const News = ({ news, isFetching, lastItemElementRef }) => {

    return <div className={classes.wrapper}>
        {news.map((item, index) => {
            let trimmedDescription;
            if (item.description) {
                if (item.description.length > 140) {
                    trimmedDescription = item.description.slice(0, 141) + '...';
                }
            }

            let image;
            if (item.image === 'None') {
                image = newsImage;
            }

            let lastElement = news.length === index + 1;

            return <NewsItem key={item.id}
                image={image} item={item}
                trimmedDescription={trimmedDescription}
                lastElement={lastElement}
                lastItemElementRef={lastItemElementRef} />
        })}
        {isFetching && <div className={classes.preloader}><Preloader /></div>}
    </div>
}

export default News;