## Welcome to Conway's Game of Life in Javascript
This project is in dedication to John Conway, who unfortunately passed away this past April.

> [Link to live project.](https://game-of-life.vinnihoke.now.sh/)

### Who is John Conway?
John Horton Conway, born Dec. 26th, 1937, was an English-born Princeton mathematician whose body of work ranged from the rigorously highbrow to the frivolously fun, earning him prizes and a reputation as a creative, iconoclastic and even magical genius.

#### Notable Achievements
* Discovered surreal numbers
* Co-conceptualized the Free Will Theorem


## Understanding the Game
This is a Turing complete cellular automata project that only requires an initial input, making this a zero player game that requires no interation. In order to make it more interactive I've incorporated clickable cells to allow you to change the course of the game. Adding to the delay will slow the game down, or conversely speed it up. Cells age and change colors as generation pass.

#### Rule #1
Any live cell with two or three live neighbours survives.

#### Rule #2
Any dead cell with three live neighbours becomes a live cell.

#### Rule #3
All other live cells die in the next generation. Similarly, all other dead cells stay dead.

## What is Turing Completeness?
A program is considered Turing Complete if it has a theoretical infinite amount of memory, and is able to recognize or decide other data-manipulation rule sets. This can be thought of as an if/else statement.

Alan Turing imagined an infinite piece of tape that has equally spaced cells. Each cell had either a zero, or a one. In order to be turing complete, a system would need to evaluate the value in a given cell, and make a decision. For instance, the program advances to cell 235 and reads a one. It evaluates the value it found and makes a conditional change. If cell 235 is one, go to cell 525, etc.

Conways Game of Life is Turing Complete because the algorithm calculates the neighbors at a given cell, and, given the set of rules above, determines if the cell should be a one or zero, alive or dead.


### Resources
https://youtu.be/DvVt11mPuM0