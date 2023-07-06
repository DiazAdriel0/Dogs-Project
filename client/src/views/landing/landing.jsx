import style from './landing.module.css'
import { NavLink } from 'react-router-dom'

const Landing = () => {
    return (
        <div className={style.containerLanding}>
            <NavLink>
                <button>Home</button>
            </NavLink>
        </div>
    )
}

export default Landing