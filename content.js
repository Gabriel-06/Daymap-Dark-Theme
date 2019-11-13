/* TODO:

hyperlinks
attendence colors
*/

const $0dp = '#121212'
const $1dp = '#1d1d1d'
const $2dp = '#212020'
const $3dp = '#222121'
const $4dp = '#242323'
const $6dp = '#282726'
const $8dp = '#292828'
const $12dp = '#2d2c2c'
const $16dp = '#2e2c2c'
const $24dp = '#302f2f'

const $1dp_shadow = '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
const $2dp_shadow = '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
const $3dp_shadow = '0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12)'
const $4dp_shadow = '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
const $6dp_shadow = '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)'
const $8dp_shadow = '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)'
const $12dp_shadow = '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)'
const $16dp_shadow = '0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)'
const $24dp_shadow = '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)'

const primary = '#1f9dd9'
const primaryDark = '#006fa7'
const textColor = '#e5e5e5'
const errorColor = '#cf6679'
const darkTextColor = '#464747'

function addCss(rule) {
  let css = document.createElement('style')
  css.type = 'text/css'
  if (css.styleSheet) css.styleSheet.cssText = rule // Support for IE
  else css.appendChild(document.createTextNode(rule)) // Support for the rest
  document.getElementsByTagName('head')[0].appendChild(css)
}

function frameLoad() {
  if (document.getElementsByClassName('dlgContent')[0].getElementsByTagName('iframe')[0].contentWindow.document.head == firstLoad) {
    setTimeout(frameLoad, 100)
    return
  }
  if (document.getElementsByClassName('dlgContent')[0].getElementsByTagName('iframe')[0].contentWindow.document.head != null) {
    addFrameCss('.Dialog {background-color: ' + $6dp + ' !important; color: ' + textColor + ' !important;}')
    addFrameCss('.msgBody {background-color: ' + $12dp + ' !important; color: ' + textColor + ' !important; border-width: 0px !important; border-raduis: 3px !important; box-shadow: ' + $6dp_shadow + ' !important;}')
    addFrameCss('.lpAll {background-color: ' + $12dp + ' !important; color: ' + textColor + ' !important; border-width: 0px !important; border-raduis: 3px !important; box-shadow: ' + $6dp_shadow + ' !important;}')
    addFrameCss('.lpAll p span {color: ' + textColor + ' !important; font-family: "Roboto", "Helvetica Neue",Helvetica,Arial,sans-serif !important;}')
    addFrameCss('.msgSender {color: ' + primaryDark + ' !important;}')
    addFrameCss('.btn {background-color: ' + primaryDark + ' !important;}')
    addFrameCss('.btn:hover {box-shadow: none !important;}')
    addFrameCss('.WhiteBox {background-color: ' + $12dp + ' !important; color: ' + textColor + ' !important; border-width: 0px !important; border-raduis: 3px !important; box-shadow: ' + $6dp_shadow + ' !important;}')
    addFrameCss('div {border-width: 0px !important;}')
    addFrameCss('.CaptionG {color: ' + textColor + ' !important;}')
    addFrameCss('.Caption {color: ' + textColor + ' !important;}')
    addFrameCss('.CaptionR {color: ' + textColor + ' !important;}')
    addFrameCss('.threadR {background-color: ' + $12dp + ' !important;}')
    addFrameCss('.threadL {background-color: ' + $12dp + ' !important;}')
    addFrameCss('.msgLatest {background-color: ' + errorColor + ' !important; border-radius: 3px !important;}')
    addFrameCss('p {background-color: ' + $12dp + ' !important; color: ' + textColor + ' !important; font-family: "Roboto", "Helvetica Neue",Helvetica,Arial,sans-serif !important;}')
    addFrameCss('span {color: ' + textColor + ' !important; font-family: "Roboto", "Helvetica Neue",Helvetica,Arial,sans-serif !important;}')
    addFrameCss('div.ErrMsg {background-color: ' + $6dp + ' !important; color: ' + errorColor + ' !important;}')
    addFrameCss('li {color: ' + textColor + ' !important; font-family: "Roboto", "Helvetica Neue",Helvetica,Arial,sans-serif !important;}')
    addFrameCss('body {color: ' + errorColor + ' !important; font-family: "Roboto", "Helvetica Neue",Helvetica,Arial,sans-serif !important; font-size: 14px !important;}')
    addFrameCss('a {color: ' + primary + ' !important;}')
    addCss('.dlgContent {background-color: ' + $6dp + ' !important; border-width: 0px !important; border-radius: 3px !important;}')


  } else {
    setTimeout(frameLoad, 50)
  }
}

