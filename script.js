function getHTML(listing) {
  return `<h3>${listing.name}</h3><em>${listing.address}</em><br/><br/>${listing.description}<br/><br/><strong>Login: ${listing.ssid}</br>Password: ${listing.password}</strong>`
}