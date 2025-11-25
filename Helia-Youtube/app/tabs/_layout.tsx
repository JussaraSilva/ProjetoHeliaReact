import {Tabs } from "expo-router";

import { HouseIcon, MagnifyingGlassIcon, NotebookIcon, UserCircleIcon} from "phosphor-react-native";
import { theme } from "../../src/styles/themes";
import { useContext } from "react";
import { ThemeContext } from "../../src/context/themeContext";



export default function TabsLayout() {

    const { currentTheme } = useContext(ThemeContext);

  return <Tabs screenOptions={
    {headerShown: false,
        tabBarStyle: {
          backgroundColor: theme[currentTheme].background,
          borderTopColor: theme[currentTheme].borderBottomColor,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#1ab65c',
        tabBarInactiveTintColor: '#757575',
    }
  }>
    <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        tabBarIcon: ({color})=> (
          <HouseIcon size={32} color={color} weight="fill" />
        ),
      }}
    />
    <Tabs.Screen
      name="search"
      options={{
        title: 'Search',
        tabBarIcon: ({color})=> (
          <MagnifyingGlassIcon size={32} color={color} weight="fill" />
        ),
      }}
    />
    <Tabs.Screen
      name="booking"
      options={{
        title: 'Booking',
        tabBarIcon: ({color})=> (
          <NotebookIcon size={32} color={color} weight="fill" />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        tabBarIcon: ({color})=> (
          <UserCircleIcon size={32} color={color} weight="fill" />
        ),
      }}
    />
  </Tabs>
}