function addFrameCss(rule) {
  let css = document.createElement('style')
  css.type = 'text/css'
  if (css.styleSheet) css.styleSheet.cssText = rule // Support for IE
  else css.appendChild(document.createTextNode(rule)) // Support for the rest
  console.log(document.getElementsByClassName('dlgContent')[0].getElementsByTagName('iframe')[0].contentWindow.document.head)
  document.getElementsByClassName('dlgContent')[0].getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName('head')[0].appendChild(css)
}

var firstLoad
const observer = new MutationObserver(function(mutations) {
  if (mutations[1] != null) {
    if (mutations[1].addedNodes.length)
      if (document.getElementsByClassName('dlgContent')[0] != null) {
        if (document.getElementsByClassName('dlgContent')[0].getElementsByTagName('iframe')[0] != null) {
          firstLoad = document.getElementsByClassName('dlgContent')[0].getElementsByTagName('iframe')[0].contentWindow.document.head
          frameLoad()
        }
      }
      if (document.getElementsByClassName('dlgContent')[1] != null) {
        if (document.getElementsByClassName('dlgContent')[1].getElementsByTagName('iframe')[0] != null) {
          firstLoad = document.getElementsByClassName('dlgContent')[1].getElementsByTagName('iframe')[0].contentWindow.document.head
          frameLoad()
        }
      }
  }
})
const bears = document.querySelector('body#mainBody')
observer.observe(bears, {
  childList: true,
})

const send_help = document.getElementsByTagName('td')
if (send_help != null) {
  for (elt of send_help) {
    elt.style['background-color'] = 'transparent'
  }
}

const maintext = document.getElementsByTagName('div')
for (elt of maintext) {
  elt.style['color'] = '#FFF'
}

const calenderthing = document.getElementsByTagName('td')[18]
if (calenderthing != null) {
  calenderthing.style['padding-top'] = '0px'
}

const card = document.getElementsByClassName('card')
for (elt of card) {
  elt.style['background-color'] = $1dp
  elt.style['border-width'] = '0px'
  elt.style['padding-left'] = '10px'
  elt.style['box-shadow'] = $1dp_shadow
}

const ddlWeekbutton = document.getElementById('ddlWeek-button')
if (ddlWeekbutton != null) {
  ddlWeekbutton.style.margin = '0px'
}

const toolbar = document.getElementsByClassName('Toolbar')
for (elt of toolbar) {
  elt.style['border-width'] = '0px'
  elt.style['border-radius'] = '3px'
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $1dp_shadow
}

const msgunread = document.getElementsByClassName('msg unread')
for (elt of msgunread) {
  elt.style['color'] = textColor
  elt.style['background-color'] = $1dp
  elt.style['box-shadow'] = $1dp_shadow
}

const text = document.getElementsByTagName('a')
for (elt of text) {
  elt.style['color'] = textColor
}

const h2 = document.getElementsByTagName('h2')
for (elt of h2) {
  elt.style['color'] = textColor
}

const search = document.getElementsByClassName('hasDatepicker')
for (elt of search) {
  elt.style['background-color'] = 'transparent'
  elt.style['border-color'] = '#ccc'
}

const caption = document.getElementsByClassName('Caption')
for (elt of caption) {
  elt.style['color'] = textColor
  elt.style['padding-top'] = '0px'
}

const header = document.getElementsByClassName('Header')
for (elt of header) {
  elt.style['color'] = textColor
  elt.style['background-color'] = 'transparent'
}

const cap = document.getElementsByClassName('cap')
for (elt of cap) {
  elt.style['color'] = '#acacac'
}

const title = document.getElementsByClassName('lpTitle')
for (elt of title) {
  elt.style['color'] = '#FFF'
}

const postticker = document.getElementsByClassName('post-ticker')
for (elt of postticker) {
  elt.style['boxShadow'] = 'none'
  elt.style['background-color'] = primaryDark
}

