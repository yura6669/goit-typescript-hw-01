console.log('------------------- Generic Task 4 -------------------');

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

let user: User = {
    name: "",
    surname: "",
    email: "",
    password: ""
};

function createOrUpdateUser<T extends Partial<User>>(initialValues: T) { 
    user = { ...user, ...initialValues };
}

const createInitialValues = {
    name: 'Yurii',
    surname: 'Shyian',
    email: 'email@gmail.com',
    password: 'password',
};

createOrUpdateUser(createInitialValues);
console.log('user: ', user, ' - user created!')

const updateInitialValues = {
    email: 'user@mail.com',
    password: 'password123',
}

createOrUpdateUser(updateInitialValues);

console.log('user: ', user, ' - user updated!')



