  import React,{useState} from 'react';
  import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, StatusBar } from 'react-native';
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  import FontAwesome6 from 'react-native-vector-icons/dist/FontAwesome6';
  import Schedule from './Schedule';
  import Details from './Details';

  type RootStackParamList = {
    Schedule: undefined;
    Details: undefined;
  };

  const TopTab = createMaterialTopTabNavigator<RootStackParamList>();
  type HomeScreenProps = {
    navigation: any;
  };

  const Yoga: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [title, settitle] = useState<string>(""); 
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={'dark-content'} />
        <View style={{ flex: 1, width: '100%' }}>
        <View style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.navigate('Amenities')}><FontAwesome6 name='arrow-left-long' size={scale(25)} color={'black'} /></TouchableOpacity>
      <View style={{flex:4,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:moderateScale(22),fontWeight:'bold'}}>{title}</Text></View>
      </View>
          <Image source={require('../Assets/YogaImage.png')} style={styles.image} />
        </View>
        
        <View style={styles.scrollcontainer}>
        <TopTab.Navigator style={{borderTopLeftRadius: moderateScale(30)}} screenOptions={{tabBarIndicatorStyle:{height:verticalScale(4)} , tabBarStyle:{height:verticalScale(55),justifyContent:'center',alignItems:'center'}}}>
            <TopTab.Screen name="Schedule" component={Schedule} />
            <TopTab.Screen name="Details" component={Details} />
        </TopTab.Navigator>
        </View>
        
        <View style={{ flex: 2.3, width: '100%' }}></View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    header:{
      flex:1,width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center',padding:scale(25),position:'absolute',zIndex:1,top:verticalScale(30)
    },
    image: {
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
    scrollcontainer: {
      height: '73%', 
      width: '100%', 
      position: 'absolute', 
      top: '27%',
      borderTopLeftRadius: moderateScale(30),
      backgroundColor: 'white',
      zIndex: 1,
    }
  });

  export default Yoga;

