import Phaser from 'phaser';

export class DemoInputMultiDrag extends Phaser.Scene {
  private graphics: any;
  private hero1: any;
  private hero2: any;

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

    this.hero2 = this.add.sprite(400, 500, 'hero').setInteractive({draggable: true});  
    this.hero2.on('drag', (pointer: any, dragX: any, dragY: any) => {
      // this.setHeroNewPos(this.hero1, dragX, dragY)
    });
        
    this.graphics = this.add.graphics();

  }

  update() {
        if (this.input.pointer1.isDown || this.input.pointer2.isDown || this.input.pointer3.isDown)
          {
              this.graphics.clear();
          }

        this.graphics.fillStyle(0xff0000, 1);
        this.graphics.fillRect(this.input.pointer1.x, this.input.pointer1.y, 33, 33);

        this.graphics.fillStyle(0x00ff00, 1);
        this.graphics.fillRect(this.input.pointer2.x, this.input.pointer2.y, 44, 44);

        this.graphics.fillStyle(0x0000ff, 1);
        this.graphics.fillRect(this.input.pointer3.x, this.input.pointer3.y, 44, 44);
  }
}