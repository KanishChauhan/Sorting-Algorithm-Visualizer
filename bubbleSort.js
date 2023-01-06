//NOT AN OPTIMIZED SOLUTION. TIME_COMPLEXITY-O(n^2)
// import {} from './getPersonalDetails.js'
nums=[234, 43, 55, 63,  5, 6, 235, 547]


function bubble(){
    let b=document.getElementById(' let b=document.getElementById('bars')')

    var swapped;
    for(let i=0;i<nums.length;i++)
    {swapped=false;
        for(let j=0;j<nums.length;j++)
        {
            if(nums[j]>nums[j+1])
            {
                let temp=nums[j]
                nums[j]=nums[j+1]
                nums[j+1]=temp
                swapped=true
            }
        }
        
        if(swapped==false)
        {
            break;
        }
    }
}



console.log(nums)