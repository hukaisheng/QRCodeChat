
var actions = [
  {
    "element_id": "wx_button_ece2ffda", 
    "data": {
      "args": {
        "a_ids": [], 
        "e_ids": [
          "wx_view_157c625e"
        ], 
        "st": 1
      }, 
      "type": 0, 
      "exec": 1
    }, 
    "id": "M_8072aee9335ed625", 
    "isNew": true
  }, 
  {
    "element_id": "wx_button_ece2ffda", 
    "data": {
      "args": {
        "a_ids": [
          "ani_872f61f9971dbbd1"
        ], 
        "e_ids": [], 
        "st": 1
      }, 
      "type": 0, 
      "exec": 0
    }, 
    "id": "M_30d5d50126292973", 
    "isNew": true
  }, 
  {
    "element_id": "wx_view_13b0553f", 
    "data": {
      "args": {
        "a_ids": [], 
        "e_ids": [
          "wx_view_13b0553f"
        ], 
        "st": 1
      }, 
      "type": 0, 
      "exec": 2
    }, 
    "id": "M_88365f6dd5883cfe", 
    "isNew": true
  }, 
  {
    "element_id": "wx_view_13b0553f", 
    "data": {
      "args": {
        "a_ids": [], 
        "e_ids": [
          "wx_view441fbf20"
        ], 
        "st": 1
      }, 
      "type": 0, 
      "exec": 1
    }, 
    "id": "M_7c77b4b2c7938e39", 
    "isNew": true
  }, 
  {
    "element_id": "wx_view441fbf20", 
    "data": {
      "args": {
        "a_ids": [], 
        "e_ids": [
          "wx_view441fbf20"
        ], 
        "st": 1
      }, 
      "type": 0, 
      "exec": 2
    }, 
    "id": "M_dc69d8395d47c1d9", 
    "isNew": true
  }, 
  {
    "element_id": "wx_view441fbf20", 
    "data": {
      "args": {
        "a_ids": [], 
        "e_ids": [
          "wx_view_13b0553f"
        ], 
        "st": 1
      }, 
      "type": 0, 
      "exec": 1
    }, 
    "id": "M_6ffd617b76517e1e", 
    "isNew": true
  }
];

var animations = [
  {
    "data": {
      "type": 4, 
      "t": {
        "rv": 0, 
        "rp": 0, 
        "name": "", 
        "wa": 0, 
        "de": 1.5, 
        "st": 2, 
        "du": 0.1, 
        "type": 4, 
        "es": 0
      }, 
      "d": {
        "dt": 0, 
        "di": 0
      }
    }, 
    "element_id": "wx_view_157c625e", 
    "iType": "ani", 
    "id": "ani_872f61f9971dbbd1", 
    "isNew": true
  }
];

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

