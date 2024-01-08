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
            <View style={{justifyContent:"center", alignItems: "center", paddingRight:8}}>
              <View style= {{width: 24, height: 24}}>
              <Text>▶️</Text>
              </View>
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Transit Control</Text>
              <Text>Run 262</Text>
              <Text></Text>
            </View>
            <View
              style={{
                marginLeft: 'auto',
                alignItems: 'flex-end',
                flexDirection: 'column',
              }}>
              <Text>2024-01-05</Text>
              <Text>01:09:23</Text>
              <Text>CID: 14</Text>
            </View>
          </View>
          <View style={{...styles.call}}>
            <View style={{justifyContent:"center", alignItems: "center", paddingRight:8}}>
              <View style= {{width: 24, height: 24}}>
              <Text>▶️</Text>
              </View>
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Transit Control</Text>
              <Text>Run 260</Text>
              <Text></Text>
            </View>
            <View
              style={{
                marginLeft: 'auto',
                alignItems: 'flex-end',
                flexDirection: 'column',
              }}>
              <Text>2024-01-05</Text>
              <Text>01:09:23</Text>
              <Text>CID: 14</Text>
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
    marginVertical: 4,
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
