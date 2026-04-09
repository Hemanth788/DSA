/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    maxDepthHelper(root, depth){
        if(!root) return depth;
        if(root.left === null && root.right === null) return depth + 1;
        else return Math.max(this.maxDepthHelper(root.left, depth + 1), this.maxDepthHelper(root.right, depth + 1));
    }

    maxDepth(root) {
        return this.maxDepthHelper(root, 0);
    }
}
