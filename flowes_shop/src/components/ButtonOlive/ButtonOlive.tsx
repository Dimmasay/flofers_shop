import button from './ButtonOlive.module.scss'
import {NavLink} from "react-router-dom";

type ButtonOlive = {
    text: string
    to: string
}

export const ButtonOlive = (props: ButtonOlive) => {
    return (
        <NavLink to={props.to} className={button.button}>{props.text}</NavLink>
    )
}