const headerr = document.getElementsByClassName('header')
for (elt of headerr) {
  elt.style['color'] = textColor
  elt.style['background-color'] = $1dp
  elt.style['border-color'] = '#535353'
  elt.style['box-shadow'] = $1dp_shadow
  elt.style['border-width'] = '0px'
}

const menu = document.getElementById('mnu')
if (menu != null) {
  for (elt of menu.getElementsByTagName('td')) {
    elt.style['background-color'] = 'transparent'
    elt.style['border-bottom'] = '0px'
    elt.style['color'] = '#FFF'
  }
}

const body = document.getElementById('mainBody')
if (body != null) {
  body.style.backgroundColor = $0dp
}

const mdi = document.getElementsByClassName('mdi mdi-menu')
for (elt of mdi) {
  elt.style['color'] = '#FFF'
}

const ui = document.getElementsByClassName('ui-selectmenu-text')
for (elt of ui) {
  elt.style['padding-top'] = '3px'
}

const uiicon = document.getElementsByClassName('ui-selectmenu-icon ui-icon ui-icon-triangle-1-s')
for (elt of uiicon) {
  elt.style['color'] = '#FFF'
}

const taskfinder = document.getElementsByClassName('lpMenuTd2')
for (elt of taskfinder) {
  elt.style['border-left'] = '0px'
}
const menuactive = document.getElementsByClassName('lpMenuTop active')
for (elt of menuactive) {
  elt.style['border-left'] = '0px'
}

const captionr8 = document.getElementsByClassName('CaptionR8')
for (elt of captionr8) {
  elt.style['color'] = textColor
}

const photothumb = document.getElementsByClassName('photoThumb')
for (elt of photothumb) {
  elt.style['border-radius'] = '4px'
  elt.style['padding-right'] = '50px'
  elt.style['box-shadow'] = $1dp_shadow
}

const week = document.getElementsByClassName('CE ditm')
for (elt of week) {
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $4dp_shadow
  elt.style['border-radius'] = '3px'
  elt.style['border-color'] = primaryDark
}

const timetable = document.getElementsByClassName('L ditm')
for (elt of timetable) {
  elt.style['border-color'] = primaryDark
  elt.style['border-radius'] = '3px'
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $6dp_shadow
}

const btn = document.getElementsByClassName('btn')
for (elt of btn) {
  elt.style['background-color'] = primaryDark
  elt.style['box-shadow'] = 'none'
}

const name_font = document.getElementsByClassName('sname')
for (elt of name_font) {
  elt.style['font-family'] = "'Roboto', 'Helvetica Neue',Helvetica,Arial,sans-serif"
  elt.style['padding-left'] = '2px'
  elt.style['font-size'] = '1.3em'
}

const linklist = document.getElementsByClassName('linklist')
for (elt of linklist) {
  elt.style['font-size'] = '1em'
}

const mobile_header = document.getElementsByClassName('header-mobile')
for (elt of mobile_header) {
  elt.style['background-color'] = $8dp;
  elt.style['border-color'] = '#535353'
  elt.style['border-width'] = '0px'
}

const profile_menu = document.getElementsByClassName('menu-label')
for (elt of profile_menu) {
  elt.style['color'] = '#000000'
}

const lpHead = document.getElementsByClassName('lpHead')
for (elt of lpHead) {
  elt.style['padding-radius'] = '5px'
}

const headw = document.getElementsByClassName('headw')
for (elt of headw) {
  elt.style['border-radius'] = '4px'
  elt.style['margin-bottom'] = '5px'
}

const profile_menu_sign_out = document.getElementsByTagName('a')[11].style['color'] = '#000000'
const profile_menu_my_details = document.getElementsByTagName('a')[12].style['color'] = '#000000'
const profile_menu_switch_user = document.getElementsByTagName('a')[13].style['color'] = '#000000'

const mobile_profile_menu_sign_out = document.getElementsByTagName('a')[5].style['color'] = '#000000'
const mobile_profile_menu_my_details = document.getElementsByTagName('a')[6].style['color'] = '#000000'
const mobile_profile_menu_switch_user = document.getElementsByTagName('a')[7].style['color'] = '#000000'

const planclass_bg = document.getElementsByClassName('PlanClass')
for (elt of planclass_bg) {
  elt.style['background-color'] = $8dp
}

