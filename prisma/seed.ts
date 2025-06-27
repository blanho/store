import { prisma } from '../lib/prisma'; // Adjust the import path as necessary

const products = [
  {
    name: 'MacBook Pro 16"',
    company: 'Apple',
    description:
      'Powerful laptop with M2 Pro chip, perfect for developers and creatives.',
    featured: true,
    price: 249900, // $2499.00 in cents
    image: '/images/macbook-pro.jpg',
    clerkId: 'user_1',
  },
  {
    name: 'Dell XPS 13',
    company: 'Dell',
    description: 'Ultra-portable laptop with stunning InfinityEdge display.',
    featured: false,
    price: 129900, // $1299.00 in cents
    image: '/images/dell-xps13.jpg',
    clerkId: 'user_1',
  },
  {
    name: 'LG UltraWide 34"',
    company: 'LG',
    description:
      '34-inch curved UltraWide monitor with 3440x1440 resolution.',
    featured: true,
    price: 89900, // $899.00 in cents
    image: '/images/lg-ultrawide.jpg',
    clerkId: 'user_2',
  },
  {
    name: 'iPad Pro 12.9"',
    company: 'Apple',
    description:
      'The ultimate iPad experience with M2 chip and Liquid Retina XDR display.',
    featured: true,
    price: 109900, // $1099.00 in cents
    image: '/images/ipad-pro.jpg',
    clerkId: 'user_2',
  },
  {
    name: 'AirPods Pro',
    company: 'Apple',
    description:
      'Active Noise Cancellation and Spatial Audio for immersive sound.',
    featured: false,
    price: 24900, // $249.00 in cents
    image: '/images/airpods-pro.jpg',
    clerkId: 'user_1',
  },
];

async function main() {
  console.log('Starting seed...');

  // Clear existing data
  await prisma.product.deleteMany();
  console.log('Cleared existing products');

  // Create new products
  const result = await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });

  console.log(`Created ${result.count} products`);
}

main()
  .then(() => {
    console.log('Seed completed successfully');
  })
  .catch(e => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
