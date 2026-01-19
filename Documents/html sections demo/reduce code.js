const sections = ["header", "hero", "footer"];

sections.forEach(section => {
  fetch(`components/${section}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById(section).innerHTML = data;
    })
    .catch(err => console.error(`Error loading ${section}:`, err));
});
{}