class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const result: number[] = [];
        result[0] = 1;
        for(let i=1; i<n; i++){
            result[i] = result[i-1] * nums[i-1];
        }
        let suffixVal = 1;
        for(let i=n-1; i>=0; i--){
            result[i] *= suffixVal;
            suffixVal *= nums[i];
        }
        return result;
    }
}
