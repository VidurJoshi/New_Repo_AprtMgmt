import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

type HomeScreenProps = {
  navigation: any;
};

const Schedule: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textstyle}>Friday, 11 January</Text>
          <View style={styles.datacontainer}>
            <View style={styles.time}>
              <Text style={{textAlign:'center',fontSize:moderateScale(20),fontWeight:'bold'}}>10:00</Text>
              <Text style={{textAlign:'center',fontSize:moderateScale(15),marginTop:verticalScale(5),color:'grey'}}>60 Mins</Text>
            </View>
            <View style={styles.data}>
            <Text style={{textAlign:'center',fontSize:moderateScale(15),fontWeight:'bold'}}>YOGA - Foundation</Text>
            <Text style={{textAlign:'center',fontSize:moderateScale(12),marginTop:verticalScale(5),color:'grey'}}>Traner - lorem ipssum 8 slaughts left</Text>
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.buttonstylebooked}><Text style={styles.textstylebooked}>Book</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.datacontainer}>
            <View style={styles.time}>
              <Text style={{textAlign:'center',fontSize:moderateScale(20),fontWeight:'bold'}}>10:00</Text>
              <Text style={{textAlign:'center',fontSize:moderateScale(15),marginTop:verticalScale(5),color:'grey'}}>60 Mins</Text>
            </View>
            <View style={styles.data}>
            <Text style={{textAlign:'center',fontSize:moderateScale(15),fontWeight:'bold'}}>YOGA - Foundation</Text>
            <Text style={{textAlign:'center',fontSize:moderateScale(12),marginTop:verticalScale(5),color:'grey'}}>Traner - lorem ipssum 8 slaughts left</Text>
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.buttonstyleunbooked}><Text style={styles.textstyleunbooked}>Book</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.datacontainer}>
            <View style={styles.time}>
              <Text style={{textAlign:'center',fontSize:moderateScale(20),fontWeight:'bold'}}>10:00</Text>
              <Text style={{textAlign:'center',fontSize:moderateScale(15),marginTop:verticalScale(5),color:'grey'}}>60 Mins</Text>
            </View>
            <View style={styles.data}>
            <Text style={{textAlign:'center',fontSize:moderateScale(15),fontWeight:'bold'}}>YOGA - Foundation</Text>
            <Text style={{textAlign:'center',fontSize:moderateScale(12),marginTop:verticalScale(5),color:'grey'}}>Traner - lorem ipssum 8 slaughts left</Text>
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.buttonstyleunbooked}><Text style={styles.textstyleunbooked}>Book</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.textstyle}>Friday, 11 January</Text>
          <View style={styles.datacontainer}>
            <View style={styles.time}>
              <Text style={{textAlign:'center',fontSize:moderateScale(20),fontWeight:'bold'}}>10:00</Text>
              <Text style={{textAlign:'center',fontSize:moderateScale(15),marginTop:verticalScale(5),color:'grey'}}>60 Mins</Text>
            </View>
            <View style={styles.data}>
            <Text style={{textAlign:'center',fontSize:moderateScale(15),fontWeight:'bold'}}>YOGA - Foundation</Text>
            <Text style={{textAlign:'center',fontSize:moderateScale(12),marginTop:verticalScale(5),color:'grey'}}>Traner - lorem ipssum 8 slaughts left</Text>
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.buttonstyleunbooked}><Text style={styles.textstyleunbooked}>Book</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.datacontainer}>
            <View style={styles.time}>
              <Text style={{textAlign:'center',fontSize:moderateScale(20),fontWeight:'bold'}}>10:00</Text>
              <Text style={{textAlign:'center',fontSize:moderateScale(15),marginTop:verticalScale(5),color:'grey'}}>60 Mins</Text>
            </View>
            <View style={styles.data}>
            <Text style={{textAlign:'center',fontSize:moderateScale(15),fontWeight:'bold'}}>YOGA - Foundation</Text>
            <Text style={{textAlign:'center',fontSize:moderateScale(12),marginTop:verticalScale(5),color:'grey'}}>Traner - lorem ipssum 8 slaughts left</Text>
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.buttonstyleunbooked}><Text style={styles.textstyleunbooked}>Book</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textstyle: {
    fontSize: moderateScale(18),
    color: 'grey',
    marginVertical: verticalScale(20),
    marginHorizontal: scale(30),
  },
  datacontainer: {
    height: verticalScale(80),
    width: '90%',
    marginHorizontal: '5%',
    marginVertical:verticalScale(5),
    backgroundColor: 'white',
    borderRadius: scale(20),
    elevation: scale(15),
    flexDirection: 'row',
  },
  time: {
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  data: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonstylebooked:{
    height:moderateScale(35),width:'70%',justifyContent:'center',borderRadius:moderateScale(30),backgroundColor:'rgba(255,83,83,0.25)'
  },
  textstylebooked:{
    textAlign:'center',color:'#FF5353',fontSize:moderateScale(15),fontWeight:'bold'
  },
  buttonstyleunbooked:{
    height:moderateScale(35),width:'70%',justifyContent:'center',borderRadius:moderateScale(30),backgroundColor:'rgba(115,145,255,0.25)'
  },
  textstyleunbooked:{
    textAlign:'center',color:'#7391FF',fontSize:moderateScale(15),fontWeight:'bold'
  }
});

export default Schedule;
