import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

const App: React.FC = () => {
  const backgroundStyle = {
    backgroundColor: '#fff',
    alignItems: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={{fontFamily: 'Anonymice Powerline'}}>Hello World</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
