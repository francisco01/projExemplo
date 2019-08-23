import React, { Component } from 'react';
import PeopleList from '../components/PeopleList'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';



export default class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peoples: [],
            loading: false,
            error: false,
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.loadPeoples();
    }
    loadPeoples = async () => {
        try {
            const response =
                await axios.get('https://randomuser.me/api/?nat=br&results=14');
            const { results } = response.data;
            this.setState({
                peoples: results,  
                loading: false,
                error: false,
            });
        } catch {
            (e) => {
                this.setState({
                    loading: false,
                    error: true
                })
            };
        }
        return;
    }



    render() {
        return (
            <View style={
                StyleSheet.container
            }>
                {
                    this.state.loading
                        ? <ActivityIndicator size="large" color="#6ea2f7" />
                        : this.state.error
                            ? <Text style={styles.error} >Erro Ops!</Text>

                            : <PeopleList peoples={this.state.peoples}
                                onPressItem={pageParams => {
                                    this.props.navigation.navigate('PeopleDetail', pageParams);
                                }} >

                            </PeopleList>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    error: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 20,
    }
})