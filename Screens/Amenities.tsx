import React from 'react';
import { StatusBar } from 'react-native';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
type HomeScreenProps = {
  navigation: any;
};

const Amenities: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={'dark-content'}/>
    <View style={styles.header}>
    <TouchableOpacity><FontAwesome6 name='arrow-left-long' size={scale(25)} color={'black'} /></TouchableOpacity>
    <View style={{flex:4,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:moderateScale(22),fontWeight:'bold'}}>Amenities</Text></View>
    </View>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.navigate('Yoga')} style={styles.content}>
    <View style={styles.imagecontainer}><Image source={require('../Assets/YogaImage.png')} style={{height:'100%',width:'100%'}}/></View>
    <Text style={{fontSize:moderateScale(15)}}>Yoga</Text>
    <Text style={{fontSize:moderateScale(15),color:'#3A5D9C'}}>$ 500</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Yoga')} style={styles.content}>
    <View style={styles.imagecontainer}><Image source={require('../Assets/MeetingRoomImage.png')} style={{height:'100%',width:'100%'}}/></View>
    <Text style={{fontSize:moderateScale(15)}}>Meeting room</Text>
    <Text style={{fontSize:moderateScale(15),color:'#3A5D9C'}}>$ 500</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Yoga')} style={styles.content}>
    <View style={styles.imagecontainer}><Image source={require('../Assets/MeetingRoomImage.png')} style={{height:'100%',width:'100%'}}/></View>
    <Text style={{fontSize:moderateScale(15)}}>Meeting room</Text>
    <Text style={{fontSize:moderateScale(15),color:'#3A5D9C'}}>$ 500</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Yoga')} style={styles.content}>
    <View style={styles.imagecontainer}><Image source={require('../Assets/MeetingRoomImage.png')} style={{height:'100%',width:'100%'}}/></View>
    <Text style={{fontSize:moderateScale(15)}}>Meeting room</Text>
    <Text style={{fontSize:moderateScale(15),color:'#3A5D9C'}}>$ 500</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Yoga')} style={styles.content}>
    <View style={styles.imagecontainer}><Image source={require('../Assets/MeetingRoomImage.png')} style={{height:'100%',width:'100%'}}/></View>
    <Text style={{fontSize:moderateScale(15)}}>Meeting room</Text>
    <Text style={{fontSize:moderateScale(15),color:'#3A5D9C'}}>$ 500</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Yoga')} style={styles.content}>
    <View style={styles.imagecontainer}><Image source={require('../Assets/MeetingRoomImage.png')} style={{height:'100%',width:'100%'}}/></View>
    <Text style={{fontSize:moderateScale(15)}}>Meeting room</Text>
    <Text style={{fontSize:moderateScale(15),color:'#3A5D9C'}}>$ 500</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    flex:1,width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'flex-end',padding:scale(15)
  },
  body:{
    flex:12,flexDirection:'row',flexWrap:'wrap',width:'100%',justifyContent:'center',alignItems:'center'
  },
  content:{
    width:scale(140),height:verticalScale(140),margin:moderateScale(15),borderRadius:moderateScale(20),padding:moderateScale(10),flexDirection:'column',flexWrap:'wrap',backgroundColor:'white',elevation:4
  },
  imagecontainer:{
    height:'70%',width:'100%',borderRadius:moderateScale(15),overflow:'hidden'
  }
});

export default Amenities;

