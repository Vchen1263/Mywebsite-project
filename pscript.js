const products = {
    'P1': {
        name: 'ShuttleCock',
        image: 'image/Shuttlecock.png',
        description: 'This is just a shuttlecock.'
    },
    'P2': {
        name: 'Product Name 2',
        image: 'image/monkey.webp',
        description: 'This is the description for Product 2.'
    },
    'P3': {
        name: 'Mini Fan',
        image: 'image/Fan.png',
        description: 'This is the description for the Mini Fan.'
    },
    'P4': {
        name: '26 tooth Gear',
        image: 'image/Gear.png',
        description: 'This is the description for the 26 tooth Gear.'
    },
    'P5': {
        name: 'Hand Spin Fan',
        image: '',
        description: 'This is the description for the Hand Spin Fan.',
        sketchfabEmbed: `<iframe title="Hand Spin Fan" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/e2dd23db441c45118223a2246e3ed733/embed" style="width: 100%; height: 500px;"></iframe>`
    },
    'P6': {
        name: 'Train',
        image: 'image/Train.png',
        description: 'This is the description for the Train.'
    }
};

// Get product ID from URL query (e.g., ?product=P1)
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

// Populate the page with the product info
if (productId && products[productId]) {
    document.getElementById('product-name').textContent = products[productId].name;
    if (products[productId].image) {
        document.getElementById('product-image').src = products[productId].image;
    } else {
        document.getElementById('product-image').style.display = 'none'; // Hide image if not available
    }
    document.getElementById('product-description').textContent = products[productId].description;

    // If the product has a Sketchfab embed (for 360° view)
    if (products[productId].sketchfabEmbed) {
        document.getElementById('product-360-view').innerHTML = products[productId].sketchfabEmbed;
    }
} else {
    // Fallback if product not found
    document.getElementById('product-name').textContent = 'Product Not Found';
    document.getElementById('product-description').textContent = 'The requested product could not be found.';
}