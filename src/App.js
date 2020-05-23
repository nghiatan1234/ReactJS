import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import SideBar from './components/Sidebar'
import Content from './components/Content'
import ProductItem from './components/ProductItem'


const products = [
  {
    name: 'SamSung Galaxy Note 10 Lite',
    type: 'SamSung',
    imageURL: 'https://cdn.fptshop.com.vn/Uploads/Thumbs/2020/1/17/637148518773647407_SS-note10-lite-bac-dd.png',
    price: '9.990.000',
    discountPrice: '13.990.000'
  },
  {
    name: 'iPhone XR 64GB',
    type: 'iPhone',
    imageURL: 'https://cdn.fptshop.com.vn/Uploads/Thumbs/2018/10/12/636749593269651993_iphoneXR-1o.png',
    price: '15.490.000',
    discountPrice: '16.990.000'
  },
  {
    name: 'Oppo A9 2020',
    type: 'Oppo',
    imageURL: 'https://cdn.fptshop.com.vn/Uploads/Thumbs/2020/2/28/637185093475802657_oppo-a9-dd.png',
    price: '5.990.000',
    discountPrice: '3.990.000'
  }
]

function Image(props) {
  return (
    <div>
      <div style={{ backgroundColor: 'red', width: '40%' }}>SALE </div>
      <div style={{ marginTop: '20px' }}>
        <img src={props.imageURL} />
      </div>

    </div>
  )
}

function Header(props) {
  return (
    <div >
      <p style={{ color: 'red' }}>{props.name}</p>
      <h3>{props.type}</h3>
    </div>
  )
}



function Price(props) {
  return (
    <div>
      <span> {props.price} </span>
      <span style={{ textDecoration: 'line-through' }}>{props.discountPrice}</span>
    </div>
  )
}

// function ProductItem(props) {
//   return (
//     <div style={{ display: 'flex' }}>
//       <Image imageURL={props.data.imageURL} />
//       <Header name={props.data.name} type={props.data.type} />
//       <Price price={props.data.price} discountPrice={props.data.discountPrice} />
//     </div>
//   )
// }


function App() {
  return (
    <Layout>
    
      {/* <div className="App">
      <header className="products">
        {
          products.map(item => {
            return <ProductItem data={item}/>
          })
        }
      </header>
    </div> */}
      <Content>
        {
          products.map(p => {
            return <ProductItem {...p}/>
          })
        }
      </Content>
      <SideBar />
    </Layout>

  );
}

export default App;
