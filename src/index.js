import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Root from './Root';

ReactDOM.render(
    <Provider store = {store}>
    <Root />
    </Provider>,
    document.getElementById("app")
);

Array.prototype.equals = function(arr) {
    if(!arr)
        return false;
    if(this.length != arr.length)
        return false;
    for(var i = 0; i < this.length; i++) {
        if(this[i] instanceof Array && arr[i] instanceof Array) {
            if(!this[i].equals(arr[i]))
                return false;
        }
        else if (this[i] != arr[i])
            return false;
    }
    return true;
};

Object.defineProperty(Array.prototype, "equals", {enumerable: false});
console.log([1].equals([1]));
