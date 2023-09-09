import button from './ButtonOlive.module.scss'

type ButtonOlive = {
    text: string
}

export const ButtonOlive = (props: ButtonOlive) => {
    return (
        <button className={button.button}>{props.text}</button>
    )
}