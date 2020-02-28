import React from 'react';
import { View, Text, Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';



class Home extends React.Component {
    render() {
        const {navigate} =this.props.navigation;
        return (
            <Button block onPress={() => navigate('Form')}>
                <Text>New Household</Text>
            </Button>
        )
    }
}

export default Home;