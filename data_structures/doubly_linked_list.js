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
        if(index < 0 && index >= this.length) return undefined;

        if(index <= this.length / 2) {
            const midLimit = this.length/2;
            let current = this.head;
            for(let i = 1; i < midLimit; i++) {
                current = current.next;
                if(i === index) {
                    return current;
                }
            }
        } else {
            const midStart = this.length/2;
            let current = this.tail;
            for(let i = this.length - 1; i > midStart; i--) {
                console.log(i);
                current = current.prev;
                if(i === index) {
                    return current;
                }
            }
        }
    }

    set(index, value) {
        const item = this.get(index);
        if(!item) return false;
        item.value = value;
        return true;
    }

    insert(index, value) {
        if(index > this.length || index < 0) return false;
        if(index === this.length) return !!this.push(value);
        if(index === 0) return !!this.unshift(value);

        const newNode = new Node(value);
        const currentItem = this.get(index);
        const prevItem = currentItem.prev;

        prevItem.next = newNode;
        newNode.prev = prevItem;
        newNode.next = currentItem;
        currentItem.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        const beforeEl = this.get(index - 1);
        const removed = beforeEl.next;
        const afterEl = removed.next;
        beforeEl.next = afterEl;
        afterEl.prev = beforeEl;
        this.length--;

        return removed;
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
list.push(4);
list.push(7);
list.push(8);
list.unshift(12);
list.get(2);
list.set(2, 12);
list.insert(3, 33);
list.remove(3);

console.log(list.head.next.next);

// Insert O(1)
// remove O(1)
// Access O(n)
// Search O(n) but O(n/2)
