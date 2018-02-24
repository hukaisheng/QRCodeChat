
var actions = [
  {
    "element_id": "wx_texteb398223", 
    "data": {
      "args": {
        "url": "../scene/scene", 
        "a_ids": [], 
        "e_ids": [], 
        "open_type": "navigate", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 5
    }, 
    "id": "M_c406a2cef2c94873", 
    "isNew": true
  }, 
  {
    "element_id": "wx_textc31a0c2d", 
    "data": {
      "args": {
        "url": "../set/set", 
        "a_ids": [], 
        "e_ids": [], 
        "open_type": "navigate", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 5
    }, 
    "id": "M_662cdb92291e10ee", 
    "isNew": true
  }, 
  {
    "element_id": "wx_button_de9180e1", 
    "data": {
      "args": {
        "a_ids": [], 
        "title": "生成中", 
        "st": 1, 
        "duration": "60", 
        "e_ids": [], 
        "icon": "loading"
      }, 
      "type": 0, 
      "exec": 103
    }, 
    "id": "M_ead5cd33049ba183", 
    "isNew": true
  }, 
  {
    "element_id": "wx_button_de9180e1", 
    "data": {
      "args": {
        "e_ids": [], 
        "confirmText": "好的", 
        "showCancel": false, 
        "title": "聊天码生成成功", 
        "a_ids": [], 
        "content": "你的聊天码已保存到本地相册，快去用它与粉丝交流互动吧", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 102
    }, 
    "id": "M_441db3a922a89557", 
    "isNew": true
  }
];

var animations = [];

var timelines = [
  {
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
    "element_id": "body_6a8999d4a4c66f33", 
    "iType": 0, 
    "id": "M_d07d8945c3928aee", 
    "animations": []
  }
];

getApp().coolsite360.DATA[__wxRoute] = {
   animations:animations,
   actions:actions,
   timelines:timelines
};

