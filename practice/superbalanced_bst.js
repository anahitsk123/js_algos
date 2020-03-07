class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left  = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

function isBalanced(treeRoot) {

    // Determine if the tree is superbalanced
    let maxDepth = 1;
    let minDepth = 1;
    let count = 0;
    let data = [];

    let current = treeRoot;

    function doTraverse(node, num) {
        if(node.left) doTraverse(node.left, num+1);
        if(node.right) doTraverse(node.right, num+1);

        if(!node.left && !node.right) {
            data.push(num); // in case tree is long but has one leaf
            minDepth = Math.min(minDepth, num);
            maxDepth = Math.max(maxDepth, num);
        }
    }

    doTraverse(current, count);

    return maxDepth - minDepth <= 1 || data.length <= 1;
}
