import React from 'react'
import { StyleSheet, View } from 'react-native'
import ProfileComponent from '../../components/ProfileComponent';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
