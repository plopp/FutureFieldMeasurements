(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publish/mbus.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish("mbus", function () {                                   // 1
    return Mbus.find();                                                // 2
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=mbus.js.map