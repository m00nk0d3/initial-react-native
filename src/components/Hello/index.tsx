import React from 'react';
import {HelloText} from './styles';

// This is just a start component for me to have something on the screen  on the beginning
interface Props {
  label: string;
}
const Hello: React.FC<Props> = ({label}) => (<HelloText>{label}</HelloText>)

export default Hello;
