var div_sizes=[];
var b=document.getElementById('bars')
var c=document.getElementById('a_speed')
var d=document.getElementById('bubbleSort')



var arr=[]

var size=document.getElementById('a_size')
n=size.value
size.addEventListener('input',updateArr)
// var n=size.value


// function emptyarr(){
//     while(!arr.length==0){
//         arr.pop()
//     }
// }


window.onload=updateArr();

function updateArr(){
    n=size.value
    // console.log(n)
    newArray()
}


function newArray(){
// emptyarr(arr)
// console.log(arr)
// b.replaceChildren()
b.innerHTML="";
    
    for(let i=0;i<n;i++){
        
        arr[i]=Math.floor(Math.random() * 0.5*(size.max - size.min)  + 10)
        // console.log(Math.floor(Math.random() * 0.5*(n.max - n.min)  + 10)
    }
    
    showbars()
    // bubble()
}


    function showbars()
    {
    for(let i=0;i<n;i++){
    let a=document.createElement('div')
    // a.style.height=arr[i]*2 + 'px'
    // console.log(a.getAttribute('id'))
    b.appendChild(a)
    margin_size=0.1;
    a.style=" margin:0% " + margin_size + "%; width:" + (100/n-(2*margin_size)) + "%; height:" + (arr[i]) + "%;";
    a.setAttribute('id','div'+i)
   
    a.classList.add("mystyle");
    // margin_size=0.1;
    // a.style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/n-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
}

}




document.getElementById('array').addEventListener('click',newArray)

var speed
var t



c.addEventListener("input",speedA);

function speedA(){
    speed=this.value

 
    switch (parseInt(speed)){
        case 1:
            t=1000;
          
        break;
        case 2:t=550;
        break;
        case 3:t=50;
        break;
        case 4:t=0;
        break;
        case 5:t=-10000;
        break;
    }
    // console.log(t)
  
}


const sleep=()=>{

    return new Promise((resolve)=>{
        // console.log(t)
        setTimeout(() => {
    resolve()
    
},t);
    })}

    function getcolor(colr,i){
    
        let myc=document.getElementsByClassName('mystyle')[i]
        myc.style.backgroundColor=`${colr}`
    
}


function Mh(colr,height,i){
    let myc=document.getElementsByClassName('mystyle')[i]
    myc.style=" margin:0% " + margin_size + "%; width:" + (100/arr.length-(2*margin_size)) + "%; height:" + height + "%; background-color:";
    myc.style.backgroundColor=`${colr}`
}

// b.innerHTML="<h1>hello</h1>"