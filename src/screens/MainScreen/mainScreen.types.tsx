import AppRouteProp from "../../helpers/navigationHelper";

export type MainScreenProps = {
  //
};

export type MainScreenRouteProps = {
  Home: MainScreenProps;
};

export type NavigationProps = AppRouteProp<
  {
    Home: MainScreenProps;
  },
  "Home"
>;
