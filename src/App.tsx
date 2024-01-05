/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{...backgroundStyle, ...styles.sectionContainer}}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={{fontSize: 32, marginBottom: 24, fontWeight: 'bold'}}>
            SDR Streamer
          </Text>
          <View style={{...styles.call}}>
            <View>
              <Text>ICON HERE</Text>
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>100101</Text>
              <Text>4044</Text>
              <Text></Text>
            </View>
            <View style={{marginLeft: 'auto'}}>
              <Text>2024-01-05 00:09:23</Text>
              <View style={{alignSelf: 'flex-end'}}>
                <Text>00:32</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  call: {
    backgroundColor: Colors.lighter,
    padding: 24,
    borderRadius: 16,
    flexDirection: 'row',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
