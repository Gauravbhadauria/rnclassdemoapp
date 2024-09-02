import {View, Text} from 'react-native';
import React, { memo } from 'react';

const CallbackDemo = ({count2, updateCount2}) => {
    console.log("callbackDemo")
  return (
    <View>
      <Text
        onPress={updateCount2}
        style={{borderWidth: 1, padding: 10, marginTop: 20, fontSize: 20}}>
        {'update Count 2==>' + count2}
      </Text>
    </View>
  );
};

export default memo(CallbackDemo);
