import React from 'react';
import {View, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

const SignIn: React.FC = () => {
  const {signIn, signed} = useAuth();

  console.log(signed);

  async function handleSignIn() {
    await signIn();
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
