let smileys = {
    ':)': '😊',
  ':-)': '🙂',
  ':D': '😀',
  ':-(': '☹️',
  ':-D': '😃',
  ':(': '🙁',
  'lol': '🤣',
  'LOL': '🤣',
  'Lol': '🤣',
  'lOl': '🤣',
  'loL': '🤣',
  'LOl': '🤣',
  'lOL': '🤣',
  'LoL': '🤣',
  ':-|': '😐',
  ':|': '😐',
  ';-)': '😉',
  ';)': '😉',
  ':O': '😮',
  ':-O': '😲',
  ':-\\': '😕',
  ':\\': '😕'
}


var input = document.getElementById("msghere");
let input1 = input.value;


setInterval(function() {
    
if(input.value.toLowerCase().startsWith(`/e`)) return;

else{
    let yeah = input.value
    let done = yeah.replace(/(\:-\\|\:\\|\:O|\:-O|\:\)|\:\(|\:-\)|\:D|\:-D|\blol\b|\bLol\b|\bLOL\b|\bloL\b|\blOl\b|\blOL\b|\bLOl\b|\bLoL\b|\:-\||\:\||\:-\(|\;-\)|\;\))/g, function(all) {
        return smileys[all] || all;
      });
      input.value = done

  return
}
}, 100);