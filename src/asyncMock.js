export const productsBazar = [
    {
        id: '1',
        name: 'Vaso de cerámica floral',
        description: 'Elegante vaso de cerámica con detalles pintados a mano.',
        price: 15000,
        image: '../../img/vaso.jpeg',
        category: 'Deco',
        stock: 8
    },
    {
        id: '2',
        name: 'Juego de té de porcelana',
        description: 'Juego de té de porcelana fina para seis personas.',
        price: 39000,
        image: '../../img/juego-de-te.jpeg',
        category: 'Deco',
        stock: 10
    },
    {
        id: '3',
        name: 'Cuadro abstracto moderno',
        description: 'Cuadro abstracto con colores vibrantes, ideal para añadir un toque de modernidad a tu hogar.',
        price: 49000,
        image: '../../img/cuadro.jpeg',
        category: 'Deco',
        stock: 8
    },
    {
        id: '4',
        name: 'Jarrón de cerámica artesanal',
        description: 'Elegante jarrón de cerámica hecho a mano, perfecto para decorar cualquier espacio.',
        price: 25000,
        image: '../../img/jarron.jpeg',
        category: 'Deco',
        stock: 15
    },
    {
        id: '5',
        name: 'Alfombra de yute natural',
        description: 'Alfombra de yute tejida a mano, suave y resistente, para un toque rústico y acogedor.',
        price: 39000,
        image: '../../img/alfombra.jpeg',
        category: 'Deco',
        stock: 20
    },
    {
        id: '6',
        name: 'Cuadro abstracto moderno',
        description: 'Cuadro abstracto con colores vibrantes, ideal para añadir un toque de modernidad a tu hogar.',
        price: 49000,
        image: '../../img/cuadro-2.jpeg',
        category: 'Deco',
        stock: 8
    },
    {
        id: '7',
        name: 'Alfombra de yute natural',
        description: 'Alfombra de yute tejida a mano, suave y resistente, para un toque rústico y acogedor.',
        price: 39000,
        image: '../../img/alfombra-2.jpeg',
        category: 'Deco',
        stock: 20
    },
    {
        id: '8',
        name: 'Juego de platos blancos',
        description: 'Juego de 12 platos llanos, hondos y de postre en porcelana blanca.',
        price: 39000,
        image: '../../img/juego-platos-blancos.jpeg',
        category: 'Vajilla',
        stock: 20
    },
    {
        id: '9',
        name: 'Taza de café',
        description: 'Taza de cerámica, ideal para el desayuno.',
        price: 5000,
        image: '../../img/taza-cafe.jpeg',
        category: 'Vajilla',
        stock: 50
    },
    {
        id: '10',
        name: 'Sartén antiadherente',
        description: 'Sartén de 28 cm con revestimiento antiadherente para una fácil limpieza.',
        price: 29000,
        image: '../../img/sarten-antiadherente.jpeg',
        category: 'Cocina',
        stock: 15
    },
    {
        id: '11',
        name: 'Olla a presión',
        description: 'Olla a presión de 6 litros para cocinar más rápido y saludable.',
        price: 79000,
        image: '../../img/olla-presion.jpeg',
        category: 'Cocina',
        stock: 8
    },
    {
        id: '12',
        name: 'Cucharón de madera',
        description: 'Cucharón de madera resistente al calor para revolver sin rayar.',
        price: 9000,
        image: '../../img/cucharon-madera.jpeg',
        category: 'Cocina',
        stock: 20
    },
    {
        id: '13',
        name: 'Plato hondo blanco',
        description: 'Plato hondo de cerámica blanca, ideal para sopas y cremas.',
        price: 9000,
        image: '../../img/plato-hondo.jpeg',
        category: 'Vajilla',
        stock: 20
    },
    {
        id: '14',
        name: 'Taza de té con flores',
        description: 'Taza de cerámica con diseño floral, perfecta para el té.',
        price: 3000,
        image: '../../img/taza-te.jpeg',
        category: 'Vajilla',
        stock: 15
    },
    {
        id: '15',
        name: 'Espátula de silicona',
        description: 'Espátula resistente al calor, ideal para repostería.',
        price: 5000,
        image: '../../img/espatula-silicona.jpeg',
        category: 'Cocina',
        stock: 20
    },
    {
        id: '16',
        name: 'Cuchillo de chef',
        description: 'Cuchillo multiusos de acero inoxidable.',
        price: 45000,
        image: '../../img/cuchillo-chef.jpeg',
        category: 'Cocina',
        stock: 8
    },
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productsBazar)
    }, 500);
});

export const getProduct = id => {return productsBazar.find((product) => product.id == id)};

export const getCategory = category => productsBazar.filter((product) => product.category === category);

export const categories = [...new Set(productsBazar.map(product => product.category))];