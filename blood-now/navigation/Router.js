import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegisterScreen2 from '../screens/RegisterScreen2';
import InformationScreen from '../screens/InformationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import FriendScreen from '../screens/FriendScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DonorScreen from '../screens/DonorScreen';
import RequestBloodScreen from '../screens/RequestBloodScreen';
import RequestBloodHistoryScreen from '../screens/RequestBloodHistoryScreen';
import RequestBloodSubmitScreen from '../screens/RequestBloodSubmitScreen'

export default createRouter(() => ({
  home: () => HomeScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
  login: () => LoginScreen,
  register: () => RegisterScreen,
  register2: () => RegisterScreen2,
  information: () => InformationScreen,
  notification: () => NotificationScreen,
  friend: () => FriendScreen,
  profile: () => ProfileScreen,
  donor: () => DonorScreen,
  requestBlood: () => RequestBloodScreen,
  requestBloodHistory: () => RequestBloodHistoryScreen,
  requestBloodSubmit: () => RequestBloodSubmitScreen,
}));
