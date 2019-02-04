import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Orçamemtos',
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
      icon: 'settings'
    }, 
    {
      title: 'Sair',
      url: '/home',
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
