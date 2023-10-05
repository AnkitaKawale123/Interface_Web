import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { ClientsComponent } from './clients/clients.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
{path:'home',component:HomeComponent},
{path:'features',component:FeaturesComponent},
{path:'services',component:ServicesComponent},
{path:'portfolios',component:PortfoliosComponent},
{path:'clients',component:ClientsComponent},
{path:'careers',component: CareersComponent},
{path:'about_us',component:AboutUsComponent},
{path:'contact_us',component:ContactUsComponent},
{path:'e_commerce',component:ECommerceComponent},
{path:'commercial_web',component:CommercialWebsitesComponent},
{path:'education',component: EducationComponent},
{path:'sales_lead',component:SalesLeadComponent},
{path:'finance_accounting',component:FinanceAccountingComponent},
{path:'inventory_management',component:InventoryManagementComponent},
{path:'organisation_management',component:OrganisationManagementComponent},
{path:'tourism',component:TourismComponent},
{path:'marketing',component:MarketingComponent},
{path:'software_development',component:SofwareDevelopmentComponent},
{path:'mobileapp_development',component: MobileappDevelopmentComponent},
{path:'commercialweb_development',component: CommercialwebDevelopmentComponent},
{path:'it_consulting',component:ItConsultingComponent},
{path:'online_training',component: OnlineTrainingComponent},
{path:'onlinedigital_marketing',component:OnlinedigitalMarketingComponent},
{path:'business_solution',component:BusinessSolutionsComponent},
{path:'media_advertisement',component:MediaAdvertisementComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
