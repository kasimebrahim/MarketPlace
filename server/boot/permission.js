'use strict';

module.exports = function(app){
    var Role = app.models.Role;
    var Market = app.models.Market;

    Role.registerResolver("cartOwner", function (role, context, cb) {
        // Q: Is the current request accessing a Cart?
        if (context.modelName !== 'Cart') {
            // A: No. This role is only for cart: callback with FALSE
            return process.nextTick(() => cb(null, false));
        }
    
        //Q: Is the user logged in? (there will be an accessToken with an ID if so)
        var userId = context.accessToken.userId;
        if (!userId) {
            //A: No, user is NOT logged in: callback with FALSE
            return process.nextTick(() => cb(null, false));
        }
        if(context.modelId != userId){
            return process.nextTick(() => cb(null, false));
        }
        return cb(null, true);
    });

    Role.registerResolver("marketOwner", function (role, context, cb) {
        // Q: Is the current request accessing a Cart?
        if (context.modelName !== 'Market') {
            // A: No. This role is only for market: callback with FALSE
            return process.nextTick(() => cb(null, false));
        }
    
        //Q: Is the user logged in? (there will be an accessToken with an ID if so)
        var userId = context.accessToken.userId;
        if (!userId) {
            //A: No, user is NOT logged in: callback with FALSE
            return process.nextTick(() => cb(null, false));
        }

        Market.findById(context.modelId, function (err, market) {
            if(err){
                return process.nextTick(() => cb(err, false));
            }
            if(market == null){
                return process.nextTick(() => cb(null, false));
            }
            if(market.supplierId != userId){
                return  process.nextTick(() => cb(null, false));
            }

            return cb(null, true);
        });
    });
};
