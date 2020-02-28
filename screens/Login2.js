import React from 'react'
import { Container, View, Button } from 'native-base'
import { TextInput, Text, StyleSheet, Image } from 'react-native'

export default class Login2 extends React.Component{
    navigate(screenName){
        this.props.navigation.push(screenName)
    }
    render(){
        return(
            <Container style= {{ backgroundColor:'#19f79e'}}>
                 <View   style= {{ justifyContent:'center', alignItems: 'center', paddingTop: 25 }}>
                    <Image style={style.img} source= {require('../screens/baguiologo.png')}>
                    </Image>
                </View>
                <View style ={{paddingTop: 50}}>
                <TextInput
                    style = {{textAlign: 'center'}}
                    underlineColorAndroid = "black"
                    placeholder = "Username"
                    placeholderTextColor = "white"
                    
                    
                    
                    />
                </View>

                <View style ={{paddingTop: 15}}>
                <TextInput 
                    style = {{textAlign: 'center'}}
                    underlineColorAndroid = "black"
                    placeholder = "Password"
                    placeholderTextColor = "white"
                    />
                </View>
                <View style ={{justifyContent:'center', alignItems: 'center', paddingTop: 25, paddingHorizontal: 50}}>
                    <Button block rounded  onPress= {() => this.navigate('Masterlist')} onPress= {() => this.navigate('Masterlist')}>
                        <Text style = {{ color: 'white'}}>
                            Login
                        </Text>
                    </Button>
                </View>

            </Container>
        )
    }
}

const style = StyleSheet.create({
   

    img:{
        width:200,
        height: 200,
        // marginVertical:50,
        // marginHorizontal: 105
        // justifyContent: 'center',
        // alignItems: 'center',

    }
})
   
