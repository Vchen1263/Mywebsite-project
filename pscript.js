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
        name: 'Water Heating Tube',
        image: 'image/Water Heating Tube.png',
        description: 'This is the description for the 26 tooth Gear.'
    },
    'P5': {
        name: 'Train',
        image: 'image/Train.png',
        description: 'This is the description for the Train.'
    },
    'P6': {
        name: 'Hand Spin Fan',
        image: '',
        description: 'This is the description for the Hand Spin Fan.',
        sketchfabEmbed: `<iframe title="Hand Spin Fan" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/e2dd23db441c45118223a2246e3ed733/embed"></iframe>`
    },
    'P7': {
        name: 'Robot Clipper',
        image: '',
        description: 'This is the description for the Hand Spin Fan.',
        sketchfabEmbed:'<iframe title="Robot Gripper" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/a102254a53aa4a23b922c1253f0ec248/embed"> </iframe>'
    },
    'P8': {
        name: '',
        image: '',
        description: 'This is the description for the Hand Spin Fan.',
    },
    'P9': {
        name: 'Jeep',
        image: '',
        description: 'This is the description for the Hand Spin Fan.',
        sketchfabEmbed:'<iframe title="Toy Jeep" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/65b72126d9b245f4a65505f9883364b5/embed"> </iframe>'
    },
    'P10': {
        name: 'Selfie Stick',
        image: '',
        description: 'This is the description for the Hand Spin Fan.',
        sketchfabEmbed:'<iframe title="Selfie Stick" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/77e7cf3393f643c19f98dcf5cbada453/embed"> </iframe>'
    },
    'P11': {
        name: 'Pen',
        image: '',
        description: 'This is the description for the Hand Spin Fan.',
        sketchfabEmbed:'<iframe title="Pen" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"allow="autoplay; fullscreen; xr-spatial-tracking"xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4cd848a6eaec48a7a2327bd57bc8f2fa/embed?ui_infos=0&ui_watermark=0&ui_controls=1"</iframe>'
    }
}

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