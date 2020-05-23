import React from 'react';
import logo from './logo.svg';
import './App.css';


function Image(props) {
  return (
    <div>
      <div style={{ backgroundColor: 'red', width: '40%' }}>SALE </div>
      <div style={{ marginTop: '20px' }}>
        <img src={props.imageURL}/>
      </div>
      
    </div>
  )
}

function Header(props) {
  return (
    <div >
      <p style={{ color: 'red'}}>{props.title}</p>
      <h3>{props.detail}</h3>
    </div>
  )
}



function Price(props) {
  return (
    <div>
      <span> {props.basePrice} </span>
      <span style={{ textDecoration: 'line-through' }}>{props.discountPrice}</span>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image imageURL="https://media3.scdn.vn/img4/2020/03_18/fx0jRvqJ7wVYmcj9swIb_simg_b5529c_250x250_maxb.jpg"/>
        <Header title="FURNITURE" detail="Minimal Deco Furniture"/>
        <Price basePrice="$119.000 USD" discountPrice="$230.0000 USD"/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>World!</code>
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
