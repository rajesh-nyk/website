function isMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}
let deviceType = isMobile() ? "mobile" : "desktop";
console.log("Device type:", deviceType);
let s=document.getElementById('name');
console.log(s);
if(deviceType=='desktop') {
    s.textContent = 'Hi Desktop User';
}
else if(deviceType=='mobile') {
    s.textContent = 'Hi Mobile User';
}
else {

}
