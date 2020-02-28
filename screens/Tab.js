import React from 'react'
import { Container, Header, Content, Card, CardItem, Text, Body, View } from "native-base";


export default class Tab extends React.Component{
    render(){
        return(
          <View>
            <Card>
              <CardItem bordered>
                <Body>
                  <Text>
                    N - Newborn
                  </Text>
                  <Text>
                  I - Infant (29 days - 11mos old)
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </View>
        )
    }
}