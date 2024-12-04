import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Button, Image } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Modal from "react-native-modal";


type HomeScreenProps = {
  navigation: any;
};

const Details: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={'dark-content'} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
          <View style={{height:'40%',width:'80%',borderRadius:moderateScale(20),backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
          <Image source={require('../Assets/BlueTick.png')}/>
          <Text style={{fontSize:moderateScale(20),fontWeight:'bold'}}>Booked Successfully</Text>
          </View>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>

      <View style={styles.detailscontainer}>
        <Text style={styles.titleText}>Description</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.
        </Text>
      </View>

      <View style={styles.buttoncontainer}>
        <TouchableOpacity 
          onPress={toggleModal}
          style={styles.buttonone}
          accessibilityLabel="Book button"
          accessibilityHint="Tap to book"
        >
          <Text style={styles.buttontext}>Book</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F4F4F4', // Light background for overall view
  },
  detailscontainer: {
    flex: 4,
    width: '100%',
    backgroundColor: 'white',
    padding: moderateScale(20),
  },
  titleText: {
    color: '#636363',
    fontSize: moderateScale(20),
  },
  descriptionText: {
    color: '#636363',
    fontSize: moderateScale(14),
    marginTop: verticalScale(20),
  },
  buttoncontainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '6%',
    backgroundColor: 'white',
  },
  buttonone: {
    width: '100%',
    borderRadius: moderateScale(50),
    height: verticalScale(50),
    backgroundColor: '#DCE3FF',
    justifyContent: 'center',
  },
  buttontext: {
    textAlign: 'center',
    color: '#476FFF',
    fontSize: moderateScale(18),
    letterSpacing: moderateScale(1),
  },
});

export default Details;


// main
// import React,{useState} from 'react';
// import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, StatusBar, Modal,Pressable } from 'react-native';
// import { moderateScale, verticalScale } from 'react-native-size-matters';

// type HomeScreenProps = {
//   navigation: any;
// };

// const Details: React.FC<HomeScreenProps> = ({ navigation }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <SafeAreaView style={styles.container}>
//     <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={'dark-content'}/>

//     <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={()=>{setModalVisible(!modalVisible)}}>
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Hello World!</Text>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => setModalVisible(!modalVisible)}>
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </Pressable>
//             </View>
//           </View>
//         </Modal>

//     <View style={styles.detailscontainer}>
//     <Text style={{color:'#636363',fontSize:moderateScale(20)}}>Description</Text>
//     <Text style={{color:'#636363',fontSize:moderateScale(14),marginTop:verticalScale(20)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies actempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.</Text>
//     </View>
//     <View style={styles.buttoncontainer}>
//     <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonone}>
//     <Text style={styles.buttontext}>Book</Text>
//     </TouchableOpacity>
//     </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   detailscontainer:{
//     flex:4,width:'100%',backgroundColor:'white',padding:moderateScale(20)
//   },
//   buttoncontainer:{
//     flex:1,width:'100%',justifyContent:'center',alignItems:'center',paddingHorizontal:'6%',backgroundColor:'white'
//   },
//   buttonone:{
//     width:'100%',borderRadius:moderateScale(50),height:verticalScale(50),backgroundColor:'#DCE3FF',justifyContent:'center',
//   },
//   buttontext:{
//     textAlign:'center',color:'#476FFF',fontSize:moderateScale(18),letterSpacing:moderateScale(1)
//   },


//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },


// });

// export default Details;