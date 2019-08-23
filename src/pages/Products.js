import React from 'react';
import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';


export default class Products extends Component {
    
    state = {
        produtos: []
    }


    async componentDidMount() {
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        this.setState({data: responseJson.data.results})
    }
}