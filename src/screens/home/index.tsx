import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageSourcePropType } from 'react-native';

import Carousel from '@components/carousel';
import Header from '@components/header';

import {
  SafeAreaView,
  Container,
  Title,
  ContainerCarousel,
  TouchableCard,
  Session,
  SessionScroll,
  CardItem,
  Card,
  Label,
  Description,
} from './styled';

const fell = require('@assets/images/cards/by_mood/fell.png');
const fitness = require('@assets/images/cards/by_mood/fitness.png');
const focus = require('@assets/images/cards/by_mood/focus.png');
const motivation = require('@assets/images/cards/by_mood/motivation.png');
const actual_hits = require('@assets/images/cards/dont_miss_it_today/actual_hits.png');
const good_vibes = require('@assets/images/cards/dont_miss_it_today/good_vibes.png');
const keep_the_move = require('@assets/images/cards/dont_miss_it_today/keep_the_move.png');
const search = require('@assets/images/search/search.png');

export default function home() {
  const navigation = useNavigation();

  function goToPlaylistScreen(
    headerTitle: string,
    playlistImage: ImageSourcePropType,
    createdBy: string
  ) {
    navigation.navigate('Playlist', {
      headerTitle,
      playlistImage,
      createdBy,
    });
  }

  return (
    <SafeAreaView>
      <Container>
        <Header title='Library' rightIcon={search} />
        <ContainerCarousel>
          <Title>You heavy rotation</Title>
          <Carousel />
        </ContainerCarousel>
        <Session>
          <Title>Music by Mood</Title>
          <SessionScroll>
            <TouchableCard>
              <CardItem>
                <Card source={fitness} />
                <Label>Fitness</Label>
              </CardItem>
            </TouchableCard>
            <TouchableCard>
              <CardItem>
                <Card source={motivation} />
                <Label>Motivation</Label>
              </CardItem>
            </TouchableCard>
            <TouchableCard>
              <CardItem>
                <Card source={focus} />
                <Label>Focus</Label>
              </CardItem>
            </TouchableCard>
            <TouchableCard>
              <CardItem>
                <Card source={fell} />
                <Label>Fell</Label>
              </CardItem>
            </TouchableCard>
          </SessionScroll>
        </Session>
        <Session>
          <Title>Don&rsquo;t miss it today</Title>
          <SessionScroll>
            <TouchableCard
              onPress={() =>
                goToPlaylistScreen(
                  'Good Vibes only',
                  good_vibes,
                  'Playlist by Spotify · 2020'
                )
              }
            >
              <CardItem>
                <Card source={good_vibes} />
                <Label>Good Vibes only</Label>
                <Description>
                  The best of yesterday&rsquo;s and today&rsquo;s music
                </Description>
              </CardItem>
            </TouchableCard>
            <TouchableCard
              onPress={() =>
                goToPlaylistScreen(
                  'Keep the move!',
                  keep_the_move,
                  'Playlist by Spotify · 2020'
                )
              }
            >
              <CardItem>
                <Card source={keep_the_move} />
                <Label>Keep the move!</Label>
                <Description>The supercharged playlist</Description>
              </CardItem>
            </TouchableCard>
            <TouchableCard
              onPress={() =>
                goToPlaylistScreen(
                  'Actual hits',
                  actual_hits,
                  'Playlist by Spotify · 2020'
                )
              }
            >
              <CardItem>
                <Card source={actual_hits} />
                <Label>Actual hits</Label>
                <Description>
                  Ed Sheran at the topof the first world playlist
                </Description>
              </CardItem>
            </TouchableCard>
          </SessionScroll>
        </Session>
      </Container>
    </SafeAreaView>
  );
}
