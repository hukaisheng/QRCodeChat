
var actions = [
  {
    "element_id": "wx_button86aaad14", 
    "data": {
      "args": {
        "a_ids": [], 
        "e_ids": [
          "wx_view_74a0d568"
        ], 
        "cla": "c-state1", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 26
    }, 
    "id": "M_c9c3eaf9a5124a1b"
  }, 
  {
    "element_id": "wx_button_84416317", 
    "data": {
      "args": {
        "a_ids": [], 
        "e_ids": [
          "wx_view_74a0d568"
        ], 
        "st": 1
      }, 
      "type": 0, 
      "exec": 26
    }, 
    "id": "M_17d89e86c5b99fa2"
  }, 
  {
    "element_id": "_other_texta33bfdda", 
    "data": {
      "args": {
        "a_ids": [], 
        "e_ids": [
          "wx_view_74a0d568"
        ], 
        "st": 1
      }, 
      "type": 0, 
      "exec": 26
    }, 
    "id": "M_60265ef02e4cfe9b"
  }, 
  {
    "element_id": "wx_image8b2f6d61", 
    "data": {
      "args": {
        "e_ids": [], 
        "open_type": "navigate", 
        "url": "../user/user", 
        "st": 1, 
        "itemColor": "#000000", 
        "itemList": [
          "选项1", 
          "选项2", 
          "选项3"
        ], 
        "a_ids": []
      }, 
      "type": 0, 
      "exec": 5
    }, 
    "id": "M_f6affbce430553b6", 
    "isNew": true
  }, 
  {
    "element_id": "wx_image46b6e1cd", 
    "data": {
      "args": {
        "url": "../user/user", 
        "a_ids": [], 
        "e_ids": [], 
        "open_type": "navigate", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 5
    }, 
    "id": "M_3b87b88424dfde4f", 
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
    "element_id": "body_8cc530d0783b5104", 
    "iType": 0, 
    "id": "M_800ac3ba0c3de6be", 
    "animations": [
      "ani_d378f36623203a72", 
      "ani_0e5dc3d4572ec7f5", 
      "ani_fd8976c3116b795f", 
      "ani_bdc55211e9fa84a7"
    ]
  }
];

getApp().coolsite360.DATA[__wxRoute] = {
   animations:animations,
   actions:actions,
   timelines:timelines
};

