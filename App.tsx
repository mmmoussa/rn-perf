/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function ListItem({item}: {item: number}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const expensiveOperation = Array(10000)
    .fill(undefined)
    .map((_, idx) => new Date().getTime() + idx);
  return (
    <View
      style={{
        height: 60,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: isDarkMode ? Colors.white : Colors.black,
        overflow: 'hidden',
      }}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Item number {item}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        Keep scrolling!
      </Text>
    </View>
  );
}

const data = Array(1000)
  .fill(undefined)
  .map((_, idx) => idx);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isListVisible, setIsListVisible] = React.useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            flex: 1,
          }}>
          <Pressable onPress={() => setIsListVisible(!isListVisible)}>
            <Text style={{padding: 20}}>Toggle list visibility</Text>
          </Pressable>
          {isListVisible && (
            <FlatList
              data={data}
              renderItem={({item}) => {
                return <ListItem item={item} />;
              }}
              getItemLayout={(_data, index) => ({
                length: 80,
                offset: 80 * index,
                index,
              })}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
