


// switch()

async function bubble(){
    
    
    for(var i=0;i<arr.length-1;i++)
    {
        swapped=false;
        for(var j=0;j<arr.length-i-1;j++)
        {
            Mh('yellow',arr[j],j);//Color update
            await sleep()
        // console.log(t)

            if(arr[j]>arr[j+1])
            {
                Mh('red',arr[j],j);//Color update
                await sleep()
                Mh('red',arr[j+1],j+1);//Color update
                await sleep()
                
                // [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            
                // swapheight(j)
                Mh('red',arr[j],j);//Color update
                await sleep()
                Mh('red',arr[j+1],j+1);//Color update
                await sleep()
                
                swapped=true
                // swapped=true
            }
            Mh('blue',arr[j],j);//Color update
            await sleep()
        }
        Mh('green',arr[j],j);//Color update
        await sleep()
        
        // if(!swapped)
        // {
            //         break;
            //     }
            await sleep()
        }
        
        Mh('green',arr[0],0);//Color update
        await sleep()

    // getcolor('green' ,);//Color update
    // return arr
    
    // console.log()
// console.log(arr)
}



// async function swapheight(j){
//     let a=`div${j}`
//     let b=`div${j+1}`
    
//     // console.log(a,b)
//     let e1=document.getElementById(a)
//     let e2=document.getElementById(b)
//     // console.log(e1)
//     let h1=e1.style.height
//     let h2=e2.style.height  
//     e1.style.height=h2
//     // e1.style.backgroundColor='red'
    
//     // e2.style.backgroundColor='blue'
//     e2.style.height=h1
//     // console.log(h1,h2)
//     // return 
// }

d.addEventListener('click',bubble)
