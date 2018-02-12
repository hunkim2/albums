import React from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import {View, Text, Image, Linking} from 'react-native';

const AlbumDetails = ({album}) => {
  const {
    thumbnail_image,
    title,
    artist,
    image,
    url
  } = album;

  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;
  console.log(album);

  return(
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button
          onPress={() => Linking.canOpenURL(url).then(supported => {
            if(!supported) {
              console.log('can\'t handle this url: ', url);
            }
            else{
              return Linking.openURL(url);
            }
          })}
      >Buy Me</Button>
      </CardSection>
    </Card>
  );
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetails
