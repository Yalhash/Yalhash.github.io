// Builds mailto links from the data-user / data-domain parts in _includes/email-link.html,
// so the full address only exists in the visitor's browser, never in the page source.
document.querySelectorAll(".js-email").forEach(function (link) {
  var address = link.dataset.user + "@" + link.dataset.domain;
  link.href = "mailto:" + address;
  if (!link.dataset.label) link.textContent = address;
});
