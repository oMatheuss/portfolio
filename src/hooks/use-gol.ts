import { useEffect, useRef } from 'react';

const createMatrix = (rows: number, cols: number): number[][] => {
  return Array(rows)
    .fill(undefined)
    .map(() => Array(cols).fill(0));
};

const copyMatrix = (array: number[][]): number[][] => {
  return array.map((row) => [...row]);
};

const mod = (num: number, max: number) => {
  return ((num % max) + max) % max;
};

export function useGameOfLife<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (containerRef.current === null) return;
    const container = containerRef.current;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context === null) return;

    container.appendChild(canvas);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.setAttribute('width', rect.width.toString());
      canvas.setAttribute('height', rect.height.toString());
    };

    resize();
    window.addEventListener('resize', resize);

    const COLS = 256;
    const ROWS = 256;

    let back_buf = createMatrix(ROWS, COLS);
    let front_buf = createMatrix(ROWS, COLS);

    const add_pattern = (pattern: number[][], cx: number, cy: number) => {
      for (let dy = 0; dy < pattern.length; dy++) {
        for (let dx = 0; dx < pattern[dy]!.length; dx++) {
          const x = mod(cx + dx, COLS);
          const y = mod(cy + dy, ROWS);
          back_buf[x]![y] = pattern[dy]![dx]!;
        }
      }
    };

    const glider = (x: number, y: number) => {
      const glider = [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
      ];
      add_pattern(glider, x, y);
    };

    const blinker = (x: number, y: number) => {
      const blinker = [[1, 1, 1]];
      add_pattern(blinker, x, y);
    };

    const spaceship = (x: number, y: number) => {
      const spaceship = [
        [0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
      ];
      add_pattern(spaceship, x, y);
    };

    function pulsar(x: number, y: number) {
      const pulsar = [
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      ];
      add_pattern(pulsar, x, y);
    }

    const randomPattern = () => {
      const patterns = [blinker, glider, spaceship, pulsar];
      const target = patterns[Math.floor(Math.random() * 4)];
      const randomX = Math.floor(Math.random() * COLS);
      const randomY = Math.floor(Math.random() * ROWS);
      target!(randomX, randomY);
    };

    for (let k = 0; k < COLS / 2; k++) randomPattern();

    const render = () => {
      const { width, height } = context.canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      const cellSize = width > height ? width : height;
      const cellWidth = cellSize / COLS;
      const cellHeight = cellSize / ROWS;

      context.fillStyle = 'currentColor';
      for (let y = 0; y < ROWS; ++y) {
        for (let x = 0; x < COLS; ++x) {
          if (back_buf[y]![x] === 1) {
            context.fillRect(
              x * cellWidth,
              y * cellHeight,
              cellWidth,
              cellHeight,
            );
          }
        }
      }
    };

    const check_nbors = (cx: number, cy: number): number => {
      let count = 0;
      for (let dy = -1; dy <= 1; ++dy) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dy === 0 && dx === 0) continue;
          const x = mod(cx + dx, COLS);
          const y = mod(cy + dy, ROWS);

          if (front_buf[y]![x] === 1) count++;
        }
      }
      return count;
    };

    const update = () => {
      for (let y = 0; y < ROWS; ++y) {
        for (let x = 0; x < COLS; ++x) {
          const nborsAlive = check_nbors(x, y);
          const isAlive = front_buf[y]![x] === 1;
          if (isAlive && (nborsAlive < 2 || nborsAlive > 3)) {
            back_buf[y]![x] = 0;
          } else if (!isAlive && nborsAlive === 3) {
            back_buf[y]![x] = 1;
          }
        }
      }

      front_buf = copyMatrix(back_buf);
    };

    let disposed = false;
    const interval = 1000 / 10;
    let after = 0,
      elapsed = 0;

    window.requestAnimationFrame(function animation(time) {
      elapsed = time - after;

      if (elapsed > interval) {
        after = time - (elapsed % interval);

        update();
        render();
      }

      if (!disposed) window.requestAnimationFrame(animation);
    });

    return () => {
      disposed = true;
      window.removeEventListener('resize', resize);
      container.removeChild(canvas);
    };
  }, []);

  return containerRef;
}
