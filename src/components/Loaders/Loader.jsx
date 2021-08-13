import loader from '../../static/loader.svg'
import styles from './Loaders.module.css'

const Loader = () => (
    <div className={styles.wrapper}>
        <img className={styles.img} src={loader} alt="Loading..."/>
    </div>
)

export default Loader