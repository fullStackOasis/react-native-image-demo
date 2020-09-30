/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
<script src="http://localhost:8097"></script>
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>A flower</Text>
              <Text style={styles.sectionDescription}>
                This is a flower image displayed in a React Native app. The original app was created using `npx react-native init AwesomeProject` and then the content was removed and mostly replaced with an image asset.
              </Text>
            </View>
			<View>
			<Image source={require('./assets/14784479665_f6ff3f76e2_o.jpg')} style={styles.responsiveImage} />
			</View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  // Solution from https://stackoverflow.com/questions/29642685/maintain-aspect-ratio-of-image-with-full-width-in-react-native
	responsiveImage: {
	  width: '100%',
	  // Without height undefined it won't work
	  height: undefined,
	  // figure out your image aspect ratio
	  // this isn't really aspect ratio. It is used to figure out the height.
	  // If you set it to 40/3, the image gets severely cropped in the y-direction.
	  // If you set it to 1/30, the image is severely enlarged in the y-direction.
	  // If you set it to 1/1, the image is square.
	  // If you set it to 2/1, the image is twice as wide as it is high.
	  aspectRatio: 2 / 1,
	},

});

export default App;
