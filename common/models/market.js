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

    Market.requests = function (params, cb) {
        console.log(params)
        var Cart = Market.app.models.Cart;
        Cart.findById({accountId: params.userId}, function(err, cart){
            if(err){
                return cb(err, "error!");
            }
            return cb(null, cart);
        })
    };

    Market.remoteMethod("edit", {
        accepts:{arg:"model", type:"Object"},
        returns:{arg:"market", type:"Object"},
        http:{path:"/edit", verb:"post"}
    });

    Market.remoteMethod("requests", {
        accepts:{arg:"params", type:"any"},
        returns:{arg:"market", type:"object"},
        http:{path:"/:id/requests", verb:"get"}
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

    Market.beforeRemote("requests", function(ctx, instance, next){
        ctx.args.params = {};
        ctx.args.params.marketId = ctx.req.params;
        ctx.args.params.userId = ctx.req.accessToken.userId;
        next();
    });
};
