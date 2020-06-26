export class User {

  public email: String;

  public password: String;

  public userType: String;

  public clientId?: number;

  constructor(email: String, password: String, userType: String) {
    this.email = email;
    this.password = password;
    this.userType = userType;
  }

}
