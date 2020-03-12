class Stack {
    constructor() {
       this.first = null;
       this.last = null;
       this.size = 0;
    }

    add(value) {
        const newNode = new Node(value);
        if(this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            const oldHead = this.first;
            this.first = newNode;
            this.first.next = oldHead;
        }
        this.size++;
        return this;
    }

    remove() {
        if(this.size === 0) return null;
        const removedItem = this.first;
        this.first = removedItem.next;
        this.size--;

        if(this.size === 0) {
            this.last = null;
        }
        return removedItem;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let mStack = new Stack();
mStack.add(2);
mStack.add(3);
console.log(mStack);

// Insert O(1)
// remove O(1)
// search/access O(n)