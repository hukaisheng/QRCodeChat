
var actions = [
  {
    "element_id": "wx_button_ece2ffda", 
    "data": {
      "args": {
        "duration": "1200", 
        "a_ids": [], 
        "e_ids": [], 
        "st": 1, 
        "title": "保存成功"
      }, 
      "type": 0, 
      "exec": 103
    }, 
    "id": "M_33459fdfdedb9e8a", 
    "isNew": true
  }, 
  {
    "element_id": "wx_view8ab064c9", 
    "data": {
      "args": {
        "a_ids": [], 
        "itemColor": "#000000", 
        "e_ids": [], 
        "itemList": [
          "分钟", 
          "小时"
        ], 
        "st": 1
      }, 
      "type": 0, 
      "exec": 101
    }, 
    "id": "M_6de845b9f81c9327", 
    "isNew": true
  }
];

var animations = [];

var timelines = [
  {
    "iType": 0, 
    "isNew": true, 
    "animations": [
      "ani_5dd569870893d572", 
      "ani_58d857c3cddfd3e4", 
      "ani_872f61f9971dbbd1"
    ], 
    "element_id": "body_a4ccc12235ae2682", 
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
    "id": "M_9769e6e261ef1754"
  }
];

getApp().coolsite360.DATA[__wxRoute] = {
   animations:animations,
   actions:actions,
   timelines:timelines
};

