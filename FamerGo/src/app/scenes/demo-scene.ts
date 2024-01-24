import Phaser from 'phaser';

export default class DemoScene extends Phaser.Scene {
  private graphics: any;

  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('logo', '/assets/phaser3-logo.png');
    this.load.image('hero', '/assets/character/hero02.png');
  }

  create() {
    this.input.addPointer(2);
    this.add.image(400, 120, 'logo');
    const hero = this.add.sprite(400, 300, 'hero').setInteractive();    
    this.input.setDraggable(hero);

    hero.on('drag', (pointer: any, dragX: any, dragY: any) =>
        {
          console.log("drag X : ", dragX)
          console.log("drag Y : ", dragY)
            dragX;
            dragY;
        });
        
    this.graphics = this.add.graphics();



    //set tweens
    const farmerGo = this.add.text(400, 200, 'FarmerGo');
    this.tweens.add({
      targets: farmerGo,
      y: 550,
      duration: 1500,
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }

  update ()
    {
        if (this.input.pointer1.isDown || this.input.pointer2.isDown || this.input.pointer3.isDown)
          {
              this.graphics.clear();
          }

        this.graphics.fillStyle(0xff0000, 1);
        this.graphics.fillRect(this.input.pointer1.x, this.input.pointer1.y, 44, 44);

        this.graphics.fillStyle(0x00ff00, 1);
        this.graphics.fillRect(this.input.pointer2.x, this.input.pointer2.y, 44, 44);

        this.graphics.fillStyle(0x0000ff, 1);
        this.graphics.fillRect(this.input.pointer3.x, this.input.pointer3.y, 44, 44);
    }
}