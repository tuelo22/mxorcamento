import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage:any = 'login';

  public appPages = [
    {
      title: 'Orçamentos',
      url: '/home',
      icon: 'clipboard'
    },
    {
      title: 'Endereços',
      url: '/enderecos',
      icon: 'business'
    },
    {
      title: 'Configurações',
      url: '/configuracoes',
      icon: 'construct'    
    },
    {
      title: 'Sair',
      url: '/login',
      icon: 'exit'
    },   
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
