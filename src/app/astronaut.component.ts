import {Component, OnDestroy, Input} from '@angular/core';

import {Subscription} from 'rxjs';
import {MissionService} from './mission.service';

@Component({
  selector: 'app-astronaut',
  template: `
    <p>
      {{astronaut}}: <strong>{{mission}}</strong>
      <button mat-stroked-button
          (click)="confirm()"
          [disabled]="!announced || confirmed">
        Confirm</button>
    </p>
  `,
})
export class AstronautComponent implements OnDestroy {
  @Input() astronaut: string;
  mission = '<no mission announced>';
  announced = false;
  confirmed = false;

  private subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.confirmed = false;
        this.announced = true;
      }
    );
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}