
var actions = [
  {
    "element_id": "wx_button_6741b380", 
    "data": {
      "args": {
        "confirmColor": "rgba(9,187,7,1)", 
        "e_ids": [], 
        "confirmText": "继续提现", 
        "showCancel": "checked", 
        "title": "收费提示", 
        "a_ids": [], 
        "content": "本次提现收取10%的服务费共10.00元，实际到账微信钱包90.00元", 
        "cancelColor": "rgba(136,136,136,1)", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 102
    }, 
    "id": "M_a65777145b48dbb0", 
    "isNew": true
  }
];

var animations = [];

var timelines = [
  {
    "data": {
      "type": 0, 
      "t": {
        "de": 0, 
        "rp": 0, 
        "name": "", 
        "st": 1
      }, 
      "d": {}
    }, 
    "element_id": "body_9ab45c7551a37757", 
    "iType": 0, 
    "id": "M_07bb73fa21b77589", 
    "animations": []
  }
];

getApp().coolsite360.DATA[__wxRoute] = {
   animations:animations,
   actions:actions,
   timelines:timelines
};

