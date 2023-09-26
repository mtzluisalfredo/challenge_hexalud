import { View, ActivityIndicator } from 'react-native'
import React from 'react'

interface LoadingFooterProps {
  loading: boolean;
}

const LoadingFooter = ({ loading }: LoadingFooterProps) => {
  if (loading) {
    return (
      <View style={{ padding: 16 }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }
  return null;
};

export default LoadingFooter