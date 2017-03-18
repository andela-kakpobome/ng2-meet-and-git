import { Component, OnInit } from '@angular/core';

import { GitService } from '../git.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public activeUser;

  constructor(private git: GitService) { }

  ngOnInit() {
    this.activeUser = this.git.getActiveUser();
  }
}
