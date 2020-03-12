class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // First in, First out
    //add  to the end and remove from the beginning
    add(value) {
        const newNode = new Node(value);
        if(this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const lastItem = this.last;
            this.last = newNode;
            lastItem.next = this.last;
        }

        return ++this.size;

    }

    remove() {
        if(this.size === 0) return null;
        const removed = this.first;

        this.first = removed.next;
        this.size--;

        if(this.size === 0) {
            this.last = null;
        }
        return removed;
    }
}

class Node {
    constructor(value) {
        this.value =  value;
        this.next = null;
    }
}

const myQ = new Queue();
myQ.add(1);
myQ.add(2);
myQ.add(3);
console.log(myQ);

// Insert/remove O(1)
// Access/search O(n)
