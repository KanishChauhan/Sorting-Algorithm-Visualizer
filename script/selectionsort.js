
let sel=document.getElementById('selectionsort')
sel.addEventListener('click',selectionSort)

async function selectionSort(array){
    
    for(i=0;i<arr.length;i++){
        getcolor('red',i)
        let min =i
        await sleep()
        for(let j=i+1;j<arr.length;j++)
        {
            getcolor('yellow',j)
            await sleep()
            
            if(arr[j]<arr[min]){
                
                if(min!=i)
                {
                   getcolor("blue",min);//Color update
                }
                min = j
                getcolor('red',j)
                await sleep()
                
                
            }
            else{
                getcolor('blue',j);//Color update
                await sleep()
            }
        }
        if(i!==min){
            
            swapsel(min,i)
            swapheightSel(i,min)
            getcolor('red',min);//Color update
            getcolor('red',i);//Color update
            getcolor('blue',min);//Color update


        
      }
      getcolor('green',i)
    }
    getcolor('green',i)


    // for(let i=0;i<arr.length;i++){
        
    //     let myc=document.getElementsByClassName('mystyle')[i]
    //     myc.style.backgroundColor='blue'
    // }
    return array  
    }

    
function swapsel(min,i){
    let temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
    return i,min
}

function swapheightSel(i,min){
    let a=`div${i}`
    let b=`div${min}`
    
    // console.log(a,b)
    let e1=document.getElementById(a)
    let e2=document.getElementById(b)
    // console.log(e1)
    let h1=e1.style.height
    let h2=e2.style.height  
    e1.style.height=h2
    // e1.style.backgroundColor='gray'
    // e1.style.backgroundColor='red'
    
    // e2.style.backgroundColor='red'
    e2.style.height=h1
    // e1.style.backgroundColor='gray'
    // console.log(h1,h2)
    // return 
}


