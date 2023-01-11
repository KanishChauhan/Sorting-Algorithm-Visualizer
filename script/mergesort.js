
let meg=document.getElementById('mergesort')
meg.addEventListener('click',Merge)

async function Merge()
{
    c_delay=0;

    merge_partition(0,arr.length-1);

    // enable_buttons();
}

async function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=arr[q++];
            Mh("red",arr[q-1],q-1);//Color update
            await sleep()
            
            
        }
        else if(q>end)
        {
            Arr[k++]=arr[p++];
            Mh("red",arr[p-1],p-1);//Color update
            await sleep()
            // div_update(divs[p-1],arr[p-1],"red");//Color update
        }
        else if(arr[p]<arr[q])
        {
            Arr[k++]=arr[p++];
            Mh("red",arr[p-1],p-1);//Color update
            await sleep()
            // div_update(divs[p-1],arr[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=arr[q++];
            Mh("red",arr[q-1],q-1);//Color update
            await sleep()
            // div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
    }
    
    for(var t=0;t<k;t++)
    {
        arr[start++]=Arr[t];
        Mh("green",arr[start-1],start-1);//Color update
        await sleep()
        await sleep()
        // div_update(divs[start-1],arr[start-1],"green");//Color update
    }
}

async function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        // div_update(divs[mid],div_sizes[mid],"yellow");//Color update
        Mh("yellow",arr[mid],mid);//Color update
        await sleep()

       await merge_partition(start,mid);
       await merge_partition(mid+1,end);

       await merge_sort(start,mid,end);
    }
}

