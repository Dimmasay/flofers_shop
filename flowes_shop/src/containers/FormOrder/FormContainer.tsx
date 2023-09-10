import order from './FormOrder.module.scss'
import {Formik, Field, Form} from 'formik';
import orderImg from './../../assets/image/home/order.jpg'
import {bouquets} from "../../assets/bouquets";
import {useEffect, useState} from "react";

import DatePicker from "react-datepicker";
import {registerLocale} from "react-datepicker";
import uk from 'date-fns/locale/uk';

registerLocale('uk', uk);

import * as Yup from 'yup';

import "react-datepicker/dist/react-datepicker.css";
import Preloader from "../../components/Prealoder/Preloader";


export const FormContainer = () => {

    let initialState = {
        firstName: '',
        phone: '',
        bouquetsId: '',
        date: ''
    }

    let [state, setState] = useState(initialState)
    const [startDate, setStartDate] = useState<string>(null); // for DatePicker
    let [inProcess, setProcess] = useState(false)


    let bouquetsList = bouquets.map(bouq => {
        return <option className={order.startSelect} key={bouq.id}
                       value={bouq.id}>{`${bouq.name} - ${bouq.price}грн.`}</option>
    })
    bouquetsList.push(<option value="" disabled selected>Оберіть букет</option>)


    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(15, 'Too Long!')
            .required("Введіть ім'я"),
        phone: Yup.string().required('Вкажіть номер'),
        bouquetsId: Yup.string()
            .required('Оберіть букет')
        ,
    });


    let sendForm = (values, {resetForm}) => {
        setProcess(true)
        let sentData = {
            ...values,
            date: state.date
        }
        setTimeout(() => {
                alert(JSON.stringify(sentData, null, 2))
                resetForm()
                setStartDate(null)
                setProcess(false)
            }, 500
        )
    }


    useEffect(() => {
            startDate !== null && setState({...state, date: startDate.toString()})
        },
        [startDate])


    return (
        <div className={order.container}>
            <Formik
                validationSchema={SignupSchema}
                initialValues={state}
                onSubmit={sendForm}
            >
                {({errors, touched}) => (
                    <div className={order.wrapperForm}>
                        <div className={order.title}>Замовити букет</div>
                        <Form className={order.form}>
                            <div className={`${order.inputRow} ${order.row}`}>
                                <Field
                                    className={errors.firstName ? `${order.input} ${order.inputError}` : `${order.input}`}
                                    name="firstName"
                                    placeholder="Ім'я"/>
                                <Field
                                    className={errors.phone ? `${order.input} ${order.inputError}` : `${order.input}`}
                                    type='phone'
                                    name="phone"
                                    placeholder="+38(___) ___-__-__"/>

                            </div>
                            <div className={`${order.selectRow} ${order.row}`}>
                                <Field
                                    className={errors.bouquetsId ? `${order.select} ${order.inputError}` : `${order.select}`}
                                    name="bouquetsId"
                                    id="bouquetsId"
                                    component="select">
                                    {bouquetsList}
                                </Field>
                                <DatePicker
                                    locale="uk"
                                    className={`${order.select}`}
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="dd/MM/yyyy/"
                                    placeholderText="дд /мм /рр"
                                    todayButton="Vandaag"
                                />
                            </div>
                            <div className={order.errorMessage}>
                                { errors.firstName && touched.firstName ?<div>{errors.firstName}</div> : null}
                                { errors.phone && touched.phone ?<div>{errors.phone}</div> : null}
                                { errors.bouquetsId && touched.bouquetsId ?<div>{errors.bouquetsId}</div> : null}
                            </div>
                            {inProcess ? <Preloader/> :
                                <button className={`${order.button}`} type="submit">Замовити</button>}
                        </Form>

                    </div>
                )}
            </Formik>
            <img className={`${order.orderImg}`} src={orderImg} alt='order'/>
        </div>
    )
}

