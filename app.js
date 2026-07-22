/**
 * SHIKHAR CAKES - Luxury Indian Bakery E-Commerce Application Engine
 * Pure Vanilla JavaScript with State Management & WhatsApp Integration
 */

// Product Database (100% Eggless Bakery Products)
const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Royal Belgian Chocolate Truffle',
    category: 'Birthday Cakes',
    price: 649,
    rating: 4.9,
    reviewsCount: 128,
    image: 'images/royal_chocolate_cake.jpg',
    description: 'Rich, moist Belgian dark chocolate cake layered with silky chocolate ganache and decorated with gold leaf flakes. 100% Eggless.',
    flavors: ['Belgian Dark Chocolate', 'Chocolate Hazelnut', 'Triple Chocolate Truffle'],
    ingredients: ['Belgian Cocoa', 'Dairy Cream', 'Organic Wheat Flour', 'Pure Butter', 'Vanilla Bean Extract'],
    isBestSeller: true,
    isEggless: true
  },
  {
    id: 'prod-2',
    name: 'Classic Red Velvet Velvet Romance',
    category: 'Anniversary Cakes',
    price: 799,
    rating: 4.95,
    reviewsCount: 94,
    image: 'images/red_velvet_cake.jpg',
    description: 'Luxurious red velvet sponge layers infused with pure cocoa, paired with cream cheese frosting and fresh edible rose petals.',
    flavors: ['Classic Cream Cheese', 'Red Velvet Berry', 'White Chocolate Red Velvet'],
    ingredients: ['Cocoa Powder', 'Cream Cheese', 'Fresh Strawberries', 'Pure Butter', 'Natural Beet Extract'],
    isBestSeller: true,
    isEggless: true
  },
  {
    id: 'prod-3',
    name: 'Grand Golden 3-Tier Custom Cake',
    category: 'Custom Cakes',
    price: 2499,
    rating: 5.0,
    reviewsCount: 46,
    image: 'images/custom_tiered_cake.jpg',
    description: 'Showstopping 3-tiered custom celebration cake with pastel marbling, gold delicate piping, and hand-sculpted sugar flowers.',
    flavors: ['Swiss Chocolate Truffle', 'Vanilla Buttercream', 'Red Velvet & Berry'],
    ingredients: ['Imported Fondant', 'Dairy Cream', 'Edible 24k Gold Accents', 'Vanilla Bean'],
    isBestSeller: true,
    isEggless: true
  },
  {
    id: 'prod-4',
    name: 'Espresso Caramel Gentleman Cake',
    category: "Father's Day Cakes",
    price: 699,
    rating: 4.8,
    reviewsCount: 62,
    image: 'images/fathers_day_cake.jpg',
    description: 'Sophisticated espresso coffee cake layered with salted caramel sauce, dark chocolate curls, and French macarons.',
    flavors: ['Espresso Mocha', 'Salted Caramel Coffee', 'Dark Chocolate Espresso'],
    ingredients: ['Arabica Coffee Brew', 'Salted Butter Caramel', 'Dark Chocolate 70%', 'Almond Flour'],
    isBestSeller: false,
    isEggless: true
  },
  {
    id: 'prod-5',
    name: 'Floral Vanilla Strawberry Delight',
    category: "Mother's Day Cakes",
    price: 649,
    rating: 4.9,
    reviewsCount: 88,
    image: 'images/mothers_day_cake.jpg',
    description: 'Delicate Madagascar vanilla sponge soaked in strawberry reduction and finished with delicate pastel whipped frosting.',
    flavors: ['Vanilla Strawberry', 'White Chocolate Raspberry', 'Peach Vanilla'],
    ingredients: ['Madagascar Vanilla', 'Fresh Strawberries', 'Whipping Cream', 'Wheat Flour'],
    isBestSeller: false,
    isEggless: true
  },
  {
    id: 'prod-6',
    name: 'Alphonso Mango Truffle Pastry Slice',
    category: 'Pastries',
    price: 149,
    rating: 4.85,
    reviewsCount: 154,
    image: 'images/mango_pastry.jpg',
    description: 'Layered mango sponge filled with fresh Alphonso mango pulp and white chocolate glaze. Perfectly portioned slice.',
    flavors: ['Alphonso Mango', 'Mango Coconut'],
    ingredients: ['Alphonso Mango Pulp', 'White Chocolate', 'Fresh Cream', 'Mint'],
    isBestSeller: true,
    isEggless: true
  },
  {
    id: 'prod-7',
    name: 'Gourmet Eggless Cupcakes (Pack of 6)',
    category: 'Cupcakes',
    price: 399,
    rating: 4.9,
    reviewsCount: 110,
    image: 'images/gourmet_cupcakes.jpg',
    description: 'Assorted box of 6 handcrafted cupcakes: Chocolate Fudge, Red Velvet, Vanilla Bean, Caramel Crunch, Mango Delight, Blueberry.',
    flavors: ['Assorted Box of 6'],
    ingredients: ['Wheat Flour', 'Pure Butter', 'Natural Cocoa', 'Vanilla Extract', 'Fruit Pulps'],
    isBestSeller: false,
    isEggless: true
  },
  {
    id: 'prod-8',
    name: 'Artisanal Almond Butter Cookies (250g)',
    category: 'Cookies',
    price: 299,
    rating: 4.8,
    reviewsCount: 75,
    image: 'images/almond_cookies.jpg',
    description: 'Melt-in-your-mouth eggless butter cookies baked to golden perfection with sliced California almonds and cardamom.',
    flavors: ['Almond Butter', 'Cashew Pistachio', 'Dark Chocolate Chip'],
    ingredients: ['Pure Desi Ghee', 'California Almonds', 'Organic Wheat Flour', 'Cardamom'],
    isBestSeller: false,
    isEggless: true
  },
  {
    id: 'prod-9',
    name: 'Complete Celebration Kit',
    category: 'Custom Cakes',
    price: 349,
    rating: 4.95,
    reviewsCount: 210,
    image: 'images/celebration_package.jpg',
    description: 'Complete party pack including sparkling birthday candles, party caps, golden "Happy Birthday" cake topper, and blowers.',
    flavors: ['Standard Gold Party Pack'],
    ingredients: ['Safe Food-Grade Materials'],
    isBestSeller: false,
    isEggless: true
  }
];

