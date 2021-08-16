import React from 'react'
import icon from './img/bookmark.svg'
import styles from './Favorite.module.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Favorite = () => {
    const [count, setCount] = React.useState(0)

    const storeData = useSelector(state => state.favoriteReducer)

    React.useEffect(() => {
        const length = Object.keys(storeData).length
        setCount(length)
    }, [storeData])

    return (
        <div className={styles.container}>
            <Link to='/favorites'>
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt='Favorites'/>
            </Link>
        </div>
    )
}

export default Favorite