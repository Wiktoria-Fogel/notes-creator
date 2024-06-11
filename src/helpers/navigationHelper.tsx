import { type ParamListBase, type RouteProp } from "@react-navigation/native";
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";

interface AppRouteProp<P extends ParamListBase, R extends keyof P> {
  navigation: NativeStackNavigationProp<P, R>;
  route: RouteProp<P, R>;
}

export default AppRouteProp;
