# Etch-a-Sketch Project

This project is part of [The Odin Project Curriculum](https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project).

It is my second time doing this project and it was a lot easier this time around, with my existing knowledge in Javascript. I decided to approach this project with functional programming and I split my JS into three main functions:

* `UI()`
  * My UI() function controls the basic DOM manipulation (selectors, and my clearButton event listener).

* `renderCanvas()`
  * This function actually draws the canvas, and it uses conditional statements to decide how large or small to make the grid depending on whether the `userInput` variable is defined.

* `drawingColors()`
    * This function assigns a color to the grid. Currently it's hard-coded into an ever-changing rainbow (my personal favorite part of the project, tbh.)

If you're interested in seeing how I solved it the first time around, you can check out my first iteration of this project [here](https://github.com/marinarose92/etch-a-sketch).


