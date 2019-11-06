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
const primary_dark = '#006fa7'
const text_color = '#e5e5e5'
const error_color = '#cf6679'
const dark_text_color = '#464747'

function addCss (rule) {
  let css = document.createElement('style')
  css.type = 'text/css'
  if (css.styleSheet) css.styleSheet.cssText = rule // Support for IE
  else css.appendChild(document.createTextNode(rule)) // Support for the rest
  document.getElementsByTagName('head')[0].appendChild(css)
}

const send_help = document.getElementsByTagName('td')
for (elt of send_help) {
  elt.style['background-color'] = 'transparent'
}

const maintext = document.getElementsByTagName('div')
for (elt of maintext) {
  elt.style['color'] = '#FFF'
}

const calenderthing = document.getElementsByTagName('td')[18].style['padding-top'] = '0px'

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
  elt.style['box-shadow'] = $4dp_shadow
}

const msgunread = document.getElementsByClassName('msg unread')
for (elt of msgunread) {
  elt.style['color'] = text_color
  elt.style['background-color'] = $1dp
  elt.style['box-shadow'] = $1dp_shadow
}

const text = document.getElementsByTagName('a')
for (elt of text) {
  elt.style['color'] = text_color
}

const h2 = document.getElementsByTagName('h2')
for (elt of h2) {
  elt.style['color'] = text_color
}

const search = document.getElementsByClassName('hasDatepicker')
for (elt of search) {
  elt.style['background-color'] = text_color
  elt.style['border-color'] = '#ccc'
}

const caption = document.getElementsByClassName('Caption')
for (elt of caption) {
  elt.style['color'] = text_color
  elt.style['padding-top'] = '0px'
}

const header = document.getElementsByClassName('Header')
for (elt of header) {
  elt.style['color'] = text_color
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
  elt.style['background-color'] = primary_dark
}

const headerr = document.getElementsByClassName('header')
for (elt of headerr) {
  elt.style['color'] = text_color
  elt.style['background-color'] = $1dp
  elt.style['border-color'] = '#535353'
  elt.style['box-shadow'] = $1dp_shadow
  elt.style['border-width'] = '0px'
}

const menu = document.getElementById('mnu').getElementsByTagName('td')
for (elt of menu) {
  elt.style['background-color'] = 'transparent'
  elt.style['border-bottom'] = '0px'
  elt.style['color'] = '#FFF'
}

const body = document.getElementById('mainBody').style.backgroundColor = $0dp

