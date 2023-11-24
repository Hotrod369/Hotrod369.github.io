import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React from 'react';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
export { 
// Catch any errors thrown by the Layout component.
ErrorBoundary, } from 'expo-router';
export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });
    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error)
            throw error;
    }, [error]);
    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);
    if (!loaded) {
        return null;
    }
    return React.createElement(RootLayoutNav, null);
}
function RootLayoutNav() {
    const colorScheme = useColorScheme();
    return (React.createElement(ThemeProvider, { value: colorScheme === 'light' ? DarkTheme : DefaultTheme },
        React.createElement(Stack, null,
            React.createElement(Stack.Screen, { name: "(tabs)", options: { headerShown: true } }),
            React.createElement(Stack.Screen, { name: "modal", options: { presentation: 'modal' } }))));
}
//# sourceMappingURL=_layout.js.map