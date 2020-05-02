import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from '../../services/storage/storage.service';
import { AuthService } from "../../services/auth/auth.service";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  user: any = {
    name: '',
    username: '',
    profile: '',
    current: '',
    password: '',
    validation: ''
  };

  constructor(private storage: StorageService,
              private auth: AuthService,
              private toastCtrl: ToastController,
              private router: Router) { }

  async ngOnInit() {
    await this.storage.getData('user').then(async user => {
      this.user.name = user.name;
      this.user.username = user.username;
      this.user.profile = user.profileName;
    });
  }

  async saveForm(form: NgForm) {
    if (form.valid) {
      const user = { ...form.value, username: this.user.username };
      this.auth.password(user).subscribe((response: any) => {
        if(response.changed){
          this.showMessage();
          this.router.navigate(['/login'], { replaceUrl: true });
        }
      });
    }
  }

  async showMessage() {
    const alert = await this.toastCtrl.create({
      color: 'fucsia',
      message: 'La contraseña se cambió con éxito',
      duration: 2000
    });
    await alert.present();
  }
}
