class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleaned: string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const length = cleaned.length;
        let left = 0;
        let right = length-1;
        while(left < right){
            if(cleaned[left] === cleaned[right]){
                left++;
                right--;
            }else{
                return false;
            }
        }
        return true;
    }
}
