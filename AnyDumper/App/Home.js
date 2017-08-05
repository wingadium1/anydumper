import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  Image,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  headerRight: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 4
  },
  loadingIcon : {
      width: 36,
      height: 36
  }
});

export default class Home extends Component {

  static navigationOptions = ({navigation}) => ({
    title: "Home",
    headerRight: (
      <View style={styles.headerRight}>
        {
          (navigation.state.params != null && navigation.state.params.isLoading) && (
            <Image style={styles.loadingIcon} source={require('../images/ic_loading.gif')} />
          )
        }
        {
          (navigation.state.params == null || navigation.state.params.isLoading != true) && (
            <TouchableOpacity onPress={() => {
                navigation.setParams({isLoading: true});
                // TODO: reload callback
                setTimeout(() => {
                  navigation.setParams({isLoading: false});
                }, 1500);
              }}>
              <Image source={require('../images/ic_refresh.png')} />
            </TouchableOpacity>
          )
        }
      </View>
    )
  });

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <ScrollView />
      </View>
    );
  }
}