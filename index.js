var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
  //return object
  //object[key]=value
  return object
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  //object.key=value
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.key
  return newObj
  return object
}