
// Simple User type for mock/demo purposes
type User = {
  id: string;
  name: string;
  email: string;
};

export async function requireAdminUser(): Promise<User> {
  // Placeholder: Simulate fetching an admin user
  return {
    id: 'admin-id',
    name: 'Admin',
    email: 'admin@example.com',
  };
}

export async function requireAuthenticatedUser(): Promise<User> {
  // Placeholder: Simulate fetching an authenticated user
  return {
    id: 'user-id',
    name: 'User',
    email: 'user@example.com',
  };
}
