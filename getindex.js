function searchInsertPosition(nums, target) {
    // write code here
    if (nums.length === 0) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
    return nums.length;
}