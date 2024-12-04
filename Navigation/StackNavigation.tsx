import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-native-paper';
import Amenities from '../Screens/Amenities';
import Yoga from '../Screens/Yoga';
type RootStackParamList = {
    Amenities: undefined;
    Yoga: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Amenities" component={Amenities} options={{headerShown:false}}/>
        <Stack.Screen name="Yoga" component={Yoga} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
