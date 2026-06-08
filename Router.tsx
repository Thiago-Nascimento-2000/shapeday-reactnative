import { NavigationContainer } from "@react-navigation/native";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import type { NativeBottomTabNavigationOptions } from "@react-navigation/bottom-tabs/unstable";
import Login from "./src/screens/auth/login";
import Register from "./src/screens/auth/register";

export type RootTabParamList = {
  Login: undefined;
  Register: undefined;
};

const Tab = createNativeBottomTabNavigator<RootTabParamList>();

const authScreenOptions: NativeBottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    display: "none",
  },
};

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={authScreenOptions}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={authScreenOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
