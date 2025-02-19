// function searchFiles() {
//   let input = document.getElementById('search').value.toLowerCase();
//   let fileList = document.getElementById('file-list');
//   let files = fileList.getElementsByTagName('li');

//   for (let i = 0; i < files.length; i++) {
//     let fileName = files[i].textContent.toLowerCase();
//     if (fileName.includes(input)) {
//       files[i].style.display = '';
//     } else {
//       files[i].style.display = 'none';
//     }
//   }
// }

const files = ['1.txt', '2.txt']; // Додавайте файли в цей список вручну

function loadFiles() {
  const fileList = document.getElementById('file-list');
  fileList.innerHTML = '';

  files.forEach(file => {
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    link.href = `files/${file}`;
    link.textContent = file;
    link.download = file;
    listItem.appendChild(link);
    fileList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', loadFiles);
