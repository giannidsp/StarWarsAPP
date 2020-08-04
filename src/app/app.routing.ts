import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home/home.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { AddPlanetComponent } from './components/property/add-planet/add-planet.component';

// Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'planetas', component: PlanetasComponent},
    {path: 'add', component: AddPlanetComponent},
    {path: '**', component: HomeComponent},
    
];

//Exportar modulo del routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =  RouterModule.forRoot(appRoutes);