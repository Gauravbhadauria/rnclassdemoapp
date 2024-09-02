import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import CallbackDemo from './CallbackDemo';

const FunComponent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const calculatedCount = useMemo(() => calculateCount(count2), [count2]);

  //   const updateCount2 = useCallback(() => {
  //     console.log("update count2")
  //     setCount2(count2 + 1);
  //   },[count2]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'black', marginTop: 20}}>
        {'count1==>' + count1}
      </Text>
      <Text style={{fontSize: 30, color: 'black', marginTop: 20}}>
        {'calculatedCount' + calculatedCount}
      </Text>
      <Text
        style={{borderWidth: 1, padding: 10, marginTop: 20, fontSize: 20}}
        onPress={() => {
          setCount1(count1 + 1);
        }}>
        {'update Count 1'}
      </Text>
      <Text
        style={{borderWidth: 1, padding: 10, marginTop: 20, fontSize: 20}}
        onPress={() => {
          setCount2(count2 + 1);
        }}>
        {'update Count 2'}
      </Text>

      {/* <CallbackDemo count2={count2} updateCount2={updateCount2} /> */}
    </View>
  );
};

export default FunComponent;

const calculateCount = value => {
  console.log('calculcating again');
  return 2 * value;
};

//useRef
//useReducer
//useLayoutEffect
//useCallback==> memoized function
//useMemo  ==> memoized value
//useContext
//customHooks
