import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen/MainScreen";
import { MainScreenProps } from "./src/screens/MainScreen/mainScreen.types";

type RootStackParamList = {
  Home: MainScreenProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={"Home"} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
