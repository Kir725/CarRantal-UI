import { Component, OnInit } from '@angular/core';
import {Message} from "../../../shared/models/message.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../../shared/models/user.model";
import {LoginComponent} from "../login/login.component";



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  message: Message;

  form: FormGroup;


  constructor(public activeModal: NgbActiveModal,
              private userService: UserService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.message = new Message('','danger',);
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email],
        this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const {email,password} = this.form.value;

    const user = new User(email,password,'common');
    this.activeModal.close();
    this.userService.createUser(user).subscribe((user: User) => {
      this.openModalLogin();
    });

  }

  private showMessage( text:string, type:string = 'danger'){
    this.message = new Message(text,type);
    window.setTimeout(()=>{
      this.message.text = '';
    },5000)
  }

  forbiddenEmails(control:FormControl): Promise<any>{
    return new Promise((resolve,reject) =>{
      this.userService.getUserByEmail(control.value).
      subscribe((user:User)=>{
        if(user){
          resolve ({forbiddenEmail: true});
        }
        else{
          resolve(null);
        }
    })
  })
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  private openModalLogin(){
    const modalRef = this.modalService.open(LoginComponent,{ centered: true });
    modalRef.componentInstance.canLogin = true;
  }

}
