import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core'
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionUtils } from './utils/action-utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'farmerGo';

  constructor(
    public platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef,
    ){}

  async ngOnInit() {
    this.initializeApp();
    await ActionUtils.waitToExecuteAsync(()=> {this.goToHomePage()}, 1000);

  }

  private initializeApp() {
    const { SplashScreen } = Plugins;

    if (this.platform.is('ios') || this.platform.is('android') && !( this.platform.is('desktop') || this.platform.is('mobileweb') ) ) {
      this.platform.ready().then(async () => {
        console.log("## RUNNING PLATFROM : Moblie");
        window.screen.orientation.lock('landscape');
        SplashScreen.hide(); 
        
        //Show the splash for two seconds and then automatically hide it:
        // await SplashScreen.show({
        //   showDuration: 2000,
        //   autoHide: true,
        // });
      });
      } else {
        console.log("## RUNNING PLATFROM : Browser");
      }
  }

  public goToHomePage() {
    this.router.navigate(["/home"],
      {queryParams : { title : "Home Page", isWork: false}}
    )
  }

  private refreshData():void{
    this.cd.detectChanges();
  }
}
