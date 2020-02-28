import React, { Component } from 'react'
import { Container, Button, Icon } from 'native-base'
import {View, Text, StyleSheet, Image} from 'react-native'
import { SocialIcon, ButtonGroup } from 'react-native-elements'

 class Login extends React.Component{
    render(){
        return(
            <Container style= {{ backgroundColor:'#19f79e'}}>
                <View   style= {{ justifyContent:'center', alignItems: 'center', paddingTop: 25 }}>
                    <Image style={style.img} source= {require('../screens/baguiologo.png')}>
                    </Image>
                </View>

                <View  style= {{ justifyContent:'center', alignItems: 'center', paddingTop: 10 }}>
                    <Text style={style.txt}>
                        Health Service Office
                    </Text>
                    <Text style= {{color: 'white'}}>
                        HOUSEHOLD PROFILING
                    </Text>
                </View>
                <View style= {{marginHorizontal:25}}>
                        <SocialIcon
                        title='Sign In With Facebook'
                        button
                         type='facebook'
                        />
                </View>

                <View style={{ marginHorizontal: 25 }}>
                        <SocialIcon
                        title='Sign In With Gmail'
                        button
                         type='google-plus-official'
                        />
                </View>
                <Button rounded style= {{ marginHorizontal: 33, marginVertical:7, backgroundColor: '#ff4949', justifyContent:'center'}}>      
                            <Icon ios='ios-person' android="md-person" style={{fontSize: 30, color: 'white' }}/>
                            <Text style={{ textAlign: 'center', color:'white' }}>
                            Login As Email
                            </Text> 
                </Button>
              


            </Container>
        )
    }
}

const style = StyleSheet.create({
    txt: {
        fontSize: 25,
        color: 'white',
        marginTop: 1,
        // marginHorizontal: 75
    

    },

    img:{
        width:200,
        height: 200,
        // marginVertical:50,
        // marginHorizontal: 105
        // justifyContent: 'center',
        // alignItems: 'center',

    }
})

export default Login