import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {SearchBar, List, ListItem, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProfilePage from './ProfilePage';

class TutorPages extends React.Component {
  state={
    isVisible: true,
  }

  static propTypes= {
    item: PropTypes.object.isRequired,
  }

  render() {

    return (

      <SafeAreaView style = {styles.container}>
      <TouchableOpacity onPress={() => this.setState({isVisible: false,})}>

        <View style = {styles.element}>

            <Image source={{ uri: this.props.item.profilePic}}
                style = {styles.image}
            />
            <View style = {{width:300}}>
              <Text style={styles.name}>{this.props.item.name} </Text>
              <Text style={styles.subject}>{this.props.item.subject} </Text>
              <Text style={styles.bio}>{this.props.item.bio} </Text>
              <Text style={styles.price}>{this.props.item.price} </Text>
            </View>
        </View>
      </TouchableOpacity>

      <Overlay
            Style = {styles.overlay}
            isVisible={this.state.isVisible}
            windowBackgroundColor="rgba(255, 255, 255, )"
            overlayBackgroundColor="white"
            width="100%"
            height="100%"
            onBackdropPress={() => this.setState({ isVisible: false })}
          >
          <View>
            <Image style={styles.filterTopLogo} source={require('./../assets/Myntorlogolr-04.png')} />
          </View>
          <Image source={{ uri: this.props.item.profilePic}}
              style = {styles.imageInside}
          />
          <Text style={styles.rating} > {this.props.item.rating} </Text>
          <Text style={styles.nameInside} > {this.props.item.name} </Text>


          <ScrollView>

          </ScrollView>
      </Overlay>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 30,

  },
  image:{
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 100
  },

  imageInside:{
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: -120,
    backgroundColor: 'black'
  },

  rating:{
    fontSize: 23,
    alignSelf: 'center',
    marginTop: 5,
  },

  nameInside:{
    fontSize: 23,
    alignSelf: 'center',
    marginTop: 5,
  },

  name:{
    color: 'black',
    fontWeight:'bold',
    marginTop: 2,
    marginRight: 25,
    paddingLeft: 5,
    fontSize: 15
  },
  subject:{
    color: 'black',
    fontWeight:'bold',
    marginTop: 2,
    marginRight: 25,
    paddingLeft: 5,
    fontSize:12
  },
  bio: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 5,
    marginTop: 3,
    marginRight:40,
    marginBottom: 4,
  },
  price:{
    color: 'black',
    fontWeight:'bold',
    marginRight: 25,
    paddingLeft: 5,
    fontSize:12
  },
  element:{
      flexDirection:'row',
      marginVertical: 7,
      //borderColor: '#68B457',
      //borderWidth:1,
      //borderRadius:10,
      marginHorizontal:7,
      paddingVertical:7
  },

  topLogo:{
    height:"24%",
    marginTop:13,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  overlay:{
    flex:1,
  },

  filterTopLogo:{
    height:"20.7%",
    marginTop:47,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

})

export default TutorPages;
