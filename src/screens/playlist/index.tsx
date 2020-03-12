import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';

import Button from '@components/button';
import Header from '@components/header';

import {
  SafeAreaView,
  IMusicList,
  Container,
  ContainerHeaderPlaylist,
  PlaylistImage,
  PlaylistCreatedBy,
  ContainerButtons,
  ContainerMusicList,
  TouchableMusicItem,
  MusicItem,
  Thumbnail,
  ContainerText,
  Title,
  Description,
  Icon,
} from './styled';

const blinding = require('@assets/images/cards/playlist/blindign_lights.png');
const candide = require('@assets/images/cards/playlist/candide_crush.png');
const dance_monkey = require('@assets/images/cards/playlist/dance_monkey.png');
const elthon = require('@assets/images/cards/playlist/elthon.png');
const oui = require('@assets/images/cards/playlist/oui_ou_non.png');
const shotgun = require('@assets/images/cards/playlist/shotgun.png');
const stressed = require('@assets/images/cards/playlist/stressed_out.png');
const vibes = require('@assets/images/cards/playlist/vibes.png');

const playlistData: IMusicList[] = [
  {
    thumbnail: blinding,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
  },
  {
    thumbnail: candide,
    title: 'Candide Crush',
    artist: 'Thérapie Taxi',
  },
  {
    thumbnail: dance_monkey,
    title: 'Dance Monkey',
    artist: 'Tones and I',
  },
  {
    thumbnail: shotgun,
    title: 'Shotgun',
    artist: 'George Erza',
  },
  {
    thumbnail: elthon,
    title: 'Success',
    artist: 'Elton John',
  },
  {
    thumbnail: oui,
    title: 'Oui ou Non',
    artist: 'Angèle',
  },
  {
    thumbnail: stressed,
    title: 'Stressed Out',
    artist: 'twenty one pilots',
  },
  {
    thumbnail: vibes,
    title: 'Vibes',
    artist: 'The Vibes',
  },
];

export default function playlist() {
  const { params } = useRoute();
  const navigation = useNavigation();

  function goToPlayer() {
    navigation.navigate('Player');
  }

  return (
    <SafeAreaView>
      <Container>
        <Header
          title={params.headerTitle}
          backButtonEnabled
          rightIcon='more-horizontal'
        />
        <ContainerHeaderPlaylist>
          <PlaylistImage source={params.playlistImage} />
          <PlaylistCreatedBy>{params.createdBy}</PlaylistCreatedBy>
        </ContainerHeaderPlaylist>
        <ContainerButtons>
          <Button icon='play' buttonDescription='Play' />
          <Button icon='shuffle' buttonDescription='Shuffle' />
        </ContainerButtons>
        <ContainerMusicList>
          {playlistData.map(item => (
            <TouchableMusicItem key={item.artist} onPress={goToPlayer}>
              <MusicItem>
                <Thumbnail source={item.thumbnail} />
                <ContainerText>
                  <Title>{item.title}</Title>
                  <Description>{item.artist}</Description>
                </ContainerText>
                <Icon name='more-horizontal' />
              </MusicItem>
            </TouchableMusicItem>
          ))}
        </ContainerMusicList>
      </Container>
    </SafeAreaView>
  );
}
