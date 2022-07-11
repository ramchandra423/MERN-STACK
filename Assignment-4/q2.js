const form=document.getElementsByTagName('form')[0]
form.addEventListener('submit',(event)=>{
    let valid=1;
    let err='';
    const name=document.querySelector("#name").value;
    if(name=='')
    {
        err ="Please enter your name.<br/>";
        valid=0;
    }

    const email=document.querySelector("#email").value;
    if(email=='')
    {
        err +='Please enter your email.<br/>';
        valid=0;
    }

    const phone=document.querySelector("#phone").value;
    if(phone=='')
    {
        err +='Please enter your phone.<br/>';
        valid=0;
    }

    const genderValues=document.getElementsByName('Gender');
    let gender='';
    for(let i=0;i<genderValues.length;i++)
    {
        if(genderValues[i].checked)
        {
            gender=genderValues[i].value;
        }
    }
    if(gender=='')
    {
        err +='Please select your gender.<br/>';
        valid=0;
    }

    const address =document.querySelector("#address").value;
    if(address=='')
    {
        err +='Please enter your address.<br/>';
        valid=0;
    }

    const pincode =document.querySelector("#pincode").value;
    if(pincode=='')
    {
        err +='Please enter your pincode.<br/>';
        valid=0;
    }
    const password =document.querySelector("#password").value;
    if(password=='')
    {
        err +='Please enter your password.<br/>';
        valid=0;
    }
    const confirmPassword =document.querySelector("#c_password").value;
    if(confirmPassword=='')
    {
        err +='Please confirm your password.<br/>';
        valid=0;
    }

    if(password!=confirmPassword)
    {
        err +='Passwords do not match.<br/>';
        valid=0;
    }

    const check=document.querySelector("#i_agree").checked ? document.querySelector("#i_agree").value:'';
    if(check=='')
    {
        err +='Please check the agree box.<br/>';
        valid=0;
    }

    if(valid==0 )
    {
        document.querySelector('#err_msg').style.display="block";
        document.querySelector('#err_msg').innerHTML=err;
        document.querySelector('#err_msg').style.color='red';
    }
    if(valid==1)
    {
        document.querySelector('#err_msg').style.display="block";
        document.querySelector('#err_msg').style.color='green';
        document.querySelector('#err_msg').innerText='Information submitted Successfully!!';
        console.log(`Name-${name}\nEmail-${email}\nPhone-${phone}\nGender-${gender}\nAddress-${address}\nPincode-${pincode}\nPassword-${password}`)
    }

    event.preventDefault();
}) 