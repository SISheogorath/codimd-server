
module.exports = function (){
  window.onerror = function (msg, url, lineNo, columnNo, error) {
    let div = document.document.createElement('DIV')
    var role = document.createAttribute("role")
    a.value = "alert"
    div.setAttributeNode(a)
    div.addClass('alert alert-danger alert-dismissible')
      `<div role="alert" style="position: absolute; position: -webkit-sticky; top: 5em; right: 20px; z-index:100; width: 45em;" class="alert alert-danger alert-dismissible">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
      <strong>Is something not working?</strong>
      Your browser says there is an error. Want to <a href="https://github.com/hackmdio/hackmd/issues" class="alert-link">report it?</a>
    </div>`

    return false;
  }
}
