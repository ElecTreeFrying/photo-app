import React from "react";
import {
  View,
  Text,
  Image,
  Button
} from 'react-native';

import { styles } from './card-styles';
import { deleteContent } from '../../common/api'


export const renderCard = (caption: string, image_base_64: string, i: string) => {
  return (
    <View style={styles.sectionContainer} key={Number(i)}>
      <Text style={styles.sectionDescription}>
        {caption}
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{ uri: image_base_64 }}/>
      <View>
        <Button
          title="modify"
          color="orange"
          onPress={() => {
          }}/>
        <Button
          title="delete"
          color="red"
          onPress={() => {
            deleteContent((Number(i)).toString())
          }}/>
      </View>
    </View>
  )
}