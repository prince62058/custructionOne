import { Icons, Images } from '../constants/constant';

export const SERVICES_DATA = [
    {
        id: 1,
        name: 'Painting',
        rating: 4.5,
        image: Images.Painting,
    },
    {
        id: 2,
        name: 'Plumbing',
        rating: 4.5,
        image: Images.Plumbing,
    },
    {
        id: 3,
        name: 'Electronics',
        rating: 4.5,
        image: Images.Electronics,
    },
    {
        id: 4,
        name: 'Cleaning',
        rating: 4.5,
        image: Images.Cleaning,
    },
];


export const CATEGORY_PRODUCTS = [
    /* ================= PAINTING ================= */
    {
        id: 'painting',
        title: 'Painting Products',
        products: [
            {
                id: 1,
                name: 'Royale Luxury Emulsion',
                brand: 'Asian Paints',
                price: 400,
                mrp: 600,
                rating: 2.5,
                image: Images.paint1,
            },
            {
                id: 2,
                name: 'Apcolite Premium Emulsion',
                brand: 'Asian Paints',
                price: 420,
                mrp: 650,
                rating: 4.6,
                image: Images.paint2,
            },
            {
                id: 3,
                name: 'Tractor Emulsion',
                brand: 'Asian Paints',
                price: 280,
                mrp: 400,
                rating: 4.4,
                image: Images.paint3,
            },
            {
                id: 4,
                name: 'Royale Matt Finish',
                brand: 'Asian Paints',
                price: 500,
                mrp: 720,
                rating: 4.7,
                image: Images.paint4,
            },
            {
                id: 5,
                name: 'Ace Exterior Emulsion',
                brand: 'Asian Paints',
                price: 350,
                mrp: 520,
                rating: 4.5,
                image: Images.paint5,
            },
            {
                id: 6,
                name: 'Royale Shyne',
                brand: 'Asian Paints',
                price: 650,
                mrp: 900,
                rating: 4.8,
                image: Images.paint6,
            },
            {
                id: 9,
                name: 'Royale Shyne',
                brand: 'Asian Paints',
                price: 650,
                mrp: 900,
                rating: 4.8,
                image: Images.paint6,
            },
            {
                id: 7,
                name: 'Weatherproof Exterior',
                brand: 'Asian Paints',
                price: 580,
                mrp: 800,
                rating: 4.6,
                image: Images.paint1,
            },
            {
                id: 8,
                name: 'Weatherproof Exterior',
                brand: 'Berger',
                price: 580,
                mrp: 800,
                rating: 4.6,
                image: Images.paint1,
            },
        ],
    },

    /* ================= PLUMBING ================= */
    {
        id: 'plumbing',
        title: 'Plumbing Products',
        products: [
            {
                id: 1,
                name: 'PVC Pipe 1 inch',
                brand: 'Supreme',
                price: 120,
                mrp: 180,
                rating: 4.3,
                image: Images.plum1,
            },
            {
                id: 2,
                name: 'CPVC Pipe 1.5 inch',
                brand: 'Ashirvad',
                price: 220,
                mrp: 300,
                rating: 4.5,
                image: Images.plum2,
            },
            {
                id: 3,
                name: 'Wall Mixer Tap',
                brand: 'Jaquar',
                price: 1450,
                mrp: 2100,
                rating: 4.6,
                image: Images.plum3,
            },
            {
                id: 4,
                name: 'Bib Cock Faucet',
                brand: 'Cera',
                price: 650,
                mrp: 950,
                rating: 4.4,
                image: Images.plum4,
            },
            {
                id: 5,
                name: 'Angle Valve',
                brand: 'Hindware',
                price: 320,
                mrp: 480,
                rating: 4.3,
                image: Images.plum5,
            },
            {
                id: 6,
                name: 'PVC Elbow Joint',
                brand: 'Supreme',
                price: 60,
                mrp: 90,
                rating: 4.2,
                image: Images.plum6,
            },
            {
                id: 7,
                name: 'Water Tap Extension',
                brand: 'Plumber',
                price: 180,
                mrp: 260,
                rating: 4.4,
                image: Images.plum1,
            },
        ],
    },

    /* ================= ELECTRONICS ================= */
    {
        id: 'electronics',
        title: 'Electronics Products',
        products: [
            {
                id: 1,
                name: 'LED Bulb 9W',
                brand: 'Philips',
                price: 120,
                mrp: 180,
                rating: 4.5,
                image: Images.ele1,
            },
            {
                id: 2,
                name: 'Extension Board',
                brand: 'Havells',
                price: 650,
                mrp: 900,
                rating: 4.6,
                image: Images.ele2,
            },
            {
                id: 3,
                name: 'Ceiling Fan',
                brand: 'Usha',
                price: 2200,
                mrp: 3200,
                rating: 4.4,
                image: Images.ele3,
            },
            {
                id: 4,
                name: 'Switch Socket Combo',
                brand: 'Anchor',
                price: 180,
                mrp: 260,
                rating: 4.3,
                image: Images.ele4,
            },
            {
                id: 5,
                name: 'MCB Switch',
                brand: 'Schneider',
                price: 320,
                mrp: 450,
                rating: 4.5,
                image: Images.ele5,
            },
            {
                id: 6,
                name: 'Electric Wire 1.5 sq mm',
                brand: 'Polycab',
                price: 780,
                mrp: 1100,
                rating: 4.6,
                image: Images.ele6,
            },
            {
                id: 7,
                name: 'LED Panel Light',
                brand: 'Wipro',
                price: 1450,
                mrp: 2100,
                rating: 4.7,
                image: Images.ele4,
            },
        ],
    },

    /* ================= CLEANING ================= */
    {
        id: 'cleaning',
        title: 'Cleaning Products',
        products: [
            {
                id: 1,
                name: 'Floor Cleaner Liquid',
                brand: 'Lizol',
                price: 180,
                mrp: 240,
                rating: 4.5,
                image: Images.clean1,
            },
            {
                id: 2,
                name: 'Disinfectant Spray',
                brand: 'Dettol',
                price: 160,
                mrp: 220,
                rating: 4.6,
                image: Images.clean2,
            },
            {
                id: 3,
                name: 'Glass Cleaner',
                brand: 'Colin',
                price: 120,
                mrp: 170,
                rating: 4.4,
                image: Images.clean3,
            },
            {
                id: 4,
                name: 'Bathroom Cleaner',
                brand: 'Harpic',
                price: 140,
                mrp: 200,
                rating: 4.5,
                image: Images.clean4,
            },
            {
                id: 5,
                name: 'Microfiber Cloth',
                brand: 'Scotch-Brite',
                price: 90,
                mrp: 130,
                rating: 4.3,
                image: Images.clean5,
            },
            {
                id: 6,
                name: 'Scrub Pad',
                brand: 'Scotch-Brite',
                price: 60,
                mrp: 90,
                rating: 4.2,
                image: Images.clean6,
            },
            {
                id: 7,
                name: 'Surface Cleaner Spray',
                brand: 'Dettol',
                price: 200,
                mrp: 280,
                rating: 4.6,
                image: Images.clean1,
            },
        ],
    },


];