// App State
let cart = JSON.parse(localStorage.getItem('shikhar_cart')) || [];
let activeCategory = 'All';
let searchQuery = '';
let activeModalProduct = null;
let appliedDiscount = 0;
let discountCode = '';

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initShopGallery();
  initPageLoaders();
  renderBestSellers();
  renderMenuProducts();
  initCategoryFilters();
  initSearch();
  updateCartUI();
  initModals();
  initCheckoutForm();
});

// Smooth 1.2s Page Loader Transition for Page Redirect Buttons (Excluding Navbar links)
function initPageLoaders() {
  const exploreBtn = document.querySelector('.btn-hero-explore');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerPageLoader('#menu', 'Opening Menu...');
    });
  }
}

function triggerPageLoader(targetHash, text = 'Opening Menu...') {
  const loader = document.getElementById('pageLoaderOverlay');
  const loaderText = loader ? loader.querySelector('.loader-text') : null;
  if (loaderText) loaderText.textContent = text;

  if (loader) loader.classList.add('active');

  setTimeout(() => {
    window.location.hash = targetHash;
    setTimeout(() => {
      if (loader) loader.classList.remove('active');
    }, 300);
  }, 1200);
}

// Interactive Shop Gallery Auto-Cycle on Hover
function initShopGallery() {
  const galleryCard = document.getElementById('shopGalleryCard');
  if (!galleryCard) return;

  const slides = galleryCard.querySelectorAll('.gallery-slide');
  const dots = galleryCard.querySelectorAll('.gallery-dot');
  let currentIndex = 0;
  let cycleInterval = null;

  function showSlide(index) {
    currentIndex = index;
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  galleryCard.addEventListener('mouseenter', () => {
    if (!cycleInterval) {
      cycleInterval = setInterval(nextSlide, 2200);
    }
  });

  galleryCard.addEventListener('mouseleave', () => {
    if (cycleInterval) {
      clearInterval(cycleInterval);
      cycleInterval = null;
    }
  });

  window.setGallerySlide = function(index) {
    showSlide(index);
  };
}

// Navigation & View Handler
function initNavigation() {
  const homePage = document.getElementById('home-page');
  const menuPage = document.getElementById('menu-page');

  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // Initial route check

  function handleRoute() {
    const hash = window.location.hash || '#home';
    const targetId = hash.substring(1);

    if (targetId === 'menu') {
      if (homePage) homePage.style.display = 'none';
      if (menuPage) menuPage.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (menuPage) menuPage.style.display = 'none';
      if (homePage) homePage.style.display = 'block';

      if (targetId && targetId !== 'home') {
        setTimeout(() => {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            const headerOffset = 90;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    // Update active nav link state
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === hash || (hash === '' && href === '#home') || (hash === '#home' && href === '#home')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Mobile nav toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinksContainer = document.getElementById('navLinks');
  if (mobileBtn && navLinksContainer) {
    mobileBtn.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-open');
      });
    });
  }
}

// Render Best Selling Products on Homepage
function renderBestSellers() {
  const container = document.getElementById('bestSellersGrid');
  if (!container) return;

  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);
  container.innerHTML = bestSellers.map(p => createProductCardHTML(p)).join('');
}

// Render Menu Page Products
function renderMenuProducts() {
  const container = document.getElementById('menuProductsGrid');
  if (!container) return;

  let filtered = PRODUCTS;

  if (activeCategory !== 'All') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  if (searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results-state">
        <i class="fas fa-cookie-bite"></i>
        <h3>No bakery items found matching "${searchQuery}"</h3>
        <p>Try searching for "Chocolate", "Red Velvet", or select another category.</p>
        <button class="btn-gold" style="margin-top: 16px;" onclick="resetSearch()">View All Menu</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
}

// Product Card HTML Generator
function createProductCardHTML(product) {
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-img-wrapper">
        <div class="product-badge-top">
          <span class="eggless-badge"><span class="eggless-dot"></span> 100% Eggless</span>
        </div>
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
        <button class="product-quick-view" onclick="openProductModal('${product.id}')">
          <i class="fas fa-eye"></i> Quick View
        </button>
      </div>
      <div class="product-body">
        <h4 class="product-title">${product.name}</h4>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <div class="product-price">
            ₹${product.price} <span>Starting price</span>
          </div>
          <button class="btn-add-cart" title="Add to Cart" onclick="addToCart('${product.id}')">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Category Filters setup
function initCategoryFilters() {
  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      catButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.getAttribute('data-cat');
      renderMenuProducts();
    });
  });
}

