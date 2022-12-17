import React from 'react';
import {Hello} from 'components';
import {Container} from './styles';
import {Text} from 'react-native';

const HelloScreen: React.FC = () => {
  console.log('entrei');
  return (
    <Container>
      <Hello label="Hello World" />
    </Container>
  );
};

export default HelloScreen;
