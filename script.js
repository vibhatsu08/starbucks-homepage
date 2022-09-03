openPanel = () => {
    document.getElementById('mysidepanel').style.width = '300px';
}
closePanel = () => {
    document.getElementById('mysidepanel').style.width = '0px';
}
// Using this function, because i am facing a bug, where the sidepanel automatically opens on device browsers with width less than 510px.
window.onload = () => {
    document.getElementById('mysidepanel').style.width = '0px';
}