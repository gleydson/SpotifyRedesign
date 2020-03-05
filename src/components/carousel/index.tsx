import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  Container,
  Carousel,
  ContainerItem,
  Parallax,
  Label,
  Title,
} from './styled';

interface CarouselItem {
  thumbnail: ImageSourcePropType;
  label: string;
  onPress?(): void;
}

interface Props {
  title: string;
  data: CarouselItem[];
}

const carousel: React.SFC<Props> = ({ title, data }) => {
  function renderItem(item: { item: CarouselItem; index: number }) {
    return (
      <ContainerItem key={item.index}>
        <Parallax source={item.item.thumbnail} parallaxFactor={0.4} />
        <Label>{item.item.label}</Label>
      </ContainerItem>
    );
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Carousel data={data} renderItem={renderItem} hasParallaxImages />
    </Container>
  );
};

export default carousel;
