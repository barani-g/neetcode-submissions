class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const map:Record<string,string> = {
            '}' : '{',
            ')' : '(',
            ']' : '['
        };
        for(const char of s){
            if(char in map){
                let pop = stack.pop();
                if(pop !== map[char]){
                    return false;
                }
            }else{
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
