class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map:Record<string, string[]>= {};
        for(const str of strs){
            let sortedKey = str.split('').sort().join();
            if(!map[sortedKey]){
                map[sortedKey] = [];
            }
            map[sortedKey].push(str);
        }
        return Object.values(map);
    }
}
