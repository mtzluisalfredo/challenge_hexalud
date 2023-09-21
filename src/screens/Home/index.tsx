import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { increment } from '../../redux/actions'; 

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state: { counter: any; }) => state?.counter); 

  const onPressLearnMore = () => {
    dispatch(increment());
  }

  return (
    <View style={{ padding: 20 }}>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text style={{ color: 'red' }}>{`${counter?.count}`}</Text>
    </View>
  )
}