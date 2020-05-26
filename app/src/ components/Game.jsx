import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';

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
    for (row in numRows) {
        rows.push(Array.from(Array(numCols), () => 0))
    }

    return rows;
}

const Game = () => {
    const [grid, setGrid] = useState(() => {
        return generateEmptyGrid();
    })

    const [running, setRunning] = useState(false);

    // Setting the current running status to false.
    const runingRef = useRef(running);
    runningRef.current = running;

    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }

        setGrid(grid => {
            return product(grid, gridCopy => {
                for (let i = 0; i < numRows; i++) {
                    for (let k = 0; k < numCols; k++) {
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newK = k + y;
                            if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                                neighbors += g[newI][newK]
                            }
                        });

                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][k] = 0
                        } else if (g[i][k] === 0 && neighbors === 3) {
                            gridCopy[i][k] = 1;
                        }
                    }
                }
            })
        });

        setTimeout(runSimulation, 100);
    }, [])

    return (
        <div>

        </div>
    )
}

export default Game
