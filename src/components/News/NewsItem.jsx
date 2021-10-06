import classes from "./News.module.css";

export const NewsItem = ({ item, image, trimmedDescription, lastElement, lastItemElementRef }) => {
    return (
        <div className={classes.itemContainer}>
            <div ref={lastElement ? lastItemElementRef : null} className={classes.itemImageContainer}>
                <a href={item.url}> <img className={classes.itemImage} src={image || item.image} alt="" /></a>
            </div>
            <a href={item.url}>  <div className={classes.itemTitle}>{item.title}</div> </a>
            <div className={classes.itemDescription}>{trimmedDescription || item.description}
                {trimmedDescription && <a href={item.url}> <div className={classes.readMore}>Read more</div></a>}
            </div>
        </div>
    )
}
