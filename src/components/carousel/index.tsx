import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  Container,
  Carousel,
  TouchableItem,
  ContainerItem,
  Card,
  Label,
} from './styled';

const elton_john = require('@assets/images/cards/main/elton_john.png');
const lalaland = require('@assets/images/cards/main/lalaland.png');
const queen = require('@assets/images/cards/main/queen.png');

interface ItemProps {
  item: { image: ImageSourcePropType; label: string };
  index: number;
}

const data = [
  {
    image: elton_john,
    label: 'Elton John',
  },
  {
    image: lalaland,
    label: 'Lalaland',
  },
  {
    image: queen,
    label: 'Legendary',
  },
];

const carousel: React.SFC = () => {
  function renderItem({ item, index }: ItemProps) {
    return (
      <TouchableItem>
        <ContainerItem key={String(index)}>
          <Card source={item.image} />
          <Label>{item.label}</Label>
        </ContainerItem>
      </TouchableItem>
    );
  }

  return (
    <Container>
      <Carousel data={data} renderItem={renderItem} />
    </Container>
  );
};

export default carousel;
