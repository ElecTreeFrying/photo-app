import {
  StyleSheet
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 15,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  tinyLogo: {
    width: 'auto',
    height: 225,
  },
  toolbar: {
    backgroundColor: '#530034',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 6
  },
  toolbarText: {
    color: 'white',
    fontSize: 20
  }
});