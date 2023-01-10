
var speed
var t

d.addEventListener('click',bubble)

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
        console.log(t)
        setTimeout(() => {
    resolve()
    
},t);
    })}

// switch()

async function bubble(){
    
    
    for(let i=0;i<arr.length;i++)
    {
        swapped=false;
        for(let j=0;j<arr.length-1;j++)
        {
            await sleep()
        console.log(t)

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
// console.log(arr)
}

