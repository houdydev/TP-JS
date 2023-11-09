let tabSizes = ['s', 'm', 'l', 'XL'];
document.write('<select>');
 for(let i = 0; i < tabSizes.length; i++){
    document.write('<option>' + tabSizes[i] + '</option>'); }
document.write('</select>');


let cats = ['Pixel', 'Saxo', 'Cody', 'Choupette', 'Scar', 'Galy', 'Merlin', 'Yuzu'];
document.write('<ul>');
for(let e = 0; e < cats.length; e++){
    document.write('<li>' + cats[e] + '</li>');
}
document.write('</ul>');

let chien = ['Pixel', 'Saxo', 'Cody', 'Choupette', 'Scar', 'Galy', 'Merlin', 'Yuzu'];

document.write('<ul>');
let a = 0;
while(a<chien.length){
    document.write('<li>' + chien[a] + '</li>');

    a++
}
document.write('</ul>');