
var actions = [
  {
    "element_id": "wx_button_df3c48b3", 
    "data": {
      "args": {
        "confirmColor": "rgba(9,187,7,1)",
        "e_ids": [],
        "confirmText": "转发",
        "showCancel": "checked",
        "title": "提示",
        "a_ids": [],
        "content": "不能向自己发起聊天请求。你可以转发本页面到微信群，吸引粉丝向你咨询或交流。",
        "cancelColor": "rgba(136,136,136,1)",
        "st": 1
      }, 
      "type": 0, 
      "exec": 102
    }, 
    "id": "M_4c9657cde4452bb4", 
    "isNew": true
  }
];

var animations = [];

var timelines = [
  {
    "iType": 0, 
    "isNew": true, 
    "animations": [
      "ani_24daaa839bf95734"
    ], 
    "element_id": "body_1cb4b4c22985d0b9", 
    "data": {
      "type": 0, 
      "t": {
        "rv": 0, 
        "rp": 0, 
        "wa": 0, 
        "de": 0, 
        "st": 1, 
        "du": 1, 
        "es": 0
      }, 
      "d": {}
    }, 
    "id": "M_19163b426a6936f8"
  }
];

getApp().coolsite360.DATA[__wxRoute] = {
   animations:animations,
   actions:actions,
   timelines:timelines
};

