let v=0;
if (/Mobi | Andriod/i.test(navigator.userAgent)) {
    alert("User is on mobile");
    v=1;
}
else {
    console.log("User is on desktop");
    v=2;
}
console.log(v);
let s=document.getElementById('name');
console.log(s);
if(v==2) {
    s.textContent = 'Hi Desktop User';
}
else if(v==1) {
    s.textContent = 'Hi Desktop User';
}
else {

}
