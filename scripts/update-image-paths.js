const fs = require('fs');

// Update plants data
let plantsData = fs.readFileSync('src/data/plants.ts', 'utf8');
plantsData = plantsData.replace(/\.jpg/g, '.svg');
fs.writeFileSync('src/data/plants.ts', plantsData);

// Update blog data
let blogData = fs.readFileSync('src/data/blog.ts', 'utf8');
blogData = blogData.replace(/\.jpg/g, '.svg');
fs.writeFileSync('src/data/blog.ts', blogData);

// Update homepage
let homePage = fs.readFileSync('src/app/page.tsx', 'utf8');
homePage = homePage.replace(/hero-plants\.jpg/g, 'hero-plants.svg');
fs.writeFileSync('src/app/page.tsx', homePage);

console.log('Updated all image paths to use SVG files!');