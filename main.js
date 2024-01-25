function isMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}
let deviceType = isMobile() ? "mobile" : "desktop";
console.log("Device type:", deviceType);
let name=document.getElementById('name');
let headersTag=document.getElementById('headers');
let profilePic=document.getElementById('profile-pic');
let aboutText=document.getElementById('about-text');
let pageOne=document.getElementById('page1');
console.log(headersTag);
if(deviceType=='desktop') {
    profilePic.style.height = '250px';
    profilePic.style.width = '250px';
    headersTag.style.flexDirection = 'row';
    headersTag.style.justifyContent = 'left';
    name.style.paddingLeft = '100px';
    profilePic.style.paddingLeft = '100px';
    aboutText.style.fontSize = '20px';
    pageOne.style.height = '70vh';
    /*headersTag.style.gap = '10%';*/
}
else if(deviceType=='mobile') {
}
else {

}