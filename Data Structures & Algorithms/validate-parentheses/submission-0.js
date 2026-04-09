class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let openArr = ['(', '{', '['];
        let closeArr = [')', '}', ']'];
        let stack = [];
        for(let c of s){
            if(openArr.includes(c)){
                stack.push(c);
            } else if(closeArr.includes(c)){
                if(openArr.indexOf(stack[stack.length - 1]) === closeArr.indexOf(c)){ 
                    stack.pop();
                }else{
                    stack.push(c);
                }
            }
        }
        return stack.length === 0;
    }
}
