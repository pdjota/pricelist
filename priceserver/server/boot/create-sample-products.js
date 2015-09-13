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
					upc: 543
				},
				{
					name: 'Red Hat',
					sku: 'RH123',
					upc: 123
				},
				{
					name: 'Green Beret',
					sku: 'G533N',
					upc: 533
				}
				],	cb);
		});
	}

	async.waterfall([
		CreateProducts
	]);
};
