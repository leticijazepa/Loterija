const vardi=['Letīcija Zepa','Sabīne Merca','Signe Līce','Linda Atvare','Jurita Stikāne']
const balvas=['Iphone 13','Macbook','Māja','Dzīvoklis','Mašīna']
const naudaKopa=1000000;//kopeja summa
let uzvaretajuSkaits=5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
for (let i=0; i < uzvaretajuSkaits; i++) {
let rand= Math.random()*5;
rand= Math.floor(rand);//noapalo uz leju
let uzvaretajs = vardi[rand];//izvada konsolē
rindas.innerHTML += `
<tr>
<td>${i+1}</td>
<td>${uzvaretajs}</td>
</tr>`
}