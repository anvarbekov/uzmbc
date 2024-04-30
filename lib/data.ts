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
      name: 'Paints || Colors',
      slug: 'white-color',
      category: 'Paints',
      image: '/images/white-color.jpg',
      price: 30,
      brand: 'Hayat',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular paints',
    },
  ],
}

export default data