// Search bar setup
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderMenuProducts();
    });
  }
}

function resetSearch() {
  searchQuery = '';
  activeCategory = 'All';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  
  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(b => b.classList.remove('active'));
  if (catButtons[0]) catButtons[0].classList.add('active');

  renderMenuProducts();
}

// Product Details Modal Handler
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activeModalProduct = product;

  document.getElementById('modalProductImg').src = product.image;
  document.getElementById('modalProductTitle').textContent = product.name;
  document.getElementById('modalProductPrice').textContent = `₹${product.price}`;
  document.getElementById('modalProductDesc').textContent = product.description;

  // Render Flavors
  const flavorContainer = document.getElementById('modalFlavors');
  if (flavorContainer) {
    flavorContainer.innerHTML = product.flavors.map((f, idx) => `
      <span class="flavor-chip ${idx === 0 ? 'selected' : ''}" onclick="selectFlavor(this)">${f}</span>
    `).join('');
  }

  // Render Ingredients
  const ingContainer = document.getElementById('modalIngredients');
  if (ingContainer) {
    ingContainer.textContent = product.ingredients.join(' • ');
  }

  // Render Similar Products
  const similarContainer = document.getElementById('modalSimilarProducts');
  if (similarContainer) {
    const similars = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
    similarContainer.innerHTML = similars.map(s => `
      <div class="similar-product-item" onclick="openProductModal('${s.id}')" style="display:flex; gap:10px; align-items:center; background: #fff; padding: 8px; border-radius: 8px; cursor: pointer; border: 1px solid rgba(212,175,55,0.2);">
        <img src="${s.image}" style="width: 50px; height: 50px; border-radius: 6px; object-fit: cover;">
        <div>
          <h5 style="font-size: 0.88rem; color: #4A0F1E;">${s.name}</h5>
          <span style="font-size: 0.8rem; font-weight: 700;">₹${s.price}</span>
        </div>
      </div>
    `).join('');
  }

  document.getElementById('productQtyVal').textContent = '1';
  document.getElementById('customCakeNote').value = '';

  const modal = document.getElementById('productModalBackdrop');
  modal.classList.add('active');
}

