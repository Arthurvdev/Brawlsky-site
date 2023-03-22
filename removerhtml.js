
// Obtém o caminho atual da página
var path = window.location.pathname;

// Verifica se a página termina com ".html"
if (path.endsWith('.html')) {
  // Remove a extensão ".html"
  var newPath = path.slice(0, -5);

  // Redireciona para a nova página sem a extensão ".html"
  window.location.replace(newPath);
}
