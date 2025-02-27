let multiply = function(x, y){
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2) // executing bind method, this is same as copying the above code and write.
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this, 3) // executing bind method, this is same as copying the above code and write.
multiplyByThree(5)