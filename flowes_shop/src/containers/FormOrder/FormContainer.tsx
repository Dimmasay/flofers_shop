import order from './FormOrder.module.scss'
import {Formik, Field, Form} from 'formik';
import orderImg from './../../assets/image/home/order.jpg'
import {bouquets} from "../../assets/bouquets";
import {useEffect, useState} from "react";

import DatePicker from "react-datepicker";
import {registerLocale} from "react-datepicker";
import uk from 'date-fns/locale/uk';

registerLocale('uk', uk);

import "react-datepicker/dist/react-datepicker.css";

export const FormContainer = () => {

    let bouquetsList = bouquets.map(bouq => {
        return <option className={order.startSelect} key={bouq.id}
                       value={bouq.id}>{`${bouq.name} - ${bouq.price}грн.`}</option>
    })
    bouquetsList.push(<option value="" disabled selected>Оберіть букет</option>)


    let initialState = {
        firstName: '',
        phone: '',
        bouquetsId: '',
        data: ''
    }
    let [state, setState] = useState(initialState)
    const [startDate, setStartDate] = useState(null);

    let sendForm = (data) => {

        let sentData = {
            ...data,
            data: state.data
        }
        alert(JSON.stringify(sentData, null, 2));

    }
    useEffect(() => {
            startDate !== null && setState({...state, data: startDate.toString()})
        },
        [startDate])


    const Example = () => {
        return (
            <DatePicker
                locale="uk"
                className={`${order.select}`}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="дд /мм /рр"
            />
        );
    };

    return (
        <div className={order.container}>
            <Formik
                initialValues={state}
                onSubmit={sendForm}
            >
                <div className={order.wrapperForm}>
                    <div className={order.title}>Замовити букет</div>
                    <Form className={order.form}>
                        <div className={`${order.inputRow} ${order.row}`}>
                            <Field className={`${order.input}`}
                                   name="firstName"
                                   placeholder="Ім'я"/>
                            <Field className={`${order.input}`}
                                   type='phone'
                                   name="phone"
                                   placeholder="+38(___) ___-__-__"/>
                        </div>
                        <div className={`${order.selectRow} ${order.row}`}>
                            <Field
                                className={`${order.select}`}
                                name="bouquetsId"
                                component="select">
                                {bouquetsList}
                            </Field>
                            <Example/>
                        </div>
                        <button className={`${order.button}`} type="submit">Замовити</button>
                    </Form>
                </div>

            </Formik>
            <img className={`${order.orderImg}`} src={orderImg} alt='order'/>
        </div>
    )
}


