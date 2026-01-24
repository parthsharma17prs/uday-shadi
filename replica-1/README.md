# Wedding Website Replica 1 - Arjun & Riya

A beautiful, elegant wedding invitation website featuring modern design, smooth animations, and interactive elements.

## 🎨 Features

### Design & Aesthetics
- **Elegant Color Palette**: Cream background (#F8F6F1) with gold accents (#9B7D4B)
- **Premium Typography**: Cormorant Garamond for headings, Montserrat for body text
- **Smooth Animations**: Fade-in effects, parallax scrolling, and hover interactions
- **Fully Responsive**: Beautiful on desktop, tablet, and mobile devices

### Sections
1. **Hero Section** - Stunning welcome with couple's names and wedding details
2. **Love Story** - How the couple met and their journey together
3. **Timeline** - Key relationship milestones (2021, 2024, 2025)
4. **Wedding Events** - Detailed event cards (Haldi, Mehendi, Sangeet, Ceremony, Reception)
5. **Venue & Directions** - Venue details with map integration
6. **Travel Information** - Accommodations, transportation, and airport details
7. **Photo Gallery** - Beautiful image grid showcasing memories
8. **Wishes & Messages** - Interactive guestbook with live message feed
9. **Footer** - Contact information and social media links

### Interactive Features
- ✅ Sticky navigation with scroll effect
- ✅ Smooth scroll to sections
- ✅ Mobile-friendly hamburger menu
- ✅ Working wishes/guestbook form
- ✅ Real-time message feed
- ✅ Floating chat button
- ✅ Confetti animation on form submission
- ✅ Parallax hero section
- ✅ Scroll-triggered fade-in animations
- ✅ Hover effects on all interactive elements
- ✅ Active navigation link highlighting

## 🚀 How to Use

### Open the Website
Simply open `index.html` in your web browser:
```bash
open index.html
```

Or use a local server for better performance:
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx serve
```

Then visit: `http://localhost:8000`

### Customize the Content

1. **Update Names & Date**:
   - Edit `index.html` and search for "Arjun & Riya" and "February 14, 2025"
   - Replace with your names and wedding date

2. **Change Colors**:
   - Edit `styles.css` CSS variables at the top:
   ```css
   :root {
       --bg-cream: #F8F6F1;  /* Background color */
       --gold-accent: #9B7D4B;  /* Primary accent color */
       --dark-brown: #38332E;  /* Text color */
   }
   ```

3. **Add Real Images**:
   - Replace the placeholder `<div class="image-placeholder">` elements
   - Add your photos in an `images/` folder
   - Update the background in CSS or add `<img>` tags

4. **Update Event Details**:
   - Edit the event cards in `index.html`
   - Change dates, times, and descriptions

5. **Venue Information**:
   - Update venue name and address
   - Replace Google Maps link with your actual venue location

## 📁 File Structure

```
replica-1/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
└── README.md       # This file
```

## 🎯 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - No frameworks, pure JS for all interactions
- **Google Fonts** - Cormorant Garamond & Montserrat
- **Font Awesome** - Icon library

## 🌟 Key Highlights

- **No dependencies** - Works offline, no build process needed
- **SEO optimized** - Proper meta tags and semantic HTML
- **Performance optimized** - Lazy loading and intersection observers
- **Accessibility** - Keyboard navigation and proper ARIA labels
- **Cross-browser compatible** - Works on all modern browsers

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Cream | #F8F6F1 | Background |
| Gold | #9B7D4B | Primary accent |
| Light Gold | #C4A574 | Secondary accent |
| Dark Brown | #38332E | Text |
| White | #FFFFFF | Cards & highlights |

## 💡 Tips for Customization

1. **Add More Events**: Copy an event card div and modify the content
2. **Change Fonts**: Replace Google Fonts link in HTML and update CSS variables
3. **Add Animations**: Use the `.fade-in` class on any element for scroll animations
4. **Custom Icons**: Replace Font Awesome icons with your preferred icon set

## 🐛 Troubleshooting

- **Forms not working?** Check browser console for JavaScript errors
- **Styles not loading?** Ensure `styles.css` path is correct
- **Animations not smooth?** Check if browser supports CSS3 animations

## 📄 License

Free to use and modify for personal wedding websites.

## 💝 Credits

Design inspiration from modern wedding website trends.
Built with love for Arjun & Riya's special day! ❤️

---

**Made with ❤️ for your special day**
