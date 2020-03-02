import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';
import { Button, Container, Card } from 'native-base';
import { SearchBar } from 'react-native-elements';
import HouseHoldList from './components/HouseHoldList'

export default class Masterlist extends Component {
  processForm(formDetails) {
    this.setState((state) => {
      return {
        ...state,
        households: [
          ...state.households,
          formDetails,
        ]
      }
    })
    console.log(formDetails)
  }
 
  constructor(props) {
    super(props);

    this.state = {
      households: []
    };
  }

  render() {
    const {navigate} =this.props.navigation;
    
    return (
      <Container>
        <View style = {{ padding: 20}}>
           <SearchBar
           lightTheme
           round
              placeholder="Type Here..."
            />
        </View>

        <View>
          <Text style = {{ fontSize: 25}}>
            Recent
          </Text>
        </View>
        <View>
        {
           this.state.households.map((hh) => (
              <HouseHoldList
              respondentName={`${hh.lastName}, ${hh.middleName}, ${hh.firstName}`}
              address={hh.address}
                />
              ))
        }
        </View>
        <View style={styles.MainContainer}>
             <TouchableOpacity onPress={() => navigate('Modal', {
               onFormComplete: (formDetails) => this.processForm(formDetails)
             })} activeOpacity={0.7} style={styles.button} >
              <Text style={styles.buttonText} > New HouseHold </Text>
            </TouchableOpacity>
        </View>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12
  },
 
  button: {
 
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
   marginTop: 10
  },
 
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn:{
    padding: 25
  },
  t:{
    padding: 25,
    fontSize: 50
    


  }
 
});
