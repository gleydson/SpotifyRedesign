import React from 'react';

import Carousel from '@components/carousel';
import Header from '@components/header';

import { SafeAreaView, Container, ContainerCarousel } from './styled';

const elton = require('@assets/images/cards/main/elton_john.png');
const lalaland = require('@assets/images/cards/main/lalaland.png');
const queen = require('@assets/images/cards/main/queen.png');
const search = require('@assets/images/search/search.png');

export default function home() {
  const data = [
    {
      thumbnail: elton,
      label: 'Elton John',
    },
    {
      thumbnail: queen,
      label: 'Legendary',
    },
    {
      thumbnail: lalaland,
      label: 'LaLa',
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Header
          title="Library"
          rightIcon={search}
          rightIconOnPress={() => { }}
        />
        <ContainerCarousel>
          <Carousel title="You have rotation" data={data} />
        </ContainerCarousel>
      </Container>
    </SafeAreaView>
  );
}
