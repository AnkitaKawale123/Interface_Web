import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { ClientsComponent } from './clients/clients.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { CommercialWebsitesComponent } from './commercial-websites/commercial-websites.component';
import { EducationComponent } from './education/education.component';
import { SalesLeadComponent } from './sales-lead/sales-lead.component';
import { FinanceAccountingComponent } from './finance-accounting/finance-accounting.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { OrganisationManagementComponent } from './organisation-management/organisation-management.component';
import { TourismComponent } from './tourism/tourism.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SofwareDevelopmentComponent } from './sofware-development/sofware-development.component';
import { MobileappDevelopmentComponent } from './mobileapp-development/mobileapp-development.component';
import { CommercialwebDevelopmentComponent } from './commercialweb-development/commercialweb-development.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';
import { OnlineTrainingComponent } from './online-training/online-training.component';
import { OnlinedigitalMarketingComponent } from './onlinedigital-marketing/onlinedigital-marketing.component';
import { BusinessSolutionsComponent } from './business-solutions/business-solutions.component';
import { MediaAdvertisementComponent } from './media-advertisement/media-advertisement.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    ServicesComponent,
    PortfoliosComponent,
    ClientsComponent,
    CareersComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ECommerceComponent,
    CommercialWebsitesComponent,
    EducationComponent,
    SalesLeadComponent,
    FinanceAccountingComponent,
    InventoryManagementComponent,
    OrganisationManagementComponent,
    TourismComponent,
    MarketingComponent,
    SofwareDevelopmentComponent,
    MobileappDevelopmentComponent,
    CommercialwebDevelopmentComponent,
    ItConsultingComponent,
    OnlineTrainingComponent,
    OnlinedigitalMarketingComponent,
    BusinessSolutionsComponent,
    MediaAdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
