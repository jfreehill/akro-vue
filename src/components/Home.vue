<template>
  <div class="container">
    <header>
      <h1>A<span class="letter-2">K</span><span class="letter-3">R</span><span class="letter-4">O</span></h1>
      <button class="help" type="button" :class="showHelp?'icon-cancel':'icon-help-circled'" @click="showHelp=!showHelp">?</button>
      <section class="how-to-play" v-show="showHelp" >
        <!-- :class="showHelp ? 'show' : ''" -->
        <h2>How To Play</h2>
        <p>Using the category, make a ducking hilarious acronym (or initialism, if you're a pedant) with the letter selection below.</p>
        <p>You can use the buttons to refresh individual sections, add or remove letters AND start a new round!</p>
        <p>Built &amp; designed by Jeremy Freehill; based on Acrophobia.</p>
      </section>
    </header>
    <h2>Category</h2>
    <div class="display categories">
      <input type="text" class="display-text" v-model="category">
      <button type="button" class="display-refresh icon-arrows-cw" @click="newCategory()">New Category</button>
    </div>
    <h2>Letters</h2>
    <div class="display letters">
      <input type="text" class="display-text" v-model="letters" @input="letterCount = letters.length" maxlength="8">
      <button type="button" class="display-refresh icon-arrows-cw" @click="newLetters()">New Letters</button>
      <div class="display-button-bar">
        <button type="button" class="icon-minus" @click="letterCount--" :disabled="letterCount < 2">-</button>
        <button type="button" @click="letterCount = 3">3</button>
        <button type="button" @click="letterCount = 4">4</button>
        <button type="button" @click="letterCount = 5">5</button>
        <button type="button" class="icon-plus" @click="letterCount = letterCount+1" :disabled="letterCount > 7">+</button>
      </div>
    </div>
    <button class="new-round" type="button" @click="newRound()">New Round!</button>
  </div>
</template>

<script>
import { getCategory } from '@/services/categories'
import * as LetterService from '@/services/letters'

export default {
  name: 'Home',
  data () {
    return {
      letterCount: 3,
      letters: '',
      category: '',
      showHelp: false
    }
  },
  methods: {
    newLetters,
    newCategory,
    newRound
  },
  mounted: newRound,
  watch: {
    letterCount: {
      handler: letterCountUpdate
    }
  }
}

function newLetters () {
  this.letters = LetterService.getLetters(this.letterCount)
}

function newCategory () {
  this.category = getCategory()
}

function newRound () {
  this.newLetters()
  this.newCategory()
}

function letterCountUpdate (newVal) {
  this.letters = LetterService.setLetters(this.letters, newVal)
}
</script>