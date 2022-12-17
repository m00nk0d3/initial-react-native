import React from 'react';
import {Hello} from 'components';
import {Container} from './styles';

const HelloScreen: React.FC = () => {
  return (
    <Container>
      <Hello label="Hello World" />
    </Container>
  );
};

export default HelloScreen;
