class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) return undefined;
        const oldTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }

    shift() {
        if(this.length === 0) return undefined;
        const oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(value) {
        const newNode = new Node(value);
        const oldHead = this.head;
        this.head = newNode;
        if(this.length === 0) {
            this.head.next = this.tail;
            this.tail = newNode;
            this.tail.prev = this.head;
        } else {
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
        this.length++;
        return true;
    }

    get(index) {
        
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

let list = new DoublyLinkedList();
list.push(6);
list.push(2);
list.push(5);
list.unshift(12);
console.log(list);