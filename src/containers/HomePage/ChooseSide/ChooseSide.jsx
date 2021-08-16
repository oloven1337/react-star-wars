import cn from 'classnames'
import PropTypes from 'prop-types'
import styles from './ChooseSide.module.css'
import {useTheme, THEME_LIGHT, THEME_DARK} from "../../../context/ThemeProvider";

const ChooseSide = () => {
    const isTheme = useTheme()

    return (
        <>
            <button className={cn(styles.theme_item, styles.light)}
                    onClick={() => isTheme.change(THEME_LIGHT)}>Light
            </button>
            <button className={cn(styles.theme_item, styles.dark)}
                    onClick={() => isTheme.change(THEME_DARK)}>Dark
            </button>
        </>
    )
}

ChooseSide.propTypes = {}

export default ChooseSide