import React from 'react'
import { Card, CardItem, Text } from 'native-base'
import { Image } from 'react-native'

class Movie extends React.Component {
    render() {
        const { respondentName, address } = this.props
        return (
            <Card>
             <CardItem header>
              <Text style={{fontWeight:'bold'}}>Respondent Name:</Text>
              <Text> {respondentName} </Text>
            </CardItem>
                <CardItem>
              <Text style={{fontWeight:'bold'}}>Address: </Text>
                    <Text>{ address }</Text>
                </CardItem>
            </Card>
        )
    }
}

export default Movie
