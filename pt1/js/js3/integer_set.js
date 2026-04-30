class IntegerSet {
    constructor(n_elems) {
        this.arr = new Array(n_elems + 1).fill(false);
    }

    insert(...elems) {
        elems.forEach(e => {
            e >= 0 && e < this.arr.length && (this.arr[e] = true);
        });
    }

    remove(...elems) {
        elems.forEach(e => {
            e >= 0 && e < this.arr.length && (this.arr[e] = false);
        });
    }

    contains(e) {
        return e >= 0 && e < this.arr.length && this.arr[e];
    }

    union(that) {
        let minLen = Math.min(this.arr.length, that.arr.length);
        let maxLen = Math.max(this.arr.length, that.arr.length);
        const res = new IntegerSet(maxLen - 1);
        for (let i = 0; i < minLen; i++) {
            (this.arr[i] || that.arr[i]) && res.insert(i);
        }
        let arr = maxLen === this.arr.length ? this.arr : that.arr;
        for (let i = minLen; i < arr.length; i++) {
            arr[i] && res.insert(i);
        }
        return res;
    }

    intersection(that) {
        let minLen = Math.min(this.arr.length, that.arr.length);
        const res = new IntegerSet(minLen - 1);
        for (let i = 0; i < minLen; i++) {
            this.arr[i] && that.arr[i] && res.insert(i);
        }
        return res;
    }

    difference(that) {
        let minLen = Math.min(this.arr.length, that.arr.length);
        const res = new IntegerSet(minLen - 1);
        for (let i = 0; i < minLen; i++) {
            this.arr[i] && !that.arr[i] && res.insert(i);
        }
        return res;
    }

    toStr() {
        const string = (
            this.arr
            .map((v, i) => v ? i : null)
            .filter(v => v !== null)
            .join(', ')
        );
        return string ? `{ ${string} }` : '{}';
    }
}

const s1 = new IntegerSet(10);
s1.insert(1, 3, 5, 7, 9);
console.log(s1.toStr()); // { 1, 3, 5, 7, 9 }

const s2 = new IntegerSet(10);
s2.insert(0, 2, 4, 6, 8);
console.log(s2.toStr()); // { 0, 2, 4, 6, 8 }

const unionSet = s1.union(s2);
console.log(unionSet.toStr()); // { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }

const intersectionSet = s1.intersection(s2);
console.log(intersectionSet.toStr()); // {}

const differenceSet = s1.difference(s2);
console.log(differenceSet.toStr()); // { 1, 3, 5, 7, 9 }