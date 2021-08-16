import React from 'react'
import {NavLink} from 'react-router-dom'
import {useTheme, THEME_LIGHT, THEME_DARK} from "../../context/ThemeProvider";
import styles from './Header.module.css'
import Favorite from "../Favorite";
import imgLight from './img/light.png'
import imgDark from './img/dark.png'

const Header = () => {
    const [icon, setIcon] = React.useState(imgLight)
    const isTheme = useTheme()

    React.useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: {
                setIcon(imgLight)
                break
            }
            case THEME_DARK: {
                setIcon(imgDark)
                break
            }
            default: {
                setIcon(imgLight)
            }
        }
    }, [isTheme])

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="icon"/>
            <ul className={styles.list__container}>
                <li><NavLink to='/' exact>Home</NavLink></li>
                <li><NavLink to='/people/?page=1'>People</NavLink></li>
                <li><NavLink to='/not-found' exact>Not Found</NavLink></li>
                <li><NavLink to='/search' exact>Search</NavLink></li>
            </ul>
            <Favorite/>
        </div>
    )
}

export default Header