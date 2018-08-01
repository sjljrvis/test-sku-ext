var products = document.getElementsByClassName('list-item');

for (var i = 0, l = products.length; i < l; i++) {

  let x = products[i].children[0].children;
  let y = Object.values(x).filter(x => x.className == 'info-more')
  let z = Object.values(x).filter(x => x.className == 'info')

  if (y.length != 0) {
    let dropskuDiv = document.createElement('DIV');
    dropskuDiv.className = "dropsku";
    dropskuDiv.setAttribute("url", z[0].children[0].children[0].attributes.href.nodeValue)
    dropskuDiv.onclick = handleclick;

    y[0].insertBefore(dropskuDiv, y[0].childNodes[0]);
  }
}

/**
 * Pickup Current user session from dropsku 
 * Identify user
 * Add selected product to user's import list
 */

function handleclick() {
  console.log(this.attributes.url.nodeValue)

}