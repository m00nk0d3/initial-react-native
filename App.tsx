

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';

const App:React.FC = () => {

  const backgroundStyle = {
    backgroundColor: "#fff",
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <Text>Initial project</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
