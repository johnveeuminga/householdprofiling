import React from 'react';
import { Picker,Icon,View, Text, Card, Button, CardItem, Body, Form, Item, Label, Input, Header, Left, Title, Right, ListItem, Content, CheckBox} 
from 'native-base';
import { ScrollView } from 'react-native'
import MemberList from './MemberList'



class Home extends React.Component {
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
        const {navigate} =this.props.navigation;
        return (
            <ScrollView>
                <Header>
                    <Left/>
                    <Body>
                        <Title>New Household</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={{justifyContent: 'center'}}>
                    <Form>
                        <Text style={{fontWeight:'bold', padding:10, backgroundColor: '#80CD91', color: '#5D615B'}}>Name of Respondent</Text>
                        <Item fixedLabel>
                        <Label style={{fontSize:14}}>Last Name</Label>
                        <Input />
                        </Item>
                        <Item fixedLabel>
                        <Label style={{fontSize:14}}>First Name</Label>
                        <Input />       
                        </Item>
                        <Item fixedLabel>
                        <Label style={{fontSize:14}}>Middle Name</Label>
                        <Input />       
                        </Item>
                        <Text style={{fontWeight:'bold', padding:10, backgroundColor: '#80CD91', color: '#5D615B'}}>Current Address</Text>
                        <Item fixedLabel>
                        <Label style={{fontSize:14}}>Address</Label>
                        <Input />       
                        </Item>
                    </Form> 
                </View>
                <View>
                <Form>
                    <Text style={{fontWeight:'bold', padding:10, backgroundColor: '#80CD91', color: '#5D615B'}}>NHTS Household</Text>
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
                        <Picker.Item label="NHTS-4Ps" value="key0" />
                        <Picker.Item label="NHTS-Non-4Ps" value="key1" />
                        <Picker.Item label="Non-NHTS" value="key2" />
                    </Picker>
                    </Item>
                </Form>
                </View>
                <View>
                    <Text style={{fontWeight:'bold', padding:10, backgroundColor: '#80CD91', color: '#5D615B'}}>Preferred Primary Care Facility</Text>
                    <Form>
                        <Item fixedLabel>
                        <Label style={{fontSize:14}}>Government Health Center</Label>
                        <Input />
                        </Item>
                        <Item fixedLabel>
                        <Label style={{fontSize:14}}>Private Clinic</Label>
                        <Input />       
                        </Item>
                    </Form> 
                </View>
                <View>
                <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight:'bold', padding:10, backgroundColor: '#80CD91', color: '#5D615B'}}>Household Members</Text>
                     <Button bordered light style={{justifyContent:'center', marginLeft:165}} onPress={() => navigate('MemberForm')}>
                        <Text style={{fontSize:14, color:'#80CD91'}}>Add</Text>
                    </Button>
                    </View>
                    <MemberList />
                </View>
                <View style={{padding:10,alignItems:'center', justifyContent:'center'}}>
                <Button rounded success onPress={() => navigate('Home')} >
                    <Text>Submit</Text>
                </Button>
                </View>
            </ScrollView>
        )
    }
}


export default Home;