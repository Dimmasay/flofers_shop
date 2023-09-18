import preloaderImg from './../../assets/image/icons/preloader.gif'
import preloader from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={preloader.container}>
            <img src={preloaderImg}/>
        </div>
    )
}

export default Preloader