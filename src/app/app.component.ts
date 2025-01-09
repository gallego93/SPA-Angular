import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FeatureComponent } from "./components/feature/feature.component";
import { CtaComponent } from "./components/cta/cta.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
@Component({
  selector: 'app-root',
  imports: [RouterModule, HomeComponent, HeroComponent, FeatureComponent, CtaComponent, TestimonialComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-spa';

  ngOnInit(): void {
    initFlowbite();
  }
}
