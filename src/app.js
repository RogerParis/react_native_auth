import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyD7sAD4qXWRgiv7Ejp2_FYJlbcSh2MdMdQ",
            authDomain: "udemy-auth-dd1bd.firebaseapp.com",
            databaseURL: "https://udemy-auth-dd1bd.firebaseio.com",
            storageBucket: "udemy-auth-dd1bd.appspot.com",
            messagingSenderId: "8313900298"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;
