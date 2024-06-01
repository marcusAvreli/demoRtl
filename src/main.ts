import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
/*import {Button} from 'mgcomponents';
 if (!customElements.get(Button.is)){
  	customElements.define(Button.is, Button);
  }*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  