//// [genericCallWithObjectTypeArgs2.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var i, Base = function Base() {
    "use strict";
    _class_call_check(this, Base);
}, Derived = function(Base) {
    "use strict";
    _inherits(Derived, Base);
    var _super = _create_super(Derived);
    function Derived() {
        return _class_call_check(this, Derived), _super.apply(this, arguments);
    }
    return Derived;
}(Base), Derived2 = function(Base) {
    "use strict";
    _inherits(Derived2, Base);
    var _super = _create_super(Derived2);
    function Derived2() {
        return _class_call_check(this, Derived2), _super.apply(this, arguments);
    }
    return Derived2;
}(Base);
function f(a) {
    return [
        a.x,
        a.y
    ];
}
function f2(a) {
    return function(x) {
        return a.y;
    };
}
f({
    x: new Derived(),
    y: new Derived2()
}), f({
    x: new Base(),
    y: new Derived2()
}), f2({
    x: new Derived(),
    y: new Derived2()
}), f2(i);
