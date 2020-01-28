import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { DataService} from './services/data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    DataService
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
 }