const table_row_group = document.getElementsByClassName('rgGroupHeader')
for (elt of table_row_group) {
  elt.style['background-color'] = $24dp
  elt.style['box-shadow'] = $24dp_shadow
}

const rgroupitem = document.getElementsByClassName('rgGroupItem')
for (elt of rgroupitem) {
  elt.style['border-radius'] = '4px'
  elt.style['box-shadow'] = $3dp_shadow
}

const rgmaster = document.getElementById('cp_cp_grdAssignments_ctl00')
if (rgmaster != null) {
  rgmaster.style.boxShadow = $1dp_shadow
}

const ddlView = document.getElementById('ddlView')
if (ddlView != null) {
  ddlView.style.boxShadow = $1dp_shadow
  ddlView.style.borderWidth = '0px'
  ddlView.style.backgroundColor = $24dp
  ddlView.style.color = '#FFF'
  ddlView.style.paddingTop = '7px'
}

const table_row = document.getElementsByClassName('rgRow')
for (elt of table_row) {
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $6dp_shadow
}

const table_row_alt = document.getElementsByClassName('rgAltRow')
for (elt of table_row_alt) {
  elt.style['background-color'] = $3dp
  elt.style['box-shadow'] = $3dp_shadow
}

const table_header = document.getElementsByClassName('rgHeader')
for (elt of table_header) {
  elt.style['background-color'] = primaryDark
}

const tasks = document.getElementsByClassName('active itm')
for (elt of tasks) {
  elt.style['padding'] = '5px'
  elt.style['border-width'] = '0px'
  elt.style['border-radius'] = '3px'
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $6dp_shadow
  elt.style['color'] = textColor
}

const itm = document.getElementsByClassName('itm')
for (elt of itm) {
  elt.style['border-width'] = '0px'
  elt.style['border-radius'] = '3px'
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $6dp_shadow
}

const lp = document.getElementsByClassName('lp')
for (elt of lp) {
  elt.style['border-width'] = '0px'
  elt.style['background-color'] = $6dp
}

const head = document.getElementsByClassName('head')
for (elt of head) {
  elt.style['border-width'] = '0px'
  elt.style['border-radius'] = '3px'
  elt.style['background-color'] = primaryDark
}

const badge = document.getElementsByClassName('Badge')
for (elt of badge) {
  elt.style['border-width'] = '0px'
  elt.style['background-color'] = primaryDark
}

const tabContentW = document.getElementsByClassName('tabContentW')
for (elt of tabContentW) {
  elt.style['border-width'] = '0px'
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $6dp_shadow
  elt.style['border-radius'] = '4px'
}

const fbox = document.getElementsByClassName('fbox')
for (elt of fbox) {
  elt.style['border-width'] = '0px'
}

const viewPort = document.getElementsByClassName('viewPort')
for (elt of viewPort) {
  elt.style['border-width'] = '0px'
}

const ui_stuff = document.getElementsByClassName('ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget')
for (elt of ui_stuff) {
  elt.style['background'] = primaryDark
  elt.style['color'] = textColor
}

const box = document.getElementsByClassName('Box')
for (elt of box) {
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $6dp_shadow
  elt.style['border-width'] = '0px'
}

const tabsCnt = document.getElementsByClassName('TabsCnt')
for (elt of tabsCnt) {
  elt.style['background-color'] = $1dp
  elt.style['box-shadow'] = $1dp_shadow
  elt.style['border-width'] = '0px'
}

const labelr = document.getElementsByClassName('LabelR')
for (elt of labelr) {
  elt.style['color'] = textColor
}

const cp_tabs = document.getElementById('cp_tabs')
if (cp_tabs != null) {
  for (elt of cp_tabs.getElementsByTagName('a')) {
    elt.style['background-color'] = $6dp
  }
}

const cp = document.getElementById('cp_cp_divAssignments')
if (cp != null) {
  for (elt of cp.getElementsByTagName('th')) {
    elt.style['background-color'] = $6dp
  }
}

const diaryshadow = document.getElementById('btnDiary')
if (diaryshadow != null) {
  diaryshadow.style.boxShadow = 'none'
}

const calendarshadows = document.getElementById('bCalendar')
if (calendarshadows != null) {
  calendarshadows.style.boxShadow = 'none'
}

