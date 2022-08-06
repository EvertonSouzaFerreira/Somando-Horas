import React from 'react'


function Form({hora01, hora02, setHora01, 
    setHora02, hora03, 
    setHora03, hora04, setHora04, 
    setMainHora, mainHora, soma01, soma02, soma03, soma04, soma05, soma06}) {


  return (
    <>
    <div className='main-container'>
    <h1>Somando Horas</h1>
    <div className='primary-form'>
        <form className='main-form'>
            <div className='container-form01'>
                <h2 className='title-ant'>Pedras Anteriores</h2>
                <label htmlFor="date01">
                    <span></span>
                    <input 
                        type='number'
                        className='number'
                        id='date01'
                        min='0'
                        max='60'
                        value={hora01}
                        onChange={e => setHora01(e.target.value)}
                        />      
                </label>
                <span>--</span>
                <label htmlFor="date02">
                    
                    <input 
                        type='number'
                        className='number'
                        id='date02'
                        min='0'
                        max='60'
                        value={hora02}
                        onChange={e => setHora02(e.target.value)}
                        />      
                </label>
            </div>
           <div className='container-forme02'>
           <h2 className='title-apos'>Pedras Após</h2>
           <label htmlFor="date03">
                <span></span>
                <input 
                    type='number'
                    className='number'
                    id='date03'
                    min='0'
                    max='60'
                    value={hora03}
                    onChange={e => setHora03(e.target.value)}
                    />      
            </label>
            <span>--</span>
            <label htmlFor="date04">
                
                <input 
                    type='number'
                    className='number'
                    id='date04'
                    
                    value={hora04}
                    onChange={e => setHora04(e.target.value)}
                    />      
            </label>
           </div>
           <div className='container-main-date'>
            <h2 className='title-main-date'>Horário do Branco</h2>
                <label htmlFor="main-date">
                    <span></span>
                    <input 
                        type='time'
                        step='1'
                        id='main-date'
                        className='main-date'
                        value={mainHora}
                        onChange={e => setMainHora(e.target.value)}
                        />      
                </label>
        </div>
           <div className='respostas'>
            <h2 className='title-total'>Possivel Branco</h2>
           </div>
           {mainHora ? <ul className='lista-horas'>
                <li className='item-color02'>{mainHora && hora01 ? soma01 : ''}</li>
                <li className='item-color'>{mainHora && hora02 ? soma02 : ''}</li>
                <li className='item-color02'>{mainHora && hora03 ? soma03 : ''}</li>
                <li className='item-color'>{mainHora && hora04 ? soma04 : ''}</li>
                <li className='item-color02'>{mainHora ? soma05 : ''}</li>
                <li className='item-color'>{mainHora ? soma06 : ''}</li>
            </ul> :""}
        </form>
    </div>
    </div>
    </> 
  )
}

export default Form