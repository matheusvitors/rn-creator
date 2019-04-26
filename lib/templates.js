var dedent = require('dedent-js');
// var dedent = require('dedent-js');
// var fs = require("fs");

// var arqIndex = fs.readFileSync('../templates/index.js');
const index = dedent(`
import React, { Component } from 'react';

export default class Login extends Component {

    render(){

    }
}
`);

const styles = dedent(`
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

});

`);

module.exports = {
    index: index, 
    styles: styles
};
