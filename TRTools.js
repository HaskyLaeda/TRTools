/**
 * Created by Alexander.Shilyakin on 06.02.2018.
 */
document.body.firstChild.nextSibling.style.color = 'green';
console.log('document.body.firstChild.nextSibling.style.color is' + document.body.firstChild.nextSibling.style.color);


for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
//    alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
}