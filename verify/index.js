// 手机正则
export const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
// 邮箱正则
export const emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/

/**
 * @description 手机号验证
 * @param { number } phone 手机号
 * @returns { boolean }
 */
export const isPhoneAvailable = (phone = null) => phoneReg.test(phone)

/**
 * @description 手机验证 - 基于第三方框架
 * @param {*} rule 规则
 * @param {*} value 验证对象
 * @param {*} callback 回调函数
 */
export const isOtherPhoneAvailable = (rule, value, callback) => {
    if (isPhoneAvailable(value)) {
        callback();
    } else {
        callback(new Error('请输人正确的电话'));
    }
};

/**
 * @description 邮箱验证
 * @param { number } email 邮箱
 * @returns { boolean }
 */
export const isEmailAvailable = (email = null) => emailReg.test(email)  

/**
 * @description 对象验证
 * @param { object } obj 
 */
export const isObject = (obj) => {
   return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * @description 数组验证
 * @param { array } arr 
 */
export const isArray = (arr) => {
    return Object.prototype.toString.call(arr) === '[object Array]'
}

/**
 * @description 函数验证
 * @param { function } fun 
 */
export const isFunctio = (fun) => {
    return Object.prototype.toString.call(fun) === '[object Function]';
}

/**
 * @description 数值验证
 * @param { number } num 
 */
export const isNumber = (num) => {
    return Object.prototype.toString.call(num) === '[object Number]';
}

/**
 * @description 字符串验证
 * @param { string } str 
 */
export const isString = (str) => {
    return Object.prototype.toString.call(str) === '[object String]';
}

/**
 * @description 布尔验证
 * @param { boolean } value 
 */
export const isBoolean = (value) => {
    return Object.prototype.toString.call(value) === '[object Boolean]';
}

/**
 * @description Undefined验证
 * @param { undefined } value 
 */
export const isUndefined = (value) => {
    return Object.prototype.toString.call(value) === '[object Undefined]';
}

/**
 * @description Null验证
 * @param { null } value 
 */
export const isNull = (value) => {
    return Object.prototype.toString.call(value) === '[object Null]';
}

/**
 * @description 对象判空 判断是否是空对象
 * @param { object } obj 
 */
export const isObjectKey = (obj) => {
    return Object.keys(obj).length > 0;
}

/**
 * @description 对象属性值判空(支持深层嵌套) 对象的属性值满足至少有一个不为空时返回true 否则返回false
 * @param { object } obj 对象
 */
export const isObjectValue = (obj = null) => {
    if(!isObject(obj) || !isObjectKey(obj)) return false
    let objValues = Object.values(obj)
    let meet = objValues.some(item => {
        if (isObject(item)) {
           return isObjectValue(item)
        } else if (isArray(item)) {
           return item.length > 0
        } else {
           return item !== '' && item !== null && item !== {}
        }
    })
    return meet
}

/**
 * @description 对象属性值判空(支持深层嵌套) 对象的属性值全部不为空时返回true 否则返回false
 * @param { object } obj 对象
 */
export const isObjectAllValue = (obj = null) => {
    if(!isObject(obj) || !isObjectKey(obj)) return false
    let objValues = Object.values(obj)
    let meet = objValues.every(item => {
        if (isObject(item)) {
           return isObjectAllValue(item)
        } else if (isArray(item)) {
           return item.length > 0
        } else {
           return item !== '' && item !== null && item !== {}
        }
    })
    return meet
}

/**
 * @description 将下划线命名转化为驼峰命名
 * @param { string } name 名称
 */
export const willLineToHump = (name = null) => {
    if(!isString(name)) return console.error('Requires a string argument')
    let names = name
}
