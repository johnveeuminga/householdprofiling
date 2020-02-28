import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Text, View, Form, Item, Picker, Icon } from 'native-base';
import Tab1 from './Tab';
import Tab2 from './Tab';
import Tab3 from './Tab';
export default class Quarters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <View>
        <View>
         <Text style={{fontWeight:'bold', padding:10,backgroundColor: '#80CD91', color: '#5D615B'}}>Classification by Age/Health Group</Text>
        <Tabs style={{backgroundColor: 'white'}}>
          <Tab heading="1st Quarter">
            <Tab1 />
          </Tab>
          <Tab heading="2nd Quarter">
            <Tab2 />
          </Tab>
          <Tab heading="3rd Quarter">
            <Tab3 />
          </Tab>
          <Tab heading="4th Quarter">
            <Tab3 />
          </Tab>
        </Tabs>
      </View>
      <View>
      <Form>
          <Item picker>
            <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Select your SIM"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                    >
           <Picker.Item label="N" value="key0" />
           <Picker.Item label="I" value="key1" />
           <Picker.Item label="U" value="key1" />
           <Picker.Item label="S" value="key1" />
           <Picker.Item label="A" value="key1" />
           <Picker.Item label="P" value="key1" />
           <Picker.Item label="PWD" value="key1" />
           <Picker.Item label="AP" value="key1" />
           <Picker.Item label="PP" value="key1" />
           <Picker.Item label="FP" value="key1" />
           <Picker.Item label="WRA" value="key1" />
             </Picker>
               </Item>
                </Form>
      </View>
      </View>
      
    );
  }
}