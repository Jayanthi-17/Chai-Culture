
        // Mobile Navigation Toggle - Right Side Panel
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileCloseBtn = document.getElementById('mobileCloseBtn');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        
        // Open mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('active');
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        // Close mobile menu
        function closeMobileMenu() {
            mobileNav.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }

        mobileCloseBtn.addEventListener('click', closeMobileMenu);
        mobileNavOverlay.addEventListener('click', closeMobileMenu);

        // Close menu when clicking on a link
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Add to Cart Functionality
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.getAttribute('data-product');
                notificationText.textContent = `${productName} added to cart!`;
                
                // Show notification
                notification.classList.add('show');
                
                // Hide notification after 3 seconds
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
                
                // Animate button
                button.textContent = 'Added!';
                button.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    button.textContent = 'Add to Cart';
                    button.style.backgroundColor = '';
                }, 2000);
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                // Scroll to section
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            });
        });

        // REAL Countdown Timer for 15 days
        function updateCountdown() {
            // Set the launch date to exactly 15 days from now
            const launchDate = new Date();
            launchDate.setDate(launchDate.getDate() + 15);
            launchDate.setHours(0, 0, 0, 0); // Set to midnight
            
            const now = new Date().getTime();
            const distance = launchDate - now;
            
            // Calculate days, hours, minutes, seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update display with leading zeros
            document.getElementById("days").textContent = days.toString().padStart(2, '0');
            document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
            
            // If the countdown is over
            if (distance < 0) {
                clearInterval(countdownInterval);
                document.getElementById("days").textContent = "00";
                document.getElementById("hours").textContent = "00";
                document.getElementById("minutes").textContent = "00";
                document.getElementById("seconds").textContent = "00";
                document.querySelector(".countdown").innerHTML = "<h3 style='color: var(--gold); font-size: 2rem;'>We're Open!</h3>";
            }
        }
        
        // Initialize countdown and update every second
        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
        
        // Coming Soon button scroll to shop
        document.querySelector('.coming-soon-btn').addEventListener('click', function(e) {
            e.preventDefault();
            const shopSection = document.getElementById('shop');
            window.scrollTo({
                top: shopSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
        
        // Close mobile menu on window resize if switching to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
        // Signup Modal Functionality
const signupBtn = document.getElementById('signupBtn');
const signupModal = document.getElementById('signupModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const signupForm = document.getElementById('signupForm');
const modalContent = document.querySelector('.modal-content');

// Open modal when signup button is clicked
signupBtn.addEventListener('click', () => {
    signupModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close modal when close button is clicked
modalCloseBtn.addEventListener('click', () => {
    signupModal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside the modal content
signupModal.addEventListener('click', (e) => {
    if (e.target === signupModal) {
        signupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle form submission
// Handle form submission with food-themed success message
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    
    // Food-themed success messages array
    const successMessages = [
        {
            icon: "fas fa-mug-hot",
            title: `Welcome to the Tea Circle, ${fullName}!`,
            message: "We're brewing something special just for you. Get ready for a royal tea experience that will delight your senses.",
            quote: "A perfect cup of chai is like a warm hug for your soul."
        },
        {
            icon: "fas fa-seedling",
            title: "Your Tea Journey Begins!",
            message: "We're carefully selecting the finest spices and tea leaves for your first royal experience.",
            quote: "Great tea starts with great ingredients and ends with great moments."
        },
        {
            icon: "fas fa-crown",
            title: "Royal Access Granted!",
            message: "You're now part of our exclusive circle. We'll notify you as soon as our royal blends are ready.",
            quote: "Every sip tells a story of tradition and craftsmanship."
        },
        {
            icon: "fas fa-heart",
            title: "Thank You for Joining Us!",
            message: "We're preparing a tea experience so delightful, it will become your daily ritual.",
            quote: "Chai is not just a drink, it's an emotion served warm."
        }
    ];
    
    // Select a random success message
    const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
    
    // Save original content
    const originalContent = modalContent.innerHTML;
    
    // Create engaging success message
    modalContent.innerHTML = `
        <button class="modal-close-btn" id="modalCloseBtn2">
            <i class="fas fa-times"></i>
        </button>
        <div class="success-message">
            <i class="${randomMessage.icon}" style="font-size: 3.5rem; color: var(--gold); margin-bottom: 1rem;"></i>
            <h3 style="color: var(--brown); margin-bottom: 1rem; font-size: 1.8rem;">${randomMessage.title}</h3>
            
            <div style="background: rgba(212, 175, 55, 0.1); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0; border-left: 4px solid var(--gold);">
                <p style="color: var(--light-brown); font-size: 1.1rem; line-height: 1.6; margin-bottom: 0.5rem;">${randomMessage.message}</p>
                <p style="color: var(--deep-gold); font-style: italic; font-weight: 600; font-size: 1rem;">"${randomMessage.quote}"</p>
            </div>
            
            <div style="background: white; padding: 1.2rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                <p style="color: var(--brown); font-weight: 600; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-envelope" style="color: var(--gold);"></i> What's Next?
                </p>
                <ul style="color: var(--light-brown); padding-left: 1.5rem; margin: 0;">
                    <li style="margin-bottom: 0.5rem;">We'll send you exclusive previews of our royal blends</li>
                    <li style="margin-bottom: 0.5rem;">Special launch discount will be sent to ${email}</li>
                    <li>Early access to limited edition tea collections</li>
                </ul>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 2rem;">
                <button class="submit-btn" id="shareBtn" style="flex: 1; background-color: var(--gold); color: var(--brown);">
                    <i class="fas fa-share-alt"></i> Share with Friends
                </button>
                <button class="submit-btn" id="closeSuccessBtn" style="flex: 1;">
                    <i class="fas fa-mug-hot"></i> Explore More
                </button>
            </div>
            
            <p style="color: var(--light-brown); font-size: 0.85rem; margin-top: 1.5rem; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-spinner fa-spin" style="color: var(--gold);"></i>
                Brewing your welcome package...
            </p>
        </div>
    `;
    
    // Add event listener to the new close button
    document.getElementById('modalCloseBtn2').addEventListener('click', () => {
        signupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        modalContent.innerHTML = originalContent;
        initializeModal(); // Re-initialize event listeners
    });
    
    // Add event listener to the explore button
    document.getElementById('closeSuccessBtn').addEventListener('click', () => {
        signupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        modalContent.innerHTML = originalContent;
        initializeModal(); // Re-initialize event listeners
    });
    
    // Add event listener to the share button
    document.getElementById('shareBtn').addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'Chai Culture - Brew the Royal Tradition',
                text: 'I just joined Chai Culture\'s exclusive early access list! Can\'t wait to try their royal tea blends.',
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            alert('Share this with friends: "Join me on Chai Culture for exclusive royal tea blends!"');
        }
    });
    
    // Add a fun brewing animation
    setTimeout(() => {
        const brewingText = document.querySelector('.fa-spinner').parentElement;
        if (brewingText) {
            brewingText.innerHTML = `
                <i class="fas fa-check" style="color: var(--gold);"></i>
                Welcome package ready! Check your email soon.
            `;
        }
    }, 2000);
    
    // Reset the form
    signupForm.reset();
});

// Function to re-initialize modal event listeners after success message
function initializeModal() {
    // Re-attach form submission handler
    const newForm = document.getElementById('signupForm');
    if (newForm) {
        newForm.addEventListener('submit', signupForm.onsubmit);
    }
    
    // Re-attach close button handler
    const newCloseBtn = document.getElementById('modalCloseBtn');
    if (newCloseBtn) {
        newCloseBtn.addEventListener('click', () => {
            signupModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
}