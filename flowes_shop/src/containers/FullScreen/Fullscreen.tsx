import fullImage1 from './../../assets/image/home/fullscreen/1.jpg'
import fullImage2 from './../../assets/image/home/fullscreen/2.jpg'
import fullImage3 from './../../assets/image/home/fullscreen/3.jpg'

import full from './Fullscreen.module.scss'
import {ButtonOlive} from "../../components/ButtonOlive/ButtonOlive";

export const FullScreen = (props) => {
    return (
        <div className={full.wrapper}>
            <div className={full.images}>
                <img src={fullImage1}/>
                <img src={fullImage2}/>
                <img src={fullImage3}/>
            </div>
                <div className={full.container}>
                    <div className={full.info}>
                        <div className={full.title}>Букети на замовлення</div>
                        <div className={full.text}>Створюємо композиції з живих квітів для Ваших особливих моментів.
                        </div>
                        <div className={full.buttons}>
                            <ButtonOlive text={'Створити букет'} to={'/services/create-bouquets'}/>
                            <ButtonOlive text={'Каталог'} to={'/catalog'}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}