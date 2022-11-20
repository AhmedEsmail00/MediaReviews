import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SettingComponent } from './setting/setting.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    SettingComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
