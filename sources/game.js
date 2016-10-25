"use strict"

import Phaser from '../statics/phaser'
import Boot from './boot'
import Preloader from './preloader'
import MainMenu from './main-menu'
import Level1 from './level-1'

export default class Game extends Phaser.Game {

  constructor() {
    super(800, 600, Phaser.AUTO, 'content', null)

    console.log('created game')

    this.state.add('Boot', Boot, false)
    this.state.add('Preloader', Preloader, false)
    this.state.add('MainMenu', MainMenu, false)
    this.state.add('Level1', Level1, false)

    this.state.start('Boot')
  }

}