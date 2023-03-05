var maxArea = function (height) {
    let n = height.length;
    if (n <= 1) return 0;
    let maxArea = 0;
    let i = 0;
    while (i < n - 1) {
        let j = 1;
        while (j <= n - 1) {
            let area = (j - i) * (Math.min(height[i], height[j]));
            maxArea = Math.max(maxArea, area);
            j++;
        }
        i++;
    }
    return maxArea;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))