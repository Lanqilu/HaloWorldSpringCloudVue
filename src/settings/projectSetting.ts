import type { ProjectConfig } from "/#/config";
import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from "/@/enums/menuEnum";
import { CacheTypeEnum } from "/@/enums/cacheEnum";
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum
} from "/@/enums/appEnum";
import { SIDE_BAR_BG_COLOR_LIST, HEADER_PRESET_BG_COLOR_LIST } from "./designSetting";
import { primaryColor } from "../../build/config/themeConfig";

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {

  "showSettingButton": true,
  "showDarkModeToggle": true,
  "settingButtonPosition": SettingButtonPositionEnum.AUTO,
  "permissionMode": PermissionModeEnum.BACK,
  "permissionCacheType": CacheTypeEnum.LOCAL,
  "sessionTimeoutProcessing": SessionTimeoutProcessingEnum.ROUTE_JUMP,
  "themeColor": primaryColor,
  "grayMode": false,
  "colorWeak": false,
  "fullContent": false,
  "contentMode": ContentEnum.FULL,
  "showLogo": true,
  "showFooter": true,
  "headerSetting": {
    "bgColor": HEADER_PRESET_BG_COLOR_LIST[0],
    "fixed": true,
    "show": true,
    "theme": ThemeEnum.LIGHT,
    "useLockPage": true,
    "showFullScreen": true,
    "showDoc": true,
    "showNotice": true,
    "showSearch": true
  },
  // Menu configuration
  menuSetting: {
    // sidebar menu bg color
    bgColor: SIDE_BAR_BG_COLOR_LIST[0],
    //  Whether to fix the left menu
    fixed: true,
    // Menu collapse
    collapsed: false,
    // Whether to display the menu name when folding the menu
    collapsedShowTitle: false,
    // Whether it can be dragged
    // Only limited to the opening of the left menu, the mouse has a drag bar on the right side of the menu
    canDrag: false,
    // Whether to show no dom
    show: true,
    // Whether to show dom
    hidden: false,
    // Menu width
    menuWidth: 210,
    // Menu mode
    mode: MenuModeEnum.HORIZONTAL,
    // Menu type
    type: MenuTypeEnum.TOP_MENU,
    // Menu theme
    theme: ThemeEnum.DARK,
    // Split menu
    split: false,
    // Top menu layout
    topMenuAlign: "center",
    // Fold trigger position
    trigger: TriggerEnum.HEADER,
    // Turn on accordion mode, only show a menu
    accordion: true,
    // Switch page to close menu
    closeMixSidebarOnChange: false,
    // Module opening method ‘click’ |'hover'
    mixSideTrigger: MixSidebarTriggerEnum.CLICK,
    // Fixed expanded menu
    mixSideFixed: false
  },

  "multiTabsSetting": {
    "cache": false,
    "show": false,
    "canDrag": true,
    "showQuick": true,
    "showRedo": true,
    "showFold": true
  },
  "transitionSetting": {
    "enable": true,
    "basicTransition": RouterTransitionEnum.FADE_SIDE,
    "openPageLoading": true,
    "openNProgress": true
  },
  "openKeepAlive": true,
  "lockTime": 0,
  "showBreadCrumb": true,
  "showBreadCrumbIcon": true,
  "useErrorHandle": false,
  "useOpenBackTop": true,
  "canEmbedIFramePage": true,
  "closeMessageOnSwitch": true,
  "removeAllHttpPending": false
};


export default setting;


