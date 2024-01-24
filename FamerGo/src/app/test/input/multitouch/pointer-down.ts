import Phaser from 'phaser';

export class DemoPointerDown extends Phaser.Scene {
  private hero1: any;

  constructor() {
    super('GameScene');
  }

  preload() {
    // this.load.image('logo', '/assets/phaser3-logo.png');
    this.load.image('hero', '/assets/character/hero02.png');
  }

  create() {
    this.input.addPointer(2);
    // this.add.image(400, 120, 'logo');
    this.hero1 = this.add.sprite(400, 300, 'hero').setInteractive({draggable: true});  
    this.hero1.on('drag', (pointer: any, dragX: any, dragY: any) => {
      // this.setHeroNewPos(this.hero1, dragX, dragY)
    });
  }

  update() {
        if (this.input.pointer1.isDown || this.input.pointer2.isDown || this.input.pointer3.isDown)
          {
              this.setSpriteNewPos(this.hero1, this.input.pointer1.x, this.input.pointer1.y)
          }

          // this.setHeroNewPos(this.hero1, this.input.pointer1.x, this.input.pointer1.y)

  }

  private setSpriteNewPos(sprite: Phaser.GameObjects.Sprite, x: number, y:number){
      console.log("drag X : " + x + ", drag Y : " + y)      
      sprite.setX(x);
      sprite.setY(y);
  }


}