const attendance = document.getElementsByClassName('sdIndicator')
for (elt of attendance) {
  elt.style['color'] = '#292929'
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

const dlgcontent = document.getElementsByClassName('dlgContent')
for (elt of dlgcontent) {
  elt.style['background-color'] = $8dp
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
  elt.style['color'] = text_color
}

const hypertext = document.getElementsByClassName('dlgContent')
for (elt of hypertext) {
  elt.style['background-color'] = $8dp
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
  elt.style['box-shadow'] = $6dp_shadow
  elt.style['border-radius'] = '3px'
  elt.style['border-color'] = primary_dark
}

const timetable = document.getElementsByClassName('L ditm')
for (elt of timetable) {
  elt.style['border-color'] = primary_dark
  elt.style['border-radius'] = '3px'
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $6dp_shadow
}

const btn = document.getElementsByClassName('btn')
for (elt of btn) {
  elt.style['background-color'] = primary_dark
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
  elt.style['background-color'] = $8dp
  elt.style['border-color'] = '#535353'
  elt.style['border-width'] = '0px'
}

const profile_menu = document.getElementsByClassName('menu-label')
for (elt of profile_menu) {
  elt.style['color'] = '#000000'
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

const msg_icons = document.getElementsByTagName('img')
for (elt of msg_icons) {
  // FIXME maybe === ?
  if (elt.src == "https://daymap.marryatvillehs.sa.edu.au/Daymap/images/dtbFlat.png") {
    elt.src = "https://i.ibb.co/YhHs16d/calendar.png"
  }
  if (elt.src == "https://daymap.marryatvillehs.sa.edu.au/daymap/images/daymap-text-logo-web.gif") {
    elt.src = "https://i.ibb.co/SR4c9fT/logo-trans.png"
  }
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
  elt.style['background-color'] = primary_dark
}

const tasks = document.getElementsByClassName('active itm')
for (elt of tasks) {
  elt.style['padding'] = '5px'
  elt.style['border-width'] = '0px'
  elt.style['border-radius'] = '3px'
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $6dp_shadow
  elt.style['color'] = text_color
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
  elt.style['background-color'] = primary_dark
}

const badge = document.getElementsByClassName('Badge')
for (elt of badge) {
  elt.style['border-width'] = '0px'
  elt.style['background-color'] = primary_dark
}

const tabContentW = document.getElementsByClassName('tabContentW')
for (elt of tabContentW) {
  elt.style['border-width'] = '0px'
  elt.style['background-color'] = $6dp
  elt.style['box-shadow'] = $6dp_shadow
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
  elt.style['background'] = primary_dark
  elt.style['color'] = text_color
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
  elt.style['color'] = text_color
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
  cp_dtbDate.style.boxShadow = $1dp_shadow
  cp_dtbDate.style.color = '#FFF'
  cp_dtbDate.style.backgroundColor = $24dp
  cp_dtbDate.style.borderWidth = '0px'
}

const period = document.getElementsByClassName('Period')
for (elt of period) {
  elt.style['color'] = text_color
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
  elt.style['background-color'] = primary_dark
}

const divDiaryDay = document.getElementById('divDiaryDay')
if (divDiaryDay != null) {
  divDiaryDay.style['background-color'] = $6dp
  divDiaryDay.style['box-shadow'] = $4dp_shadow
  divDiaryDay.style['border-radius'] = '3px'
  divDiaryDay.style['margin-top'] = '20px'
}

addCss('.PlanClass * {color: ' + text_color + ' !important; font-family: "Roboto", "Helvetica Neue",Helvetica,Arial,sans-serif !important;}')

addCss('.menuContainter {color: #FF00FF} !important;')

addCss('div.linklist a:hover {background-color: ' + primary_dark + ' !important;}')

addCss('div.msgBody {border: 0px solid #8DAED9 !important; background-color: ' + $6dp + ' !important;}')

addCss('body.Dialog {background-color: #ad4d4d !important;}')

addCss('div.msg {background-color: ' + $6dp + ' !important; box-shadow: ' + $6dp_shadow +
  ' !important; border-width: 0px !important; border-radius: 3px !important; color: ' + text_color + ' !important;}')

addCss('tr.msgHead td.sn { color: ' + text_color + ' !important;}')

addCss('#folder_page a { color: ' + text_color + ' !important;}')

addCss('div.msgSelected {border: 0px solid #249FD9 !important;}')

addCss('.TabsCnt .tabList > div > a, { border-left: 3px solid transparent; border-bottom: 1px solid transparent; border-top: 1px solid transparent; }')

addCss('.icon img { content:url(https://i.ibb.co/LxXS7Jp/chat.png) !important;}')

addCss('.TabsCnt .tabList > div > a.selected, .TabsCnt .tabList > div > a.open { border-left: 3px solid ' + primary_dark +
  ' !important; border-bottom: 0px solid #d2d2d2 !important; border-top: 0px solid #d2d2d2 !important;}')

addCss('.TabsCnt > tbody > tr > td:first-child {border-right: 0px solid #d2d2d2 !important;}')

addCss('.TabsCnt .tabList > div a.child.selected {border-left: 2px solid ' + primary_dark + ' !important; border-bottom: 0px solid #d2d2d2 !important; border-top: 0px solid #d2d2d2 !important;}')

addCss('.TabsCnt .tabList > div > div {border-bottom: 0px solid ' + primary_dark + ' !important; background-color: ' + $6dp + ' !important;}')

addCss('div.fbox { background-color: ' + $6dp + ' !important; border: 0px solid #F1F5FB !important; padding: 2px !important; margin: 5px !important; box-shadow: ' + $4dp_shadow + ' !important}')

addCss('div.tabContentW {background-color: ' + $6dp + ' !important; box-shadow: ' + $4dp_shadow + ' !important;}')

addCss('table.feed td.itm {color: ' + text_color + ' !important;}')

addCss('table.feed div.head {background-color: ' + primary_dark + ' !important;}')

addCss('.Caption, .CaptionR8 {color: ' + text_color + ' !important;}')

addCss('.Error {color: ' + error_color + ' !important;}')

addCss('td.diaryEvents {background-color: ' + $1dp + ' !important; border-bottom: 3px solid ' + primary_dark + ' !important;}')

addCss('div.diaryDay {background-color: ' + primary_dark + ' !important; border-width: 0px !important; border-radius: 3px; box-shadow: ' + $1dp_shadow + ' !important;}')

addCss('td.diaryDay {background-color: ' + primary_dark + ' !important; border-width: 0px !important; box-shadow: ' + $1dp_shadow + ' !important; color: ' + text_color + ' !important;}')

addCss('td.diaryDay:hover { background-color: ' + primary_dark + ' !important;}')

addCss('td.diaryDay:hover div { background-color: ' + primary_dark + ' !important;}')

addCss('div.diaryDayLabel { color: ' + text_color + ' !important;}')

addCss('div.diaryDayLabelSmall { color: ' + text_color + ' !important;}')

addCss('div.diaryCnt {border: 0px solid #1073CE !important; border-radius: 3px !important;}')

addCss('div.diary div.ditm {background-color: ' + $6dp + ' !important;}')

addCss('.c a {color: ' + text_color + ' !important;}')

addCss('.sn img { content:url(https://i.ibb.co/Vq43b1g/attachment.png) !important;}')

addCss('td.PlanClass {color: ' + text_color + ' !important; border-top: solid 1px ' + primary_dark + ' !important;}')

addCss('a.PlanClass {color: ' + text_color + ' !important;}')

addCss('div.lp {background-color: ' + $6dp + ' !important; color: ' + text_color + ' !important; border: solid 0px #efeeee !important; box-shadow: ' + $4dp_shadow + ' !important}')

addCss('div.lpHead {background-color: ' + $6dp + ' !important; color: ' + text_color + ' !important; border: solid 0px #efeeee !important; box-shadow: ' + $4dp_shadow + ' !important; border-radius: 3px !important;}')

addCss('td.PlanDay {background-color: ' + primary_dark + ' !important; color: ' + text_color + ' !important;}')

addCss('td.PlanWeek {background-color: ' + primary_dark + ' !important; color: ' + text_color + ' !important;}')

addCss('.diaryDayLabel {margin-bottom: 15px}')

addCss('div.lpHead img { content:url(https://i.ibb.co/xL9vZvt/class-post.png) !important;}')

addCss('.lpMenu {color: ' + dark_text_color + ' !important;}')

addCss('.mobile-menu-list {background-color: ' + $1dp + ' !important;}')

addCss('.mobile-menu-list > div a {color: ' + text_color + ' !important;}')

addCss('.mobile-menu-list > div a:focus, .mobile-menu-list > div a.selected {color: #fff; background-color: #1F9DD9; }')

addCss('.mobile-menu-list > div a.menu-parent {background-color: ' + $12dp + ' !important;}')

addCss('.ui-icon{background-image:url("https://i.ibb.co/xDQcRQZ/ui-icons.png") !important;}')

addCss('table.tt th { background-color: ' + $6dp + ' !important; color: ' + text_color + ' !important;}')

addCss('table.GRID_STYLE tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.rgGroupPanel tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.publishoptions tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.published_main tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.rgMasterTable tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.data-table tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.dataTable tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.Report tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.SORTTABLE tr:nth-child(odd) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft) {background-color: ' + $6dp + ' !important;}')

addCss('table.GRID_STYLE tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.rgGroupPanel tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.publishoptions tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.published_main tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.rgMasterTable tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.data-table tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.dataTable tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.Report tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft), table.SORTTABLE tr:nth-child(even) td:not(.agNotMarked):not(.agPresent):not(.agNoday):not(.agWeekday):not(.agUnapproved):not(.agLate):not(.agLeft) {background-color: ' + $6dp + ' !important;}')

addCss('table.tt td.Period {color: ' + text_color + ' !important;}')

addCss('.PlanEvent img {content:url(https://i.ibb.co/NYbz8HJ/calendar-x05.png) !important;}')

addCss('.PlanEvent a {color: ' + text_color + ' !important;}')

addCss('div.diary div.L {border-left: 5px solid ' + primary_dark + ' !important; border-radius: 3px !important;}')

addCss('div.diary div.CE {border-left: 5px solid ' + primary_dark + ' !important; border-radius: 3px !important;}')

addCss("input:not([type='button']):not([type='submit']), textarea, .multiSelect {color: " + text_color + " !important; background-color: " + $12dp + " !important;   border: 0px solid #becad6 !important;}")

addCss('div.tlbr {border: 0px solid #e5e5e5 !important; background: ' + $12dp + ' !important;}')

addCss('.lptbBtn {color: ' + text_color + ' !important;}')

addCss('table.dtp:hover {background-color: transparent !important;}')

addCss('#ddlClass {color: ' + text_color + ' !important; background-color: ' + $6dp + ' !important; border-width: 0px !important;}')

addCss('#divTimetable div:not(.Badge) {background-color: ' + $6dp + ' !important;}')

addCss('table.feed td div.cap {color: ' + text_color + ' !important;}')

addCss('.Badge {background-color: ' + primary_dark + ' !important;}')

addCss('.ag {background-color: ' + $12dp + ' !important;}')

addCss('table.GRID_STYLE th, table.rgGroupPanel th, table.publishoptions th, table.published_main th, table.rgMasterTable th, table.data-table th, table.dataTable th, table.Report th, table.SORTTABLE th {background-color: ' + primary_dark + ' !important;}')

addCss('.agHeader {background-color: ' + primary_dark + ' !important;}')

addCss('.AttendanceMap {background-color: ' + primary_dark + ' !important; border-top: solid 0px #249FD9 !important; border-left: solid 0px #249FD9 !important; border-bottom: solid 0px #249FD9 !important; border-right: solid 0px #249FD9 !important;}')

addCss('h2, div.Header {color: ' + text_color + ' !important;}')

addCss('.Label4 {color: ' + text_color + ' !important; paddingTop: 10px !important;}')

addCss('.Label2 {color: ' + text_color + ' !important;}')

addCss('div.threadR {border: 0px solid #8DAED9 !important; background-color: ' + $6dp + ' !important; border-radius: 3px !important;}')

addCss('div.msgBody {border: 0px solid #8DAED9;}')

addCss('div.msgLatest {background-color: ' + error_color + ' !important; border: solid 0px #ececec !important; border-radius: 3px !important;}')

addCss('tr.msgHead td {color: ' + text_color + ' !important;}')

addCss('div.msgReplies {border-bottom: 0px solid #D8CA95 !important; color: ' + text_color + ' !important}')

addCss('div.msgSender {color: ' + primary + ' !important;}')

addCss('div.lpAll {background-color: ' + $6dp + ' !important; border: solid 0px #F1F5FB !important;}')
