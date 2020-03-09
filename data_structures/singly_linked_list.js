class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Accepts a value
    // Creates a new Node using the passed value
    // If there is no head, set the head and the tail to be the newly created Node
    // Else set the next property of the old node to be the newly created Node
    // Set the tail property of the list to be this newly created Node
    // Increment the length by one

    push(value) {
        let nNode = new Node(value);
        if(!this.head) {
            this.head = nNode;
        }
        if(this.tail) {
            this.tail.next = nNode;
        }
        this.tail = nNode;
        this.length++;
        return this;
    }

    // Traverse the tree and if there is no head, return undefined
    // get to the end ut keep track of the prev item
    // point tail to the prev item
    // make prev.next null
    // decrement length
    // return removed/last item

    pop() {
        let prev = null;
        if(!this.head) {
           return;
        }
        let current = this.head;
        while(current) {
            prev = current;
            current = current.next;

            if(!current.next) {
                this.tail = prev;
                this.length--;
                prev.next = null;

                // if it only had head
                if(this.length === 0) {
                   this.head = null;
                   this.tail = null;
                }
                return current;
            }
        }
    }
    // remove from the beginning
    shift() {
        if(!this.head) return undefined;
        let current =  this.head;
        this.head = this.head.next;
        this.length--;

        if(this.length === 0) {
            this.tail = null;
        }

        return current;
    }

    // insert from the beginning
    unshift(value) {
        const newNode = new Node(value);
        const current = this.head;
        this.head = newNode;
        this.head.next = current;
        this.length++;
        if(!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    get(index) {
        let count = 0;
        let current = this.head;

        if(!this.head) return null;
        if(index < 0 && index > this.length) return null;

        while(count < index) {
            current = current.next;
            count++;
        }

        return current;
    }

    set(index, value) {
        let changeNode = this.get(index);
        if(!changeNode) {
           return false;
        }
        changeNode.value = value;
        return true;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        else if(index === 0) return !!this.unshift(value);
        else if(index === this.length) return !!this.push(value);
        else {
            let prev = this.get(index-1);
            let next = prev.next;
            prev.next = new Node(value);
            prev.next.next = next;
            this.length++;
            return true;
        }
    }

    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        else if(index === 0) return this.shift();
        else if(index === this.length-1) return this.pop();

        let prev = this.get(index-1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;
        this.head = this.tail;
        this.tail = current;

        for(let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return this;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next =  null;
    }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('my');
list.push('dear');
list.push('friends');
list.unshift('Ola!');
console.log(list.reverse());
console.log(list);

