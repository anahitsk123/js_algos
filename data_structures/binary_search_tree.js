class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertNode(value) {
        if(!this.root) {
            this.root = new Node(value);
            return this;
        }
        const insertRecursive = function(node, value) {
            if(value === node.value) {
                console.log('values are equal');
                return;
            } else if(value > node.value) {
                if(!node.right) {
                    node.right = new Node(value);
                } else {
                    insertRecursive(node.right, value);
                }
            } else {
                if(!node.left) {
                    node.left = new Node(value);
                } else {
                    insertRecursive(node.left, value);
                }
            }
        };
        insertRecursive(this.root, value);
    };

    findNode(value) {
        if(!this.root) {
            return false;
        }
        const findRecursive = function (el, value) {
            if(!el || !el.value) {
                return false;
            }
           if(el.value === value) {
               return true
           } else if(value > el.value) {
               return findRecursive(el.right, value);
           } else if(value < el.value) {
               return findRecursive(el.left, value);
           }
           return false;
        };
        return findRecursive(this.root, value);

    }

    breathFirstSearch() {
        let queue = [];
        let visited = [];

        let node = this.root;

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            visited.push(node.value);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return visited;
    }

    depthFirstPreorderSearch() {
        let visited = [];
        let current = this.root;

        function doTraverse(node) {
            visited.push(node.value);
            if(node.left) doTraverse(node.left);
            if(node.right) doTraverse(node.right);
        }
        doTraverse(current);
        return visited;
    }
};

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const myBST =  new BinarySearchTree();
myBST.insertNode(4);
myBST.insertNode(15);
myBST.insertNode(2);
myBST.insertNode(24);
myBST.insertNode(3);
myBST.insertNode(6);

console.log(myBST);
