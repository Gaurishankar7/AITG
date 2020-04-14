import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignupScreen from './src/screen/SignupScreen'
import SigninScreen from './src/screen/SiginScreen'
import ForgetPassword from './src/screen/ForgetPassword'
import HomePage from './src/screen/HomePage'
import ProfilePage from './src/screen/ProfilePage'
import { Provider as AuthProvider } from './src/context/AuthContext'
import SetNewPass from './src/screen/SetNewPass'
import {setNavigator} from './src/navigationRef'
import RollScreen from './src/screen/RollScreen'
import DriverDetail from './src/screen/DriverDetail'
import ListofPD from './src/screen/ListofPD'
import DriverHomePage from './src/screen/DriverHomePage'
import DateCheck from './src/screen/DateCheck'
import CanclePickUP from './src/screen/CanclePickUP'
import ReachLate from './src/screen/ReachLate'
import DriverUrRide from './src/screen/DriverUrRide'
import DScheduleNewRide from './src/screen/DScheduleNewRide'


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
    Forget: ForgetPassword,
    NewPass: SetNewPass,
    

  }),
  mainFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
        Role: RollScreen,
        Ddetail: DriverDetail,
        Pdlist: ListofPD,
        DriverHome: DriverHomePage,
        Date: DateCheck,
        PCancle: CanclePickUP,
        LReach: ReachLate,
        YourRide: DriverUrRide,
        DScheduleRide: DScheduleNewRide,
      }),

    Home: HomePage,
    Profile: ProfilePage,
  }),

});

// export default createAppContainer(switchNavigator);
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)} } />
    </AuthProvider>
  );
};