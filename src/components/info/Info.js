import React from 'react'
import './info.css'


export const Info = (props) =>{

    const cls = ['hideTxt']

    if(props.info){ cls.push('showTxt')}

    return(
        <div className = 'info'>
        <div className = 'infoBtn' onClick = {props.infoHandler}>
           <h2>Информация</h2> 
        </div>

        <div className = 'infoTxt'>
            <p className = {cls.join(' ')}>
                Это приложение для создания заметок.<br/>
                Автор: Sergio

            </p>
        </div>

        

        </div>
    )
}