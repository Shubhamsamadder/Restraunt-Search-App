import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";

const nagivator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNagivationOption: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(nagivator);
