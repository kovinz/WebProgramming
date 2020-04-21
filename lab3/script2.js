// Реализуйте функцию sum

function sum() {
    let result = 0;

    this.forEach(element => {
        result += element
    });

    return result
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));