import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent],
  providers: [
    AuthService,
    UserService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModle: CoreModule) {
    if (parentModle) {
      throw new Error( 'CoreModule has already been loaded. Import Core modules in the AppModule only.');
    }
  }
 }
