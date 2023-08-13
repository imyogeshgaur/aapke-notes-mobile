import { View, Text } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import React from 'react'

const CustomLink = (props:any) => {
  const navigation:any = useNavigation();

  const onLinkClick = ()=>navigation.navigate(props.redirectTo)
  return (
    <View style={props.linkViewStyle}>
      <Text style={props.styleOfText}>{props.textBeforeLink} <Text style={props.styleOfLink} onPress={onLinkClick}>{props.textOfLink}</Text></Text>
    </View>
  )
}

export default CustomLink