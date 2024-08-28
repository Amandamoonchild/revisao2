import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import StackRoutes from "./stack.routes";

const Routes = ()=>  {
    return(
        <NavigationContainer>
            <StatusBar style="auto" />
            <StackRoutes />
        </NavigationContainer>
    );
};

export default Routes;