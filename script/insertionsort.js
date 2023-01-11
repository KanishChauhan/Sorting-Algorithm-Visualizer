
let ins=document.getElementById('insertionsort')
ins.addEventListener('click',Insertion)

async function Insertion()
{
    c_delay=0;

    for(var j=0;j<arr.length;j++)
    {
        // div_update(divs[j],div_sizes[j],"yellow");//Color update
        Mh("yellow",arr[j],j);//Color update
            await sleep()

        var key= arr[j];
        var i=j-1;
        while(i>=0 && arr[i]>key)
        {
            Mh("red",arr[i],i);//Color update
            await sleep()
            
            Mh("red",arr[i+1],i+1);//Color update
            await sleep();//Color update

            arr[i+1]=arr[i];

            Mh("red",arr[i],i);//Color update
            await sleep()
            
            Mh("red",arr[i+1],i+1);//Color update
            await sleep()
    
            Mh("blue",arr[i],i);//Color update
            await sleep();//Color update
            if(i==(j-1))
            {
                Mh("yellow",arr[i+1],i+1);//Color update
                await sleep();//Color update
            }
            else
            {
                Mh("blue",arr[i+1],i+1);//Color update
                await sleep()
            }
            i-=1;
        }
        arr[i+1]=key;

        for(var t=0;t<j;t++)
        {
            Mh("green",arr[t],t);//Color update
            await sleep()
            
            
        }
    }
    // div_update(divs[j-1],div_sizes[j-1],"green");//Color update
    Mh("green",arr[j-1],j);//Color update
    await sleep()

    // enable_buttons();
}