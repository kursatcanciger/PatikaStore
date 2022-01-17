import React from 'react';
import { Dimensions, SafeAreaView, View, StyleSheet, Text, TextInput, FlatList } from 'react-native';
import products from './product.json';
import ProductCard from './components/ProductCard/ProductCard';

const App = () => {
  const renderItem = ({ item }) => <ProductCard product={item} />
  const searchInput = () => (
    <View>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder='Ara...' />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      <FlatList style={styles.productList}
        ListHeaderComponent={searchInput}
        data={products}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple'
  },
  input: {
    backgroundColor: '#f5f5f5',
    height: 50,
    margin: 5,
    padding: 15,
    borderRadius: 10
  },
  productList: {
    flex: 1,
    padding: 15,
  }
});

export default App;