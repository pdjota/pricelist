angular.module('priceclient.services', ['ngResource'])
.factory('Product', function ($resource) {
  var productResource = $resource('http://localhost:3000/api/products');
  return productResource;
}).factory('Cart', function () {
  var applicableTax = 0.1;//10%

  function lineSubTotal(currentLine) {
    return currentLine.quantity * (currentLine.product.price || 0);
  }

  function  lineTaxes(line) {
    return lineSubTotal(line) * applicableTax;
  }

  function lineTotal(line) {
    return lineSubTotal(line) + lineTaxes(line);
  }

  function formatTax(decimalTax) {
    return (decimalTax * 100).toString() + ' %';
  }

  function mapLine(line) {
    return {
      productName: line.product.name,
      productUpc: line.product.upc,
      productImage: line.product.image,
      quantity: line.quantity,
      tax: formatTax(applicableTax), //todo add Tax Calculator
      total: lineTotal(line)
    };
  }


  var _lines = [];
  this.lines = _lines;
  this.totals = {
    subTotal: 0,
    taxes: 0,
    total: 0
  };
  
  this.addToCart = function(product, quantity) {
    console.log('addToCart', product.name, '_lines', _lines.length);
    var newLine = {
      line: _lines.length + 1,
      quantity: quantity || 1,
      product: product,
      tax: formatTax(applicableTax)
    };
    newLine.total = lineTotal(newLine);
    _lines.push(newLine);
    this.recalcTotals(this.totals);
  };

  this.recalcTotals = function (totals) {
    totals.subTotal = 0;
    totals.taxes = 0;
    totals.total = 0;

    return _lines.reduce( function (totals, currentLine) {
      totals.subTotal += lineSubTotal(currentLine);
      totals.taxes += lineTaxes(currentLine);
      totals.total += lineTotal(currentLine);
      return totals;
    }, totals);
  };

  this.size = function () {
    return _lines.length;
  };

  return this;
});
 
