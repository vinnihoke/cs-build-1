// @ts-check
import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';

const numRows = 25;
const numCols = 50;

const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];

const generateEmptyGrid = () => {
    const rows = [];
    // Making a grid of empty zeroes, meaning dead cells.
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 0))
    }

    return rows;
}


const Game = () => {
    const [grid, setGrid] = useState(() => {
        return generateEmptyGrid();
    })

    const [speed, setSpeed] = useState(100)

    const [running, setRunning] = useState(false);

    const [template, setTemplate] = useState(false);

    const generations = useRef(0)

    const toggleTemplate = () => {
        setTemplate(!template)
    }


    const [generationStyle, setGenerationStyle] = useState("silver")
    const generationColors = () => {
        if (generations.current < 100) return "silver"
        if (generations.current > 100 && generations.current < 200) return setGenerationStyle("#E6B0AA")
        if (generations.current > 200 && generations.current < 300) return setGenerationStyle("#CD6155")
        if (generations.current > 300) return setGenerationStyle("#641E16")
    }

    const generateRandomGrid = () => {
        const rows = [];
        // Making a grid of empty zeroes, meaning dead cells.
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)))
        }

        setGrid(rows);
    }


    // Setting the current running status to false. This is needed because the running value changes, but the callback does not.
    const runningRef = useRef(running);
    runningRef.current = running;


    const runSimulation = useCallback(() => {
        // Acts as a recursive break function.
        if (!runningRef.current) {
            return;
        }

        generationColors()

        setGrid(grid => {
            return produce(grid, gridCopy => {
                for (let r = 0; r < numRows; r++) {
                    for (let c = 0; c < numCols; c++) {
                        // You could also use a series of if statements to calculate neighbors.
                        let neighbors = 0;
                        // Destructuring x and y from the operations.
                        operations.forEach(([x, y]) => {
                            const newR = r + x;
                            const newC = c + y;
                            if (newR >= 0 && newR < numRows && newC >= 0 && newC < numCols) {
                                neighbors += grid[newR][newC]
                            }
                        });
                        // If a cell has fewer than two, or more than three neighbors, it dies.
                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[r][c] = 0
                            // Otherwise, if cell is dead, but has 3 live neighbors, it returns to life.
                        } else if (grid[r][c] === 0 && neighbors === 3) {
                            gridCopy[r][c] = 1;
                        }
                    }
                }
            })
        });

        setTimeout(runSimulation, speed);
    }, [speed])

    return (
        <section>
            <aside>
                <section>
                    <div style={{ display: "grid", gridTemplateColumns: `repeat(${numCols}, 20px)` }}>
                        {grid.map((rows, r) =>
                            rows.map((col, c) => {
                                return <div key={`${r}-${c}`}
                                    onClick={() => {
                                        const newGrid = produce(grid, gridCopy => {
                                            gridCopy[r][c] = grid[r][c] ? 0 : 1;
                                        });
                                        setGrid(newGrid);
                                    }}
                                    style={{ width: 20, height: 20, backgroundColor: grid[r][c] ? generationStyle : undefined, border: "solid 1px whitesmoke" }}
                                />
                            })
                        )}
                    </div>
                </section>
                <p>Delay: {speed}ms</p>
                <p>Generations: {generations.current++}</p>
                <section>
                    <aside>
                        <button className="m-10" onClick={() => {
                            setRunning(!running);
                            if (!running) {
                                runningRef.current = true;
                                runSimulation();
                            }
                        }}>
                            {running ? "Stop" : "Start"}
                        </button>
                    </aside>
                    <aside>
                        <button className="m-10" onClick={() => {
                            generateRandomGrid()
                        }}>
                            Randomize
                        </button>
                    </aside>
                    <aside>
                        <button className="m-10"
                            onClick={() => {
                                generations.current = 0
                                setGrid(generateEmptyGrid());
                            }}>
                            Clear
                        </button>
                    </aside>
                    <aside>
                        {running ? (
                            <button disabled className="m-10">
                                -
                            </button>
                        ) : (
                                <button className="m-10"
                                    onClick={() => {
                                        if (speed > 0) {
                                            setSpeed(speed - 10);
                                        }
                                    }}>
                                    -
                                </button>
                            )}
                    </aside>
                    <aside>
                        {running ? (
                            <button disabled className="m-10">
                                +
                            </button>
                        ) : (
                                <button className="m-10"
                                    onClick={() => {
                                        setSpeed(speed + 10);
                                    }}>
                                    +
                                </button>
                            )}

                    </aside>
                </section>
                <section>
                    <aside>
                        <button onClick={toggleTemplate}>Toggle Template</button>
                        {template ? (
                            <div className="template">
                            </div>
                        ) : null}
                    </aside>
                </section>
            </aside>
        </section >
    )
}

export default Game
