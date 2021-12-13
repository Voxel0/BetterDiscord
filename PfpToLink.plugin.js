/**
 * @name PfpToLink
 * @description Lets you click users' avatars on their profile page to view a bigger version in your browser.
 * @version 1.1
 * @authorId 413100574981095425
 * @updateUrl https://raw.githubusercontent.com/Inve1951/BetterDiscordStuff/master/plugins/linkProfilePicture.plugin.js
 */
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
