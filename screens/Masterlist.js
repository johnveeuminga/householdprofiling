import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';
import { Button, Container, Card } from 'native-base';
import { SearchBar } from 'react-native-elements';


export default class Masterlist extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

    navigate(screenName){
        this.props.navigation.push(screenName)
    }
  constructor(props) {
    super(props);
    this.array = [
        {
            title: 'sample',
            
        },
        {
            title: 'Superman'
        },
        {
            title: "Gagamboy"
        },
        {
            title: 'Lastikan'
        }
    ],
      this.state = {
        arrayHolder: [],
        textInput_Holder: ''
      }
  }
  componentDidMount() {
    this.setState({ arrayHolder: [...this.array] })
  }
  joinData = () => {
    this.array.push({title : this.state.textInput_Holder});
    this.setState({ arrayHolder: [...this.array] })
  }
  FlatListItemSeparator = () => {
    return (
      <Card
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
       
      />
    
    );
  }
  GetItem(item) {
    Alert.alert('', 'Personal Info', [
        {
            text: 'Quarter: 1st'
        },
        {
            text: 'Address: Kahit Saan'
        },
        {
            text: 'Name: Cardo Dalisay',
        }
    ]);
  }
  render() {
    const { search } = this.state;
    return (
      <Container>
        <View style = {{ padding: 20}}>
           <SearchBar
           lightTheme
           round
              placeholder="Type Here..."
              onChangeText={this.updateSearch}
              value={search}
              
            />
        </View>

        <View>
          <Text style = {{ fontSize: 25}}>
            Recent
          </Text>
        </View>
        <View style={styles.MainContainer}>
            {/* <TextInput
              placeholder="Enter Value Here"
              onChangeText={data => this.setState({ textInput_Holder: data })}
              style={styles.textInputStyle}
              underlineColorAndroid='transparent'
            /> */}
            
                
            <FlatList
              data={this.state.arrayHolder}
              width='100%'
              extraData={this.state.arrayHolder}
              keyExtractor={(index) => index.toString()}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={({ item }) => (<Text style={styles.item} onPress={this.GetItem.bind(this, item.address)} >
                <Text>{item.title}</Text></Text> )}
            /> 
             <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >
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
