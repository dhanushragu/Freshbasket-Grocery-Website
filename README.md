# FreshBasket Grocery Website

A responsive grocery shopping website frontend built with **HTML, CSS and JavaScript**. This is the frontend-only version; backend and database integration can be added later using Python Flask and MySQL.

## Features
- Responsive layout for desktop, tablet and mobile
- Product catalogue with category filters
- Product search and sorting by price or name
- Add-to-cart functionality with quantity controls
- Cart subtotal and free-delivery progress indicator
- Wishlist toggle
- Delivery location text update
- Newsletter demo form
- Modern grocery-store landing page and promotional section

## Project structure
```text
freshbasket-grocery-frontend/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Run the website
1. Extract the ZIP file.
2. Open the `freshbasket-grocery-frontend` folder in VS Code.
3. Open `index.html` in a browser, or use the **Live Server** extension in VS Code.

No installation or build step is required.

## Notes
- Product information and cart state are currently stored in JavaScript memory and reset when the page is refreshed.
- Product photos use remote Unsplash image URLs, so an internet connection is needed for those photos.
- Checkout, accounts, order storage, stock management, payment, and newsletter storage are not connected yet. These can be implemented in the backend stage.
