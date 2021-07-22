class Man{
    constructor(name, addr, phone) {
        this.name=name;
        this.addr=addr;
        this.phone=phone;
    }
}
let parr=[];
document.getElementById('send').onclick=function(){
    
    let name=document.getElementById('name');
    let addr=document.getElementById('addr');
    let phone=document.getElementById('phone');

    let namevalue=name.value;
    let addrvalue=addr.value;
    let phonevalue=phone.value;

    parr.push(new Man(namevalue, addrvalue, phonevalue));

    //초기값
    name.value='';
    addr.value='';
    phone.value='';
}
document.getElementById('prt').onclick=function(){
    let result="<thead><tr>"+"<th>이름</th>"+"<th>주소</th>"+"<th>전화번호</th>"+"</tr></thead>";
    for(let i=0; i<parr.length; i++){
        result+="<tbody><tr> <td>"+parr[i].name+"</td>";
        result+="<td>"+parr[i].addr+"</td>";
        result+="<td>"+parr[i].phone+"</td> </tr></tbody>";
    }
    document.getElementById('result').innerHTML=result;
}