// https://mytimenew.haier.net/single/pub/index.html?lang=zh-CN&open_in_browser=true
// 登录后，获取接口数据
// https://mytimenew.haier.net/forward_webfront/api/time-card/app/myAttendDataToSort
// timesData 数组为 上述接口响应.data.data

const timesData = 
[
    {
        "eid": 1108012,
        "day": "2026-09-01",
        "title": "1",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026073101271038913599b774898322",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260901085657525145205374654203",
                            "schRangeBid": "2026073101271038913599b774898322",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-01 09:00:00",
                            "timeDetail": "2026-09-01 08:56:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "2026090120163922414528ef06960277",
                            "schRangeBid": "2026073101271038913599b774898322",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-01 18:00:00",
                            "timeDetail": "2026-09-01 20:16:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-02",
        "title": "2",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202608010125595911359df5c7408991",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260902085225386145268956895356",
                            "schRangeBid": "202608010125595911359df5c7408991",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-02 09:00:00",
                            "timeDetail": "2026-09-02 08:52:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "2026090221094618214528ef07737378",
                            "schRangeBid": "202608010125595911359df5c7408991",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-02 18:00:00",
                            "timeDetail": "2026-09-02 21:09:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-03",
        "title": "3",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260802012730649135953698158865",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202609030856583831452d1d37744802",
                            "schRangeBid": "20260802012730649135953698158865",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-03 09:00:00",
                            "timeDetail": "2026-09-03 08:56:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609032015364951452a7d67233080",
                            "schRangeBid": "20260802012730649135953698158865",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-03 18:00:00",
                            "timeDetail": "2026-09-03 20:15:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-04",
        "title": "4",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202608030127228911359535f6657178",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260904085704463145205376869117",
                            "schRangeBid": "202608030127228911359535f6657178",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-04 09:00:00",
                            "timeDetail": "2026-09-04 08:57:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "2026090419544577814528ef09244638",
                            "schRangeBid": "202608030127228911359535f6657178",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-04 18:00:00",
                            "timeDetail": "2026-09-04 19:54:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-05",
        "title": "5",
        "subTitle": "",
        "titleLevel": "rest",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": null,
                "title": "未排班打卡",
                "shortTitle": null,
                "subTitle": null,
                "color": null,
                "ranges": [],
                "records": [
                    [
                        {
                            "bid": "202609050958039581452a7d68179822",
                            "schRangeBid": null,
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-05 09:58:03",
                            "timeDetail": "2026-09-05 09:58:03",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "2026090515121809814528ef09512392",
                            "schRangeBid": null,
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-05 15:12:18",
                            "timeDetail": "2026-09-05 15:12:18",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": null,
                "taskList": null,
                "shiftLabel": "un_scheduled"
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-06",
        "title": "6",
        "subTitle": "",
        "titleLevel": "rest",
        "subscript": null,
        "workflow": [],
        "schdultTask": [],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-07",
        "title": "7",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260806012652384135901688593137",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202609070833492171452b7909100229",
                            "schRangeBid": "20260806012652384135901688593137",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-07 09:00:00",
                            "timeDetail": "2026-09-07 08:33:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609072047315021452a7d69096801",
                            "schRangeBid": "20260806012652384135901688593137",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-07 18:00:00",
                            "timeDetail": "2026-09-07 20:47:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-08",
        "title": "8",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026080701274349913599b778392122",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260908084412343145268950442562",
                            "schRangeBid": "2026080701274349913599b778392122",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-08 09:00:00",
                            "timeDetail": "2026-09-08 08:44:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "2026090820143277714528ef01275033",
                            "schRangeBid": "2026080701274349913599b778392122",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-08 18:00:00",
                            "timeDetail": "2026-09-08 20:14:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-09",
        "title": "9",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202608080129472111359df5c0363575",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202609090844271721452b7900513930",
                            "schRangeBid": "202608080129472111359df5c0363575",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-09 09:00:00",
                            "timeDetail": "2026-09-09 08:44:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "20260909205322709145253572000285",
                            "schRangeBid": "202608080129472111359df5c0363575",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-09 18:00:00",
                            "timeDetail": "2026-09-09 20:53:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-10",
        "title": "10",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026080901273411013599b779220849",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202609100840185051452a7d60771519",
                            "schRangeBid": "2026080901273411013599b779220849",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-10 09:00:00",
                            "timeDetail": "2026-09-10 08:40:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609102025281011452b7901764404",
                            "schRangeBid": "2026080901273411013599b779220849",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-10 18:00:00",
                            "timeDetail": "2026-09-10 20:24:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-11",
        "title": "11",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260810012846273135968a00855486",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "2026091108524135314528ef03027225",
                            "schRangeBid": "20260810012846273135968a00855486",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-11 09:00:00",
                            "timeDetail": "2026-09-11 08:52:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609111815040201452b7902290690",
                            "schRangeBid": "20260810012846273135968a00855486",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-11 18:00:00",
                            "timeDetail": "2026-09-11 18:15:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-12",
        "title": "12",
        "subTitle": "",
        "titleLevel": "rest",
        "subscript": null,
        "workflow": [],
        "schdultTask": [],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-13",
        "title": "13",
        "subTitle": "",
        "titleLevel": "rest",
        "subscript": null,
        "workflow": [],
        "schdultTask": [],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-14",
        "title": "14",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260813012717462135953693292846",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202609140852375581452d1d33932391",
                            "schRangeBid": "20260813012717462135953693292846",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-14 09:00:00",
                            "timeDetail": "2026-09-14 08:52:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "20260914201205730145253574626918",
                            "schRangeBid": "20260813012717462135953693292846",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-14 18:00:00",
                            "timeDetail": "2026-09-14 20:12:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-15",
        "title": "15",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202608140128544531359df5c2753861",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "2026091508484762114528ef04866532",
                            "schRangeBid": "202608140128544531359df5c2753861",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-15 09:00:00",
                            "timeDetail": "2026-09-15 08:48:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609151951253931452d1d35287724",
                            "schRangeBid": "202608140128544531359df5c2753861",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-15 18:00:00",
                            "timeDetail": "2026-09-15 19:51:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-16",
        "title": "16",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260815012901456135953694244445",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202609170924283071452a7d65110260",
                            "schRangeBid": "20260815012901456135953694244445",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-16 09:00:00",
                            "timeDetail": "2026-09-16 09:00:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609161913109841452d1d35926037",
                            "schRangeBid": "20260815012901456135953694244445",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-16 18:00:00",
                            "timeDetail": "2026-09-16 19:13:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-17",
        "title": "17",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026081601243833213598f0b3315281",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "2026091708443098214528ef06516812",
                            "schRangeBid": "2026081601243833213598f0b3315281",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-17 09:00:00",
                            "timeDetail": "2026-09-17 08:44:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609172006510711452b7905995752",
                            "schRangeBid": "2026081601243833213598f0b3315281",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-17 18:00:00",
                            "timeDetail": "2026-09-17 20:06:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-18",
        "title": "18",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026081701243725313598f0b3473998",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "2026091808334144814528ef07285686",
                            "schRangeBid": "2026081701243725313598f0b3473998",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-18 09:00:00",
                            "timeDetail": "2026-09-18 08:33:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609182005025131452b7906837660",
                            "schRangeBid": "2026081701243725313598f0b3473998",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-18 18:00:00",
                            "timeDetail": "2026-09-18 20:05:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-19",
        "title": "19",
        "subTitle": "",
        "titleLevel": "rest",
        "subscript": null,
        "workflow": [],
        "schdultTask": [],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-20",
        "title": "20",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260819012506307135997d74073721",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260920084042790145253577889739",
                            "schRangeBid": "20260819012506307135997d74073721",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-20 09:00:00",
                            "timeDetail": "2026-09-20 08:40:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "20260920221116214145205377246980",
                            "schRangeBid": "20260819012506307135997d74073721",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-20 18:00:00",
                            "timeDetail": "2026-09-20 22:11:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-21",
        "title": "21",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260820012503320135953696115256",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "2026092108484843814528ef09020685",
                            "schRangeBid": "20260820012503320135953696115256",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-21 09:00:00",
                            "timeDetail": "2026-09-21 08:48:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "20260921201246571145205378048101",
                            "schRangeBid": "20260820012503320135953696115256",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-21 18:00:00",
                            "timeDetail": "2026-09-21 20:12:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-22",
        "title": "22",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260821012937477135953696831254",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260928085215891145253572387156",
                            "schRangeBid": "20260821012937477135953696831254",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-22 09:00:00",
                            "timeDetail": "2026-09-22 09:00:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "20260922195917302145205378863284",
                            "schRangeBid": "20260821012937477135953696831254",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-22 18:00:00",
                            "timeDetail": "2026-09-22 19:59:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-23",
        "title": "23",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026082201282038413598f0b5785973",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202609230848272261452d1d30395025",
                            "schRangeBid": "2026082201282038413598f0b5785973",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-23 09:00:00",
                            "timeDetail": "2026-09-23 08:48:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "20260923201455272145253570942634",
                            "schRangeBid": "2026082201282038413598f0b5785973",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-23 18:00:00",
                            "timeDetail": "2026-09-23 20:14:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-24",
        "title": "24",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026082301251689113599b775755356",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260924085301286145268950986197",
                            "schRangeBid": "2026082301251689113599b775755356",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-24 09:00:00",
                            "timeDetail": "2026-09-24 08:53:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "2026092418121898914528ef01738212",
                            "schRangeBid": "2026082301251689113599b775755356",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-24 18:00:00",
                            "timeDetail": "2026-09-24 18:12:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-25",
        "title": "25",
        "subTitle": "",
        "titleLevel": "rest",
        "subscript": null,
        "workflow": [],
        "schdultTask": [],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-26",
        "title": "26",
        "subTitle": "",
        "titleLevel": "rest",
        "subscript": null,
        "workflow": [],
        "schdultTask": [],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-27",
        "title": "27",
        "subTitle": "",
        "titleLevel": "rest",
        "subscript": null,
        "workflow": [],
        "schdultTask": [],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-28",
        "title": "28",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260827012711610135968a08150875",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202609280833373291452d1d32490858",
                            "schRangeBid": "20260827012711610135968a08150875",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-28 09:00:00",
                            "timeDetail": "2026-09-28 08:33:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609281744228651452a7d61528730",
                            "schRangeBid": "20260827012711610135968a08150875",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-28 18:00:00",
                            "timeDetail": "2026-09-28 17:44:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-29",
        "title": "29",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260828012652839135901687487262",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202609290852360631452a7d61896255",
                            "schRangeBid": "20260828012652839135901687487262",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-29 09:00:00",
                            "timeDetail": "2026-09-29 08:52:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609291944400461452a7d62343394",
                            "schRangeBid": "20260828012652839135901687487262",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-29 18:00:00",
                            "timeDetail": "2026-09-29 19:44:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-09-30",
        "title": "30",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260829012804947135953691166905",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260930084351285145205372496293",
                            "schRangeBid": "20260829012804947135953691166905",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-30 09:00:00",
                            "timeDetail": "2026-09-30 08:43:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        },
                        {
                            "bid": "202609302155007671452b7903246810",
                            "schRangeBid": "20260829012804947135953691166905",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-09-30 18:00:00",
                            "timeDetail": "2026-09-30 21:51:00",
                            "memos": null,
                            "exception": "normal",
                            "exceptionDesc": "正常",
                            "exceptionColor": null,
                            "clockType": "",
                            "actions": null,
                            "imageUrl": null,
                            "displayNoSign": 0,
                            "legworkClockData": null
                        }
                    ]
                ],
                "duration": null,
                "labels": {
                    "baiban": "无津贴"
                },
                "taskList": null,
                "shiftLabel": null
            }
        ],
        "badgeTipData": [],
        "columnList": []
    }
]

module.exports = timesData