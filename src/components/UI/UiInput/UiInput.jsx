import PropTypes from 'prop-types'
import styles from './UiInput.module.css'
import cn from "classnames";

const UiInput = (
    {
        value,
        handleInputChange,
        placeholder,
        classes
    }) => (
    <div className={cn(styles.wrapper__input, classes)}>
        <input
            className={styles.input}
            type="text"
            value={value}
            onChange={(event => handleInputChange(event.target.value))}
            placeholder={placeholder}
        />
    </div>
)

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string
}

export default UiInput