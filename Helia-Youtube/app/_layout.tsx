import {Tabs } from "expo-router";
import { HouseIcon, MagnifyingGlassIcon, NotebookIcon, UserCircleIcon} from "phosphor-react-native";

export default function RootLayout() {
  return <Tabs screenOptions={
    {headerShown: false,
        tabBarStyle: {
          backgroundColor: '#181a20',
          borderTopColor: '#181a20',
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#1ab65c',
        tabBarActiveBackgroundColor: '#191c24',
        tabBarInactiveTintColor: '#757575',
    }
  }>
    <Tabs.Screen
      name="index"
      options={{
        tabBarIcon: ({color})=> (
          <HouseIcon size={32} color={color} weight="fill" />
        ),
      }}
    />
    <Tabs.Screen
      name="search"
      options={{
        tabBarIcon: ({color})=> (
          <MagnifyingGlassIcon size={32} color={color} weight="fill" />
        ),
      }}
    />
    <Tabs.Screen
      name="booking"
      options={{
        tabBarIcon: ({color})=> (
          <NotebookIcon size={32} color={color} weight="fill" />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        tabBarIcon: ({color})=> (
          <UserCircleIcon size={32} color={color} weight="fill" />
        ),
      }}
    />
  </Tabs>
}
