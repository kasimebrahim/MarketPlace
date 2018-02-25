'use strict';

module.exports = function(Customer) {
    Customer.edit = function(cus, cb){
        Customer.upsert(cus, function(err, models){
            if(err){
                return cb(err, "failed");
            }

            cb(null, models);
        });
    }
    Customer.remoteMethod("edit", {
        accepts: [{arg: 'cus', type: 'Object'}],
        returns: {arg: 'message', type: 'array'},
        http: {path:'/edit', verb: 'post'}
    });

    Customer.beforeRemote("edit", function(ctx, instance, next){
        var accountId = ctx.req.accessToken.userId;
        ctx.args.cus["accountId"] = accountId;
        next();
    });
};
