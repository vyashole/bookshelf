import React, { Component } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, Icon } from '@ui-kitten/components';
import { Color } from '../theme';

export default class Stepper extends Component {
    render() {
        const { currentValue, maxValue, onIncrease, onDecrease } = this.props
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => onDecrease()}>
                    <Icon name='minus-circle' width={48} height={48} fill={Color.primary} />
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10 }} category='h6'>
                    {`${currentValue}/${maxValue}`}
                </Text>
                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => onIncrease()}>
                    <Icon name='plus-circle' width={48} height={48} fill={Color.primary} />
                </TouchableOpacity>

            </View>
        )
    }
}
