import {useState} from 'react';
import ProductForm from './components/product-form/ProductForm';
import { Product } from './components/shop/Product';
//import { StateExample } from './components/StateExample'
function App() {
  const [products,setProducts]=useState([
    {
      product_name:"T-shirt",
      product_image:"https://d29qfl7sjqf9f5.cloudfront.net/uploads/image/image/429000/medium_photo.jpeg",
      product_price:"₹799",
      product_description:"uspa"
    },
    {
      product_name:"Poco F3 Gt",
      product_image:"https://dealntechcdn.b-cdn.net/wp-content/uploads/2021/07/Poco-F3-GT-460x460.jpg",
      product_price:"₹33,999",
      product_description:"xiomi"
    },
    {
      product_name:"Hp Pavilion X360",
      product_image:"https://connexstore.co.za/9604-medium_default/hp-pavilion-x360-2-in-1-convertible-14-hd-touch-screen-laptop-10th-gen-intel-core-i3-1005g1-8gb-ram-128gb.jpg",
      product_price:"₹58,000",
      product_description:"Hp"
    }
  ]);
  const addnewProductHandler=(product)=>{
    console.log('Product is Added');
    const productObj ={
      product_name:product.productName,
      product_price:product.productPrice,
      product_image:product.productImage,
      product_description:product.productDesc
    }
    setProducts([...products,productObj]);
  }
  return (
    <div className="App">
      <ProductForm onProductAdded ={addnewProductHandler}/>
      <h1><center>Shopping App</center></h1>
      {products.map((product,index)=>
      <Product key={index} pname={product.product_name}
      pprice={product.product_price}
      pimage={product.product_image}
      desc={product.product_description}/>
      )}
    </div>
  );
}

export default App;
