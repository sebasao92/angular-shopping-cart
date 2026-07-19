function createProduct(name) {
  this.name = name;
  this.getName = function() {
    setTimeout(() => {
      console.log('Product name is:', this.name);
    });
  }
}

  const product = new createProduct('Laptop');
  product.getName();