function selectFlavor(chipElement) {
  const chips = document.querySelectorAll('.flavor-chip');
  chips.forEach(c => c.classList.remove('selected'));
  chipElement.classList.add('selected');
}

function changeProductQty(delta) {
  const valEl = document.getElementById('productQtyVal');
  let current = parseInt(valEl.textContent) || 1;
  current = Math.max(1, current + delta);
  valEl.textContent = current;
}

function addModalProductToCart() {
  if (!activeModalProduct) return;

  const selectedFlavorEl = document.querySelector('.flavor-chip.selected');
  const flavor = selectedFlavorEl ? selectedFlavorEl.textContent : activeModalProduct.flavors[0];
  const qty = parseInt(document.getElementById('productQtyVal').textContent) || 1;
  const customNote = document.getElementById('customCakeNote').value;

  addToCart(activeModalProduct.id, qty, flavor, customNote);
  closeProductModal();
}

function buyModalProductNow() {
  addModalProductToCart();
  toggleCartDrawer(true);
}

function closeProductModal() {
  const modal = document.getElementById('productModalBackdrop');
  modal.classList.remove('active');
}

// Shopping Cart Handler
function addToCart(productId, quantity = 1, flavor = null, customNote = '') {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const selectedFlavor = flavor || product.flavors[0];

  const existingIndex = cart.findIndex(item => item.id === productId && item.flavor === selectedFlavor);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
    if (customNote) cart[existingIndex].customNote = customNote;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      flavor: selectedFlavor,
      quantity: quantity,
      customNote: customNote
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to cart!`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function updateCartItemQty(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('shikhar_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCount');
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countBadge) countBadge.textContent = totalCount;

  const cartList = document.getElementById('cartItemsList');
  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <i class="fas fa-shopping-basket" style="font-size: 2.5rem; color: var(--gold-dark); margin-bottom: 12px;"></i>
        <p>Your cart is empty.</p>
        <button class="btn-maroon" style="margin-top: 14px;" onclick="toggleCartDrawer(false); window.location.hash='#menu';">Explore Menu</button>
      </div>
    `;
  } else {
    cartList.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <button class="cart-item-remove" onclick="removeFromCart(${idx})" title="Remove"><i class="fas fa-trash-alt"></i></button>
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h5>${item.name}</h5>
          <span class="cart-item-flavor">Flavor: ${item.flavor}</span>
          ${item.customNote ? `<div style="font-size:0.75rem; color:#4A0F1E; font-style:italic;">Note: "${item.customNote}"</div>` : ''}
          <div class="cart-item-price">₹${item.price * item.quantity}</div>
          <div class="qty-picker" style="margin-top: 6px; transform: scale(0.85); transform-origin: left center;">
            <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 500 || subtotal === 0 ? 0 : 50;
  const grandTotal = Math.max(0, subtotal + deliveryFee - appliedDiscount);

  document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
  document.getElementById('cartDeliveryFee').textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
  document.getElementById('cartDiscount').textContent = appliedDiscount > 0 ? `-₹${appliedDiscount}` : '₹0';
  document.getElementById('cartGrandTotal').textContent = `₹${grandTotal}`;
}

