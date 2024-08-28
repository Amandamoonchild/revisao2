import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Totoro from "../screens/Totoro";
 
const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Totoro" component={Totoro}/>
    </Stack.Navigator>
    
    );
};

export default StackRoutes;