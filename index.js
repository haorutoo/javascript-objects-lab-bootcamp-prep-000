var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  object.assign({}, { [key]: value })
  //return object
  //object[key]=value
  return object
}
