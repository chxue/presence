export interface User {
  name: string;
  username: string;
  imageUrl: string;
}

export function generateUsers(num: number): User[] {
  const users: User[] = [];

  for (let i = 0; i < num; i++) {
    const name = generateRandomName();
    const username = `${name.replace(/\s/g, "").toLowerCase()}${i + 1}`;
    const imageUrl = `https://picsum.photos/150/150?random=${i + 1}`;

    users.push({ name, username, imageUrl });
  }

  return users;
}

function generateRandomName(): string {
  const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Frank",
    "Grace",
    "Henry",
    "Isabelle",
    "Jacob",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Lee",
    "Davis",
    "Miller",
    "Wilson",
    "Garcia",
    "Anderson",
    "Taylor",
    "Jackson",
    "Martin",
  ];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}
