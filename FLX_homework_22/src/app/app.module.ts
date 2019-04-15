import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

import { EmployeeService } from './services/employee.service';
import { FilterPipe} from './services/filter.pipe';

const appRoutes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/create',      component: EmployeeCreateComponent },
  { path: 'employee/:id',      pathMatch: 'full', component: EmployeeDetailsComponent },
  { path: 'employee/edit/:id',      component: EmployeeEditComponent },
  { path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
