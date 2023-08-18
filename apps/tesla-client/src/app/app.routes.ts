import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./landing/landing.module').then(module => module.LandingModule)
    },
    {
        path: 'cars',
        loadChildren: () => import('./car-listing/car-listing.module').then(module => module.CarListingModule)
    },
    {
        path: 'model/:modelId',
        loadChildren: () => import('./car-details/car-details.module').then(module => module.CarDetailsModule)
    },
    {
        path: 'model/:modelId/:variantId',
        loadChildren: () => import('./car-details/car-details.module').then(module => module.CarDetailsModule)
    }
];
