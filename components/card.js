import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Card(props) {
  const { uri, title, style } = props;
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.logo} source={{ uri: uri }} />

      <Text style={styles.paragraph}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 5,
    backgroundColor: 'white',
  },
  paragraph: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  logo: {
    height: '85%',
    width: '100%',
    resizeMode: 'cover',
  },
});
