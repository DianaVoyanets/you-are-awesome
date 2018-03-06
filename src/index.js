// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName;
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, { value: 'value', enumerable: false });
    return propertyName;
};
const createProtoMagicObject = () => {
    var magicObj = _ => _;
    magicObj.prototype = Function.prototype;
    return magicObj;
};
const incrementor = () => {
    if (this.value === undefined) {
        this.value = 0;
    }

    this.value++;
    this.incrementor.valueOf = () => this.value;
    
    return this.incrementor;
};
const asyncIncrementor = async () => await incrementor();
const createIncrementer = () => {
    var count = 0;

    function* incrementor() {
        while (true) {
            yield ++count;
        }
    }

    return incrementor();
};
// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = (obj) => {
    var count = 0;

    for (var key in obj) {
        var prop = obj[key];

        if (typeof prop === 'object') {
            count += getDeepPropertiesCount(prop);
        } 
        
        count++;
    }

    return count;
};
const createSerializedObject = () => null;
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort((a, b) => a.__proto__ > b.__proto__);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;