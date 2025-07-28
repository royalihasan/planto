# 🌱 Planto - Plant E-commerce Website

A full-featured plant selling website built with Next.js 15, TypeScript, and Tailwind CSS. Planto offers a comprehensive platform for plant enthusiasts to discover, learn about, and purchase plants online.

## ✨ Features

### 🛒 E-commerce Functionality
- **Product Catalog**: Browse through a curated collection of plants with detailed information
- **Advanced Filtering**: Filter by category, care level, price range, and more
- **Shopping Cart**: Add plants to cart with quantity management
- **Plant Details**: Comprehensive plant information including care instructions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 📚 Educational Content
- **Plant Care Blog**: Expert articles on plant care, propagation, and troubleshooting
- **Care Guides**: Detailed care instructions for each plant
- **Plant Information**: Scientific names, difficulty levels, light requirements
- **Expert Tips**: Professional advice from plant specialists

### 🎨 User Experience
- **Modern UI**: Clean, green-themed design with smooth animations
- **Search Functionality**: Find plants and articles quickly
- **Category Navigation**: Browse plants by type (Indoor, Succulents, Herbs, etc.)
- **Mobile-First**: Responsive design that works on all devices

### 📄 Content Pages
- **Homepage**: Hero section, featured plants, categories, and blog highlights
- **Shop**: Full product catalog with filtering and sorting
- **Blog**: Plant care articles and guides
- **About**: Company story, team, and values
- **Contact**: Contact form, FAQ, and business information
- **Cart**: Shopping cart with order summary

## 🚀 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Image Handling**: Next.js Image component with SVG placeholders

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── cart/              # Shopping cart page
│   ├── contact/           # Contact page
│   ├── shop/              # Product catalog page
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── PlantCard.tsx      # Plant product card
│   └── BlogCard.tsx       # Blog post card
├── contexts/              # React Context providers
│   └── CartContext.tsx    # Shopping cart state management
├── data/                  # Sample data
│   ├── plants.ts          # Plant catalog data
│   └── blog.ts            # Blog posts data
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
└── types/                 # TypeScript type definitions
    └── index.ts           # Shared interfaces
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd planto
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

## 📸 Features Overview

### Homepage
- Hero section with call-to-action buttons
- Featured plants showcase
- Category navigation
- Best sellers section
- Recent blog posts
- Newsletter signup

### Shop Page
- Product grid with filtering options
- Sort by name, price, and rating
- Category and difficulty filters
- Price range slider
- Grid/list view toggle
- Mobile-responsive filters

### Blog Section
- Featured articles layout
- Category-based organization
- Search functionality
- Author and publication date
- Reading time estimates
- Related tags

### Shopping Cart
- Add/remove items
- Quantity management
- Price calculations with tax and shipping
- Free shipping threshold indicator
- Order summary
- Responsive design

### Plant Information
- High-quality plant images
- Scientific names
- Care difficulty levels
- Light requirements
- Watering frequency
- Plant features and benefits
- Customer ratings and reviews

## 🎨 Design System

### Color Palette
- **Primary Green**: #10b981 (Emerald 500)
- **Dark Green**: #065f46 (Emerald 900)
- **Light Green**: #6ee7b7 (Emerald 300)
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body Text**: Regular weight for readability

### Components
- Consistent spacing using Tailwind's spacing scale
- Rounded corners for modern look
- Subtle shadows for depth
- Smooth transitions and hover effects

## 🔧 Customization

### Adding New Plants
1. Edit `src/data/plants.ts`
2. Add plant object with required properties
3. Add corresponding images to `public/images/plants/`

### Adding Blog Posts
1. Edit `src/data/blog.ts`
2. Add blog post object with content
3. Add featured image to `public/images/blog/`

### Styling Changes
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components
- Customize color scheme in Tailwind config

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layouts with collapsible elements
- **Mobile**: Touch-friendly interface with mobile navigation

## 🚀 Deployment

The website is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean App Platform**

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live at `https://your-project.vercel.app`

### Environment Variables
Copy `.env.example` to `.env.local` and update the values for your deployment:
```bash
cp .env.example .env.local
```

### Build Fix Applied
✅ **Fixed Tailwind CSS v4 compatibility issue**
- Updated to Tailwind CSS v3.4.0 for stable builds
- Configured proper PostCSS setup
- Added standard Tailwind configuration
- Build now works on all deployment platforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Features to Add

Future enhancements could include:
- User authentication and accounts
- Wishlist functionality
- Plant care reminders
- Reviews and ratings system
- Inventory management
- Payment processing integration
- Order tracking
- Email notifications

## 📞 Support

For questions or support, please contact:
- Email: hello@planto.com
- Phone: (555) 123-4567

---

Built with ❤️ and 🌱 for plant lovers everywhere!
