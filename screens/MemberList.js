import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { View, Text, ListItem, Body, Button } from 'native-base'


export default function MemberList(){

        const [members, setMembers] = useState([
            { lastName: 'Ramos', firstName: 'Edrylle', sex: 'M', id: '1' },
            { lastName: 'Ramos', firstName: 'George', sex: 'F', id: '2' },
            { lastName: 'Ramos', firstName: 'Raul', sex: 'M',id: '3' },
            { lastName: 'Ramos', firstName: 'Veesyo', sex: 'F', id: '4'},
            { lastName: 'Ramos', firstName: 'Petra', sex: 'F',id: '5' },
            { lastName: 'Ramos', firstName: 'Halimuyak', sex: 'F',id: '6' },
        ]);
    
        return(
            <FlatList
                data={members}
                renderItem={({ item }) => (
                    <ListItem style={{ marginLeft: 0 }}>
                        <Body>
                        <Text>{ item.lastName } { item.firstName} {item.sex} </Text>
                        </Body>
                        <Button bordered light><Text style={{fontSize:14, color:'#80CD91'}}>Edit</Text></Button>
                    </ListItem>
                )
                } 
            />
        )
}