const cp_dtbDate = document.getElementById('cp_dtbDate')
if (cp_dtbDate != null) {
  cp_dtbDate.style.boxShadow = 'none'
  cp_dtbDate.style.color = '#FFF'
  cp_dtbDate.style.backgroundColor = 'transparent'
  cp_dtbDate.style.borderWidth = '0px'
}

const period = document.getElementsByClassName('Period')
for (elt of period) {
  elt.style['color'] = textColor
}

const calimg = document.getElementsByClassName('CalImg')
for (elt of calimg) {
  elt.style['padding-left'] = '5px'
}

const ttdatatable = document.getElementsByClassName('tt data-table')
for (elt of ttdatatable) {
  elt.style['backgroundColor'] = $8dp
  elt.style['box-shadow'] = $2dp_shadow
}

const tblTt = document.getElementById('tblTt')
if (tblTt != null) {
  for (elt of tblTt.getElementsByTagName('th')) {
    elt.style['background-color'] = $8dp
  }
  for (elt of tblTt.getElementsByTagName('tbody')) {
    elt.style['border-radius'] = '4px'
  }
}

const msgFolderList = document.getElementsByClassName('msgFolderList')
for (elt of msgFolderList) {
  elt.style['background-color'] = $1dp
  elt.style['box-shadow'] = $1dp_shadow
  elt.style['border-width'] = '0px'
  elt.style['border-radius'] = '3px'
}

const msgBox = document.getElementsByClassName('msgBox')
for (elt of msgBox) {
  elt.style['background-color'] = $1dp
  elt.style['box-shadow'] = $1dp_shadow
  elt.style['border-width'] = '0px'
  elt.style['border-radius'] = '3px'
}

const msgBody = document.getElementsByClassName('msgBody')
for (elt of msgBody) {
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $6dp_shadow
  elt.style['border-width'] = '0px'
  elt.style['border-radius'] = '3px'
}

const rgGroupItem = document.getElementsByClassName('rgGroupItem')
for (elt of rgGroupItem) {
  elt.style['background-color'] = primaryDark
}

const divDiaryDay = document.getElementById('divDiaryDay')
if (divDiaryDay != null) {
  divDiaryDay.style['background-color'] = $6dp
  divDiaryDay.style['box-shadow'] = $4dp_shadow
  divDiaryDay.style['border-radius'] = '3px'
  divDiaryDay.style['margin-top'] = '20px'
}

const attendance = document.getElementsByClassName('sdIndicator')
for (elt of attendance) {
  if (elt.style['background-color'] == 'rgb(255, 0, 0)') { // red attendance
    elt.style['background-color'] = errorColor
  }
  if (elt.style['background-color'] == 'rgb(255, 255, 0)') { // yellow attendance
    elt.style['background-color'] = '#d1d422a'
  }
  if (elt.style['background-color'] == 'rgb(126, 225, 147)') { // green attendance
    elt.style['background-color'] = '#66cf79'
  }
  if (elt.style['background-color'] == 'rgb(100, 227, 32)') { //  detentions
    elt.style['background-color'] = '#66cf79'
  }
  elt.style['color'] = '#292929'
}

addCss('.rgCollapse {background-color: ' + $12dp + ' !important;}')

addCss('.logo {content:url(https://i.ibb.co/SR4c9fT/logo-trans.png) !important;}')

addCss('.PlanClass * {color: ' + textColor + ' !important; font-family: "Roboto", "Helvetica Neue",Helvetica,Arial,sans-serif !important;}')

addCss('.menuContainter {color: #FF00FF} !important;')

addCss('div.linklist a:hover {background-color: ' + primaryDark + ' !important; border-radius: 3px !important;}')

addCss('div.msgBody {border: 0px solid #8DAED9 !important; background-color: ' + $6dp + ' !important;}')

addCss('body.Dialog {background-color: #ad4d4d !important;}')

addCss('div.msg {background-color: ' + $6dp + ' !important; box-shadow: ' + $6dp_shadow +
  ' !important; border-width: 0px !important; border-radius: 3px !important; color: ' + textColor + ' !important;}')

addCss('tr.msgHead td.sn {color: ' + textColor + ' !important;}')

addCss('#folder_page a {color: ' + textColor + ' !important;}')

