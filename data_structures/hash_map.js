class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size); // untill what number can the hashed key be/ number of shelves
    }

    _hash(key) {
        // key is the key from key/value pair
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.codePointAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        if(!this.keyMap[index]) return undefined;
        const chainedArr = this.keyMap[index];

        for(let i = 0; i < chainedArr.length; i++) {
            if(chainedArr[i][0] === key) {
                return chainedArr[i][1];
            }
        }

        return undefined;
    }

    // keys(), values ()
}

// Insert O(1), delete O(1), get O(1) by key

let ht = new HashTable(4);
ht.set('flower', 'caxik');
ht.set('girl', 'axchik');
ht.set('boy', 'txa');
console.log(ht);
console.log(ht.get('jnkjn'));