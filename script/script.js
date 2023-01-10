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


function swap(arr,j){
    let temp=arr[j]
    arr[j]=arr[j+1]
    arr[j+1]=temp
    return j
}

function swapheight(j){
    let a=`div${j}`
    let b=`div${j+1}`
    
    // console.log(a,b)
    let e1=document.getElementById(a)
    let e2=document.getElementById(b)
    // console.log(e1)
    let h1=e1.style.height
    let h2=e2.style.height  
    e1.style.height=h2
    // e1.style.backgroundColor='red'
    
    // e2.style.backgroundColor='blue'
    e2.style.height=h1
    // console.log(h1,h2)
    // return 
}


document.getElementById('array').addEventListener('click',newArray)





// b.innerHTML="<h1>hello</h1>"