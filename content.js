const maintext = document.getElementsByTagName('div');
for (elt of maintext) {
  elt.style['color'] = '#FFF';
}

const card = document.getElementsByClassName('card');
for (elt of card) {
  elt.style['background-color'] = '#292929';
  elt.style['border-width'] = '1px';
  elt.style['border-color'] = '#535353';
  elt.style['padding-left'] = '10px';
}

const toolbar = document.getElementsByClassName('Toolbar');
for (elt of toolbar) {
  elt.style['background-color'] = '#3e3e3e';
  elt.style['border-width'] = '1px';
  elt.style['border-color'] = '#515151';
}

const timetable = document.getElementsByClassName('L ditm');
for (elt of timetable) {
  elt.style['background-color'] = '#3e3e3e';
  elt.style['border-color'] = '#666666';
}

const msgunread = document.getElementsByClassName('msg unread');
for (elt of msgunread) {
  elt.style['background-color'] = '#3e3e3e';
  elt.style['color'] = '#e5e5e5';
}

const msg = document.getElementsByClassName('msg');
for (elt of msg) {
  elt.style['background-color'] = '#3e3e3e';
  elt.style['color'] = '#e5e5e5';
  elt.style['border-color'] = '#515151';
  elt.style['border-radius'] = '3px';
  elt.style['border-width'] = '0px';
}

const text = document.getElementsByTagName('a');
for (elt of text) {
  elt.style['color'] = '#e5e5e5';
}

const h2 = document.getElementsByTagName('h2');
for (elt of h2) {
  elt.style['color'] = '#e5e5e5';
}

const search = document.getElementsByClassName('hasDatepicker');
for (elt of search) {
  elt.style['background-color'] = '#e5e5e5';
  elt.style['border-color'] = '#ccc';
}

const caption = document.getElementsByClassName('Caption');
for (elt of caption) {
  elt.style['color'] = '#e5e5e5';
}

const header = document.getElementsByClassName('Header');
for (elt of header) {
  elt.style['color'] = '#e5e5e5';
  elt.style['background-color'] = '#292929';
}

const btn = document.getElementsByClassName('btn');
for (elt of btn) {
  elt.style['background-color'] = '#7e7e7e';
}

const sn = document.getElementsByClassName('sn');
for (elt of sn) {
  elt.style['color'] = '#acacac';
}

const tasks = document.getElementsByClassName('active itm');
for (elt of tasks) {
  elt.style['background-color'] = '#3e3e3e';
  elt.style['padding'] = '5px';
  elt.style['border-width'] = '0px';
  elt.style['border-radius'] = '3px'
}

const cap = document.getElementsByClassName('cap');
for (elt of cap) {
  elt.style['color'] = '#acacac';
}

const title = document.getElementsByClassName('lpTitle');
for (elt of title) {
  elt.style['color'] = '#FFF';
}

const postticker = document.getElementsByClassName('post-ticker');
for (elt of postticker) {
  elt.style['boxShadow'] = 'none';
}

const diaryDay = document.getElementsByClassName('diaryDay');
for (elt of diaryDay) {
  elt.style['background-color'] = '#7e7e7e';
}

const headerr = document.getElementsByClassName('header');
for (elt of headerr) {
  elt.style['color'] = '#e5e5e5';
  elt.style['background-color'] = '#292929';
  elt.style['border-color'] = '#535353';
}

const menu = document.getElementById('mnu').getElementsByTagName('td');
for (elt of menu) {
    elt.style['background-color'] = 'transparent';
    elt.style['border-bottom'] = '0px';
    elt.style['color'] = '#FFF'
}

const body = document.getElementById('mainBody').style.backgroundColor = '#3e3e3e';

const attendance = document.getElementsByClassName('sdIndicator');
for (elt of attendance) {
  elt.style['color'] = '#292929';
}

const mdi = document.getElementsByClassName('mdi mdi-menu');
for (elt of mdi) {
  elt.style['color'] = '#FFF';
}

const dlgcontent = document.getElementsByClassName('dlgContent');
for (elt of dlgcontent) {
  elt.style['background-color'] = '#292929';
}

