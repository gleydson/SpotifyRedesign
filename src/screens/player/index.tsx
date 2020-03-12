import React from 'react';

import Header from '@components/header';
import Progress from '@components/progress';

import {
  SafeAreaView,
  Container,
  MusicImage,
  Title,
  Artist,
  Icon,
  IconImage,
  Touchable,
  ContainerMusicInfo,
  ContainerMainIcons,
  ContainerSecondaryIcons,
} from './styled';

const image = require('@assets/images/cards/player/blinding.png');
const pause = require('@assets/images/cards/player/pause.png');
const skipBack = require('@assets/images/cards/player/skip-back.png');
const skipForward = require('@assets/images/cards/player/skip-forward.png');

export default function player() {
  return (
    <SafeAreaView>
      <Container>
        <Header title='Playing' rightIcon='more-horizontal' />
        <ContainerMusicInfo>
          <MusicImage source={image} />
          <Title>Blinding Lights</Title>
          <Artist>The Weeknd</Artist>
        </ContainerMusicInfo>
        <Progress totalTime={335000} currentTime={211030} />
        <ContainerMainIcons>
          <Touchable>
            <IconImage source={skipBack} />
          </Touchable>
          <Touchable>
            <IconImage source={pause} />
          </Touchable>
          <Touchable>
            <IconImage source={skipForward} />
          </Touchable>
        </ContainerMainIcons>
        <ContainerSecondaryIcons>
          <Touchable>
            <Icon name='cast' />
          </Touchable>
          <Touchable>
            <Icon name='heart' />
          </Touchable>
          <Touchable>
            <Icon name='list' />
          </Touchable>
        </ContainerSecondaryIcons>
      </Container>
    </SafeAreaView>
  );
}
