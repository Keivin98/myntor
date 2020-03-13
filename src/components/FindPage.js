import React from 'react';
import { View,
         Text,
         TouchableOpacity,
         StyleSheet,
         SafeAreaView,
         Image,
         Alert,
         FlatList,
         ScrollView
       } from 'react-native';
import {SearchBar, List, ListItem, Overlay } from 'react-native-elements';
import { db } from '../config';
import TutorPages from './TutorPages'
import Icon from 'react-native-vector-icons/Feather';

const ENTRIES = [
        {
          name: 'George Crater',
          subject: 'Philosophy',
          bio: 'Area of speciality, teaching philosophy, years of experience, and/or years of expertise in teaching',
          price: '400QR/hour',
          rating: '7/10',
          profilePic: 'https://live.staticflickr.com/65535/49570794597_f30ef85983_b.jpg'
        },
        {
          name: 'Sarah Shulman',
          subject: 'Biology',
          bio: 'Experience in teaching Biology for three years. Graduated from Harvard majoring in Sciences',
          price: '200QR/hour',
          rating: '6.8/10',
          profilePic: 'https://live.staticflickr.com/65535/49570568321_f533cf08b9_b.jpg'
        },
        {
          name: 'Kevin Heeler',
          subject: 'English',
          bio: 'Masters Degree in English Litelature from Carnegie Mellon University. 4 years of experience in teaching',
          price: '350QR/hour',
          rating: '9/10',
          profilePic: 'https://live.staticflickr.com/65535/49570064103_92ca0041a1_b.jpg'
        },
        {
          name: 'Omar Elwalid',
          subject: 'Philosophy',
          bio: 'Area of speciality, teaching philosophy, years of experience, and/or years of expertise in teaching',
          price: '400QR/hour',
          rating: '7.5/10',
          profilePic: 'https://live.staticflickr.com/65535/49570794597_f30ef85983_b.jpg'
        },
        {
          name: 'Mahmouda Hasaneen',
          subject: 'Biology',
          bio: 'Experience in teaching Biology for three years. Graduated from Harvard majoring in Sciences',
          price: '200QR/hour',
          rating: '8/10',
          profilePic: 'https://live.staticflickr.com/65535/49570568321_f533cf08b9_b.jpg'
        },
        {
          name: 'Kevin Isufaj',
          subject: 'English',
          bio: 'Masters Degree in English Litelature from Carnegie Mellon University. 4 years of experience in teaching',
          price: '350QR/hour',
          rating: '6/10',
          profilePic: 'https://live.staticflickr.com/65535/49570064103_92ca0041a1_b.jpg'
        },
  ]
class HomePage extends React.Component{
    state={
      search : '',
      isVisible: false,
      levelOne: 'white',
    }

    addItem = item => {
    db.ref('/items').push({
      item1: {title: 'UTERQUE',
              illustration: [
                'https://live.staticflickr.com/65535/49340154828_9449369062_o.jpg',
                'https://live.staticflickr.com/65535/49340606116_b5b8dd0e12_o.jpg',
                'https://live.staticflickr.com/65535/49340154943_954ba7a920_o.jpg',
                'https://live.staticflickr.com/65535/49340831017_b91290880d_o.jpg',
              ],
              desc: 'Some description here',
              price: 'QAR 300',
              color:'black',
              otherColors:['White','Yellow'],
              malls:['Mall of Qatar', 'Landmark Mall', 'Gulf Mall'],
              sizes:['XS', 'S', 'M', 'L', 'XL'],
              itemCode: '1226767237'},

      item2: {title: 'UTERQUE',
              illustration: [
                'https://live.staticflickr.com/65535/49340154828_9449369062_o.jpg',
                'https://live.staticflickr.com/65535/49340606116_b5b8dd0e12_o.jpg',
                'https://live.staticflickr.com/65535/49340154943_954ba7a920_o.jpg',
                'https://live.staticflickr.com/65535/49340831017_b91290880d_o.jpg',
              ],
              desc: 'Some description here',
              price: 'QAR 300',
              color:'black',
              otherColors:['White','Yellow'],
              malls:['Mall of Qatar', 'Landmark Mall', 'Gulf Mall'],
              sizes:['XS', 'S', 'M', 'L', 'XL'],
              itemCode: '1226767237'},

    });
  };

    handleSubmit = () => {
    this.addItem(this.state.name);
    Alert.alert('Item saved successfully');
  };
    updateSearch = search => {
      this.setState({ search });
    };

    renderItem = ({item, index}) => {
    return (
      <TutorPages item={item} navigation={this.props.navigation}/>
    )
  };

