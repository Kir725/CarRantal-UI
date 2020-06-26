import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {userUrls} from "../../config/userUrls";
import {User} from "../models/user.model";

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {
  }

  getUserByEmail(email: String){
    return this.http.get(userUrls.getByEmail + email);
  }

  createUser(user:User){
    return this.http.post(userUrls.post, user);
  }
}
