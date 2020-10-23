import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button
} from 'react-native';

import { renderCard } from './components/card/card';
import { modal } from './components/modal/modal';
import { styles } from './app-styles';
import { getContent } from './common/api';


const App = () => {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    getContent().then((data: any) => {
      setData(data)
    });
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.toolbar}>
            <Text style={styles.toolbarText}>
              Photo app
            </Text>
            {modal()}
          </View>

          <View style={styles.body}>
            {data.map((e: any, i: number) => (
              renderCard(e.caption, e.image_base_64, e.id.toString())
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default App;
