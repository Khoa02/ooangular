import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ContractComponent } from './contract/contract.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ReportComponent } from './report/report.component';
import { SearchComponent } from './search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxLoadingModule } from 'ngx-loading';
import { ArchwizardModule } from 'angular-archwizard';
import { UtilitiesModule } from '../utilities/utilities.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContractComponent,
    CatalogComponent,
    ReportComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CommonModule,
    ArchwizardModule,
    NgxPaginationModule,
    NgxLoadingModule,
    UtilitiesModule,
    FormsModule
  ]
})
export class ClientModule { }
