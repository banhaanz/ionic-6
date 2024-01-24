import Phaser from 'phaser';

export const gameConfig: any =  {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#33A5E7',
    scale: {
      width: window.innerWidth,
      height: window.innerHeight,
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      
    }
  };
