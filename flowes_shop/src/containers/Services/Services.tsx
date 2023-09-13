import services from './Services.module.scss'
import banner from './../../assets/image/services/servicesBanner.jpg'
import {ButtonOlive} from "../../components/ButtonOlive/ButtonOlive";

export const Services = (props) => {
    return (
        <div className={services.wrapper}>
            <div className={services.banner}>
                <img src={banner}/>
            </div>
            <div className={services.content}>
                <div className={services.info}>
                    <div className={services.item}>
                        <h2 className={services.title}>Виготовлення букетів
                            на замовлення</h2>
                        <div className={services.text}>Виготовляємо букети в точності, як на наших фото в каталозі. Обирай
                            та замовляй. Наш менеджер зв’яжеться з Вами протягом 15 хвилин після оформлення замовлення та
                            підтвердить всі деталі.
                        </div>
                    </div>
                    <div className={services.item}>
                        <h2 className={services.title}>Створення букетів за
                            Вашим дизайном</h2>
                        <div className={services.text}>Команда наших професійних флористів створить букет за Вашим дизайном.
                            Обирайте квіти і декоративні доповнення для Вашої композиції на нашому сайті або в шоурумі,
                            додавайте в кошик і ми створимо Щось Особливе. Не обмежуйте свою фантазію, адже для нас немає
                            нічого неможливого.
                        </div>
                    </div>
                    <div className={services.item}>
                        <h2 className={services.title}>Доставка</h2>
                        <div className={services.text}>Можете бути впевнені, що Ваш букет буде доставлений в точно
                            зазначений час. Хочете надіслати квіти анонімно?Жодних проблем! Не знаєте адресу? - не
                            страшно,залиште номер телефона одержувача і ми самі уточнимо деталі.Бажаєте креативне вручення
                            для особливого моменту - ми допоможемо.
                        </div>
                    </div>
                </div>
                <div className={services.buttons}>
                        <ButtonOlive text={'Каталог'} to={'/catalog'}/>
                        <ButtonOlive text={'Створити букет'} to={'/services/create-bouquets'}/>
                </div>
            </div>
        </div>
    )
}