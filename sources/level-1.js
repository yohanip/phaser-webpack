"use strict"

import Phaser from '../statics/phaser'
import Player from './player'

export default class Level1 extends Phaser.State {

  create() {

    this.background = this.add.sprite(0, 0, 'level1');

    this.music = this.add.audio('music', 1, false);
    this.music.play();

    this.player = new Player(this.game, 130, 284);

  }

}