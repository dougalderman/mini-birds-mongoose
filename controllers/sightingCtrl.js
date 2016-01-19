// sightingCtrl.js

var sightingModel = require('./../models/sightingModel');

module.exports = {

    create: function(req, res) {
        
        console.log('in create');
        console.log('req.body = ', req.body);
        var newSighting = new sightingModel(req.body);
        
        newSighting.save(function(err, result) {
            if (err)
                return res.status(500).send(err);
            else
                res.send(result);  
        })
    },
    
    read: function(req, res) {
        console.log('in read');
        console.log('req.query = ', req.query)
         sightingModel
         .find(req.query)
         .exec(function(err, result) {
             console.log('err', err);
             console.log('result', result);
             if (err) {
                 console.log('in error routine');
                 return res.status(500).send(err);
             }
             else {
                 res.send(result)
             }
         })
    },
    
    update: function(req, res) {
        
         console.log('in update');
         console.log('req.params.id = ', req.params.id);
         console.log('req.body = ', req.body);
         sightingModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err)
                return res.status(500).send(err);
             else                                          
                res.send(result);  
        });
    },
    
    delete: function(req, res) {
        
         console.log('in delete');
         console.log('req.params.id = ', req.params.id);
        
         sightingModel.findByIdAndRemove(req.params.id, function(err, result) {
             
             if (err)
                 return res.status(500).send(err);
             else
                res.send(result);  
        });
    }

}