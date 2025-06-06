import React, { useState, useEffect } from 'react';

const CheckersGame = () => {
    const [board, setBoard] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState('red');
    const [selectedPiece, setSelectedPiece] = useState(null);

    useEffect(() => {
        // Initialize the board with pieces
        const initialBoard = Array(8).fill(null).map((_, row) => {
            return Array(8).fill(null).map((_, col) => {
                if ((row + col) % 2 === 0) {
                    return null; // Light squares
                } else if (row < 3) {
                    return { color: 'black', isKing: false }; // Black pieces
                } else if (row > 4) {
                    return { color: 'red', isKing: false }; // Red pieces
                }
                return null; // Empty squares
            });
        });
        setBoard(initialBoard);
    }, []);

    const handleSquareClick = (row, col) => {
        const piece = board[row][col];

        // If a piece is selected, attempt to move it
        if (selectedPiece) {
            const [selectedRow, selectedCol] = selectedPiece;
            // Check if the move is valid and update the board
            if (piece === null) {
                const moveStatus = validMovePiece(selectedRow, selectedCol, row, col, board[selectedRow][selectedCol].color === 'red' ? -1 : 1);
                //if the piece is a king, it can move both directions
                if (!moveStatus[0] && board[selectedRow][selectedCol].isKing) {
                    moveStatus = validMovePiece(selectedRow, selectedCol, row, col, board[selectedRow][selectedCol].color === 'red' ? 1 : -1);
                }
                if (moveStatus[0]) {
                    // Move the piece
                    const newBoard = board.map(r => r.slice());
                    newBoard[row][col] = newBoard[selectedRow][selectedCol];
                    newBoard[selectedRow][selectedCol] = null;

                    // Check for king promotion
                    if ((row === 0 && newBoard[row][col].color === 'red') || (row === 7 && newBoard[row][col].color === 'black')) {
                        newBoard[row][col].isKing = true;
                    }

                    setBoard(newBoard);

                    // Switch player
                    if (!moveStatus[1]) {
                        setCurrentPlayer(currentPlayer === 'red' ? 'black' : 'red');
                        setSelectedPiece(null);
                    } else {
                        // If the move is valid and allows for another jump, keep the piece selected
                        setSelectedPiece([row, col]);
                    }
                } else {
                    // If the move is invalid, deselect the piece
                    setSelectedPiece(null);
                    // alert('Invalid move');
                }
            } else if (piece.color !== currentPlayer) {
                // If the clicked piece is an opponent's, implement capturing logic
                // For simplicity, let's just deselect the piece
                setSelectedPiece(null);
            } else {
                setSelectedPiece(null);
            }
        } else if (piece && piece.color === currentPlayer) {
            // Select the piece if it's the current player's
            setSelectedPiece([row, col]);
        }
    };

    const validMovePiece = (fromRow, fromCol, toRow, toCol, direction) => {
        // Checking if the move is valid, returns [isValid, switchPlayer]
        const piece = board[fromRow][fromCol];
        const rowDiff = toRow - fromRow;
        const colDiff = toCol - fromCol;

        //check if correct direction
        if (!piece.isKing && direction === -1 && rowDiff > 0) {
            return [false,true]; // Invalid move, red pieces can only move up
        } else if (!piece.isKing && direction === 1 && rowDiff < 0) {
            return [false,true]; // Invalid move, black pieces can only move down
        }

        // Check if the move is diagonal and one square forward
        if (Math.abs(rowDiff) === 1 && Math.abs(colDiff) === 1) {
            return [true,false]; // Simple move
        }
        // Check for capturing
        if (Math.abs(rowDiff) === 2 && Math.abs(colDiff) === 2) {
            const midRow = (fromRow + toRow) / 2;
            const midCol = (fromCol + toCol) / 2;
            const midPiece = board[midRow][midCol];
            if ( !(midPiece === null) && midPiece.color !== currentPlayer) {
                board[midRow][midCol] = null; // Capture the piece
                //check for double jump
                if (checkAvailableJumps(toRow, toCol, fromRow, fromCol)) {
                    return [true,true]; // Valid capture move with potential for another jump
                }
                return [true,false]; // Valid capture move with no further jumps
            }
        }
        return [false,true]; // Invalid move
    };

    const checkAvailableJumps = (row, col, pieceRow, pieceCol) => {
        // Check if there are any available jumps for the selected piece
        const piece = board[pieceRow][pieceCol];
        const directions = (piece.isKing || row === 0 || row === 7) ? [-2, 2] : [piece.color === 'red' ? -2 : 2];
        for (let direction of directions) {
            const potentialJumps = [
                { row: row + direction, col: col + 2 },
                { row: row + direction, col: col - 2 },
            ];
            for (let { row: newRow, col: newCol } of potentialJumps) {
                if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                    const midRow = (row + newRow) / 2;
                    const midCol = (col + newCol) / 2;
                    if (!(midRow < 1 || midRow > 7)) {
                        const midPiece = board[midRow][midCol];
                        if (!(midPiece === null) && midPiece.color !== piece.color && board[newRow][newCol] === null) {
                            return true; // There is a valid jump available
                        }
                    }
                }
            }
        }
        return false; // No valid jumps available
    };

    const renderSquare = (row, col) => {
        const piece = board[row][col];
        const isSelected = selectedPiece && selectedPiece[0] === row && selectedPiece[1] === col;

        return (
            <div
                key={`${row}-${col}`}
                onClick={() => handleSquareClick(row, col)}
                style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: (row + col) % 2 === 0 ? 'white' : 'gray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: isSelected ? '2px solid blue' : '1px solid black',
                }}
            >
                {piece && (
                    <div
                        style={{
                            width: '30px',
                            height: '30px',
                            backgroundColor: piece.color,
                            borderRadius: piece.isKing ? '50%' : '0',
                        }}
                    />
                )}
            </div>
        );
    };

    const renderBoard = () => {
        return (
            //centered grid
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 50px)'}}>
                {board.map((row, rowIndex) =>
                    row.map((_, colIndex) => renderSquare(rowIndex, colIndex))
                )}
            </div>
        );
    };

    return (
        <div style={{ margin: '30px auto'}}>
            {renderBoard()}
        </div>
    );
};

export default CheckersGame;


// import React, { useState, useEffect } from 'react';

// // checkers game
// const CheckersGame = () => {
//     const [board, setBoard] = useState([]);
//     const [currentPlayer, setCurrentPlayer] = useState('red');
//     const [selectedPiece, setSelectedPiece] = useState(null);

//     useEffect(() => {
//         // Initialize the board here
//         // You can use a nested array to represent the board state
//         // Each element in the array can be an object representing a square on the board
//         // For example, { color: 'red', isKing: false } represents a red piece that is not a king
//         // You can set the initial state of the board based on the rules of checkers
//         // Make sure to update the state using setBoard

//     }, []);

//     const handleSquareClick = (row, col) => {
//         // Implement the logic for handling a square click here
//         // You can use the row and col parameters to identify the clicked square
//         // You can update the state of the selected piece using setSelectedPiece
//         // You can also update the state of the board using setBoard
//         // Make sure to handle the game rules, such as moving and capturing pieces
//     };

//     return (
//         <div>
//             {/* Render the board here */}
//             {/* You can use nested loops to render the squares */}
//             {/* For each square, you can render a div with appropriate styling */}
//             {/* You can also conditionally render the pieces based on the board state */}
//         </div>
//     );
// };