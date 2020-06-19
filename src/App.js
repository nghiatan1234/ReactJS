import React, {useState} from 'react';
import './App.css';
import Layout from './components/Layout'
import SideBar from './components/Sidebar'
import Content from './components/Content'
import ProductItem from './components/ProductItem';
import dataProduct from './product.json';


function App() {
  
  const [productsInCart, setProductsInCart] = useState([]);
  const [products, setProducts] = useState(dataProduct.data);


  const addProductsInCart = (newProduct) => {
    let productCart = {
      id: newProduct.id,
      name: newProduct.name,
      type: newProduct.type,
      imageURL: newProduct.imageURL,
      price: newProduct.price,
      quantity: 1
    };
    const newProductsInCart = [...productsInCart];
    let index = newProductsInCart.findIndex(pd => pd.id === productCart.id);
    if (index !== -1) {
      newProductsInCart[index].quanity += 1;
    } else {
      newProductsInCart.push(productCart);
    }
    setProductsInCart(newProductsInCart);
  }

  const sortPriceAsc = () => {  
    const sortedProducts = [...products];
    sortedProducts.sort((a,b) => a.price - b.price)
    setProducts(sortedProducts);
  }

  const sortPriceDesc = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a,b) => b.price - a.price)
    setProducts(sortedProducts);
  }
  
  const removeCart = (id) => {
    const itemToBeDeleted = [...productsInCart].filter(item => item.id !== id);
    setProductsInCart(itemToBeDeleted);
  }



  return (
    <Layout productsInCart={productsInCart} onRemoveCart={removeCart}>
      <Content data={productsInCart}>
        {
          products.map(p => {
            return <ProductItem {...p} imageURL={p.image} onAdd={addProductsInCart}/>
          })
        }
      </Content>
      <SideBar onSortAsc={sortPriceAsc} onSortDesc={sortPriceDesc}/>
    </Layout>

  );
}

export default App;
