import { createStackNavigator } from "react-navigation-stack";
import SearchScreens from "../screens/Search";

const SearchScreenStacks = createStackNavigator({
  Search: {
    screen: SearchScreens,
    navigationOptions: () => ({
      title: "Buscar"
    })
  }
});

export default SearchScreenStacks;
