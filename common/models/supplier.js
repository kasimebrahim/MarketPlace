'use strict';

module.exports = function(Supplier) {
    Supplier.edit = function(supplier, cb){
        Supplier.upsert(supplier, function(err, models){
            if(err){
                return cb(err, "failed");
            }

            cb(null, models);
        });
    }
    Supplier.remoteMethod("edit", {
        accepts: [{arg: 'supplier', type: 'Object'}],
        returns: {arg: 'message', type: 'array'},
        http: {path:'/edit', verb: 'post'}
    });

    Supplier.beforeRemote("edit", function(ctx, instance, next){
        var accountId = ctx.req.accessToken.userId;
        ctx.args.supplier["accountId"] = accountId;
        next();
    });
};
