
const data = [
  {
    data:'2025-02-23',
    title: 'はじめてのブログ',
    tags : [
      '日記',
      'Minecraft'
    ]
  },
  {
    data:'2025-02-23',
    title: 'ScriptAPIの備忘録',
    tags : [
      '備忘録',
      'Minecraft'
    ]
  },
  {
    data:'2025-02-28',
    title: 'バイトまた落ちた',
    tags : [
      '日記'
    ]
  }
]
let allTags = [];
for(let c = 0; c < data.length; c++){
  allTags = allTags.concat(data[c].tags);
}
allTags = Array.from(new Set(allTags))

const path = window.location.pathname.split('/');
var lastPath = path[path.length-1].replace(".html","");

function blogPage (){
  const dataElement = window.document.getElementById('data');
  const titleElement = window.document.getElementById('title');
  var num = Number(lastPath);
  if(dataElement == undefined){
    console.error('Element not found');
  }else{
    if (num > data.length-1 || isNaN(num)){
      console.error('Data not found');
    }else {
      dataElement.innerHTML += `<p>作成日：${data[num].data}</p>`;
      if(titleElement == undefined){
        console.error('Title not found')
      }else {
        titleElement.innerHTML = `${data[num].title}`
      }
    }
  }
}

function blogList () {
  for(let r = 0; r < allTags.length; r++){
    window.document.getElementById('selector').innerHTML += `<option value="${r+1}">${allTags[r]}</option>`;
  }
  for(let i = 0; i < data.length; i++){
    var block = `<div class="blogBlock" onclick="window.location.href='page/${i}.html'">`;
    block += `<h1>${data[i].title}</h1>`;
    block += `<p>作成日：${data[i].data}</p>`;
    block += `<p>タグ：${data[i].tags.toString()}</p></div>`
    window.document.getElementById('blog').innerHTML = block + window.document.getElementById('blog').innerHTML;
  }
}

if(path.length >= 2 && (path[path.length-1] == 'index.html' || path[path.length-1] == '') && path[path.length-2] == 'blog'){
  blogList();
}else {
  blogPage();
}