'use client';

import { useGameOfLife } from '@/hooks/use-gol';

interface GameOfLifeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function GameOfLife(props: GameOfLifeProps) {
  const gol = useGameOfLife<HTMLDivElement>();

  return <div {...props} ref={gol} />;
}
