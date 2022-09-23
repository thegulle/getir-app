import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient'
import variables from "../styles/variables";
import styles from "../styles/";
import Header from "../layouts/Header";

import User from "../screens/user/User";
import SignIn from "../screens/user/SignIn";
import Categories from "../screens/categories/Categories";
import Products from "../screens/products/Products";
import Campaigns from "../screens/campaign/Campaigns";
import Search from "../screens/search/Search";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const showLogoScreens = ['User', 'Dashboard', 'SearchStack'];
const options = {
  headerStyle: {
    backgroundColor: variables.colors.primary,
  },
  headerTintColor: variables.colors.white,
  headerBackTitleVisible: false,
  headerTitle: (props) => (!showLogoScreens.includes(props.children) ?
    <Header {...props} /> :
    <Text style={styles.textHeader}>{props.children}</Text>
  )
}

const styleBottomTabs = {
  backgroundColor: variables.colors.white,
  borderTopColor: variables.colors.darkgray,
}


const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="User">
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

const CampaignStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Campaigns">
      <Stack.Screen name="Campaigns" component={Campaigns} />
    </Stack.Navigator>
  );
}

export const Router = <>
  <NavigationContainer>
    <Tab.Navigator initialRouteName="HomeStack" screenOptions={{
      ...options,
      tabBarStyle: { ...styleBottomTabs },
      tabBarActiveTintColor: variables.colors.primary,
      tabBarLabel: () => null,
    }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={27} />
          ),
          headerTitle: () => <Text style={styles.textHeader}>Search</Text>
        }}
      />
      <Tab.Screen
        name="DashboardStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.middleTabBar}>
              <LinearGradient
                style={{ width: 54, height: 54, borderRadius: 27, justifyContent: 'center', alignItems: 'center' }}
                colors={[...variables.colors.gradient]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.middleTabBarBtn}>
                  <FontAwesome5 name="ellipsis-h" color={variables.colors.secondary} size={20} />
                  <FontAwesome5 name="ellipsis-h" color={variables.colors.secondary} size={20} style={{ marginLeft: 5, marginTop: -12 }} />
                  <FontAwesome5 name="ellipsis-h" color={variables.colors.secondary} size={20} style={{ marginTop: -12 }} />
                </View>
              </LinearGradient>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="UserStack"
        component={UserStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={27} />
          ),
          headerTitle: () => <Text style={styles.textHeader}>Profile</Text>
        }}
      />
      <Tab.Screen
        name="CampaignStack"
        component={CampaignStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" color={color} size={25} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            fontSize: 12,
          },
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
</>;