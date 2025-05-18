console.log('------------------- Generic Task 5 -------------------');

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

const RoleDescription: Record<UserRole, string> = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
};

console.log(RoleDescription);