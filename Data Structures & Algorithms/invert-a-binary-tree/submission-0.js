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
// create a new node for inverted Tree
// left = inverted of right
// right = inverted of left
// return new node
class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root;
        const node = new TreeNode(root.val);
        node.left = this.invertTree(root.right);
        node.right = this.invertTree(root.left);
        return node;
    }
}
