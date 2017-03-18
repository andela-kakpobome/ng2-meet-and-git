import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';

@Injectable()
export class GitService {

  private activeUser;
  constructor(private http: Http) { }

  /**
  * Retrieve the code ninjas from Github
  */
  public getUserData(location = 'lagos', language = 'javascript') {
    return this.http.get(`${environment.gitBaseUrl}/search/users?q=location:${location}+language:${language}`)
        .toPromise();
  }

  /**
  * Set Active User
  *
  * @param object user
  */
  public setActiveUser(user) {
    this.activeUser = user;
  }

  /**
  * Get Active User
  */
  public getActiveUser() {
    return this.activeUser;
  }
}
