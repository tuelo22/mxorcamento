import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl : NavController) {
    this.menu.enable(false);
   }

   loginClick(){
    this.navCtrl.navigateForward('home');
  }  

  ngOnInit() {
  }

}
