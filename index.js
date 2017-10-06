var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  object.assign({}, { key: value })
  
  object[key]=value
  return object
}

