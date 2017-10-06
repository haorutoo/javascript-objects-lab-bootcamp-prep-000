var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, object, { [key]: value })
  //return object
  //object[key]=value
  return object
}
