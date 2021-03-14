import React from 'react';
import {View, Text} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const Home = () => {
  return (
    <View>
      <Header
        leftComponent={{icon: 'menu', color: 'white'}}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <Text>Home ready...</Text>
    </View>
  );
};

export default Home;
