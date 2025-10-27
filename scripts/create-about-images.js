const fs = require('fs');
const path = require('path');

const createPlaceholderSVG = (width, height, text, color = '#10b981') => {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${color}"/>
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="bold">${text}</text>
  </svg>`;
};

const images = [
  // About page images
  { path: 'public/images/about/story.svg', width: 600, height: 400, text: 'Our Story', color: '#059669' },
  
  // Team images
  { path: 'public/images/team/sarah.svg', width: 300, height: 300, text: 'Sarah Green', color: '#065f46' },
  { path: 'public/images/team/mike.svg', width: 300, height: 300, text: 'Mike Johnson', color: '#047857' },
  { path: 'public/images/team/emma.svg', width: 300, height: 300, text: 'Emma Wilson', color: '#059669' },
  { path: 'public/images/team/david.svg', width: 300, height: 300, text: 'David Chen', color: '#10b981' },
];

images.forEach(({ path: imagePath, width, height, text, color }) => {
  const dir = path.dirname(imagePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const svg = createPlaceholderSVG(width, height, text, color);
  fs.writeFileSync(imagePath, svg);
  console.log(`Created ${imagePath}`);
});

console.log('About page images created successfully!');