import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureComponent } from './components/feature/feature.component';
import { CtaComponent } from './components/cta/cta.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'feature', component: FeatureComponent },
    { path: 'cta', component: CtaComponent },
    { path: 'testimonial', component: TestimonialComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'footer', component: FooterComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
