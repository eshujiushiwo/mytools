printjson(1);
config={_id: 'rs1', members:[{_id: 0,host:'172.17.0.69:27017'},{_id:1,host:'172.17.0.65:27017'},{_id:2,host:'172.17.0.67:27017'}]}
rs.initiate(config);
