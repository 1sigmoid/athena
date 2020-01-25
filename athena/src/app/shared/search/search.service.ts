import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Search } from './search.model';
import { User_Search } from './user_search.model'

@Injectable({
  providedIn: "root"
})

export class SearchService {
  private name = new BehaviorSubject(null);
  currentName = this.name.asObservable();
  results: any; // Event Search Results
  userResults: any; // User Search Results
  message: any; // Message to be displayed
  interestResults: any; // Interest Search Results
  tabChange: any; // Searchres page tab
  tabAgain: any; // Searchres2 page tab
  orgResults: any; // Organizer userr search results

  userDetails: any; //User click on user details

  selSearch: Search = { // Event Search
    keyword: '',
    usecase: 1
  };

  selOrgUser = { //Organizer Search
    orgKey: ""
  }

  eventTab:any; //Changing tab to following events tab on events page

  selSearch1: User_Search = { //User Search
    userKey: ""
  }

  constructor(private http: HttpClient) {}

  changeName(name: string) {
    this.name.next(name);
  }

  postSearch(search: Search){
    console.log('Search method')
    console.log(search)
    return this.http.post("http://ec2-13-126-238-105.ap-south-1.compute.amazonaws.com:3000/event-search", search)
  }

  postUserSearch(userSearch: User_Search) {
    console.log('User Search Method')
    console.log(userSearch)
    return this.http.post('http://ec2-13-126-238-105.ap-south-1.compute.amazonaws.com:3000/api/search/users', userSearch)
  }

  getUserDetails(userDetails){
    console.log("User Details method")
    return this.http.post("http://ec2-13-126-238-105.ap-south-1.compute.amazonaws.com:3000/api/tracker/click-on-user-event", userDetails)
  }

  getUserDetailsorg(userdetails) {
    return this.http.post("http://ec2-13-126-238-105.ap-south-1.compute.amazonaws.com:3000/api/tracker/vectorless/click-on-user-event", userdetails)
  }

  postInterestSearch(interest){
    console.log(interest)
    return this.http.post("http://ec2-13-126-238-105.ap-south-1.compute.amazonaws.com:3000/api/searchbyinterests", interest)
  }

  postOrgSearch(obj){
    return this.http.post("http://ec2-13-126-238-105.ap-south-1.compute.amazonaws.com:3000/api/search/organizers", obj)
  }

  postEventSearch(obj){
    return this.http.post("http://ec2-13-126-238-105.ap-south-1.compute.amazonaws.com:3000/api/organiser/searchbyinterests", obj)
  }
}
