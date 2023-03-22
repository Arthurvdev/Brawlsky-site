// Obtém o caminho atual da página
var path = window.location.pathname;

// Verifica se a página termina com ".html"
if (path.endsWith('.html')) {
  // Remove a extensão ".html"
  var newPath = path.slice(0, -5);

  // Modifica a URL sem atualizar a página
  window.history.replaceState(null, null, newPath);
}
