(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publish/ethercat.js                                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish("ethercat", function () {                               // 1
    return Ethercat.find();                                            // 2
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=ethercat.js.map