# Classic Snake Game

In the year 2000, Nokia released the Nokia 3310 cell phone, which in addition to being famous for its indestructibility, also featured a highly addictive game called Snake. The object of this game was to control a snake and eat apples, causing the snake to grow in length until it reached a point where it would not fit on the screen.

MOBILE VERSION COMING SOON!!!!

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Code explanation](#code-explanation)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Game should be able to:

- Move the snake in any direction
- See the score update everytime it eats an apple
- Stop when ever the snake hits a wall or itself
- Show the "You Lose" text when the game is over

### Screenshot

![](./screenshot.png)

### Links

- [Nokia 3310 Snake game video](https://www.youtube.com/shorts/s1reaXh_YwU)
- [Live Site URL](https://rickhalmoguera.github.io/snake-game/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox

### Code explanation

Although it is a simple project, it helped me to learn the use of ForEach , which I used to change the states of rating buttons
To see how you can add code snippets, see below:
```Js
const checkClick = (ratingClickedId)=>{
    const circles= document.querySelectorAll(".rating-btn")
    circles.forEach(circle => {
        circle.style.backgroundColor ="hsl(213, 19%, 18%)"
        circle.style.color ="hsl(217, 12%, 63%)"
    });
```

### Useful resources

- [JavaScript Array forEach](https://www.w3schools.com/jsref/jsref_foreach.asp) - This helped me to implement the code for the ratings states

- [JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp) - How to use this statement

## Author

- Github - [Ricardo Halmoguera](https://github.com/RickHalmoguera)

- Frontend Mentor - [@RickHalmoguera](https://www.frontendmentor.io/profile/RickHalmoguera)


