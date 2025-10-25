// ===== MODERN JAVASCRIPT FOR BOB'S BURGERS =====

class BobsBurgersApp {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.total = 0;
        this.deliveryFee = 0;
        this.orderNumber = null;
        this.selectedProduct = null;
        this.currentFilter = 'all';
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        this.products = [
            {
                "id": 1,
                "name": "Hamburguesa Clásica",
                "img": "https://i.imgur.com/N095izT.png",
                "price": 140,
                "description": "Acompañada con carne, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hamburguesa"
            },
            {
                "id": 2,
                "name": "Hamburguesa Descarnada",
                "img": "https://i.imgur.com/XnkEsrD.png",
                "price": 140,
                "description": "Acompañada únicamente con carnes frías, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hamburguesa"
            },
            {
                "id": 3,
                "name": "Hamburguesa Especial",
                "img": "https://i.imgur.com/Yk0EoBt.png",
                "price": 160,
                "description": "Acompañada con carne, carnes frías, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hamburguesa"
            },
            {
                "id": 4,
                "name": "Hamburguesa Doble",
                "img": "https://i.imgur.com/RXBsCOJ.png",
                "price": 150,
                "description": "Acompañada con carne, jamón, queso amarillo, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hamburguesa"
            },
            {
                "id": 5,
                "name": "Hamburguesa Asadera",
                "img": "https://i.imgur.com/eQTxSa7.png",
                "price": 150,
                "description": "Acompañada con carne, queso asadero, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hamburguesa"
            },
            {
                "id": 6,
                "name": "Hamburguesa Chuletón",
                "img": "https://i.imgur.com/K0uY0kP.png",
                "price": 160,
                "description": "Acompañada con carne, chuleta, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hamburguesa"
            },
            {
                "id": 7,
                "name": "Hamburguesa Hawái",
                "img": "https://i.imgur.com/VtqyDm4.png",
                "price": 160,
                "description": "Acompañada con carne, piña, queso asadero, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hamburguesa"
            },
            {
                "id": 8,
                "name": "Hamburguesa Española",
                "img": "https://i.imgur.com/vZtOCPT.png",
                "price": 160,
                "description": "Acompañada con carne, salchicha abierta o picada, queso asadero, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hamburguesa"
            },
            {
                "id": 9,
                "name": "Hamburguesa La Max Perra",
                "img": "https://i.imgur.com/n0enM1V.png",
                "price": 185,
                "description": "Carne más chuleta, champiñón, doble queso, piña, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hamburguesa"
            },
            {
                "id": 10,
                "name": "Hot Dog Clásico",
                "img": "https://i.imgur.com/yKHFurF.png",
                "price": 140,
                "description": "Acompañado con salchicha de pavo, tira de tocino, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hotdog"
            },
            {
                "id": 11,
                "name": "Hot Dog Doble",
                "img": "https://i.imgur.com/e6U889D.png",
                "price": 150,
                "description": "Acompañado con salchicha de pavo, tira de tocino , jamón, queso amarillo, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hotdog"
            },
            {
                "id": 12,
                "name": "Hot Dog Asadero",
                "img": "https://i.imgur.com/hX6zjaR.png",
                "price": 150,
                "description": "Acompañado con salchicha de pavo, tira de tocino, queso asadero, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hotdog"
            },
            {
                "id": 13,
                "name": "Hot Dog Hawái",
                "img": "https://i.imgur.com/S56Uzr7.png",
                "price": 160,
                "description": "Acompañado con salchicha de pavo, tira de tocino, piña, queso asadero, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "hotdog"
            },
            {
                "id": 14,
                "name": "Sincronizada Sencilla",
                "img": "https://i.imgur.com/UbDjMTB.png",
                "price": 140,
                "description": "Jamón, queso amarillo, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "sincronizada"
            },
            {
                "id": 15,
                "name": "Sincronizada Especial",
                "img": "https://i.imgur.com/cIEfsjX.png",
                "price": 160,
                "description": "Pierna, Jamón, queso amarillo, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "sincronizada"
            },
            {
                "id": 16,
                "name": "Burrito Sencillo",
                "img": "https://i.imgur.com/GutmmRC.png",
                "price": 140,
                "description": "Pierna, cebolla, jitomate, lechuga, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "sincronizada"
            },
            {
                "id": 17,
                "name": "Burrito Especial",
                "img": "https://i.imgur.com/E5SAUIa.png",
                "price": 160,
                "description": "Pierna, salchicha, panela, cebolla, jitomate, lechuga, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "sincronizada"
            },
            {
                "id": 18,
                "name": "Torta Sencilla",
                "img": "https://i.imgur.com/tKjH4x3.png",
                "price": 140,
                "description": "Pierna, cebolla, jitomate, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "sincronizada"
            },
            {
                "id": 19,
                "name": "Torta Combinada",
                "img": "https://i.imgur.com/tKjH4x3.png",
                "price": 150,
                "description": "Pierna, más tu ingrediente a combinar panela, jamón etc., cebolla, jitomate, aderezo de la casa, crema, mayonesa y picante a elegir.",
                "category": "sincronizada"
            },
            {
                "id": 20,
                "name": "Nachos Chicos",
                "img": "https://i.imgur.com/pbuZz1v.png",
                "price": 145,
                "description": "Pierna, totopos doraditos, frijolitos aguados, salsa de queso cheddar y rebanadas de chile jalapeño.",
                "category": "sincronizada"
            },
            {
                "id": 21,
                "name": "Nachos Grandes",
                "img": "https://i.imgur.com/pbuZz1v.png",
                "price": 175,
                "description": "Pierna, totopos doraditos, frijolitos aguados, salsa de queso cheddar y rebanadas de chile jalapeño.",
                "category": "sincronizada"
            },
            {
                "id": 22,
                "name": "Taco Chico",
                "img": "https://i.imgur.com/K82zTrk.png",
                "price": 35,
                "description": "Del comal a tu boca. Doble tortilla chica, acompañada de carne asada, cebolla picada, repollo, cilantro y salsa de tomate. Picante a elegir.",
                "category": "sincronizada"
            },
            {
                "id": 23,
                "name": "Taco Grande",
                "img": "https://i.imgur.com/K82zTrk.png",
                "price": 55,
                "description": "Del comal a tu boca. Doble tortilla grande, acompañada de carne asada, cebolla picada, repollo, cilantro y salsa de tomate. Picante a elegir.",
                "category": "sincronizada"
            },
            {
                "id": 24,
                "name": "Refresco Coca-Cola 600 ml",
                "img": "https://i.imgur.com/V1wU8sX.png",
                "price": 45,
                "description": "Refresco Coca – Cola 600 Ml No Retornable.",
                "category": "bebida"
            },
            {
                "id": 25,
                "name": "Refresco 500 ml Vidrio",
                "img": "https://i.imgur.com/1ivK2h7.png",
                "price": 42,
                "description": "Refrescos 500 Ml de Botella de Vidrio.",
                "category": "bebida"
            },
            {
                "id": 26,
                "name": "Agua Mineral 600 ml",
                "img": "https://i.imgur.com/tqSCval.png",
                "price": 45,
                "description": "Agua Mineral 600 Ml No Retornable.",
                "category": "bebida"
            },
            {
                "id": 27,
                "name": "Agua Fresca 1 Lt",
                "img": "https://i.imgur.com/Kcg01sH.png",
                "price": 80,
                "description": "Agua Fresca v/Sabores de 1 Lt.",
                "category": "bebida"
            },
            {
                "id": 28,
                "name": "Pastel de 3 Leches",
                "img": "https://i.imgur.com/QRv5x6w.png",
                "price": 80,
                "description": "Pastel de 3 leches. Rebanada.",
                "category": "postre"
            },
            {
                "id": 29,
                "name": "Cheesecake de Fresa",
                "img": "https://i.imgur.com/CNgDmeF.png",
                "price": 80,
                "description": "Cheesecake de fresa. Rebanada.",
                "category": "postre"
            }
        ];

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeTheme();
        this.showLoadingScreen();
        this.renderMenu();
        this.updateCart();
        this.setupIntersectionObserver();
        this.setupScrollEffects();
    }

    setupEventListeners() {
        // Navigation
        document.getElementById('theme-toggle')?.addEventListener('click', () => this.toggleTheme());
        document.getElementById('cart-toggle')?.addEventListener('click', () => this.toggleCart());
        document.getElementById('cart-close')?.addEventListener('click', () => this.toggleCart());
        document.getElementById('menu-toggle')?.addEventListener('click', () => this.toggleMobileMenu());

        // Cart actions
        document.getElementById('submit-order')?.addEventListener('click', () => this.submitOrder());
        document.getElementById('clear-cart')?.addEventListener('click', () => this.clearCart());
        document.getElementById('whatsapp-btn')?.addEventListener('click', () => this.updateWhatsAppLink());

        // Filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterMenu(e.target.dataset.filter));
        });

        // Modals
        document.getElementById('modal-close')?.addEventListener('click', () => this.closeModal());
        document.getElementById('promo-close')?.addEventListener('click', () => this.closePromoModal());
        document.getElementById('promo-fab')?.addEventListener('click', () => this.openPromoModal());
        document.getElementById('whatsapp-fab')?.addEventListener('click', () => this.openWhatsApp());

        // Product modal
        document.getElementById('add-to-cart')?.addEventListener('click', () => this.addProductToCart());
        document.getElementById('quantity-plus')?.addEventListener('click', () => this.increaseQuantity());
        document.getElementById('quantity-minus')?.addEventListener('click', () => this.decreaseQuantity());

        // Back to top
        document.getElementById('back-to-top')?.addEventListener('click', () => this.scrollToTop());

        // Close modals on outside click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal();
                this.closePromoModal();
            }
            if (e.target.classList.contains('cart-sidebar')) {
                this.toggleCart();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
                this.closePromoModal();
                const cartSidebar = document.getElementById('cart-sidebar');
                if (cartSidebar.classList.contains('open')) {
                    this.toggleCart();
                }
            }
        });
    }

    showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 2000);
    }

    initializeTheme() {
        if (this.isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        
        if (this.isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    toggleCart() {
        const cartSidebar = document.getElementById('cart-sidebar');
        cartSidebar.classList.toggle('open');
        
        // Prevent body scroll when cart is open
        if (cartSidebar.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    toggleMobileMenu() {
        // Mobile menu functionality can be added here
        console.log('Mobile menu toggled');
    }

    renderMenu() {
        const menuGrid = document.getElementById('menu-grid');
        const filteredProducts = this.currentFilter === 'all' 
            ? this.products 
            : this.products.filter(product => product.category === this.currentFilter);

        menuGrid.innerHTML = filteredProducts.map(product => this.createProductCard(product)).join('');
        
        // Add animation to new items
        setTimeout(() => {
            document.querySelectorAll('.menu-item').forEach((item, index) => {
                item.style.animation = `slideInUp 0.6s ease ${index * 0.1}s both`;
            });
        }, 100);
    }

    createProductCard(product) {
        return `
            <div class="menu-item" data-category="${product.category}">
                <img src="${product.img}" alt="${product.name}" class="menu-item-image" loading="lazy">
                <div class="menu-item-content">
                    <h3 class="menu-item-name">${product.name}</h3>
                    <p class="menu-item-description">${product.description}</p>
                    <div class="menu-item-price">$${product.price}</div>
                    <div class="menu-item-actions">
                        <div class="quantity-selector">
                            <button class="quantity-btn" onclick="app.decreaseProductQuantity(${product.id})">-</button>
                            <input type="number" class="quantity-input" id="qty-${product.id}" value="1" min="1" max="10">
                            <button class="quantity-btn" onclick="app.increaseProductQuantity(${product.id})">+</button>
                        </div>
                        <button class="add-to-cart-btn" onclick="app.addToCart(${product.id})">
                            <i class="fas fa-plus"></i>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    filterMenu(filter) {
        this.currentFilter = filter;
        
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        
        // Animate filter change
        const menuGrid = document.getElementById('menu-grid');
        menuGrid.style.opacity = '0';
        menuGrid.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            this.renderMenu();
            menuGrid.style.opacity = '1';
            menuGrid.style.transform = 'translateY(0)';
        }, 300);
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        const quantity = parseInt(document.getElementById(`qty-${productId}`).value);
        
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                quantity: quantity
            });
        }
        
        this.updateCart();
        this.showCartAnimation();
        this.showNotification(`${product.name} agregado al carrito`, 'success');
    }

    increaseProductQuantity(productId) {
        const input = document.getElementById(`qty-${productId}`);
        const currentValue = parseInt(input.value);
        if (currentValue < 10) {
            input.value = currentValue + 1;
        }
    }

    decreaseProductQuantity(productId) {
        const input = document.getElementById(`qty-${productId}`);
        const currentValue = parseInt(input.value);
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    }

    updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const cartDelivery = document.getElementById('cart-delivery');
        const cartTotal = document.getElementById('cart-total');
        
        // Calculate totals
        this.total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const deliveryMethod = document.querySelector('input[name="delivery-method"]:checked')?.value;
        const shouldAddDelivery = deliveryMethod === 'A Domicilio';
        
        // Update cart count
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        
        // Update cart items
        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 2rem;">Tu carrito está vacío</p>';
        } else {
            cartItems.innerHTML = this.cart.map(item => `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price} c/u</div>
                    </div>
                    <div class="cart-item-controls">
                        <div class="cart-item-quantity">
                            <button onclick="app.updateCartItemQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="app.updateCartItemQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="cart-item-remove" onclick="app.removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
        
        // Update totals
        cartSubtotal.textContent = `$${this.total.toFixed(2)}`;
        cartDelivery.textContent = shouldAddDelivery ? `$${this.deliveryFee.toFixed(2)}` : '$0.00';
        const finalTotal = this.total + (shouldAddDelivery ? this.deliveryFee : 0);
        cartTotal.textContent = `$${finalTotal.toFixed(2)}`;
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(this.cart));
        
        // Update PayPal form
        this.updatePayPalForm();
        this.updateWhatsAppLink();
    }

    updateCartItemQuantity(itemId, change) {
        const item = this.cart.find(item => item.id === itemId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(itemId);
            } else {
                this.updateCart();
            }
        }
    }

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.updateCart();
        this.showNotification('Producto eliminado del carrito', 'info');
    }

    clearCart() {
        this.cart = [];
        this.updateCart();
        this.showNotification('Carrito limpiado', 'info');
    }

    updateDeliveryFee() {
        const distance = parseFloat(document.getElementById('delivery-distance').value) || 0;
        
        if (distance <= 2) {
            this.deliveryFee = 20;
        } else if (distance <= 5) {
            this.deliveryFee = 30;
        } else {
            this.deliveryFee = 30 + (distance - 5) * 5;
        }
        
        this.updateCart();
    }

    updatePayPalForm() {
        const paypalForm = document.getElementById('paypal-form');
        if (this.total > 0) {
            paypalForm.innerHTML = `
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_xclick" />
                    <input type="hidden" name="business" value="gascagtz@gmail.com" />
                    <input type="hidden" name="currency_code" value="MXN" />
                    <input type="hidden" name="amount" value="${this.total.toFixed(2)}" />
                    <input type="hidden" name="item_name" value="${this.cart.map(item => `${item.name} (${item.quantity})`).join(', ')}" />
                    <input type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/silver-pill-paypal-44px.png" 
                           border="0" name="submit" title="Pay with PayPal" alt="PayPal - The safer, easier way to pay online!" 
                           style="width: 100%; max-width: 200px;" />
                </form>
            `;
        } else {
            paypalForm.innerHTML = '<p style="text-align: center; color: var(--gray-500);">Agrega productos al carrito para pagar</p>';
        }
    }

    updateWhatsAppLink() {
        const whatsappBtn = document.getElementById('whatsapp-btn');
        if (this.cart.length === 0) {
            whatsappBtn.style.display = 'none';
            return;
        }
        
        const deliveryAddress = document.getElementById('delivery-address').value || 'No especificada';
        const orderNotes = document.getElementById('order-notes').value || 'Sin notas adicionales';
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked')?.value || 'En línea';
        const deliveryMethod = document.querySelector('input[name="delivery-method"]:checked')?.value || 'A Domicilio';
        const distance = document.getElementById('delivery-distance').value || '0';
        
        const message = `🍔 *Nuevo Pedido - Bob's Burgers* 🍔

📋 *Detalles del Pedido:*
${this.cart.map(item => `• ${item.name} x${item.quantity} - $${item.price} c/u`).join('\n')}

💰 *Total: $${(this.total + this.deliveryFee).toFixed(2)}*
🚚 *Método de entrega: ${deliveryMethod}*
💳 *Método de pago: ${paymentMethod}*
🏠 *Dirección: ${deliveryAddress}*
📏 *Distancia: ${distance} km*
🚚 *Costo de envío: $${this.deliveryFee.toFixed(2)}*

📝 *Notas: ${orderNotes}*

¡Gracias por elegir Bob's Burgers! 🔥`;

        const encodedMessage = encodeURIComponent(message);
        whatsappBtn.href = `https://wa.me/525533355687?text=${encodedMessage}`;
        whatsappBtn.style.display = 'flex';
    }

    submitOrder() {
        if (this.cart.length === 0) {
            this.showNotification('Tu carrito está vacío', 'warning');
            return;
        }
        
        if (!this.orderNumber) {
            this.orderNumber = Math.floor(Math.random() * 1000000) + 1;
        }
        
        const orderData = {
            timestamp: new Date().toLocaleString(),
            orderNumber: this.orderNumber,
            deliveryAddress: document.getElementById('delivery-address').value || 'No especificada',
            orderNotes: document.getElementById('order-notes').value || 'Sin notas adicionales',
            paymentMethod: document.querySelector('input[name="payment-method"]:checked')?.value || 'En línea',
            deliveryMethod: document.querySelector('input[name="delivery-method"]:checked')?.value || 'A Domicilio',
            deliveryDistance: document.getElementById('delivery-distance').value || '0',
            deliveryFee: this.deliveryFee.toFixed(2),
            cart: JSON.stringify(this.cart),
            total: (this.total + this.deliveryFee).toFixed(2)
        };
        
        // Show loading state
        const submitBtn = document.getElementById('submit-order');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Send order (simulated)
        setTimeout(() => {
            this.showNotification('¡Pedido enviado correctamente!', 'success');
            this.updateWhatsAppLink();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
        
        // In a real app, you would send to your backend:
        /*
        fetch('https://script.google.com/macros/s/AKfycbxB9-728OnNnromP-oOQStESL_srYAQ_aXb2Wv1bROiqlq5jMcLTvYEHjDuzzHBrrWh/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
        .then(response => {
            this.showNotification('¡Pedido enviado correctamente!', 'success');
            this.updateWhatsAppLink();
        })
        .catch(error => {
            this.showNotification('Error al enviar el pedido', 'error');
        });
        */
    }

    openProductModal(productId) {
        const product = this.products.find(p => p.id === productId);
        this.selectedProduct = product;
        
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-image').src = product.img;
        document.getElementById('modal-product-description').textContent = product.description;
        document.getElementById('modal-product-price').textContent = `$${product.price}`;
        document.getElementById('modal-quantity').value = 1;
        
        this.openModal();
    }

    addProductToCart() {
        if (!this.selectedProduct) return;
        
        const quantity = parseInt(document.getElementById('modal-quantity').value);
        this.addToCart(this.selectedProduct.id, quantity);
        this.closeModal();
    }

    increaseQuantity() {
        const input = document.getElementById('modal-quantity');
        const currentValue = parseInt(input.value);
        if (currentValue < 10) {
            input.value = currentValue + 1;
        }
    }

    decreaseQuantity() {
        const input = document.getElementById('modal-quantity');
        const currentValue = parseInt(input.value);
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    }

    openModal() {
        document.getElementById('product-modal').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        document.getElementById('product-modal').classList.remove('open');
        document.body.style.overflow = 'auto';
    }

    openPromoModal() {
        document.getElementById('promo-modal').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    closePromoModal() {
        document.getElementById('promo-modal').classList.remove('open');
        document.body.style.overflow = 'auto';
    }

    openWhatsApp() {
        this.updateWhatsAppLink();
    }

    showCartAnimation() {
        const cartBtn = document.getElementById('cart-toggle');
        cartBtn.style.animation = 'bounce 0.6s ease';
        setTimeout(() => {
            cartBtn.style.animation = '';
        }, 600);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${this.getNotificationColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    getNotificationColor(type) {
        const colors = {
            success: '#48BB78',
            error: '#F56565',
            warning: '#ED8936',
            info: '#4299E1'
        };
        return colors[type] || '#4299E1';
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideInUp 0.6s ease both';
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.menu-item').forEach(item => {
            observer.observe(item);
        });
    }

    setupScrollEffects() {
        let lastScrollY = window.scrollY;
        const navbar = document.querySelector('.navbar');
        const backToTop = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Navbar hide/show
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            // Back to top button
            if (currentScrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
            
            lastScrollY = currentScrollY;
        });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new BobsBurgersApp();
    
    // Add some fun interactions
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.cursor');
        if (!cursor) {
            const newCursor = document.createElement('div');
            newCursor.className = 'cursor';
            newCursor.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: rgba(255, 107, 53, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
            `;
            document.body.appendChild(newCursor);
        }
        
        const cursorElement = document.querySelector('.cursor');
        cursorElement.style.left = e.clientX - 10 + 'px';
        cursorElement.style.top = e.clientY - 10 + 'px';
    });
    
    // Add parallax effect to hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
