const fs = require('fs');
const path = require('path');

const createPlaceholderSVG = (width, height, text, color = '#10b981') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${color}"/>
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="bold">${text}</text>
  </svg>`;
};

const images = [
  // Hero image
  { path: 'public/images/hero-plants.jpg', width: 800, height: 600, text: 'Hero Plants', color: '#059669' },
  
  // Plant images
  { path: 'public/images/plants/monstera.jpg', width: 400, height: 400, text: 'Monstera', color: '#065f46' },
  { path: 'public/images/plants/monstera-2.jpg', width: 400, height: 400, text: 'Monstera 2', color: '#065f46' },
  { path: 'public/images/plants/monstera-3.jpg', width: 400, height: 400, text: 'Monstera 3', color: '#065f46' },
  { path: 'public/images/plants/snake-plant.jpg', width: 400, height: 400, text: 'Snake Plant', color: '#047857' },
  { path: 'public/images/plants/snake-plant-2.jpg', width: 400, height: 400, text: 'Snake Plant 2', color: '#047857' },
  { path: 'public/images/plants/fiddle-leaf-fig.jpg', width: 400, height: 400, text: 'Fiddle Leaf Fig', color: '#059669' },
  { path: 'public/images/plants/fiddle-leaf-fig-2.jpg', width: 400, height: 400, text: 'Fiddle Leaf Fig 2', color: '#059669' },
  { path: 'public/images/plants/jade-plant.jpg', width: 400, height: 400, text: 'Jade Plant', color: '#10b981' },
  { path: 'public/images/plants/jade-plant-2.jpg', width: 400, height: 400, text: 'Jade Plant 2', color: '#10b981' },
  { path: 'public/images/plants/peace-lily.jpg', width: 400, height: 400, text: 'Peace Lily', color: '#34d399' },
  { path: 'public/images/plants/peace-lily-2.jpg', width: 400, height: 400, text: 'Peace Lily 2', color: '#34d399' },
  { path: 'public/images/plants/basil.jpg', width: 400, height: 400, text: 'Basil', color: '#6ee7b7' },
  { path: 'public/images/plants/basil-2.jpg', width: 400, height: 400, text: 'Basil 2', color: '#6ee7b7' },
  { path: 'public/images/plants/rubber-tree.jpg', width: 400, height: 400, text: 'Rubber Tree', color: '#047857' },
  { path: 'public/images/plants/rubber-tree-2.jpg', width: 400, height: 400, text: 'Rubber Tree 2', color: '#047857' },
  { path: 'public/images/plants/aloe-vera.jpg', width: 400, height: 400, text: 'Aloe Vera', color: '#059669' },
  { path: 'public/images/plants/aloe-vera-2.jpg', width: 400, height: 400, text: 'Aloe Vera 2', color: '#059669' },
  
  // Category images
  { path: 'public/images/categories/indoor.jpg', width: 400, height: 400, text: 'Indoor Plants', color: '#065f46' },
  { path: 'public/images/categories/succulents.jpg', width: 400, height: 400, text: 'Succulents', color: '#047857' },
  { path: 'public/images/categories/flowering.jpg', width: 400, height: 400, text: 'Flowering Plants', color: '#059669' },
  { path: 'public/images/categories/herbs.jpg', width: 400, height: 400, text: 'Herbs', color: '#10b981' },
  { path: 'public/images/categories/trees.jpg', width: 400, height: 400, text: 'Trees & Shrubs', color: '#34d399' },
  
  // Blog images
  { path: 'public/images/blog/low-light-plants.jpg', width: 600, height: 400, text: 'Low Light Plants', color: '#065f46' },
  { path: 'public/images/blog/watering-guide.jpg', width: 600, height: 400, text: 'Watering Guide', color: '#047857' },
  { path: 'public/images/blog/herb-garden.jpg', width: 600, height: 400, text: 'Herb Garden', color: '#059669' },
  { path: 'public/images/blog/plant-propagation.jpg', width: 600, height: 400, text: 'Plant Propagation', color: '#10b981' },
  { path: 'public/images/blog/seasonal-care.jpg', width: 600, height: 400, text: 'Seasonal Care', color: '#34d399' },
  { path: 'public/images/blog/air-purifying-plants.jpg', width: 600, height: 400, text: 'Air Purifying Plants', color: '#6ee7b7' },
];

images.forEach(({ path: imagePath, width, height, text, color }) => {
  const dir = path.dirname(imagePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const svg = createPlaceholderSVG(width, height, text, color);
  fs.writeFileSync(imagePath.replace('.jpg', '.svg'), svg);
  console.log(`Created ${imagePath.replace('.jpg', '.svg')}`);
});

console.log('All placeholder images created successfully!');