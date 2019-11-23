import {
  Component,
  OnInit
} from '@angular/core';

import {
  AchievementsService
} from './../../../shared/achievements/achievements.service';
import {
  Achievements
} from './../../../shared/achievements/achievements.model';
import {
  Router
} from '@angular/router';
import {
  NgForm
} from '@angular/forms';

import { LoadingComponent } from './../../loading/loading.component'

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  showSpinner: boolean = true;
  ach_list: any;

  constructor(public achService: AchievementsService, private router: Router) {}

  ngOnInit() {
    this.refreshAchievements();
    this.ach_list.subscribe(() => this.showSpinner=false);
  }

  onSubmit(form: NgForm) {
    this.achService.postAchievements(form.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        if (err.status === 422) {
          console.log(422);
        } else {
          console.log(err);
        }
        console.log('Error')
      }
    )
  }

  refreshAchievements() {
    this.achService.getAchievements().subscribe((res) => {
      this.ach_list = res as Achievements[];
      console.log(this.achService.achievements);
      this.showSpinner = false;
    })
  }


}