import { Product } from './components/Product'

function App() {
  const product_arr=[
    {
      product_name:"T-shirt",
      product_image:"https://assets.ajio.com/medias/sys_master/root/20210308/z88H/604623b6f997dd5c4007a1c7/-473Wx593H-460841943-white-MODEL7.jpg",
      product_price:"₹799",
      product_brand:"uspa"
    },
    {
      product_name:"Poco F3 Gt",
      product_image:"https://cellphonearea.com/public/images/1627468005.Xiaomi-Poco-F3-GT-1.jpg",
      product_price:"₹33,999",
      product_brand:"xiomi"
    },
    {
      product_name:"Hp Pavilion X360",
      product_image:"https://www.notebookcheck.net/fileadmin/Notebooks/HP/Pavilion_x360_13-u102ng/4zu3_HP_Pavilion__x360_13_u102ng.jpg",
      product_price:"₹58,000",
      product_brand:"Hp"
    }
  ]
  return (
    <div className="App">
      <h1><center>Shopping App</center></h1>
      {product_arr.map((ele)=>{
        return <Product key={ele} {...ele}/>
      })}
    </div>
  );
}

export default App;
