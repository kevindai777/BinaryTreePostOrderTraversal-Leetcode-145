//Java Solution

class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        if (root == null) {
            return new ArrayList<>();
        }
        
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        LinkedList<Integer> result = new LinkedList<>();

        while (!stack.isEmpty()) {
            TreeNode curr = stack.pop();
            result.addFirst(curr.val);
            
            if (curr.left != null) {
                stack.push(curr.left);
            }
            
            if (curr.right != null) {
                stack.push(curr.right);
            }
        }
        
        return result;
    }
}