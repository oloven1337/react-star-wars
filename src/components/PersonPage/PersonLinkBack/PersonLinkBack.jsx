import {useHistory} from "react-router-dom";
import styles from './PersonLinkBack.module.css'
import iconBack from './img/back.svg'

const PersonLinkBack = () => {
    const history = useHistory()

    const handleGoBack = e => {
        e.preventDefault()
        history.goBack()
    }

    return (
        <a
            className={styles.link}
            href='#'
            onClick={handleGoBack}
        >
            <img className={styles.link__img} src={iconBack} alt="Go back"/>
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack