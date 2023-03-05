/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let n = nums.length;
    if (n === 3) return nums[0] + nums[1] + nums[2];
    nums = nums.sort((a, b) => a - b);
    let closeNum = function (sum, target) {
        return Math.abs(sum - target);
    }
    let result = 0;
    let curCloseNum;
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1;
        let r = n - 1;
        // if (nums[l] > target - nums[i] || nums[r] < Math.floor((target + nums[i]) / 2)) continue;

        if (i === 0) {
            curCloseNum = closeNum(nums[i] + nums[l] + nums[r], target);
            result = nums[i] + nums[l] + nums[r];
        }
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (closeNum(sum, target) < curCloseNum) {
                result = sum;
            }
            if (sum < target) {
                l++;
            };
            if (sum > target) {
                r--;
            };
            if (sum === target) {
                result = sum;
                break
            }
        }

    }
    return result;
};

console.log(threeSumClosest([1, 1, 1, 1], 1))