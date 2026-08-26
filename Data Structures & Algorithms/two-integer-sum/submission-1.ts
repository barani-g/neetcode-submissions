class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        const map = new Map<number, number>();
        for(let i=0; i<nums.length; i++){
            let val = target - nums[i];
            if(map.has(val)){
                return [map.get(val), i];
            }
            map.set(nums[i], i);
        }
        return [-1, -1];
    }
}
