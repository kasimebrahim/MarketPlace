'use strict';

module.exports = function(Market) {
    Market.edit = function(model, cb){
        Market.upsert(model, function(err, market){
            if(err){
                return cb(err, "failed");
            }
            return cb(null, market);
        })
    }

    Market.remoteMethod("edit", {
        accepts:{arg:"model", type:"Object"},
        returns:{arg:"market", type:"Object"},
        http:{path:"/edit", verb:"post"}
    });

    Market.beforeRemote("edit", function(ctx, instance, next){
        var Supplier = require("../../server/server.js").models.Supplier;
        Supplier.findById(ctx.req.accessToken.userId, function(err, supplier){
            if(err){
                return next(err);
            }
            ctx.args.model.supplierId = supplier.id;
            next();
        });
    });
};
