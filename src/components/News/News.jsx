import classes from "./News.module.css";

const News = () => {
    return (
        <div>
            <img className={classes.newsPic} src="https://www.wvnstv.com/wp-content/uploads/sites/76/2020/08/BREAKING-NEWS-GENERIC-1.jpg" alt="" />
           <p>Somebody's gonna be a developer, huh?</p> 
        </div>
    )
}

export default News;