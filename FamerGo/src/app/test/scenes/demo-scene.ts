import Phaser from 'phaser';

export default class DemoScene extends Phaser.Scene {
  
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('logo', '/assets/phaser3-logo.png');
  }

  create() {
    this.input.addPointer(2);
    this.add.image(400, 120, 'logo');

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
}