function applyCouponCode() {
  const input = document.getElementById('couponCodeInput');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'FIRST100') {
    appliedDiscount = 100;
    discountCode = 'FIRST100';
    showToast('Promo code FIRST100 applied! ₹100 OFF');
  } else {
    showToast('Invalid Promo Code');
  }
  updateCartUI();
}

function copyPromoCode(code) {
  navigator.clipboard.writeText(code);
  showToast(`Promo code "${code}" copied!`);
  const input = document.getElementById('couponCodeInput');
  if (input) input.value = code;
  applyCouponCode();
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    if (open) drawer.classList.add('open');
    else drawer.classList.remove('open');
  }
}

// Modal & Overlay Initializers
function initModals() {
  const modalBackdrop = document.getElementById('productModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeProductModal();
    });
  }

  const checkoutModal = document.getElementById('checkoutModalBackdrop');
  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckoutModal();
    });
  }
}

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  toggleCartDrawer(false);
  document.getElementById('checkoutModalBackdrop').classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModalBackdrop').classList.remove('active');
}

// WhatsApp Order Generator
function initCheckoutForm() {
  const form = document.getElementById('whatsappCheckoutForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const date = document.getElementById('custDate').value;
    const time = document.getElementById('custTime').value;
    const notes = document.getElementById('custNotes').value.trim();

    if (!name || !phone || !address) {
      showToast('Please fill in all required fields.');
      return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 500 ? 0 : 50;
    const total = Math.max(0, subtotal + deliveryFee - appliedDiscount);

    // Build Formatted WhatsApp Order Message
    let msg = `*NEW ORDER - SHIKHAR CAKES*\n`;
    msg += `-------------------------------\n`;
    msg += `👤 *Customer Name:* ${name}\n`;
    msg += `📞 *Phone Number:* ${phone}\n`;
    msg += `📍 *Delivery Address:* ${address}\n`;
    if (date) msg += `📅 *Delivery Date:* ${date}\n`;
    if (time) msg += `⏰ *Preferred Slot:* ${time}\n`;
    if (notes) msg += `📝 *Custom Notes:* ${notes}\n`;
    msg += `-------------------------------\n`;
    msg += `🎂 *ORDERED ITEMS (100% EGGLESS):*\n`;

    cart.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} (${item.flavor}) x ${item.quantity} = ₹${item.price * item.quantity}\n`;
      if (item.customNote) {
        msg += `   └ Message on Cake: "${item.customNote}"\n`;
      }
    });

    msg += `-------------------------------\n`;
    msg += `Subtotal: ₹${subtotal}\n`;
    msg += `Delivery Charge: ${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}\n`;
    if (appliedDiscount > 0) msg += `Discount (${discountCode}): -₹${appliedDiscount}\n`;
    msg += `*TOTAL AMOUNT TO PAY: ₹${total}*\n`;
    msg += `-------------------------------\n`;
    msg += `Please confirm my order and share payment link / COD details. Thank you!`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/918013000014?text=${encodedMsg}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Clear Cart & Close Modal
    cart = [];
    saveCart();
    updateCartUI();
    closeCheckoutModal();
    showToast('Redirecting to WhatsApp to place your order!');
  });
}

// Toast Notification
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-info-circle text-gold"></i> <span>${message}</span>`;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}
