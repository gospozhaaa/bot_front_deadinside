import {React, useState, useCallback, useEffect} from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram'; 

export const Form =()=>{
    const [country,setCountry] = useState('');
    const[city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();
    const onSendData = useCallback( ()=>{
        const data = {
            country, 
            city,
             subject
        }
        tg.sendData(JSON.stringify(data))
    }, [city, country, subject])

    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData)
        return() =>{
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])
    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'отправить личные данные арабу.'
        })
    }, [])
   
        
        if (!country || !city){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }

        const onChangeCity = (e) =>{
            setCity(e.target.value);
        }
        const onChangeCountry = (e) =>{
            setCountry(e.target.value);
        }
        const onChangeSubject = (e) =>{
            setSubject(e.target.value);
        }
    
         
    return(
        <>
        <h3>введите свои данные, ок?</h3>
        <input
        className='input'
        type = 'text'
        placeholder='город'
        value = {city}
        onChange= {onChangeCity}
        />
        <input
        className='input'
        type = 'text'
        placeholder='Улица'
        value = {country}
        onChange = {onChangeCountry}
        />
        <select value = {subject} onChange={onChangeSubject} className='select'>
            <option value={'legal'}>физ.лицо</option>
            <option value={'legal'}>Юр.лицо</option>
        </select>
        </>
    )
    }