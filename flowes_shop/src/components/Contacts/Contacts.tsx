import contacts from './Contacts.module.scss'
import location from './../../assets/image/icons/location.svg'
import clock from './../../assets/image/icons/clock.svg'
import phone from './../../assets/image/icons/phone.svg'

export const Contacts = () => {
    return (
        <div className={contacts.wrapper}>
                <ul className={contacts.list}>
                    <li className={contacts.item}>
                        <div className={contacts.image}>
                            <img src={location}/>
                        </div>
                        <div className={contacts.text}>Вул.Миргородська 39, м.Київ</div>
                    </li>
                    <li className={contacts.item}>
                        <div className={contacts.image}>
                            <img src={clock}/>
                        </div>
                        <div className={contacts.text}>Пн.-Пт. 09:00-18:00</div>
                    </li>
                    <li className={contacts.item}>
                        <div className={contacts.image}>
                            <img src={phone}/>
                        </div>
                        <div className={contacts.text}>Тел.: +38(050) 446-53-57</div>
                    </li>
                </ul>
        </div>
    )
}