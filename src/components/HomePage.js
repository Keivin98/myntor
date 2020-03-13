import React from 'react';
import { View, 
         Image, 
         Text,
         StyleSheet, 
         ScrollView,
        Dimensions,
        TouchableOpacity
      } from 'react-native';
import SliderEntry from './SliderEntry'
import {SearchBar} from 'react-native-elements';

import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Feather';

const ENTRIES3 = [
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
    bio: 'Masters Degree in English Literature from Carnegie Mellon University. 4 years of experience in teaching',
    price: '350QR/hour',
    rating: '6/10',
    profilePic: 'https://live.staticflickr.com/65535/49570064103_92ca0041a1_b.jpg'
  },
]

class HomePage extends React.Component{
  
  _renderItem2 ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} itemHeight= {height2} />;
      }
  state={
    search:''
  }

  render(){
    const { search } = this.state;
    return (
            <View style={styles.container}>

              <View>
                <Image style={styles.topLogo} source={require('./../assets/Myntorlogolr-04.png')} />
              </View>

              <View style = {{flexDirection:'row', marginLeft:15, marginTop: -130,}}>
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

              <ScrollView style = {styles.container1}>

              <View style={{borderBottomRightColor:'black',borderBottomRightWidth:5, flexDirection:'row'}}>
                <Text style = {styles.sectionTitle}>
                  ARABIC
                </Text>
                <Icon name={'plus-circle'} color='black' size={15} style={{marginLeft: 4 , marginTop: 2}} />

                <View style = {{width: Dimensions.get('window').width, marginTop: 9 , marginLeft:10
                                ,borderTopColor:'#68B457',
                                borderTopWidth:5,
                                borderRadius:1}}>

                </View>
                {/* <Dash style={{width: Dimensions.get('window').width, marginTop:10 , marginLeft:10}}
                      dashColor='green'
                  /> */}
              </View>
                  <Carousel
                          data={ENTRIES3}
                          renderItem={this._renderItem2}
                          sliderWidth={sliderWidth}
                          sliderHeight={200}
                          itemHeight={200}
                          itemWidth={itemWidth}
                          inactiveSlideScale={2}
                          inactiveSlideOpacity={1}
                          enableMomentum={true}
                          activeSlideAlignment={'start'}
                          swipeThreshold={1000}
                          enableSnap={false}
                          useScrollView={true}

                        />
            <View style={{borderBottomRightColor:'black',borderBottomRightWidth:5, flexDirection:'row'}}>
                <Text style = {styles.sectionTitle}>
                  ENGLISH
                </Text>
                <Icon name={'plus-circle'} color='black' size={15} style={{marginLeft: 4, marginTop: 2}} />
                <View style = {{width: Dimensions.get('window').width, marginTop: 9 , marginLeft:10
                                ,borderTopColor:'#68B457',
                                borderTopWidth:5,
                                borderRadius:1}}>

                </View>
                {/* <Dash style={{width: Dimensions.get('window').width, marginTop:10 , marginLeft:10}}
                      dashColor='green'
                  /> */}
              </View>
                  <Carousel
                          data={ENTRIES3}
                          renderItem={this._renderItem2}
                          sliderWidth={sliderWidth}
                          sliderHeight={200}
                          itemHeight={200}
                          itemWidth={itemWidth}
                          inactiveSlideScale={2}
                          inactiveSlideOpacity={1}
                          enableMomentum={true}
                          activeSlideAlignment={'start'}
                          swipeThreshold={1000}
                          enableSnap={false}
                          useScrollView={true}

                        />
              <View style={{borderBottomRightColor:'black',borderBottomRightWidth:5, flexDirection:'row'}}>
                <Text style = {styles.sectionTitle}>
                  BIOLOGY
                </Text>
                <Icon name={'plus-circle'} color='black' size={15} style={{marginLeft: 4, marginTop: 2}} />
                <View style = {{width: Dimensions.get('window').width, marginTop: 9 , marginLeft:10
                                ,borderTopColor:'#68B457',
                                borderTopWidth:5,
                                borderRadius:1}}>

                </View>
                {/* <Dash style={{width: Dimensions.get('window').width, marginTop:10 , marginLeft:10}}
                      dashColor='green'
                  /> */}
              </View>
                  <Carousel
                          data={ENTRIES3}
                          renderItem={this._renderItem2}
                          sliderWidth={sliderWidth}
                          sliderHeight={200}
                          itemHeight={200}
                          itemWidth={itemWidth}
                          inactiveSlideScale={2}
                          inactiveSlideOpacity={1}
                          enableMomentum={true}
                          activeSlideAlignment={'start'}
                          swipeThreshold={1000}
                          enableSnap={false}
                          useScrollView={true}

                        />
                <View style={{borderBottomRightColor:'black',borderBottomRightWidth:5, flexDirection:'row'}}>
                <Text style = {styles.sectionTitle}>
                  CHEMISTRY
                </Text>
                <Icon name={'plus-circle'} color='black' size={15} style={{marginLeft: 4, marginTop: 2}} />
                <View style = {{width: Dimensions.get('window').width, marginTop: 9 , marginLeft:10
                                ,borderTopColor:'#68B457',
                                borderTopWidth:5,
                                borderRadius:1}}>

                </View>
                {/* <Dash style={{width: Dimensions.get('window').width, marginTop:10 , marginLeft:10}}
                      dashColor='green'
                  /> */}
              </View>
                  <Carousel
                          data={ENTRIES3}
                          renderItem={this._renderItem2}
                          sliderWidth={sliderWidth}
                          sliderHeight={200}
                          itemHeight={200}
                          itemWidth={itemWidth}
                          inactiveSlideScale={2}
                          inactiveSlideOpacity={1}
                          enableMomentum={true}
                          activeSlideAlignment={'start'}
                          swipeThreshold={1000}
                          enableSnap={false}
                          useScrollView={true}

                        />
              <View style={{borderBottomRightColor:'black',borderBottomRightWidth:5, flexDirection:'row'}}>
                <Text style = {styles.sectionTitle}>
                  PROGRAMMING
                </Text>
                <Icon name={'plus-circle'} color='black' size={15} style={{marginLeft: 4, marginTop: 2}} />
                <View style = {{width: Dimensions.get('window').width, marginTop: 9 , marginLeft:10
                                ,borderTopColor:'#68B457',
                                borderTopWidth:5,
                                borderRadius:1}}>

                </View>
                {/* <Dash style={{width: Dimensions.get('window').width, marginTop:10 , marginLeft:10}}
                      dashColor='green'
                  /> */}
              </View>
                  <Carousel
                          data={ENTRIES3}
                          renderItem={this._renderItem2}
                          sliderWidth={sliderWidth}
                          sliderHeight={200}
                          itemHeight={200}
                          itemWidth={itemWidth}
                          inactiveSlideScale={2}
                          inactiveSlideOpacity={1}
                          enableMomentum={true}
                          activeSlideAlignment={'start'}
                          swipeThreshold={1000}
                          enableSnap={false}
                          useScrollView={true}

                        />
            </ScrollView>
            </View>
          );

      };
  };


  const horizontalMargin = -15;
  const slideWidth = 150;
  
  const sliderWidth = Dimensions.get('window').width;
  const itemWidth = slideWidth + horizontalMargin * 2 ;
  const height2 = 150;

  
  

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: 'white',
      marginTop: 30,
  },
    container1:{
        flex:1,
        backgroundColor: 'white',
        marginTop: 10,
    },
    topLogo:{
      height:"24%",
      marginTop:13,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    sectionTitle:{
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 5,
      marginBottom: 10,
    },
    filterButtonOut:{
      flexDirection:'row',
      backgroundColor: 'black',
      borderRadius: 5,
      height: 30,
      marginTop:9,
      paddingVertical:5,
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
    filterText:{
      color: 'white',
      fontWeight:'bold',
      marginHorizontal: 10,
  
    },
  
})

export default HomePage;
