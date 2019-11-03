function getSecondLargest(nums) {
    // Complete the function
    var first = -Infinity;
    var second = -Infinity;
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] > first)
        {
            second = first;
            first = nums[i];
        }else if (nums[i] < first && nums[i] > second)
        {
            second = nums[i];
        }
    }
     return second;
}

