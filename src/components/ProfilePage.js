import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';

class HomePage extends React.Component{
render(){

        return (

          <SafeAreaView style = {styles.container}>

              <View>
                <Text> Hello </Text>
              </View>

          </SafeAreaView>
        );

    };
};




const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        marginTop: 30,
    },
})

export default HomePage;
