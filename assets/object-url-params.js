function url_params(str) {
  var str=str||document.location.search;return""==str?{}:str.replace(/(^\?)/,"").split("&").map(function(n) {
    return n=n.split("="),this[decodeURIComponent(n[0])]=decodeURIComponent(n[1]), this
  }.bind({}))[0]
}

var UrlParams = url_params();

export default UrlParams;
