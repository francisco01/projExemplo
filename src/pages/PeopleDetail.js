import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { captalizeFirstLetter } from '../util';
import Line from '../components/line';


export default class PeopleDetail extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const peopleName = navigation.state.params.people.name.first;
        return {
            headerTitle: `${
                captalizeFirstLetter(peopleName)
                }`,
            headerTitleStyle: {
                color: 'red',
                fontSize: 30,
            }
        }
    }

    render() {

        const { people } = this.props.navigation.state.params;

        return (
            <View style={
                styles.container
            }>
                <Image source={{ uri: people.picture.large }}
                    style={styles.avatar}
                ></Image>
                <View style={styles.detailContainer}>
                    <Line label="Email:" content={people.email}></Line>
                    <Line label="Cidade:" content={people.location.city}></Line>
                    <Line label="Telefone:" content={people.phone}></Line>
                    <Line label="Estado:" content={people.location.state}></Line>
                    <Line label="Nacionalidade:" content={people.nat}></Line>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    avatar: {
        aspectRatio: 1
    },
    container: {
        padding: 15
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },

})

