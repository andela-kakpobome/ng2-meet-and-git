import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GitService } from '../git.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public users;
  public location;
  public language;

  constructor(
    private git: GitService,
    private router: Router
  ) { }

  ngOnInit() {
    this.git.getUserData()
        .then((res) => {
          this.users = res.json().items;
        });
  }

  /**
  * View users profile
  */
  public showProfile(user) {
    this.git.setActiveUser(user);
    this.router.navigate(['/profile']);
  }

  /**
  * Change params
  */
  public search() {
    this.git.getUserData(this.location, this.language)
        .then((res) => {
          this.users = res.json().items;
        });
  }
}
