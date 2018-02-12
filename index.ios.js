//Import a library to help create a component
import React from 'react';
//fromt ReactNative object
import {View, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a Component
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Albums!'} />
      <AlbumList />
    </View>

  );
};

//render it to the device

AppRegistry.registerComponent('albums', ()=>App);
