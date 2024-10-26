const products = {
    'P1': {
        name: 'ShuttleCock',
        image: 'image/Shuttlecock.png',
        description: 'This is just a shuttlecock, for badminton.'
    },
    'P2': {
        name: 'Slide Cap',
        image: 'image/Slide Cap.png',
        description: 'This is a Slide Cap, it is hollow in the middle'
    },
    'P3': {
        name: 'Mini Fan',
        image: 'image/Fan.png',
        description: 'It just a mini fan one of my first design'
    },
    'P4': {
        name: 'Water Heating Tube',
        image: 'image/Water Heating Tube.png',
        description: 'Its just the case for a water heating tube.'
    },
    'P5': {
        name: 'Hose Connector',
        image: 'image/hoseconnector.png',
        description: 'This is a hose connector. It for connecting two tubes or 2 end of a tube so water can flow./n But in this case, made it for my professor so he can create a giant diamond molecule.'
    },
    'P6': {
        name: 'Hand Spin Fan',
        description: 'This Hand spin Fan is based off one of Leonardo da Vinci drawings of a fan./n it can be rotated! It assemblied that way',
        sketchfabEmbed: `<iframe title="Hand Spin Fan" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" src="https://sketchfab.com/models/e2dd23db441c45118223a2246e3ed733/embed"></iframe>`
    },
    'P7': {
        name: 'Robot Clipper',
        description: 'Its a gripper made from many components assemblied togethe',
        sketchfabEmbed:'<iframe title="Robot Gripper" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/a102254a53aa4a23b922c1253f0ec248/embed"> </iframe>'
    },
    'P8': {
        name: 'Mounting Clip',
        image: 'image/Holder.png',
        description: 'Its a Mounting Clip, made it because my professor needed it. It fit perfectly. /n Diminsion:24.5mm x 24.5mm x 27.8mm'
    },
    'P9': {
        name: 'Jeep',
        description: 'A Jeep,it doesnt do much but it can be a fun toy',
        sketchfabEmbed:'<iframe title="Toy Jeep" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/65b72126d9b245f4a65505f9883364b5/embed"> </iframe>'
    },
    'P10': {
        name: 'Selfie Stick',
        description: 'A selfie Stick, might be small but maybe for a small phone :)',
        sketchfabEmbed:'<iframe title="Selfie Stick" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/77e7cf3393f643c19f98dcf5cbada453/embed"> </iframe>'
    },
    'P11': {
        name: 'Pen',
        description: 'You know those colorful pens? Yeah it work like that',
        sketchfabEmbed:'<iframe title="Pen" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"allow="autoplay; fullscreen; xr-spatial-tracking"xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4cd848a6eaec48a7a2327bd57bc8f2fa/embed?ui_infos=0&ui_watermark=0&ui_controls=1"</iframe>'
    },
    'P12': {
        name: 'Flask Prusa i3 M3Ks+ Knob',
        image: 'image/Flask Knob.png',
        description: 'My professor found the orginal prusa knob was too boring, so I made this to fit his degree in Chemistry ',
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