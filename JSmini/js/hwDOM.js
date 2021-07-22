//class 선언으로 배열에 객체를 저장해서 테이블로 출력
class Person{
    constructor(name, addr, phone){     //생성자
        this.name=name;
        this.addr=addr;
        this.phone=phone;
    }
}
let personarr=[];
//추가하기 버튼을 눌렀을 때 이벤트
document.getElementById('send').onclick=function(){
    let name=document.getElementById('name');
    let addr=document.getElementById('addr');
    let phone=document.getElementById('phone');

    let namevalue=name.value;
    let addrvalue=addr.value;
    let phonevalue=phone.value;

    personarr.push(new Person(namevalue, addrvalue, phonevalue));

    //초기값
    name.value='';
    addr.value='';
    phone.value='';
}
//전체보기 버튼을 눌렀을 때 이벤트
document.getElementById('print').onclick=function(){
    //thead 
    let thead=document.createElement('thead');
    let tr1=document.createElement('tr');
    let th1=document.createElement('th');
    let th2=document.createElement('th');
    let th3=document.createElement('th');

    let txt1=document.createTextNode('이름');
    let txt2=document.createTextNode('주소');
    let txt3=document.createTextNode('전화번호');

    thead.append(tr1);
    tr1.append(th1);
    tr1.append(th2);
    tr1.append(th3);
    th1.append(txt1);
    th2.append(txt2);
    th3.append(txt3);

    document.getElementById('result').append(thead);

    for (let i = 0; i < personarr.length; i++) {

            //tbody
        let tbody=document.createElement('tbody');
        let tr2=document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');

        let txt1=document.createTextNode(personarr[i].name);
        let txt2=document.createTextNode(personarr[i].name);
        let txt3=document.createTextNode(personarr[i].name);

        tbody.append(tr2);
        tr2.append(td1);
        tr2.append(td2);
        tr2.append(td3);
        td1.append(txt1);
        td2.append(txt2);
        td3.append(txt3);

        document.getElementById('result').append(tbody);
    }
    
}