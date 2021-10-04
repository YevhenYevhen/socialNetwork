import classes from "./News.module.css";
import Preloader from "../Common/Preloader";

const News = (props) => {

    return <>
        <div className={classes.wrapper}>
            {props.news.map((item, index) => Array.from(item).filter(item => item.image !== 'None').map(i => {

                let trimmedDescription;
                if (i.description) {
                    if (i.description.length > 140) {
                        trimmedDescription = i.description.slice(0, 141) + '...';
                    }
                }
                let refElement = props.news.length === index + 1;

                return <div className={classes.itemContainer} key={i.id}>
                    <div ref={refElement ? props.lastUserElementRef : undefined} className={classes.itemImageContainer}>
                        <a href={i.url}> <img className={classes.itemImage} src={i.image} alt="" /></a>
                    </div>
                    <a href={i.url}>  <div className={classes.itemTitle}>{i.title}</div> </a>
                    <div className={classes.itemDescription}>{trimmedDescription || i.description}
                        {trimmedDescription && <a href={i.url}> <div className={classes.readMore}>Read more</div></a>}
                    </div>
                </div>
            }))}
            {props.isFetching && <div className={classes.preloader}><Preloader /></div>}
        </div>
    </>
}


export default News;