'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:campaignAddress', '/campaigns/show').add('/campaigns/:campaignAddress/requests', '/campaigns/requests/index').add('/campaigns/:campaignAddress/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNDLEFBREQsSUFDSyxBQURMLGtCQUN1QixBQUR2QixpQkFFQyxBQUZELElBRUssQUFGTCwrQkFFb0MsQUFGcEMsbUJBR0MsQUFIRCxJQUdLLEFBSEwsd0NBRzZDLEFBSDdDLDZCQUlDLEFBSkQsSUFJSyxBQUpMLDRDQUlpRCxBQUpqRDs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mYXJpcy9EZXZlbG9wbWVudC9ldGhlcmV1bS91ZGVteS1ldGhlcmV1bS1jbGFzcy9jYW1wYWlnbiJ9