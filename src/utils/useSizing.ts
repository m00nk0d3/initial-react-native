import {Dimensions} from 'react-native';

export const useSizing = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const vh = (s:number) => Dimensions.get('window').height * s /100
  return {width, height, vh}
};

export default useSizing;
