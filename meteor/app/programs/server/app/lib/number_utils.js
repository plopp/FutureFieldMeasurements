(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/number_utils.js                                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
this.isFloat = function (n) {                                          // 1
    return n === +n && n !== (n | 0);                                  // 2
};                                                                     //
                                                                       //
this.isInteger = function (n) {                                        // 5
    return n === +n && n === (n | 0);                                  // 6
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=number_utils.js.map