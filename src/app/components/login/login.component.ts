import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/user.model";
import {Message} from "../../shared/models/message.model";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() public canLogin: boolean;

  message: Message;

  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService,
    private authService:AuthService
  ) {
  }

  ngOnInit(): void {
    this.message = new Message('','danger',);
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    if(this.canLogin){
      this.showMessage('Регистрация прошла успешно. Теперь вы можете войти','success')
    }
  }

  onSubmit() {
    const formData = this.form.value;

    this.userService.getUserByEmail(formData.email).subscribe((user: User) => {
      if (user.password === formData.password) {
        this.message.text = '';
        this.authService.login();
        window.localStorage.setItem('user',JSON.stringify(user));
        this.activeModal.close();
      } else {
        this.showMessage('Пароль не верный');
      }
    }, (error) => {
        this.showMessage('Пользователь не найден')

    })
  };

  private showMessage( text:string, type:string = 'danger'){
    this.message = new Message(text,type);
    window.setTimeout(()=>{
      this.message.text = '';
    },5000)
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

}
