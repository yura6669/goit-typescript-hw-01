console.log('------------------- Basic Task 6 -------------------');


const mango: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

interface User {
    name: string;
    age: number;
    email: string;
    address?: {
        city: string;
        country: string;
    }
}

console.log(mango);
console.log(poly);