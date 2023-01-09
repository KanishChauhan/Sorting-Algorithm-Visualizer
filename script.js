var div_sizes=[];
let b=document.getElementById('bars')

const arr=[]
newArray(arr)


function emptyarr(){
    while(!arr.length==0){
        arr.pop()
    }
}
function newArray(){
emptyarr(arr)
// console.log(arr)

b.replaceChildren()
    n=100
    for(let i=0;i<n;i++){
        
        arr.push(Math.floor(Math.random()*101))
    }
    // console.log(arr)
    
    showbars(arr)
    // bubble()
}


    function showbars()
    {
        
    for(let i=0;i<n;i++){
    let a=document.createElement('div')
    a.style.height=arr[i]*2 + 'px'
    a.setAttribute('id','div'+i)
    // console.log(a.getAttribute('id'))
    a.style.width='20px'
    a.classList.add("mystyle");
    b.appendChild(a)
    // margin_size=0.1;
    // a.style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/n-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
}

}

const sleep=(time)=>{
    return new Promise((resolve)=>{setTimeout(resolve,time)})
}

async function bubble(){
    // let b=document.getElementById(' let b=document.getElementById('bars')')
    // var swapped;
    // console.log(arr)
    
    for(let i=0;i<arr.length;i++)
    {
        swapped=false;
    for(let j=0;j<arr.length-1;j++)
    {
            // await sleep()
            if(arr[j]>arr[j+1])
            {

                // [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swap(arr,j)
                swapheight(j)
                swapped=true
                // swapped=true
            }
        }
        
        if(!swapped)
        {
            break;
        }
    }
    // return arr
    
    // console.log()
console.log(arr)
}
// newArray(arr)





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
    return 
}


document.getElementById('array').addEventListener('click',newArray)
document.getElementById('bubbleSort').addEventListener('click',bubble)




// b.innerHTML="<h1>hello</h1>"