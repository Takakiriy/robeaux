"use strict";

/* eslint no-var: 0 */

process.env.NODE_ENV = "test";

var path = require("path");

var chai = require("chai"),
    sinon = require("sinon"),
    sinonChai = require("sinon-chai");

chai.use(sinonChai);

global.chai = chai;
global.sinon = sinon;

global.should = chai.should();
global.expect = chai.expect;
global.assert = chai.assert;
global.AssertionError = chai.AssertionError;

global.spy = sinon.spy;
global.stub = sinon.stub;

// convenience function to require modules in lib directory
global.source = function(module) {
  return require(path.normalize("./../src/javascripts/" + module));
};

// add Babel's 'require' overload
require("babel/register");

var jsdom = require("jsdom");

// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access
global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = document.parentWindow;
global.navigator = global.window.navigator = {};
global.navigator.userAgent = "JSDom";

// add React + TestUtils to global namespace
var React = require("react/addons");
global.React = React;
global.TestUtils = React.addons.TestUtils;

