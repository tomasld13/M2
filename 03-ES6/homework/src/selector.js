var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl)
  }
  for(let i = 0; i < startEl.children.length; i++){
    let elements = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
    resultSet = resultSet.concat(elements);
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === "#") return "id";
  else if(selector[0] === ".") return "class";
  for (let i = 1; i < selector.length; i++) {
    if(selector[i] === "."){
      return "tag.class"
    }
  }
  return "tag"
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (elementoDelDom) => `#${elementoDelDom.id}` === selector;
  } else if (selectorType === "class") {
    matchFunction = (elementoDelDom) => elementoDelDom.classList.contains(selector.substring(1))
  } else if (selectorType === "tag.class") {
    matchFunction = (elementoDelDom) => {
      return matchFunctionMaker(selector.split(".")[0])(elementoDelDom) && matchFunctionMaker(`.${selector.split(".")[1]}`)(elementoDelDom);
    }
  } else if (selectorType === "tag") {
    matchFunction = (elementoDelDom) => elementoDelDom.tagName.toLowerCase() === selector.toLowerCase();
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
