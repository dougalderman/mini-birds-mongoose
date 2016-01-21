// userCtrl.js

var userModel = require('./../models/userModel');

module.exports = {

    create: function(req, res) {
        
        console.log('in create');
        console.log('req.body = ', req.body);
        var newUser = new userModel(req.body);
        
        newUser.save(function(err, result) {
            if (err)
                return res.status(500).send(err);
            else
                res.send(result);  
        })
    },
    
    read: function(req, res) {
        console.log('in read');
        console.log('req.query = ', req.query)
         userModel
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
         userModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, result) {
            if (err)
                return res.status(500).send(err);
             else                                          
                res.send(result);  
        }); 
    },
    
    delete: function(req, res) {
        
         console.log('in delete');
         console.log('req.params.id = ', req.params.id);
        
         userModel.findByIdAndRemove(req.params.id, function(err, result) {
             
             if (err)
                 return res.status(500).send(err);
             else
                res.send(result);  
        });
    }

}