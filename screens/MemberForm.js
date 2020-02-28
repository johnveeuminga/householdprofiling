import React, {useState} from 'react'
import { View, Text, Form, Item, Label, Input, Picker, Icon, Button } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from './DatePicker'
import Quarters from './Quarters'



// const Birthday = ()=> {

//     const [date, setDate] = useState(new Date())
  
//     return (
//       <DatePicker
//         date={date}
//         onDateChange={setDate}
//       />
//     )
//   }




class MemberForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
      
    render(){
        const {navigate} =this.props.navigation;
        return(
            <ScrollView>
            <View style={{justifyContent: 'center'}}>
            <Form>
                <Text style={{fontWeight:'bold', padding:10,backgroundColor: '#80CD91', color: '#5D615B'}}>Name of Household Member</Text>
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
                <Text style={{fontWeight:'bold', padding:10,backgroundColor: '#80CD91', color: '#5D615B'}}>Relationship to HH Head</Text>
                <Item fixedLabel>
                <Label style={{fontSize:14}}>Relationship</Label>
                <Input />       
                </Item>
            </Form> 
        </View>
        <View>
            <Form>
                <Text style={{fontWeight:'bold', padding:10,backgroundColor: '#80CD91', color: '#5D615B'}}>Gender</Text>
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
                        <Picker.Item label="Male" value="key0" />
                        <Picker.Item label="Female" value="key1" />
                    </Picker>
                    </Item>
                    <Text style={{fontWeight:'bold', padding:10,backgroundColor: '#80CD91', color: '#5D615B'}}>IP or Non-IP</Text>
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
                        <Picker.Item label="IP" value="key0" />
                        <Picker.Item label="Non-IP" value="key1" />
                    </Picker>
                    </Item>
                </Form>
            </View>
            <View>
                <Text style={{fontWeight:'bold', padding:10,backgroundColor: '#80CD91', color: '#5D615B'}}>Birthday</Text>
                <DatePicker/>
            </View>
            <View>
                <Quarters/>
            </View>
            <View>
                <Text style={{fontWeight:'bold', padding:10,backgroundColor: '#80CD91', color: '#5D615B'}}>Cough for Two (2) Weeks?</Text>
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
                    <Picker.Item label="Yes" value="key0" />
                    <Picker.Item label="No" value="key1" />
                        </Picker>
                        </Item>
                            </Form>
            </View>
            <View style={{padding:10,alignItems:'center', justifyContent:'center'}}>
                <Button rounded success onPress={() => navigate('Form')} >
                    <Text>Submit</Text>
                </Button>
                </View>
            </ScrollView>
        )
    }
}

export default MemberForm;