addCss('div.msgSelected {background-color: ' + $6dp + ' !important; box-shadow: ' + $6dp_shadow +
  ' !important; border-width: 0px !important; border-radius: 3px !important; color: ' + textColor + ' !important;}')

addCss('.TabsCnt .tabList > div > a, { border-left: 3px solid transparent; border-bottom: 1px solid transparent; border-top: 1px solid transparent; }')

addCss('.icon img {content:url(https://i.ibb.co/LxXS7Jp/chat.png) !important;}')

addCss('.TabsCnt .tabList > div > a.selected, .TabsCnt .tabList > div > a.open { border-left: 3px solid ' + primaryDark +
  ' !important; border-bottom: 0px solid #d2d2d2 !important; border-top: 0px solid #d2d2d2 !important;}')

addCss('.TabsCnt > tbody > tr > td:first-child {border-right: 0px solid #d2d2d2 !important;}')

addCss('.TabsCnt .tabList > div a.child.selected {border-left: 2px solid ' + primaryDark + ' !important; border-bottom: 0px solid #d2d2d2 !important; border-top: 0px solid #d2d2d2 !important;}')

addCss('.TabsCnt .tabList > div > div {border-bottom: 0px solid ' + primaryDark + ' !important; background-color: ' + $6dp + ' !important;}')

addCss('div.fbox { background-color: ' + $6dp + ' !important; border: 0px solid #F1F5FB !important; padding: 2px !important; margin: 5px !important; box-shadow: ' + $4dp_shadow + ' !important}')

addCss('div.tabContentW {background-color: ' + $6dp + ' !important; box-shadow: ' + $4dp_shadow + ' !important;}')

addCss('table.feed td.itm {color: ' + textColor + ' !important;}')

addCss('table.feed div.head {background-color: ' + primaryDark + ' !important;}')

addCss('.Caption, .CaptionR8 {color: ' + textColor + ' !important;}')

addCss('.Error {color: ' + errorColor + ' !important;}')

addCss('td.diaryEvents {background-color: ' + $1dp + ' !important; border-bottom: 3px solid ' + primaryDark + ' !important;}')

addCss('div.diaryDay {background-color: ' + primaryDark + ' !important; border-width: 0px !important; border-radius: 3px; box-shadow: ' + $1dp_shadow + ' !important;}')

addCss('td.diaryDay {background-color: ' + primaryDark + ' !important; border-width: 0px !important; box-shadow: ' + $1dp_shadow + ' !important; color: ' + textColor + ' !important;}')

addCss('td.diaryDay:hover { background-color: ' + primaryDark + ' !important; border-radius: 3px !important;}')

addCss('td.diaryDay:hover div { background-color: ' + primaryDark + ' !important; border-radius: 3px !important;}')

addCss('div.diaryDayLabel { color: ' + textColor + ' !important;}')

addCss('div.diaryDayLabelSmall { color: ' + textColor + ' !important;}')

addCss('div.diaryCnt {border: 0px solid #1073CE !important; border-radius: 3px !important;}')

addCss('div.diary div.ditm {background-color: ' + $6dp + ' !important;}')

addCss('.c a {color: ' + textColor + ' !important;}')

addCss('.sn img { content:url(https://i.ibb.co/Vq43b1g/attachment.png) !important;}')

addCss('td.PlanClass {color: ' + textColor + ' !important; border-top: solid 1px ' + primaryDark + ' !important;}')

addCss('a.PlanClass {color: ' + textColor + ' !important;}')

addCss('div.lp {background-color: ' + $6dp + ' !important; color: ' + textColor + ' !important; border: solid 0px #efeeee !important; box-shadow: ' + $4dp_shadow + ' !important}')

addCss('div.lpHead {background-color: ' + $6dp + ' !important; color: ' + textColor + ' !important; border: solid 0px #efeeee !important; box-shadow: ' + $4dp_shadow + ' !important; border-radius: 3px !important;}')

addCss('td.PlanDay {background-color: ' + primaryDark + ' !important; color: ' + textColor + ' !important;}')

addCss('td.PlanWeek {background-color: ' + primaryDark + ' !important; color: ' + textColor + ' !important;}')

addCss('.diaryDayLabel {margin-bottom: 15px}')

