import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React from 'react';
export default function TabTwoScreen() {
    return (React.createElement(View, { style: styles.container },
        React.createElement(Text, { style: styles.title }, "Tab Two"),
        React.createElement(View, { style: styles.separator, lightColor: "#eee", darkColor: "rgba(255,255,255,0.1)" }),
        React.createElement(EditScreenInfo, { path: "app/(tabs)/two.tsx" })));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
//# sourceMappingURL=two.js.map