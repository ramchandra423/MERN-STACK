//object literal
let Employee ={
    Name: 'Ramchandra Rout',
    Email:'ece.20bece85@silicon.ac.in',
    Phone_no:'7077141915',
    Basic_salary:100000,
    total_salary:function(){
        let hra ,spa;
        let net;
        hra = 0.15*this.Basic_salary;
        spa = 0.2*this.Basic_salary;
        net = this.Basic_salary+hra+spa;
        if(net<40000){
            tax = 0.1*net;
        }
        else if(net<50000 && net>40000){
            tax =0.15*net;
        }
        else if(net>50000 && net<70000){
            tax = 0.2*net;
        }
        else if(net>70000){
            tax = 0.3*net;
        }
        return net-tax;
    }
}
console.log(Employee);
console.log('Total Salary :'+Employee.total_salary());

