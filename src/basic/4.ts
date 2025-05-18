console.log('------------------- Basic Task 4 -------------------');

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number { 
    return num1 + num2;
}

function customError(): never { 
    throw new Error('Custom error message!');
}

const num1: number = 10;
const num2: number = 20;
const result: number = calc(num1, num2);
showMessage(result.toString());
customError();