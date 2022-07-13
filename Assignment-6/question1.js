//user inputed one
//install (npm install prompt-sync)
const prompt =require('prompt-sync')()
function item_detail(p_name,p_price){
    return{
        product_name: p_name,
        product_price: p_price 
    }  
}
function purchase(d_op,i_details,no_products){
    return{
        date_of_purchase: d_op,
        item_detail: i_details,
        no_of_products: no_products
    }
}
function customer(c_name, c_email,c_phone,c_shoped,c_purchase){
    return{
        name: c_name,
        email: c_email,
        phone: c_phone,
        no_of_times_shopped: c_shoped,
        purchase: c_purchase
    }
}
let customer_list=[];
for(let i=0;i<2;i++){
    let name = prompt(`Enter name of Customer :`);
    let email = prompt(`Enter email-id :`);
    let phone = prompt(`Enter phone number :`);
    let no_of_times_shopped = Number(prompt(`Enter number of times ${name} has shopped :`));
    let purchase_list=[];
    for(let j=0;j<no_of_times_shopped;j++){
        let date_of_purchase = prompt(`Enter the date of purchase :`);
        let no_of_products = Number(prompt(`Enter number of products purchased :`));
        let item_list=[];
        for(let k=0;k<no_of_products;k++){
            let product_name = prompt(`Enter product name :`);
            let product_price = Number(prompt(`Enter price of ${product_name} :`));
            item_list.push(item_detail(product_name,product_price));
        }
        purchase_list.push(purchase(date_of_purchase,item_list,no_of_products));
    }
    customer_list.push(customer(name,email,phone,no_of_times_shopped,purchase_list));
}
console.log(customer_list);
console.log(`\nNames of customers who have shopped more than 5 times are: \n`);
for(i=0;i<2;i++){
    if(customer_list[i].no_of_times_shopped>5){
        console.log(customer_list[i].name);
    }
    else{
        console.log('No one ShopEd moRe tHan 5 tiMes')
    }
}
console.log(`The total shopping each customer has done is:\n `);
for(i=0;i<2;i++){
    let sum = 0;
    console.log(`Total shopping Bill for ${customer_list[i].name} is : `);
    for(j=0;j<customer_list[i].no_of_times_shopped;j++){
        for(k=0;k<customer_list[i].purchase[j].no_of_products;k++){
            sum = sum + customer_list[i].purchase[j].item_detail[k].product_price;
        }
    }
    console.log(sum);
}
