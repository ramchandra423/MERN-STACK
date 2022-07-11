const table =document.getElementsByTagName('table')[0];

table.tHead.rows[0].style.backgroundColor ='red'
table.tBodies[0].rows[0].style.backgroundColor ='blue'
table.tBodies[0].rows[1].style.backgroundColor ='green'
table.tBodies[0].rows[2].style.backgroundColor ='aqua'
table.tBodies[0].rows[3].style.backgroundColor ='yellow'

console.log('The value of even cells are');
for(let i=0;i<5;i++)
{
    for(let j=0;j<5;j++)
    {
        if((i+j)%2!=0)
        {
            document.write(`Row ${i} col ${j} = ${table.tBodies[0].rows[i].cells[j].innerText}<br/>`);
        }
        
    }
}