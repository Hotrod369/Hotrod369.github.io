import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import React from 'react';
export default function NotFoundScreen() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Stack.Screen, { options: { title: 'Oops!' } }),
        React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.title }, "This screen doesn't exist."),
            React.createElement(Link, { href: "/", style: styles.link },
                React.createElement(Text, { style: styles.linkText }, "Go to home screen!")))));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
//# sourceMappingURL=%5B...missing%5D.js.map