addCss('div.lpHead img { content:url(https://i.ibb.co/xL9vZvt/class-post.png) !important;}')

addCss('.lpMenu {color: ' + darkTextColor + ' !important;}')

addCss('.mobile-menu-list {background-color: ' + $1dp + ' !important;}')

addCss('.mobile-menu-list > div a {color: ' + textColor + ' !important;}')

addCss('.mobile-menu-list > div a:focus, .mobile-menu-list > div a.selected {color: #fff; background-color: #1F9DD9; }')

addCss('.mobile-menu-list > div a.menu-parent {background-color: ' + $12dp + ' !important;}')

addCss('.ui-icon{background-image:url("https://i.ibb.co/xDQcRQZ/ui-icons.png") !important;}')

addCss('table.tt th { background-color: ' + $6dp + ' !important; color: ' + textColor + ' !important;}')

addCss('table.GRID_STYLE tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.rgGroupPanel tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.publishoptions tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.published_main tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.rgMasterTable tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.data-table tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.dataTable tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.Report tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.SORTTABLE tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft) {background-color: ' + $6dp + ' !important;}')

addCss('table.GRID_STYLE tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.rgGroupPanel tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.publishoptions tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.published_main tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.rgMasterTable tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.data-table tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.dataTable tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.Report tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.SORTTABLE tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft) {background-color: ' + $6dp + ' !important;}')

addCss('table.tt td.Period {color: ' + textColor + ' !important;}')

addCss('.PlanEvent img {content:url(https://i.ibb.co/NYbz8HJ/calendar-x05.png) !important;}')

addCss('.PlanEvent a {color: ' + textColor + ' !important;}')

addCss('.PlanEvent {border-radius: 3px !important;}')

addCss('div.diary div.L {border-left: 5px solid ' + primaryDark + ' !important; border-radius: 3px !important;}')

addCss('div.diary div.CE {border-left: 5px solid ' + primaryDark + ' !important; border-radius: 3px !important;}')

addCss("input:not([type='button']):not([type='submit']), textarea, .multiSelect {color: " + textColor + " !important; background-color: " + $24dp + " !important;   border: 0px solid #becad6 !important;}")

addCss('div.tlbr {border: 0px solid #e5e5e5 !important; background: ' + $12dp + ' !important;}')

addCss('.lptbBtn {color: ' + textColor + ' !important;}')

addCss('table.dtp:hover {background-color: transparent !important; border-radius: 3px !important;}')

addCss('#ddlClass {color: ' + textColor + ' !important; background-color: ' + $6dp + ' !important; border-width: 0px !important;}')

addCss('#divTimetable div:not(.Badge):not(.PlanClass):not(.PlanEvent):not(.lpTitle):not(.Caption):not(.cap):not(.Header) {background-color: ' + $6dp + ' !important; box-shadow: ' + $4dp_shadow + ' !important; border-radius: 3px !important;}')

addCss('.PlanEvent {background-color: ' + primaryDark + ' !important;}')

addCss('table.feed td div.cap {color: ' + textColor + ' !important;}')

addCss('.Badge {background-color: ' + primaryDark + ' !important;}')

addCss('.ag {background-color: ' + $12dp + ' !important;}')

addCss('table.GRID_STYLE th, table.rgGroupPanel th, table.publishoptions th, table.published_main th, table.rgMasterTable th, table.data-table th, table.dataTable th, table.Report th, table.SORTTABLE th {background-color: ' + primaryDark + ' !important;}')

addCss('.agHeader {background-color: ' + primaryDark + ' !important;}')

addCss('.AttendanceMap {background-color: ' + primaryDark + ' !important; border-top: solid 0px #249FD9 !important; border-left: solid 0px #249FD9 !important; border-bottom: solid 0px #249FD9 !important; border-right: solid 0px #249FD9 !important;}')

addCss('h2, div.Header {color: ' + textColor + ' !important;}')

addCss('.Label4 {color: ' + textColor + ' !important; paddingTop: 10px !important;}')

addCss('.Label2 {color: ' + textColor + ' !important;}')

addCss('div.threadR {border: 0px solid #8DAED9 !important; background-color: ' + $6dp + ' !important; border-radius: 3px !important;}')

addCss('div.msgBody {border: 0px solid #8DAED9;}')

