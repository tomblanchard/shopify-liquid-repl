var Clipboard = {
  copy: function(text) {
    var el = document.createElement("textarea");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    el.setAttribute("readonly", "");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    var success = document.execCommand("copy");
    document.body.removeChild(el);
    return success;
  }
}

export default Clipboard;
