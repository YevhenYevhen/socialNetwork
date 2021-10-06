import classes from "./News.module.css";
import Preloader from "../Common/Preloader";
import newsImage from '../../assets/images/news.png'


const News = ({ news, isFetching, lastUserElementRef }) => {

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
            
            let refElement = news.length === index + 1;


            return <div className={classes.itemContainer} key={item.id}>
                <div ref={refElement ? lastUserElementRef : undefined} className={classes.itemImageContainer}>
                    <a href={item.url}> <img className={classes.itemImage} src={image || item.image} alt="" /></a>
                </div>
                <a href={item.url}>  <div className={classes.itemTitle}>{item.title}</div> </a>
                <div className={classes.itemDescription}>{trimmedDescription || item.description}
                    {trimmedDescription && <a href={item.url}> <div className={classes.readMore}>Read more</div></a>}
                </div>
            </div>
        })}
        {isFetching && <div className={classes.preloader}><Preloader /></div>}
    </div>
}

export default News;