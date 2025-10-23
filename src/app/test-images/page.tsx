'use client';

import Image from 'next/image';

export default function TestImages() {
  const testImages = [
    '/products_images/product1.jpg',
    '/products_images/product2.jpg',
    '/products_images/product3.jpg',
    '/products_images/product4.jpg',
    '/products_images/product5.jpg',
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      <div className="grid grid-cols-2 gap-4">
        {testImages.map((image, index) => (
          <div key={index} className="border p-4">
            <h3 className="font-semibold mb-2">Image {index + 1}</h3>
            <p className="text-sm text-gray-600 mb-2">Path: {image}</p>
            <div className="relative h-48 w-full">
              <Image
                src={image}
                alt={`Test image ${index + 1}`}
                fill
                className="object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', image, e);
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', image);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

