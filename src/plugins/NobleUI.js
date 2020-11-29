 
import GlobalComponents from "./globalComponents"; 
 

import Vue from 'vue'; 
import { 
  BoxIcon, 
  MonitorIcon,
  ShoppingCartIcon,
  MailIcon,
  ListIcon,
  PackageIcon,
  SearchIcon,
  PlusIcon,
  EditIcon,
  Trash2Icon,
  AlertCircleIcon,
  PauseIcon,
  LogInIcon,
  FilePlusIcon,
  PocketIcon,
  SaveIcon,
  CornerRightUpIcon,
  LayersIcon,
  UsersIcon,
  LogOutIcon,
  LockIcon,
  SettingsIcon,
  PrinterIcon,
  FileIcon,
  FileTextIcon,
  AwardIcon,
  CheckIcon,
  XSquareIcon,
  XIcon,
  GiftIcon,
  PlayIcon,
  StopCircleIcon, 
  KeyIcon,
  BriefcaseIcon,
  MenuIcon,
  UserIcon,
  RefreshCwIcon,
  EyeIcon
} from 'vue-feather-icons'


Vue.component('box-icon', BoxIcon); 
Vue.component('monitor-icon', MonitorIcon); 
Vue.component('cart-icon', ShoppingCartIcon); 
Vue.component('mail-icon', MailIcon); 
Vue.component('list-icon', ListIcon); 
Vue.component('package-icon', PackageIcon); 
Vue.component('search-icon', SearchIcon); 
Vue.component('plus-icon', PlusIcon); 
Vue.component('edit-icon', EditIcon); 
Vue.component('trash-icon', Trash2Icon); 
Vue.component('alert-circle-icon', AlertCircleIcon); 
Vue.component('pause-icon', PauseIcon); 
Vue.component('login-icon', LogInIcon); 
Vue.component('file-plus-icon', FilePlusIcon);
Vue.component('pocket-icon', PocketIcon); 
Vue.component('save-icon', SaveIcon); 
Vue.component('corner-right-up-icon', CornerRightUpIcon); 
Vue.component('layers-icon', LayersIcon); 
Vue.component('users-icon', UsersIcon);
Vue.component('logout-icon', LogOutIcon);
Vue.component('lock-icon', LockIcon);
Vue.component('settings-icon', SettingsIcon);
Vue.component('print-icon', PrinterIcon);
Vue.component('file-icon', FileIcon);
Vue.component('file-text-icon', FileTextIcon);
Vue.component('award-icon', AwardIcon);
Vue.component('check-icon', CheckIcon);
Vue.component('x-square-icon', XSquareIcon);
Vue.component('x-icon', XIcon);
Vue.component('gift-icon', GiftIcon);
Vue.component('play-icon', PlayIcon);
Vue.component('stop-circle-icon', StopCircleIcon); 
Vue.component('key-icon', KeyIcon); 
Vue.component('briefcase-icon', BriefcaseIcon);
Vue.component('menu-icon', MenuIcon);
Vue.component('user-icon', UserIcon);
Vue.component('eye-icon', EyeIcon);
Vue.component('refresh-cw-icon', RefreshCwIcon); 
export default {
  
  install(Vue) {
    Vue.use(GlobalComponents); 
  }
}
