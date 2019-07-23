import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})

const Row = (props) => (
    <View style={styles.container}>
        <Text style={styles.text}>
            {`${props.OrganizationName}`}
        </Text>
    </View>
);

export default Row;