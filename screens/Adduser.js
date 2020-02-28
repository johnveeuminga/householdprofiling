import React from 'react'
import { Container, View} from 'native-base'
import {TextInput} from 'react-native'

export default class Adduser extends React.Component{
    navigate(screenName){
        this.props.navigation.push(screenName)
    }
    render(){
        return(
            <Container>
                <View>
                <TextInput
                    placeholder="Enter Value Here"
                    // onChangeText={data => this.setState({ textInput_Holder: data })}
                    underlineColorAndroid='transparent'
                    />
                </View>
            </Container>
        )
    }
}