function fibs(iteration) {
    let prev= 0;
    let curr = 1;
    let next;

    const arr = [];

    for(let index = 0; index < iteration; index++) {
        arr.push(prev);
        next = curr + prev
        prev= curr;
        curr = next;
    };

    return arr;
};

console.log(fibs(8))