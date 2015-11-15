module.exports.copyProperties = function copyProperties(source, target) {
  for (var attrname in source) {
    target[attrname] = source[attrname];
  }
};