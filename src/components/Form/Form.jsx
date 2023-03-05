import {React, useState} from 'react';
import './Form';
export const Form =()=>{
    const [country,setCountry] = useState('');
    const[city, setCity] = useState('');
    const [subject, setSubject] = useState('');
    return(
        <>
        <h3>введите свои данные, ок?</h3>
        <input
        className='input'
        type = 'text'
        placeholder='город'
        />
        <input
        className='input'
        type = 'text'
        placeholder='Улица'
        />
        <select className='select'>
            <option value={'legal'}>физ.лицо</option>
            <option value={'legal'}>Юр.лицо</option>
        </select>
        </>
    )
}