const msgshadow = document.getElementById('btnMsgs').style.boxShadow = 'none';
const diaryshadow = document.getElementById('btnDiary').style.boxShadow = 'none';
const calendarshadows = document.getElementById('bCalendar').style.boxShadow = 'none';

const taskfinder = document.getElementsByClassName('lpMenuTd2');
for (elt of taskfinder) {
  elt.style['border-left'] = '0px';
}
const menuactive = document.getElementsByClassName('lpMenuTop active');
for (elt of menuactive) {
  elt.style['border-left'] = '0px';
}

const captionr8 = document.getElementsByClassName('CaptionR8');
for (elt of captionr8) {
  elt.style['color'] = '#e5e5e5';
}

const hypertext = document.getElementsByClassName('dlgContent');
for (elt of hypertext) {
  elt.style['background-color'] = '#292929';
}

const photothumb = document.getElementsByClassName('photoThumb');
for (elt of photothumb) {
  elt.style['border-radius'] = '4px';
  elt.style['padding-right'] = '50px';
}

const week = document.getElementsByClassName('CE ditm');
for (elt of week) {
  elt.style['background-color'] = '#3e3e3e';
  elt.style['border-left-color'] = '#666666';
}

const name_font = document.getElementsByClassName('sname');
for (elt of name_font) {
  elt.style['font-family'] = "'Roboto', 'Helvetica Neue',Helvetica,Arial,sans-serif";
  elt.style['padding-left'] = '2px';
  elt.style['font-size'] = '1.3em';
}

const linklist = document.getElementsByClassName('linklist');
for (elt of linklist) {
  elt.style['font-size'] = '1em';
}

const mobile_header = document.getElementsByClassName('header-mobile');
for (elt of mobile_header) {
  elt.style['background-color'] = '#292929';
  elt.style['border-color'] = '#535353';
}

/*// TODO:
hyperlinks
greyscale logos
message icons
attendence colors
hover over colors
*/

console.log(document.getElementsByTagName('img'));


//calender stuff

const profile_menu = document.getElementsByClassName('menu-label');
for (elt of profile_menu) {
  elt.style['color'] = '#000000';
}

const profile_menu_sign_out = document.getElementsByTagName('a')[11].style['color'] = '#000000';
const profile_menu_my_details = document.getElementsByTagName('a')[12].style['color'] = '#000000';
const profile_menu_switch_user = document.getElementsByTagName('a')[13].style['color'] = '#000000';

const mobile_profile_menu_sign_out = document.getElementsByTagName('a')[5].style['color'] = '#000000';
const mobile_profile_menu_my_details = document.getElementsByTagName('a')[6].style['color'] = '#000000';
const mobile_profile_menu_switch_user = document.getElementsByTagName('a')[7].style['color'] = '#000000';

const period = document.getElementsByClassName('Period');
for (elt of period) {
  elt.style['backgroundColor'] = '#292929';
}

const planclass_bg = document.getElementsByClassName('PlanClass');
for (elt of planclass_bg) {
  elt.style['backgroundColor'] = '#292929';
}

const msg_icons = document.getElementsByTagName('img');
for (elt of msg_icons){
  if (elt.src == "https://daymap.marryatvillehs.sa.edu.au/Daymap/images/coms/post32.png"){
    elt.src = "https://i.ibb.co/fFRPCnk/post32.png"
  }
  if (elt.src == "https://daymap.marryatvillehs.sa.edu.au/Daymap/images/coms/msg32.png"){
    elt.src = "https://i.ibb.co/G2gzBV8/msg32.png"
  }
  if (elt.src == "https://daymap.marryatvillehs.sa.edu.au/Daymap/images/coms/chat.png"){
    elt.src = "https://i.ibb.co/LxXS7Jp/chat.png"
  }
  if (elt.src == "https://daymap.marryatvillehs.sa.edu.au/Daymap/images/dtbFlat.png"){
    elt.src = "https://i.ibb.co/4jLbP5P/calendar.png"
  }
  if (elt.src == "https://daymap.marryatvillehs.sa.edu.au/daymap/images/daymap-text-logo-web.gif"){
    elt.src = "https://i.ibb.co/SR4c9fT/logo-trans.png"
  }

}