    render(){
      const { search } = this.state;
      return (
        <SafeAreaView style = {styles.container}>
          <View>
            <Image style={styles.topLogo} source={require('./../assets/Myntorlogolr-04.png')} />
          </View>

          

          <View style = {{flexDirection:'row', marginLeft:15, marginTop: -130}}>
            <TouchableOpacity style={styles.filterButtonOut} >
              <Text style = {styles.filterText}> FILTER </Text>
              <Icon name={'chevron-down'} color='white' size={20} style={{paddingRight:10, marginTop: -2}} />
            </TouchableOpacity>
            <SearchBar
              containerStyle = {styles.searchBarContainer}
              inputContainerStyle = {styles.searchBarInputContainer}
              placeholder="Find..."
              onChangeText={this.updateSearch}
              value={search}
            />
          </View>
          <View style={styles.list}>
            <FlatList
              data={ENTRIES}
              renderItem = {this.renderItem}
              numColumns = {1}
            />
          </View>
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
              <View style = {{flexDirection:'row', marginLeft:15, marginTop: -130}}>
                <TouchableOpacity style={styles.filterButtonIn} onPress={() => this.setState({isVisible: false,})}>
                  <Text style = {styles.filterText}> FILTER </Text>
                  <Icon name={'chevron-up'} color='white' size={20} style={{paddingRight:10, marginTop: -2}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.applyChangesButton} onPress={() => this.setState({isVisible: false,})}>
                  <Text style = {styles.filterText}> APPLY CHANGES </Text>
                  <Icon name={'check'} color='white' size={20} style={{paddingRight:10, marginTop: -2}} />
                </TouchableOpacity>
              </View>

              <ScrollView>
                <Text style = {styles.mainFilterText}> Level </Text>
                <Text style = {[styles.subFilterText,]} onPress = {() => this.setState({levelOne: 'green',})}> Primary </Text>
                <Text style = {styles.subFilterText}> Secondary </Text>
                <Text style = {styles.subFilterText}> University </Text>

                <Text style = {styles.mainFilterText}> Subject </Text>
                <Text style = {styles.subFilterText}> English </Text>
                <Text style = {styles.subFilterText}> Math </Text>
                <Text style = {[styles.subFilterText,]}> Chemistry </Text>
                <Text style = {styles.subFilterText}> Biology </Text>

                <Text style = {styles.mainFilterText}> Gender </Text>
                <Text style = {styles.subFilterText}> Male </Text>
                <Text style = {[styles.subFilterText, ]}> Female </Text>

                <Text style = {styles.mainFilterText}> Languages </Text>
                <Text style = {styles.subFilterText}> Arabic </Text>
                <Text style = {[styles.subFilterText, ]}> English </Text>
                <Text style = {styles.subFilterText}> Filipino </Text>
                <Text style = {styles.subFilterText}> French </Text>
                <Text style = {styles.subFilterText}> Hindi </Text>
                <Text style = {styles.subFilterText}> Malyalam </Text>
                <Text style = {styles.subFilterText}> Spanish </Text>

                <Text style = {styles.mainFilterText}> Price </Text>
                <Text style = {[styles.subFilterText, ]}> 100 + </Text>
                <Text style = {styles.subFilterText}> 200 + </Text>
                <Text style = {styles.subFilterText}> 300 + </Text>

                <Text style = {styles.mainFilterText}> Location </Text>
                <Text style = {styles.subFilterText}> Al Rayyan </Text>
                <Text style = {[styles.subFilterText, ]}> Al Wakra </Text>
                <Text style = {styles.subFilterText}> Al Khor </Text>
                <Text style = {styles.subFilterText}> Al Zubarah </Text>

              </ScrollView>
          </Overlay>
        </SafeAreaView>
        );
      };
    };


// DONT FORGET TO FIX THE MARGINS BASED ON THE SCREEN SIZE NOT FROM YOUR ASS

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop: 30,

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

    searchBarContainer:{
    marginLeft: 10,
    width: '72%',
    height: '25%',
    backgroundColor: 'white',
    borderBottomColor: 'white',
    borderTopColor: 'white',
  },

  searchBarInputContainer:{
    backgroundColor: 'black',
    borderColor: 'black',
  },
  filterButtonOut:{
    flexDirection:'row',
    backgroundColor: 'black',
    borderRadius: 5,
    height: 30,
    marginTop:9,
    paddingVertical:5,
  },

  filterButtonIn:{
    flexDirection:'row',
    backgroundColor: 'black',
    borderRadius: 5,
    height: 30,
    marginTop:12,
    marginBottom:9,
    paddingVertical:5,
    marginLeft: -9.5,
    marginRight: 115
  },

  applyChangesButton:{
    flexDirection:'row',
    backgroundColor: 'black',
    borderRadius: 5,
    height: 30,
    marginTop:12,
    marginBottom:9,
    paddingVertical:5,
    marginLeft: -9.5,
    alignSelf:'flex-end'
  },

  filterText:{
    color: 'white',
    fontWeight:'bold',
    marginHorizontal: 10,

  },

  mainFilterText:{
    color: 'black',
    fontWeight:'bold',
    fontSize: 21,
    marginTop: 27,
    marginLeft: 15
  },

  subFilterText:{
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    marginLeft: 15,
    borderColor: 'black',
    borderWidth:1,
    borderRadius:10,
    overflow: 'hidden'

  },
})

export default HomePage;
