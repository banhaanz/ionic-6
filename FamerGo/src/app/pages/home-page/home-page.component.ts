import { Component, OnInit } from '@angular/core';
import { gameConfig } from '../../service/game-service/game-config';
// import DemoScene from '../../scenes/demo-scene';
import {DemoInputMultiDrag, DemoPointerDown, DemoDPad01} from '../../test/index';
import { ActionUtils } from 'src/app/utils/action-utils';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public txt1:string = 'WAITING...'
  public txt2:string = ''

  constructor() { }

  async ngOnInit(): Promise<void> {
    console.log("============= HomePageComponent")
    await ActionUtils.waitToExecuteAsync(() => { }, 500);
    await ActionUtils.waitToExecuteAsync(()=> {this.showText1()}, 500);
    await ActionUtils.waitToExecuteAsync(()=> {this.gameRun()}, 500);

  }

  private gameRun(){
    this.txt1 = '## FARMER GO ##'
    this.txt2 = ''
    const game = new Phaser.Game(
      Object.assign( gameConfig, {
        scene: [DemoDPad01]
      })
    );
  }

  private showText1() {
    this.txt1 = 'Hello World!!';
    this.txt2 = 'This project has been developed by Ionic 6 & Angular 12.'; 
  }

}
