import * as React from "react";
import { View, StyleSheet } from "react-native";
import { RecyclerListView, DataProvider } from "recyclerlistview";
import Constants from "expo-constants";
import HorizontalRecylerList from "./components/horizontalRecylerList";
import { data } from "./DATA.js";
import Card from "./components/card";
import { LayoutUtil, ViewTypes } from "./utils/layoutUtil";

export default function App() {
  let dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });

  dataProvider = dataProvider.cloneWithRows(data);

  const margin = 3;
  let layoutProvider = LayoutUtil.getLayoutProvider(dataProvider);

  const rowRenderer = (type, data) => {
    const { uri, title, innerData } = data;
    switch (type) {
      case ViewTypes.GRID:
        return <Card uri={uri} title={title} style={{ marginHorizontal: 2 }} />;

      case ViewTypes.FULL:
        return <HorizontalRecylerList data={innerData} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <RecyclerListView
        contentContainerStyle={{ margin }}
        layoutProvider={layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
});
