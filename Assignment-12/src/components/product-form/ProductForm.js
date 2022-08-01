import React, { useState } from 'react';
import './product-form.css';
const ProductForm =(props) =>{
    //const [courseName,setCourseName] = useState('');
    //const [coursePrice,setCoursePrice] = useState('');
    //const [courseImage,setCourseImage] = useState('');
    //const [courseBrand,setCourseBrand] = useState('');

    const [formInput,setFormInput] = useState({
        productName:'',
        productPrice:'',
        productImage:'',
        productDesc:'',
    })

    const productNameHandler = (event) =>{
       setFormInput((prevState)=>{
       return{
        ...prevState,
        productName:event.target.value
       }
       })
    }

    const productPriceHandler = (event) =>{
        setFormInput({
            ...formInput,
            productPrice:event.target.value
        });
    }

    const productImageHandler = (event) =>{
        setFormInput({
            ...formInput,
            productImage:event.target.value
        });
    }

    const productBrandHandler = (event) =>{
        setFormInput({
            ...formInput,
            productDesc:event.target.value
        });
    }

    const formSubmitHandler = (event) =>{
        let error =''
        if(formInput.productName ==='' &&  error ===''){
            error='Please Enter Product Name';
            alert(error);
            console.log(error);
        }
        else if(formInput.productPrice ==='' &&  error ===''){
            error='Please Enter Product Price';
            console.log(error);
            alert(error);
        }
        else{
            console.log(formInput);
             props.onProductAdded(formInput);
        }
        event.preventDefault();
    }

    return(
        <div className ="form-container">
            <h1><center>Add New Product</center></h1>
            <form onSubmit={formSubmitHandler}>
                <div className="form-input">
                    <input type="text" placeholder="Product Name" onChange={productNameHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Product Price" onChange={productPriceHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <input type="text" placeholder="Product Image" onChange={productImageHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Product Description" onChange={productBrandHandler}/>
                </div>
                <div className="clearfix"></div>
                <center>
                <div className="bot">
                    <button className='bot-on'>Add Product</button>
                </div>
                </center>
                <div className="clearfix"></div>
            </form>
        </div>
    )
}

export default ProductForm;