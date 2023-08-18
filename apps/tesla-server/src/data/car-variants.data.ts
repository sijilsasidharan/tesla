import { CarVariant } from "@data-models";

export const MODEL_S_VARIANTS: CarVariant[] = [
    {
        id: 'plaid',
        name: 'Plaid',
        model_id: 'model-s',
        price: 108490,
        range: 396,
        seating: 5,
        motor: 'AWD Tri Motor',
        cargo_capacity: 28,
        acceleration: 1.99,
        top_speed: 200,
        color_and_images: [
            ['black', [
            'http://localhost:3333/assets/cars/model-s/model-s-plaid-1.png',
            'http://localhost:3333/assets/cars/model-s/model-s-plaid-2.png'
                ]
            ],
            ['red', [
                'http://localhost:3333/assets/cars/model-s/model-s-plaid-red-1.png',
                'http://localhost:3333/assets/cars/model-s/model-s-plaid-red-2.png'
                ]
            ],
            ['blue', [
                'http://localhost:3333/assets/cars/model-s/model-s-plaid-blue-1.png',
                'http://localhost:3333/assets/cars/model-s/model-s-plaid-blue-2.png'
                ]
            ]
        ]
    },
    {
        id: 'base',
        name: '',
        model_id: 'model-s',
        price: 88490,
        range: 406,
        seating: 5,
        motor: 'AWD Dual Motor',
        cargo_capacity: 28,
        acceleration: 1.99,
        top_speed: 200,
        color_and_images: [['silver', [
            'http://localhost:3333/assets/cars/model-s/model-s-1.png',
            'http://localhost:3333/assets/cars/model-s/model-s-2.png'
        ]], 
        ['red', [
            'http://localhost:3333/assets/cars/model-s/model-s-red-1.png',
            'http://localhost:3333/assets/cars/model-s/model-s-red-2.png'
            ]
        ], 
        ['blue', [
            'http://localhost:3333/assets/cars/model-s/model-s-blue-1.png',
            'http://localhost:3333/assets/cars/model-s/model-s-blue-2.png'
            ]
        ]]
    }
];

export const MODEL_X_VARIANTS: CarVariant[] = [
    {
        id: 'plaid',
        name: 'Plaid',
        model_id: 'model-x',   
        price: 108490,
        range: 333,
        seating: 6,
        motor: 'AWD Tri Motor',
        cargo_capacity: 88,
        acceleration: 2.5,
        top_speed: 163,
        color_and_images: [['black', [
            'http://localhost:3333/assets/cars/model-x/model-x-1.png',
            'http://localhost:3333/assets/cars/model-x/model-x-2.png'
        ]]]
    },
    {
        id: 'base',
        name: '',
        model_id: 'model-x',
        price: 98490,
        range: 348,
        seating: 7,
        motor: 'AWD Dual Motor',
        cargo_capacity: 88,
        acceleration: 3.8,
        top_speed: 149,
        color_and_images: [['red', [
            'http://localhost:3333/assets/cars/model-x/model-x-plaid-1.png',
            'http://localhost:3333/assets/cars/model-x/model-x-plaid-2.png'
        ]]]
    }
];

export const MODEL_3_VARIANTS: CarVariant[] = [
    {
        id: 'performance',
        name: 'Performance',
        model_id: 'model-3',
        price: 55240,
        range: 315,
        seating: 5,
        motor: 'AWD Dual Motor',
        cargo_capacity: 23,
        acceleration: 3.1,
        top_speed: 162,
        color_and_images: [
            ['red', [
            'http://localhost:3333/assets/cars/model-3/model-3-performance-1.png'
                ]
            ]
        ]
    },
    {
        id: 'long-range',
        name: 'Long Range',
        model_id: 'model-3',
        price: 47240,
        range: 333,
        seating: 5,
        motor: 'AWD Dual Motor',
        cargo_capacity: 23,
        acceleration: 4.2,
        top_speed: 145,
        color_and_images: [['white', [
            'http://localhost:3333/assets/cars/model-3/model-3-long-range-1.png'
        ]]]
    },
    {
        id: 'rear-wheel-drive',
        name: 'Rear Wheel Drive',
        model_id: 'model-3',
        price: 40240,
        range: 272,
        seating: 5,
        motor: 'RWD',
        cargo_capacity: 23,
        acceleration: 5.8,
        top_speed: 140,
        color_and_images: [['blue', [
            'http://localhost:3333/assets/cars/model-3/model-3-rear-wheel-drive-1.png'
        ]]]
    }
];

export const MODEL_Y_VARIANTS: CarVariant[] = [
    {
        id: 'performance',
        name: 'Performance',
        model_id: 'model-y',
        price: 54490,
        range: 303,
        seating: 5,
        motor: 'AWD Dual Motor',
        cargo_capacity: 76,
        acceleration: 3.5,
        top_speed: 155,
        color_and_images: [
            ['red', [
            'http://localhost:3333/assets/cars/model-y/model-y-performance-1.png',
            'http://localhost:3333/assets/cars/model-y/model-y-performance-2.png'
                ]
            ]
        ]
    },
    {
        id: 'long-range',
        name: 'Long Range',
        model_id: 'model-y',
        price: 50490,
        range: 330,
        seating: 7,
        motor: 'AWD Dual Motor',
        cargo_capacity: 76,
        acceleration: 4.8,
        top_speed: 135,
        color_and_images: [['blue', [
            'http://localhost:3333/assets/cars/model-y/model-y-long-range-1.png',
            'http://localhost:3333/assets/cars/model-y/model-y-long-range-2.png'
        ]]]
    },
    {
        id: 'rear-wheel-drive',
        name: 'Rear Wheel Drive',
        model_id: 'model-y',
        price: 47740,
        range: 279,
        seating: 5,
        motor: 'RWD',
        cargo_capacity: 76,
        acceleration: 5.8,
        top_speed: 135,
        color_and_images: [['silver', [
            'http://localhost:3333/assets/cars/model-y/model-y-rear-wheel-drive-1.png',
            'http://localhost:3333/assets/cars/model-y/model-y-rear-wheel-drive-2.png'
        ]]]
    }
];

const carVariants = [
    ...MODEL_S_VARIANTS,
    ...MODEL_3_VARIANTS,
    ...MODEL_X_VARIANTS,
    ...MODEL_Y_VARIANTS,

    
    ...MODEL_S_VARIANTS,
    ...MODEL_3_VARIANTS,
    ...MODEL_X_VARIANTS,
    ...MODEL_Y_VARIANTS,

    
    ...MODEL_S_VARIANTS,
    ...MODEL_3_VARIANTS,
    ...MODEL_X_VARIANTS,
    ...MODEL_Y_VARIANTS
];

export { carVariants }
