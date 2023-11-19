const f = document.getElementById('form');
const q = document.getElementById('query');
const site = 'https://genshin-impact.fandom.com/wiki/Special:Search?query='
const suffix = '&scope=internal&navigationSearch=true'

function submitted(event)
{
    event.preventDefault();
    const url = site + q.value + suffix;
    const win = window.open(url, '_self');
    win.focus();
}

f.addEventListener('submit', submitted);
