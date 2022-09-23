import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Input, Dialog } from "@rneui/themed";
import styles from '../../styles';
import variables from '../../styles/variables';
import ProductCard from '../../components/ProductCard';

export default function Search({ navigation }) {
  const [search, setSearch] = useState('');
  const [visibleDialog, setVisibleDialog] = useState(false);
  const toggleDialog = () => {
    setVisibleDialog(!visibleDialog);
  };
  const productData = [
    {
      id: 1,
      title: "Lay's Classic",
      subTitle: "193g",
      price: 3.25,
      image: 'https://cdn.getir.com/product/5f837de6582f37118b62e334_tr_1657029912972.jpeg',
    },
    {
      id: 2,
      title: "Lay's Classic",
      subTitle: "150g",
      price: 3.50,
      image: 'https://cdn.getir.com/product/5bc976c1b555e900179c51b8_tr_1656688098956.jpeg',
    },
    {
      id: 3,
      title: "Lay's Spicy",
      subTitle: "150g",
      price: 4.25,
      image: 'https://cdn.getir.com/product/5d936501685b2347ffa7bda2_tr_1656688191316.jpeg',
    },
    {
      id: 4,
      title: "Lay's Herbs",
      subTitle: "150g",
      price: 7.25,
      image: 'https://cdn.getir.com/product/5ce6581da72a950001cc87d2_tr_1656688144960.jpeg',
    },
    {
      id: 5,
      title: "Lay's Poppy Seed & Red Pepper",
      subTitle: "96g",
      oldPrice: 2.50,
      price: 1.25,
      image: 'https://cdn.getir.com/product/5f838256a0f7355dfe62acd8_tr_1609123580796.jpeg',
    },
    {
      id: 6,
      title: "Lay's Yogurt & Greens",
      subTitle: "134g",
      price: 2.25,
      image: 'https://cdn.getir.com/product/5f837c7c9abe72766bbcc49e_tr_1602604007372.jpeg',
    },
  ]
  return (
    <View>
      <View style={styles.searchProductContainer}>
        <Input
          placeholder='Search for products'
          leftIcon={
            <FontAwesome
              name='search'
              size={22}
              color={variables.colors.primary}
            />
          }
          inputStyle={{ marginLeft: 10, marginTop: 2, fontSize: 16 }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          contentContainerStyle={{ margin: 0 }}
          leftIconContainerStyle={{ marginRight: 10, marginLeft: 10 }}
          onChangeText={setSearch}
          value={search}
        />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.searchProductListText}>Trending products</Text>
        <View style={[styles.productListContainer, search.length > 0 ? styles.flexStart : false]}>
          {productData.filter(product => (product.title.toLowerCase()).includes(search.toLowerCase()))
            .map((product) => (
              <ProductCard
                gridColumns={3}
                data={product}
                key={product.id}
                addCart={toggleDialog}
              />
            ))}
        </View>
      </ScrollView>
      <Dialog
        isVisible={visibleDialog}
        onBackdropPress={toggleDialog}
      >
        <Text style={styles.textDialog}>Please enter your address before adding an item to your basket.</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Dialog.Button title="Cancel"
            onPress={toggleDialog}
            containerStyle={styles.textDialogCancelButton}
            titleStyle={{ color: variables.colors.white }} />
          <Dialog.Button title="Done"
            containerStyle={styles.textDialogDoneButton}
            titleStyle={{ color: variables.colors.white }}
            onPress={toggleDialog}
            onPressIn={() => navigation.jumpTo('UserStack')}
          />
        </View>
      </Dialog>
    </View>
  )
}
