import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
    return React.createElement(FontAwesome, { size: 28, style: { marginBottom: -3 }, ...props });
}
export default function TabLayout() {
    const colorScheme = useColorScheme();
    return (React.createElement(Tabs, null,
        "headerShown: false,",
        React.createElement(Tabs.Screen, { name: "index", options: {
                title: 'Tab One',
                tabBarIcon: ({ color }) => React.createElement(TabBarIcon, { name: "code", color: color }),
                headerShown: false,
                headerRight: () => (React.createElement(Link, { href: "/modal", asChild: true },
                    React.createElement(Pressable, null, ({ pressed }) => (React.createElement(FontAwesome, { name: "info-circle", size: 25, color: Colors[colorScheme ?? 'light'].text, style: { marginRight: 15, opacity: pressed ? 0.5 : 1 } }))))),
            } }),
        React.createElement(Tabs.Screen, { name: "two", options: {
                title: 'Tab Two',
                tabBarIcon: ({ color }) => React.createElement(TabBarIcon, { name: "code", color: color }),
                headerShown: false,
            } })));
}
//# sourceMappingURL=_layout.js.map