import Phaser from 'phaser';

export class DemoDPad01 extends Phaser.Scene {
    private hero1: any;
    private dPad01: any;
  
    constructor() {
      super('GameScene');
    }
  
    preload() {
      this.load.image('dPad01', '/assets/utlils/DpadJoy01-1.png');
      this.load.image('hero', '/assets/character/hero02.png');
    }
  
    create() {
      this.input.addPointer(2);
      // this.add.image(400, 120, 'logo');
      this.hero1 = this.add.sprite(400, 300, 'hero').setInteractive({draggable: true}); 
      this.dPad01 = this.add.image(170, 300, 'dPad01').setInteractive({draggable: true}); 

    }
  
    update() {
          if (this.input.pointer1.isDown || this.input.pointer2.isDown || this.input.pointer3.isDown)
            {
                this.setSpriteNewPos(this.hero1, this.input.pointer1.x, this.input.pointer1.y)
                // this.setSpriteNewPos(this.dPad01, this.input.pointer1.x, this.input.pointer1.y)
            }
  
            // this.setHeroNewPos(this.hero1, this.input.pointer1.x, this.input.pointer1.y)
  
    }
  
    private setSpriteNewPos(sprite: Phaser.GameObjects.Sprite, x: number, y:number){
        console.log("drag X : " + x + ", drag Y : " + y)      
        sprite.setX(x);
        sprite.setY(y);
    }
  
  
  }