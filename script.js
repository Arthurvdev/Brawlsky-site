

//Script navbar

const searchInput = document.querySelector('#search-input');
const products = document.querySelectorAll('.product');

function search() {
  const term = searchInput.value.trim().toLowerCase();
  if (term) {
    products.forEach(product => {
      const name = product.querySelector('h2').textContent.toLowerCase();
      if (name.includes(term)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  } else {
    products.forEach(product => {
      product.style.display = 'block';
    });
  }
}

searchInput.addEventListener('keyup', search);


