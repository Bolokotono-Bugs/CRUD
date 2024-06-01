const output = document.querySelector("#output");
const nama = document.querySelector("#nama");
const hobi = document.querySelector("#hobi");

function tampil(){
 output.innerHTML = `halo ${nama.value}..! selamat datang! dan
 ${hobi.value} adalah hobi saya.
 `
}