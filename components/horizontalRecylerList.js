import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from 'recyclerlistview';
import Constants from 'expo-constants';
import Card from './card';
import { LayoutUtil, ViewTypes } from '../utils/layoutUtil';

export default function HorizontalRecylerList(props) {
  const { data } = props;
  let dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });
  dataProvider = dataProvider.cloneWithRows(data);

  let layoutProvider = LayoutUtil.getLayoutProvider(dataProvider);
  const rowRenderer = (type, data) => {
    const { uri, title } = data;
    switch (type) {
      case ViewTypes.SUB_ITEM:
        return (
          <Card uri={uri} title={title} style={{ marginHorizontal: 10 }} />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <RecyclerListView
        layoutProvider={layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
        isHorizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#daeaf6',
  },
});
