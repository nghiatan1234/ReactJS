import React, { useState, useEffect } from "react";
import "./Main.css";
import Layout from "../../components/Layout";
import Content from "../../components/Content";
import ProductItem from "../../components/ProductItem";
import SideBar from "../../components/Sidebar";
import dataProduct from '../../product.json';
import { useBgMode } from "../../hooks/useBgMode";
import { getProductAction } from './Main.action';
import { connect } from 'react-redux';

function Main(props) {
  const [productsInCart, setProductsInCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useBgMode();

  useEffect(() => {
    if(props.productsListA) {
      setProducts(props.productsListA)
    }
  }, [props.productsListA])

  useEffect(() => {
    getProductAction()
  }, [getProductAction])

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
    sortedProducts.sort((product1, product2) => {
      return product1.name.toLowerCase().localeCompare(product2.name.toLowerCase());
    });
    setProducts(sortedProducts);
  }

  const sortPriceDesc = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((product1, product2) => {
      return product2.name
        .toLowerCase()
        .localeCompare(product1.name.toLowerCase());
    });
    setProducts(sortedProducts);
  }

  const removeCart = (id) => {
    const itemToBeDeleted = [...productsInCart].filter(item => item.id !== id);
    setProductsInCart(itemToBeDeleted);
  }

  const sortHighLow = () => {
    let newProducts = [...products];
    newProducts.sort((product1, product2) => product2.price - product1.price);

    setProducts(newProducts);
  }

  const sortLowHigh = () => {
    let newProducts = [...products];
    newProducts.sort((product1, product2) => {
      return product1.price - product2.price;
    });

    setProducts(newProducts);
  }

  const onSearchProduct = (value) => {
    const productSearch = [...products];
    const newProduct = productSearch.filter(item => {
      return item.name.includes(value);
    });

    setProducts(newProduct);
  }


  return (
    <Layout productsInCart={productsInCart} onRemoveCart={removeCart}>
      <main style={{ backgroundColor: value }}>
        <section className="shop-area pt-150 pb-100">
          <div className="container">
            <div className="row">
              <Content count={products.length}>
                {
                  products.map(p => {
                    return <ProductItem {...p} imageURL={p.imgUrl} onAdd={addProductsInCart} />
                  })
                }
              </Content>
              <SideBar onSortAsc={sortPriceAsc} onSortDesc={sortPriceDesc} onSearchProduct={onSearchProduct}
               sortHighLow={sortHighLow} sortLowHigh={sortLowHigh}/>
            </div>
          </div>
        </section>
      </main>

    </Layout>

  );
}

const mapStateToProps = (state) => {
  return {
    productsListA: state.productsReducer.products,
    loading: state.productsReducer.loading
  }
}


// const mapDispatchToProps = {
//   getProducts: getProductAction
// }


export default connect(mapStateToProps)(Main);