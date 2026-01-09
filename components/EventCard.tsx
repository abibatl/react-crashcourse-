import {View, Text, StyleSheet} from 'react-native';


export default function EventCard({name, date, location} : {name: string, date: string, location: string}) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.details}>{date}</Text>
            <Text style={styles.details}>{location}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',},
    name: {
        fontSize: 18, fontWeight: 'bold' },
        details: { fontSize: 14, color: '#666'},
});