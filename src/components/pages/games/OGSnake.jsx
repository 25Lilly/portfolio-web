import React, { useState, useEffect } from 'react';

const OGSnakeGame = () => {
    let maximum_x = window.innerWidth * 0.90;
    let maximum_y = window.innerHeight * 0.80;
    const [snake, setSnake] = useState([{ x: maximum_x/2, y: maximum_y/2 }]);
    const [direction, setDirection] = useState({ x: 1, y: 0 });
    const [food, setFood] = useState({ x: 50, y: 50 });
    const [gameOver, setGameOver] = useState(false);
    const step = 15;

    const initGame = () => {
        setGameOver(false);
        setSnake([{ x: maximum_x/2, y: maximum_y/2 }]);
        setDirection({ x: 1, y: 0 });
        generateFood();
    }

    const youLose = () => {
        if (gameOver) {
            return;
        } else {
            setGameOver(true);
            alert('Game Over');
        }
    }

    const moveSnake = () => {
        if (gameOver) return;
        
        setSnake((prev) => {
            const newSnake = [...prev];
            const head = { x: newSnake[0].x + direction.x * step, y: newSnake[0].y + direction.y * step };
            //add a check for the boundaries and wrap the snake around
            if (head.x >= maximum_x) head.x = 0;
            if (head.x < 0) head.x = maximum_x;
            if (head.y >= maximum_y) head.y = 0;
            if (head.y < 0) head.y = maximum_y;
            newSnake.unshift(head); // Add new head to the front
              // Check if the snake has collided with itself
              if (newSnake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)) {
                    youLose();
                    setDirection({ x: 0, y: 0 });
              }

              // Check if the snake has eaten the food (overlap of head and food)
              if (
                  head.x < food.x + step &&
                  head.x + step > food.x &&
                  head.y < food.y + step &&
                  head.y + step > food.y
                ) {
                  // Grow the snake by not popping the tail
                  generateFood();
              } else {
                  newSnake.pop(); // Remove the last segment if not eating
              }
              return newSnake;
        });
    };

    const generateFood = () => {
        const newFood = {
            x: Math.floor(Math.random() * (maximum_x / step)) * step,
            y: Math.floor(Math.random() * (maximum_y / step)) * step,
        };
        setFood(newFood);
    };

    const handleKeyDown = (e) => {
        switch (e.key) {
          case 'ArrowUp':
            if (direction.y === 0) setDirection({ x: 0, y: -1 });
            break;
          case 'ArrowDown':
            if (direction.y === 0) setDirection({ x: 0, y: 1 });
            break;
          case 'ArrowLeft':
            if (direction.x === 0) setDirection({ x: -1, y: 0 });
            break;
          case 'ArrowRight':
            if (direction.x === 0) setDirection({ x: 1, y: 0 });
            break;
          default:
            break;
        }
    };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    const gameInterval = setInterval(moveSnake, 100);
    //add event listener for when window is resized
    window.addEventListener('resize', () => {
        maximum_y = window.innerHeight * 0.80;
        maximum_x = window.innerWidth * 0.90;
    });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(gameInterval);
    };
  }, [direction]);

  return (
    <div className="game-area" style={{ position: 'relative', width: maximum_x, height: maximum_y}}>
        {snake.map((segment, index) => (
        <div
          key={index}
          className="snake-segment"
          style={{
            position: 'absolute',
            width: step,
            height: step,
            backgroundColor: 'green',
            left: segment.x,
            top: segment.y,
          }}
        />
      ))}
      <div
        className="food"
        style={{
          position: 'absolute',
          width: step,
          height: step,
          backgroundColor: 'red',
          left: food.x,
          top: food.y,
        }}
      />
        {gameOver && (
            <div className="game-over-message">
                <h2 style={{ fontSize: '3rem'}}> Game Over </h2>
                <button className="play-again-button" onClick={initGame}>
                    Play Again 
                </button>
            </div>
        )}
    </div>
  );
};

export default OGSnakeGame;