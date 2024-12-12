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
            // Implement move logic and capturing logic here
            // Example: Check if the move is valid and update the board
            // (This is where you'd add your game rules)

            // For now, we'll just reset the selected piece
            setSelectedPiece(null);
        } else if (piece && piece.color === currentPlayer) {
            // Select the piece if it's the current player's
            setSelectedPiece([row, col]);
        }
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 50px)' }}>
                {board.map((row, rowIndex) =>
                    row.map((_, colIndex) => renderSquare(rowIndex, colIndex))
                )}
            </div>
        );
    };

    return (
        <div>
            <h1>Checkers Game</h1>
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