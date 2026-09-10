class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded_string: string = '';
        for(const str of strs){
            encoded_string += `${str.length}#${str}`;
        }
        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decoded_strs: string[] = [];
        let i = 0;
        while(i<str.length){
            let delimiter = str.indexOf('#', i); //5#Hello5#World
            let length = parseInt(str.slice(i, delimiter), 10);
            let startOfStr = delimiter + 1;
            let decodedStr = str.slice(startOfStr, startOfStr+length);
            decoded_strs.push(decodedStr);
            i = startOfStr+length;
        }
        return decoded_strs;
    }
}
