import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { KripkeComponent } from './pages/kripke/kripke.component';
import { TranslatorComponent } from './pages/translator/translator.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'intro', component: IntroComponent },
    { path: 'kripke', component: KripkeComponent },
    { path: 'translator', component: TranslatorComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