export const categoryBrands = {
    painting: [
        { id: 1, name: 'Asian Paints', logo: Icons.brand2 },
        { id: 2, name: 'Berger', logo: Icons.brand1 },
        { id: 3, name: 'Supreme', logo: Icons.brand3 },
        { id: 4, name: 'Plumber', logo: Icons.brand4 },
        { id: 5, name: 'Hindware', logo: Icons.brand5 },
        { id: 6, name: 'Cera', logo: Icons.brand6 },
        { id: 7, name: 'Usha', logo: Icons.brand7 },
        { id: 8, name: 'UrbanMop', logo: Icons.brand8 },

    ],
    plumbing: [
        { id: 1, name: 'Jaquar', logo: Icons.brand5 },
    ],
    electronics: [
        { id: 1, name: 'Havells', logo: Icons.brand10 },
    ],
    cleaning: [
        // { id: 1, name: 'UrbanMop', logo: Icons.brand8 },
    ],
};


export const getBrandData = (categoryId, brandName) => {
    const category = CATEGORY_PRODUCTS.find(
        (item) => item.id === categoryId
    );
    console.log(category)

    if (!category) {
        console.log('❌ Category not found:', categoryId);
        return { count: 0, products: [] };
    }

    const brandProducts = category.products.filter(
        (product) =>
            product.brand.trim().toLowerCase() ===
            brandName.trim().toLowerCase()
    );

    return {
        count: brandProducts.length,
        products: brandProducts,
    };
};
