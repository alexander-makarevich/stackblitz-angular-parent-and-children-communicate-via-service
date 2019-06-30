import { Component } from '@angular/core';

import { MissionService } from './mission.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ MissionService ]
})
export class AppComponent  {
  name = 'Angular';
}
