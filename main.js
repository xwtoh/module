
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1f2HnW6t9Ud8C_sjsR67bCa9yOkWviQrFzcjaw9C_-0Y/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

 
function showInfo(data, tabletop) {
data.forEach(function(data) {
    header.innerHTML = data.header;
    header2.innerHTML = data.header2;
    body.innerHTML = data.body;
    body2.innerHTML = data.body2;
    body3.innerHTML = data.body3;
    body4.innerHTML = data.body4;
    body5.innerHTML = data.body5;
    body6.innerHTML = data.body6;
    body7.innerHTML = data.body7;
    body8.innerHTML = data.body8;
    body9.innerHTML = data.body9;
    body10.innerHTML = data.body10;
    body11.innerHTML = data.body11;
    body12.innerHTML = data.body12;
    body13.innerHTML = data.body13;
    body14.innerHTML = data.body14;
    body15.innerHTML = data.body15;
    body16.innerHTML = data.body16;
    body17.innerHTML = data.body17;
    map1.innerHTML = data.embedcode;
    pic1.src = data.pic1
    pic2.src = data.pic2
    bgpic1.style.backgroundImage = "url(" + data.bgpic1 + ")";
    
        
 });
}
  window.addEventListener('DOMContentLoaded', init)















































