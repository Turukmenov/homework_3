import React from 'react'

export default function App() {

  const message = () => {
    const inputValue = document.querySelector('.input').value
    if (inputValue.trim() !== '') {
      alert('Ваша заметка успешно сохранена')
    }
  }

  return (
    <div style={{width: '1000px', hight: '1000px', display: 'flex', flexWrap: 'wrap', margin: '100px auto', gap: '30px'}}>
      <div style={{width: '1000px', hight: '300px', backgroundColor: '#b781f3', borderRadius: '5px', color: 'white', textAlign: 'center'}}>
        <h1>WebSite  TODO</h1>
      </div>
      <div style={{width: '1000px', hight: '800px', backgroundColor: '#fff', borderRadius: '5px'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', margin: '30px auto 70px'}}>
          <div style={{margin: '0 auto'}}>
            <input className="input" style={{width: '600px', hight: '700px', border: 'none', borderBottom: '3px solid #b6b5be', outline: 'none', fontSize: '36px', color: '#333', marginRight: '30px'}}></input>          
            <button onClick={message} style={{width: '130px', backgroundColor: '#b781f3',border: 'none', borderRadius: '10px', fontSize: '24px', color: 'white'}}>SUBMIT</button>
          </div>
          <div style={{margin: '0 auto'}}>
            <input className="input" style={{width: '600px', hight: '700px', border: 'none', borderBottom: '3px solid #b6b5be', outline: 'none', fontSize: '36px', color: '#333', marginRight: '30px'}}></input>          
            <button onClick={message} style={{width: '130px', backgroundColor: '#b781f3',border: 'none', borderRadius: '10px', fontSize: '24px', color: 'white'}}>SUBMIT</button>
          </div>
          <div style={{margin: '0 auto'}}>
            <input className="input" style={{width: '600px', hight: '700px', border: 'none', borderBottom: '3px solid #b6b5be', outline: 'none', fontSize: '36px', color: '#333', marginRight: '30px'}}></input>          
            <button onClick={message} style={{width: '130px', backgroundColor: '#b781f3',border: 'none', borderRadius: '10px', fontSize: '24px', color: 'white'}}>SUBMIT</button>
          </div>
          <div style={{margin: '0 auto'}}>
            <input className="input" style={{width: '600px', hight: '700px', border: 'none', borderBottom: '3px solid #b6b5be', outline: 'none', fontSize: '36px', color: '#333', marginRight: '30px'}}></input>          
            <button onClick={message} style={{width: '130px', backgroundColor: '#b781f3',border: 'none', borderRadius: '10px', fontSize: '24px', color: 'white'}}>SUBMIT</button>
          </div>
          <div style={{margin: '0 auto'}}>
            <input className="input" style={{width: '600px', hight: '700px', border: 'none', borderBottom: '3px solid #b6b5be', outline: 'none', fontSize: '36px', color: '#333', marginRight: '30px'}}></input>          
            <button onClick={message} style={{width: '130px', backgroundColor: '#b781f3',border: 'none', borderRadius: '10px', fontSize: '24px', color: 'white'}}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  )
}