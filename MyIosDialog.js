/**
 * dialog
 * Author:honaf
 */
'use strict';

import {
    Component,
    ActionSheetIOS,
    Alert
} from 'react-native';

let MyIosDialog = {

    showActionSheetWithOptions(obj,callback){
        ActionSheetIOS.showActionSheetWithOptions({
                options: obj.options,
                cancelButtonIndex: obj.cancelButtonIndex,
                destructiveButtonIndex: obj.destructiveButtonIndex,
            },
            (buttonIndex) => {
                   callback(buttonIndex)
            });
    },

    prompt(title, message, callbackOrButtons, type){
        Alert.prompt(title,message,callbackOrButtons,type);
    },


}

module.exports = MyIosDialog;
