import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoginModule } from './app/login.module';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(LoginModule);