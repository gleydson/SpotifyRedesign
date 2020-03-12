import React from 'react';

import format from 'date-fns/format';

import {
  Container,
  ContainerProgress,
  Progress,
  Point,
  ContainerTime,
  Time,
} from './styled';

interface Props {
  totalTime: number;
  currentTime: number;
}

const progress: React.SFC<Props> = ({ totalTime, currentTime }) => {
  function getProgress() {
    if (currentTime === 0 || totalTime === 0) {
      return 0;
    }
    return currentTime / totalTime;
  }

  function formatDate(milliseconds: number) {
    if (milliseconds !== 0) {
      const result = format(new Date(0, 0, 0, 0, 0, 0, milliseconds), 'm:s');
      if (result !== '0:0') {
        return result;
      }
    }
    return '0';
  }

  return (
    <Container>
      <ContainerProgress>
        <Progress progress={getProgress()} />
        <Point />
      </ContainerProgress>
      <ContainerTime>
        <Time>{formatDate(currentTime)}</Time>
        <Time>{formatDate(totalTime)}</Time>
      </ContainerTime>
    </Container>
  );
};

export default progress;
