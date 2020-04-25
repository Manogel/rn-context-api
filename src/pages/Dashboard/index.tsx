import React from 'react';
import {View, Button, Text} from 'react-native';

import {useAuth} from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();

  async function handleSignOut() {
    signOut();
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{user?.name}</Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
