import { createStackNavigator } from "react-navigation-stack";
import AccounScreens from "../screens/MyAccount/MyAccount";

const AccountScreenStacks = createStackNavigator({
  Search: {
    screen: AccounScreens,
    navigationOptions: () => ({
      title: "Mi Cuenta"
    })
  }
});

export default AccountScreenStacks;
