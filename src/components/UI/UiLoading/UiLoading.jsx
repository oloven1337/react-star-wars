import loader from './img/loader.svg'

import styles from './UiLoading.module.css'

const UiLoading = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.loader} src={loader} alt="loading..."/>
        </div>
    )
}

export default UiLoading