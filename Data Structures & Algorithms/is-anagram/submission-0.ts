class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const cleanStr = str => str.replace(/[^a-z0-9]/gi,'').toLowerCase().split('').sort().join('');
        return cleanStr(s) === cleanStr(t);
    }
}
