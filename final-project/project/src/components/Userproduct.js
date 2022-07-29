import axios from 'axios';
import React from 'react';
import './Userproduct.css'; 

export const Userproduct = (props)=>{
    const deleteHandler=()=>{
        deleteData();
    }
    const deleteData = async() =>{
        const message = await axios.delete(`http://localhost:4001/delete/${props.product_name}`,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log('deleted data',message);
        let Item = [...ProductCtx.products];
        let items = ProductCtx.products;
        items = items.filter((item)=>item.itemname !== props.itemname);
        ProductCtx.setItems(items);
    }
    return(
        <div>
            <div className='product_container'>
                <div className='product_name'>{props.name}</div>
                <div className='product_image'>
                    <img src={props.image}/>
                </div>
                <div className='product_price'>{props.price}</div>
                <div className='product_description'>{props.desc}</div>
                <div className='button'>
                    <button className='delete' onClick={editHandler}>Delete</button>
                    <button className='edit'onClick={deleteHandler}>Edit</button>
                </div>
            </div>
        </div>
    );
}