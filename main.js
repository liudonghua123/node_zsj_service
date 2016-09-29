var soap = require('soap');

// The wsdl url of zsj-service
var url = 'http://113.55.12.3:8080/zsj-service/webservice/wscommoninterface?wsdl';

// The argument passed to the webservice endpoint
var args = {
    arg0: {
        interfaceId: '8141',
        pageNum: 1,
        pageSize: 10,
        params: [
            {key: 'XXMC', value: '云南大学'}
        ]
    }
};

// Need to specify the root namespace of the Custom datetype
var wsdlOptions = {
    overrideRootElement: {
        namespace: "ns",
        xmlnsAttributes: [{
            name: "xmlns:ns",
            value: "http://wscommon.publish.ws.zsj.wisedu.com/"
        }]
    }
};

// The authentication header needed
var extraHeaders = {
    'Username': 'test',
    'Password': '123456'
}

soap.createClient(url, wsdlOptions, function (err, client) {
    client.getData(args, {}, extraHeaders, function (err, result) {
        // We only print some infomation to debug
        console.log('The err is %j\n', err);
        console.log('The result is %j\n', result);
        console.log('The last request body is %j\n', client.lastRequest);
    });
});