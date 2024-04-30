import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('admin001'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Coatings',
      slug: 'coatings-1',
      category: 'Paints',
      image: '/images/paint-1.png',
      price: 15,
      brand: 'Coatings',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular paints',
    },
  ],
}

export default data
