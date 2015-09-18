var async = require('async');

module.exports = function (application) {
	console.log(application.dataSources);
	var mongo = application.dataSources.Pricedb;
	var product = application.models.product;

	function CreateProducts(cb) {
		mongo.automigrate('product', function (err) {
			if (err) cb(err);
			product.create([
				{
					name: 'White Fedora',
					sku: 'WF543',
					upc: 543,
					price: 30
				},
				{
					name: 'Red Hat',
					sku: 'RH123',
					upc: 123,
					price: 45
				},
				{
					name: 'Green Beret',
					sku: 'G533N',
					upc: 533,
					price: 80
				},
				{
					name: 'Fascinator',
					sku: 'F516',
					upc: 516,
					price: 60
				},
				{
					name: 'Cowboy Hat',
					sku: 'C00H',
					upc: 600,
					price: 15
				}
				],	cb);
		});
	}

	async.waterfall([
		CreateProducts
	]);
};
