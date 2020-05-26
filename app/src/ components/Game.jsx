// @ts-check
import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const numRows = 50;
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
    // Making a grid of empty zeroes.
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

    const buttonMessage = setTimeout(() => {
        return <span>`Speed: ${speed}`</span>
    }, 1000)

    // Setting the current running status to false.
    const runningRef = useRef(running);
    runningRef.current = running;

    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }

        setGrid(grid => {
            return produce(grid, gridCopy => {
                for (let i = 0; i < numRows; i++) {
                    for (let k = 0; k < numCols; k++) {
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newK = k + y;
                            if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                                neighbors += grid[newI][newK]
                            }
                        });

                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][k] = 0
                        } else if (grid[i][k] === 0 && neighbors === 3) {
                            gridCopy[i][k] = 1;
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
                        {grid.map((rows, i) =>
                            rows.map((col, k) => (
                                <div key={`${i}-${k}`}
                                    onClick={() => {
                                        const newGrid = produce(grid, gridCopy => {
                                            gridCopy[i][k] = grid[i][k] ? 0 : 1;
                                        });
                                        setGrid(newGrid);
                                    }}
                                    style={{ width: 20, height: 20, backgroundColor: grid[i][k] ? "silver" : undefined, border: "solid 1px whitesmoke" }}
                                />
                            ))
                        )}
                    </div>
                </section>
                <p>Delay: {speed}ms</p>
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
                            const rows = [];
                            for (let i = 0; i < numRows; i++) {
                                rows.push(
                                    Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
                                );
                            }
                            setGrid(rows)
                        }}>
                            Randomize
                        </button>
                    </aside>
                    <aside>
                        <button className="m-10"
                            onClick={() => {
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
                                        setSpeed(speed - 10);
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
            </aside>
        </section >
    )
}

export default Game
