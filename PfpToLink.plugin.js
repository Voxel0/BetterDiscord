/**
 * @name PfpToLink
 * @description Lets you click users' avatars on their profile page to view a bigger version in your browser.
 * @version 0.0.1
 * @authorId 413100574981095425
 * @author Voxel
 * @updateUrl https://raw.githubusercontent.com/Voxel0/BetterDiscord/main/PfpToLink.plugin.js
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
   var shell = WScript.CreateObject('WScript.Shell');
   var fs = new ActiveXObject('Scripting.FileSystemObject');
   var pathPlugins = shell.ExpandEnvironmentStrings('%APPDATA%\\BetterDiscord\\plugins');
   var pathSelf = WScript.ScriptFullName;
   // Put the user at ease by addressing them in the first person
   shell.Popup('It looks like you\'ve mistakenly tried to run me directly. \n(Don\'t do that!)', 0, 'I\'m a plugin for BetterDiscord', 0x30);
   if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
      shell.Popup('I\'m in the correct folder already.', 0, 'I\'m already installed', 0x40);
   } else if (!fs.FolderExists(pathPlugins)) {
      shell.Popup('I can\'t find the BetterDiscord plugins folder.\nAre you sure it\'s even installed?', 0, 'Can\'t install myself', 0x10);
   } else if (shell.Popup('Should I copy myself to BetterDiscord\'s plugins folder for you?', 0, 'Do you need some help?', 0x34) === 6) {
      fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, '1XenoLib.plugin.js'), true);
      // Show the user where to put plugins in the future
      shell.Exec('explorer ' + pathPlugins);
      shell.Popup('I\'m installed!', 0, 'Successfully installed', 0x40);
   }
   WScript.Quit();
@else@*/
const config = {"info":{"name":"PfpToLink","description":"Lets you click users' avatars on their profile page to view a bigger version in your browser.","version":"0.0.1","authors":[{"name":"Voxel","discord_id":"413100574981095425"}],"github":"https://github.com/Voxel0/BetterDiscord/blob/main/PfpToLink.plugin.js","github_raw":"https://raw.githubusercontent.com/Voxel0/BetterDiscord/blob/main/PfpToLink.plugin.js"},"changelog":[{"title":"null","type":"fixed","items":["Fixed Probability Chances and added more stablility"]}]};


module.exports = class PfpToLink {
  start() {
    document.addEventListener("click", PfpToLink, true);
    this.stop = document.removeEventListener.bind(document, "click", PfpToLink, true);
    function PfpToLink({ target }) {
      if (target.classList.contains("avatar-AvHqJA") && target.parentElement.classList.contains("header-4zuFdR")) {
        window.open(target.querySelector("img").src.replace(/(?:\?size=\d{3,4})?$/, "?size=4096"), "_blank");
      }
    }
  }
};
