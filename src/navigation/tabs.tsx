import Catalag from '../screens/Catalag';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

export interface ITabApp {
  name_icon: string;
  name_tab: string;
  component: React.ComponentType;
}

const tabs: ITabApp[] = [
  {
    name_icon: 'catching-pokemon',
    name_tab: 'Catalago',
    component: Catalag
  },
  {
    name_icon: 'home',
    name_tab: 'Inicio',
    component: Home
  },
  {
    name_icon: 'person',
    name_tab: 'Perfil',
    component: Profile
  },
];

export default tabs;