addCss('div.msgLatest {background-color: ' + errorColor + ' !important; border: solid 0px #ececec !important; border-radius: 3px !important;}')

addCss('tr.msgHead td {color: ' + textColor + ' !important;}')

addCss('div.msgReplies {border-bottom: 0px solid #D8CA95 !important; color: ' + textColor + ' !important}')

addCss('div.msgSender {color: ' + primary + ' !important;}')

addCss('div.lpAll {background-color: ' + $6dp + ' !important; border: solid 0px #F1F5FB !important;}')

addCss('#divUserAvatarMobile {border: 2px solid #fff !important;}')

addCss('.toast-container .toast.info {background-color: ' + primaryDark + ' !important; box-shadow: none !important; }')

addCss('.toast-container .toast.info .toast-icon {background-color: ' + primaryDark + ' !important; }')

addCss('.CaptionR {color: ' + textColor + ' !important;}')

addCss('.lpAll p span {color: ' + textColor + ' !important; font-family: "Roboto", "Helvetica Neue",Helvetica,Arial,sans-serif !important;}')

addCss('.TabsCnt .tabList > div > a {background-color: ' + $12dp + ' !important; border-radius: 3px !important;}')

addCss('.TabsCnt .tabList > div > a.selected, .TabsCnt .tabList > div > a.open {border-radius: 3px !important;')

addCss('table.Tasks td {background-color: ' + $6dp + ' !important; border-width: 0px !important;}')

addCss('table.Tasks th {border-top: solid 0px #249FD9 !important; border-left: none 0px #6699cc !important; border-right: none 0px #6699cc !important; border-bottom: solid 0px #249FD9 !important; background-color: ' + primaryDark + ' !important;}')

addCss('table.Tasks {border: 0px solid #106584 !important;}')

addCss('div.SearchBox {background-color: ' + $6dp + ' !important; color: ' + textColor + ' !important; border: #CDDAEA 0px solid !important; border-radius: 3px !important;}')

addCss('div.SearchHeader {color: ' + textColor + ' !important;}')

addCss('div.headw {background-color: ' + primaryDark + ' !important; border-radius: 3px !important;}')

addCss('button.btn, input.Button, input[type=button], input[type=submit], div.btn, label.btn {background-color: ' + primaryDark + ' !important; }')

addCss(' button.btn:hover, input.Button:hover, input[type=button]:hover, input[type=submit]:hover, div.btn:hover, label.btn:hover {box-shadow: none !important;}')

addCss('.lp p span {color: ' + textColor + ' !important; font-family: "Roboto", "Helvetica Neue",Helvetica,Arial,sans-serif !important;}')

addCss('#divDesc table tbody tr[1] td {color: transparent !important;}')

addCss('.CaptionR {color: ' + textColor + ' !important;}')

addCss('.date-picker img {content:url(https://i.ibb.co/m6Sg4dc/calendar.png) !important;')

addCss('#cp_dtbDate {vertical-align: middle !important; box-shadow: none !important;}')

addCss('.CalImg {vertical-align: middle !important}')

addCss('.selected {border-width: 0px !important; background-color: ' + $24dp + ' !important; border-radius: 3px !important;}')

addCss('.active:hover {border: 0px solid #9CAAAD !important;}')

addCss('div.dlgContent {border: #CDDAEA 0px solid !important; background-color: ' + $6dp + ' !important;}')

addCss('div.lblsaved {color: ' + textColor + ' !important;}')

addCss('div.fld {BORDER-bottom: #ececec 0px solid !important; background-color: ' + $12dp + ' !important; color: ' + textColor + ' !important; box-shadow: ' + $4dp_shadow + ' !important; border-radius: 3px !important;}')

addCss('.cap {color: ' + textColor + ' !important;}')

addCss('.formCaption {color: ' + textColor + ' !important;}')

addCss('#ddlTerms {background-color: ' + $12dp + ' !important; border-width: 0px !important; color: ' + textColor + ' !important;}')

addCss('#ddlColourBy {background-color: ' + $12dp + ' !important; border-width: 0px !important; color: ' + textColor + ' !important;}')

addCss('.msgBody span {color: ' + textColor + ' !important; font-family: "Roboto", "Helvetica Neue",Helvetica !important;}')
