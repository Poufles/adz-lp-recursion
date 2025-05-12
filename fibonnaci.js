function fibs(iteration) {
    let prev = 0;
    let curr = 1;
    let next;

    const arr = [];

    for (let index = 0; index < iteration; index++) {
        arr.push(prev);
        next = curr + prev
        prev = curr;
        curr = next;
    };

    return arr;
};

function fibsRec(iteration) {
    if (iteration <= 0) {
        return [];
    };

    if (iteration === 1) {
        return [0];
    }

    const arr = fibsRec(iteration - 1);

    let prev = arr[arr.length - 2] || 0;
    let curr = arr[arr.length - 1] || 1;
    let next;

    next = prev + curr;

    arr.push(next);
    return arr;
};

console.log(fibs(8));
console.log(fibsRec(8));