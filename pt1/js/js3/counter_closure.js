/* let get_val, set_val;

(function () {
    let val;

    get_val = function () {
        return val;
    };

    set_val = function (new_val) {
        val = new_val;
    };
})();

console.log(get_val()); // undefined
set_val(5);
console.log(get_val()); // 5
 */

function make_counter(step=1) {
    let call = 0;

    return () => {
        return call += step;
    };
}

const counter = make_counter(2);
const increment = make_counter();

console.log(counter()); // 2
console.log(counter()); // 4
console.log('Call ' + increment()); // 1
console.log(counter()); // 6
console.log('Call ' + increment()); // 2
console.log('Call ' + increment()); // 3
console.log('Call ' + increment()); // 4
console.log(counter()); // 8