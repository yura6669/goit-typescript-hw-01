console.log('------------------- Basic Task 1 -------------------');

const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const callback: (a: number) => number = (a) => { return 100 + a };

console.log('Number:', age);
console.log('String:', username);
console.log('Boolean:', toggle);
console.log('Null:', empty);
console.log('Callback:', callback(10));