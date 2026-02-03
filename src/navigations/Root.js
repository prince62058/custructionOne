import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "../contexts/ThemeContext";
import MainView from "../components/common/MainView";
import Main from "./stack/Main";

// import { useDispatch, useSelector } from "react-redux";
// import { setToken } from "../redux/slices/auth/authSlice";
// import { getSecureItem } from "../services/storage/keychain";

const Stack = createNativeStackNavigator();

const Root = () => {
    // const dispatch = useDispatch();

    // const token = useSelector((state) => state.auth.token);
    // useEffect(() => {
    //     (async () => {
    //         const savedToken = await getSecureItem({ service: "ACCESS_TOKEN" });
    //         if (savedToken?.value) dispatch(setToken(savedToken.value));
    //     })();
    // }, [dispatch]);

    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <MainView bottomSafe={true}>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        <NavigationContainer>
                            <Stack.Navigator screenOptions={{ headerShown: false }}>
                                 <Stack.Screen name="Main" component={Main} />
                                {/* {token ? (
                                    <Stack.Screen name="Main" component={Main} />
                                ) : (
                                    <Stack.Screen name="Auth" component={Auth} />
                                )} */}
                            </Stack.Navigator>
                        </NavigationContainer>
                    </GestureHandlerRootView>
                </MainView>
            </SafeAreaProvider>
        </ThemeProvider>
    );
};

export default Root;