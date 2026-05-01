/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let low = 1, high = n;
        while(low <= high) {
            let guessed = low + Math.floor((high - low) / 2);
            const resp = guess(guessed);
            if(resp === 0) return guessed;

            if(resp === -1) {
                high = guessed - 1;
            } else {
                low = guessed + 1;
            }
        }
    }
}
