import React from 'react'
import { Link } from "@reach/router";

const About = () => {
    return (
        <main>
            <header>
                <section>
                    <aside>
                        <h4>
                            Game of Life
                        </h4>
                    </aside>
                    <aside className="pr-45">
                        <Link to="/">Home</Link>
                    </aside>
                </section>
                <section>
                    <aside></aside>
                    <aside>
                        <h2>Rules of Life</h2>
                    </aside>
                    <aside></aside>
                </section>
                <section className="pb-45">
                    <aside>
                        <div>
                            <h4>Rule #1</h4>
                            <p>Any live cell with two or three live neighbours survives.</p>
                        </div>
                    </aside>
                    <aside>
                        <div>
                            <h4>Rule #2</h4>
                            <p>Any dead cell with three live neighbours becomes a live cell.</p>
                        </div>
                    </aside>
                    <aside>
                        <div>
                            <h4>Rule #3</h4>
                            <p>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</p>
                        </div>
                    </aside>
                </section>
                <section>
                    <aside>
                        <h2>Turing Completeness</h2>
                    </aside>
                    <aside className="pb-45">
                        <div>
                            <p>A program is considered Turing Complete if it has a theoretical infinite amount of memory, and is able to recognize or decide other data-manipulation rule sets. This can be thought of as an if/else statement.</p>
                            <p>Alan Turing imagined an infinite piece of tape that has equally spaced cells. Each cell had either a zero, or a one. In order to be turing complete, a system would need to evaluate the value in a given cell, and make a decision. For instance, the program advances to cell 235 and reads a one. It evaluates the value it found and makes a conditional change. If cell 235 is one, go to cell 525, etc.</p>
                            <p>Conways Game of Life is Turing Complete because the algorithm calculates the neighbors at a given cell, and, given the set of rules above, determines if the cell should be a one or zero, alive or dead.</p>
                        </div>
                    </aside>
                </section>
                <article className="memoir">
                    <aside>
                        <h3 className="pl-45" style={{ color: "white" }}>Who is John Conway</h3>
                    </aside>
                    <aside>
                        {/* Empty space */}
                    </aside>
                </article>
                <section>
                    <aside>
                        <h2 className="pl-45">The Magic Mathematician</h2>
                    </aside>
                    <aside>
                        <p>John Horton Conway, was an English-born Princeton mathematician whose body of work ranged from the rigorously highbrow to the frivolously fun, earning him prizes and a reputation as a creative, iconoclastic and even magical genius.</p>
                    </aside>
                </section>
                <section>
                    <aside className="p-15"><h4>Born Dec. 26, 1937</h4></aside>
                    <aside className="p-15"><h4>Discovered surreal numbers</h4></aside>
                    <aside className="p-15"><h4>Co-conceptualized the Free Will Theorem</h4></aside>
                </section>
                <a href="https://www.nytimes.com/2020/04/15/technology/john-horton-conway-dead-coronavirus.html">Source</a>
            </header>
        </main >
    )
}

export default About
