import React from 'react'
import { View, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import SearchAddress from '../../components/SearchAddress'
import CategoryCard from '../../components/CategoryCard'
import styles from '../../styles'
import { FlatListSlider } from 'react-native-flatlist-slider';

export default function Categories({ navigation }) {
  const windowHeigth = Dimensions.get('window').height;
  const images = [
    {
      image: 'http://cdn.getir.com/misc/62a0cbe978ab4566649da256_banner_tr_1654705156487.jpeg',
    },
    {
      image: 'https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg',
    },
  ]
  const categories = [
    {
      image: require('../../assets/categories/1.jpeg'),
      title: 'Beverages',
    },
    {
      image: require('../../assets/categories/2.jpeg'),
      title: 'Fruits & Veg',
    },
    {
      image: require('../../assets/categories/3.jpeg'),
      title: 'Baked Goods',
    },
    {
      image: require('../../assets/categories/4.jpeg'),
      title: 'Food',
    },
    {
      image: require('../../assets/categories/5.jpeg'),
      title: 'Snacks',
    },
    {
      image: require('../../assets/categories/6.jpeg'),
      title: 'Ice Cream',
    },
    {
      image: require('../../assets/categories/7.jpeg'),
      title: 'Breakfast',
    },
    {
      image: require('../../assets/categories/8.jpeg'),
      title: 'Pet Food',
    }
  ]
  return (
    <>
      <View>
        <SearchAddress navigation={navigation} />
      </View>
      <SafeAreaView />
      <ScrollView>
        <View>
          <FlatListSlider
            data={images}
            height={200}
            timer={5000}
            onPress={() => { return false }}
            contentContainerStyle={{ paddingHorizontal: 0 }}
            indicatorContainerStyle={{ position: 'absolute', bottom: 20 }}
            indicatorActiveColor={'#8e44ad'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            animation
          />
        </View>
        <View style={styles.category_card_container}>
          {categories.map((data, index) => (
            <CategoryCard data={data} key={index} navigation={navigation} />
          ))}
        </View>
        <View style={{ ...styles.category_card_container, marginTop: -20 }}>
          {categories.map((data, index) => (
            <CategoryCard data={data} key={index} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </>
  )
}