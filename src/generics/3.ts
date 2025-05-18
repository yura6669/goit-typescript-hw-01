console.log('------------------- Generic Task 3 -------------------');

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = { name: 'Yurii' };
const objB = { age: 25 };

const mergedObj = merge(objA, objB);
console.log(mergedObj);