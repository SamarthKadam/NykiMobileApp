import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {CrossfadeImage} from 'react-native-crossfade-image';
import Description from '../components/Loading/Description';
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Loading/Button';
const images = [
  { uri: 'https://i.ibb.co/TmbYvMT/one.jpg' },
  { uri: 'https://i.ibb.co/jWgxzm5/two.jpg' },
  { uri: 'https://i.ibb.co/GMcsmLw/three.jpg' },
  { uri: 'https://i.ibb.co/FhFBSHk/four.jpg' },
];
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function Loading() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(image => (image + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <View style={styles.screen}>
      <StatusBar hidden={false}></StatusBar>
      <View style={styles.imgContainer}>
        <CrossfadeImage
          style={styles.img}
          source={images[currentImage]}></CrossfadeImage>
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.9)']}
          style={styles.gradient}
        />
        <Description></Description>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#010101',
  },
  imgContainer: {
    position: 'relative',
    flexDirection: 'column',
  },
  img: {
    height: height,
    width: width,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 0.9,
  },
});
