import React, { useState } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Input, Dialog, TabView, Tab } from "@rneui/themed";
import styles from '../../styles';
import variables from '../../styles/variables';
import ProductCard from '../../components/ProductCard';

export default function Search({ navigation }) {
  const height = Dimensions.get('window').height;
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
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
      category: 'Snacks'
    },
    {
      id: 2,
      title: "Lay's Classic",
      subTitle: "150g",
      price: 3.50,
      image: 'https://cdn.getir.com/product/5bc976c1b555e900179c51b8_tr_1656688098956.jpeg',
      category: 'Snacks'
    },
    {
      id: 3,
      title: "Lay's Spicy",
      subTitle: "150g",
      price: 4.25,
      image: 'https://cdn.getir.com/product/5d936501685b2347ffa7bda2_tr_1656688191316.jpeg',
      category: 'Snacks'
    },
    {
      id: 4,
      title: "Lay's Herbs",
      subTitle: "150g",
      price: 7.25,
      image: 'https://cdn.getir.com/product/5ce6581da72a950001cc87d2_tr_1656688144960.jpeg',
      category: 'Snacks'
    },
    {
      id: 5,
      title: "Lay's Poppy Seed & Red Pepper",
      subTitle: "96g",
      oldPrice: 2.50,
      price: 1.25,
      image: 'https://cdn.getir.com/product/5f838256a0f7355dfe62acd8_tr_1609123580796.jpeg',
      category: 'Snacks'
    },
    {
      id: 6,
      title: "Lay's Yogurt & Greens",
      subTitle: "134g",
      price: 2.25,
      image: 'https://cdn.getir.com/product/5f837c7c9abe72766bbcc49e_tr_1602604007372.jpeg',
      category: 'Snacks'
    },
    {
      id: 7,
      title: "Fanta",
      subTitle: "1 L",
      price: 2.75,
      image: 'https://cdn.getir.com/product/59024e4264529a0004d45ca8_tr_1658401475123.jpeg',
      category: 'Beverages'
    },
    {
      id: 8,
      title: "HP Classic BBQ",
      subTitle: "465g",
      price: 7.75,
      image: 'https://cdn.getir.com/product/5ce6580ea72a950001cc8732_tr_1609410733687.png',
      category: 'Food'
    }
  ]
  return (
    <View>

      <View>
        <Tab
          value={tabIndex}
          onChange={(e) => setTabIndex(e)}
          containerStyle={{ backgroundColor: variables.colors.darkPrimary }}
          activeColor={variables.colors.darkPrimary}
          indicatorStyle={{
            backgroundColor: variables.colors.secondary,
            height: 2,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Snacks"
            titleStyle={{ fontSize: 13 }}
            containerStyle={(active) => ({
              backgroundColor: active ? variables.colors.darkPrimary : undefined,
            })}
          />
          <Tab.Item
            title="Beverages"
            titleStyle={{ fontSize: 13 }}
            containerStyle={(active) => ({
              backgroundColor: active ? variables.colors.darkPrimary : undefined,
            })}
          />
          <Tab.Item
            title="Food"
            titleStyle={{ fontSize: 13 }}
            containerStyle={(active) => ({
              backgroundColor: active ? variables.colors.darkPrimary : undefined,
            })}
          />
        </Tab>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TabView value={tabIndex} onChange={setTabIndex} animationType="spring" containerStyle={{ height: height }}>
            <TabView.Item>
              <View style={[styles.productListContainer]}>
                {productData.filter(product => product.category === 'Snacks').map((product) => (
                  <ProductCard
                    gridColumns={3}
                    data={product}
                    key={product.id}
                    addCart={toggleDialog}
                  />
                ))}
              </View>
            </TabView.Item>
            <TabView.Item>
              <View style={[styles.productListContainer]}>
                {productData.filter(product => product.category === 'Beverages').map((product) => (
                  <ProductCard
                    gridColumns={3}
                    data={product}
                    key={product.id}
                    addCart={toggleDialog}
                  />
                ))}
              </View>
            </TabView.Item>
            <TabView.Item>
              <View style={[styles.productListContainer]}>
                {productData.filter(product => product.category === 'Food').map((product) => (
                  <ProductCard
                    gridColumns={3}
                    data={product}
                    key={product.id}
                    addCart={toggleDialog}
                  />
                ))}
              </View>
            </TabView.Item>

          </TabView>
        </ScrollView>
      </View>
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
    </View >
  )
}
