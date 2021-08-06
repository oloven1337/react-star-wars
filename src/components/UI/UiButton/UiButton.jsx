import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './UiButton.module.css'
import '../index.css'

const UiButton = ({text, onClick, disabled, theme, classes}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={cn(styles.button, styles[theme], classes)}
    >
        {text}
    </button>
)

UiButton.defaultProps = {
    text: '',
    disabled: false,
    theme: 'dark',
    classes: ''
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string
}

export default UiButton