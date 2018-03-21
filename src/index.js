import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Route from './container/route';

ReactDOM.render(
    <Provider store = {store}>
    <Route />
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
        if(this[i] instanceof Object && arr[i] instanceof Object) {
            if(!this[i].equals(arr[i]))
                return false;
        }
        else if (this[i] != arr[i])
            return false;
    }
    return true;
};

Object.defineProperty(Array.prototype, "equals", {enumerable: false});

Object.prototype.equals = function(obj) {
    for (var prop in this) {
        if (this.hasOwnProperty(prop) != obj.hasOwnProperty(prop)) {
            return false;
        }
        else if (typeof this[prop] != typeof obj[prop]) {
            return false;
        }
    }

    for (var prop in obj) {
        if (this.hasOwnProperty(prop) != obj.hasOwnProperty(prop)) {
            return false;
        }
        else if (typeof this[prop] != typeof obj[prop]) {
            return false;
        }
        if (!this.hasOwnProperty(prop))
        continue;

        if (this[prop] instanceof Array && obj[prop] instanceof Array) {
            if (!this[prop].equals(obj[prop]))
            return false;
        }

        else if (this[prop] instanceof Object && obj[prop] instanceof Object) {
            if (!this[prop].equals(obj[prop]))
            return false;
        }

        else if (this[prop] != obj[prop]) {
            return false;
        }
    }
    return true;
}