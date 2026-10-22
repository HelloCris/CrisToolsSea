// https://mytimenew.haier.net/single/pub/index.html?lang=zh-CN&open_in_browser=true
// 登录后，获取接口数据
// https://mytimenew.haier.net/forward_webfront/api/time-card/app/myAttendDataToSort
// timesData 数组为 上述接口响应.data.data

const timesData = 
[
    {
        "eid": 1108012,
        "day": "2026-10-01",
        "title": "1",
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
        "day": "2026-10-02",
        "title": "2",
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
        "day": "2026-10-03",
        "title": "3",
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
        "day": "2026-10-04",
        "title": "4",
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
        "day": "2026-10-05",
        "title": "5",
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
        "day": "2026-10-06",
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
        "day": "2026-10-07",
        "title": "7",
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
        "day": "2026-10-08",
        "title": "8",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609060129203181359a7f51215645",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20261008085255748145205373655228",
                            "schRangeBid": "202609060129203181359a7f51215645",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-08 09:00:00",
                            "timeDetail": "2026-10-08 08:52:00",
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
                            "bid": "20261008202010677145268955104324",
                            "schRangeBid": "202609060129203181359a7f51215645",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-08 18:00:00",
                            "timeDetail": "2026-10-08 20:20:00",
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
        "day": "2026-10-09",
        "title": "9",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260907013015076135932111241880",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202610090852499351452073f4837938",
                            "schRangeBid": "20260907013015076135932111241880",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-09 09:00:00",
                            "timeDetail": "2026-10-09 08:52:00",
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
                            "bid": "20261009211221879145253576255886",
                            "schRangeBid": "20260907013015076135932111241880",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-09 18:00:00",
                            "timeDetail": "2026-10-09 21:12:00",
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
        "day": "2026-10-10",
        "title": "10",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260908012801794135932111897994",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202610100856443481452d1d36560811",
                            "schRangeBid": "20260908012801794135932111897994",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-10 09:00:00",
                            "timeDetail": "2026-10-10 08:56:00",
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
                            "bid": "202610102001036741452d1d37165398",
                            "schRangeBid": "20260908012801794135932111897994",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-10 18:00:00",
                            "timeDetail": "2026-10-10 19:57:00",
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
        "day": "2026-10-11",
        "title": "11",
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
        "day": "2026-10-12",
        "title": "12",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609100126380451359a8582954826",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202610120856451001452d1d37538377",
                            "schRangeBid": "202609100126380451359a8582954826",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-12 09:00:00",
                            "timeDetail": "2026-10-12 08:56:00",
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
                            "bid": "202610122009045201452073f6891455",
                            "schRangeBid": "202609100126380451359a8582954826",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-12 18:00:00",
                            "timeDetail": "2026-10-12 20:09:00",
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
        "day": "2026-10-13",
        "title": "13",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609110126153841359df452300898",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20261013084936520145253578143622",
                            "schRangeBid": "202609110126153841359df452300898",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-13 09:00:00",
                            "timeDetail": "2026-10-13 08:49:00",
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
                            "bid": "20261013193905648145268958661226",
                            "schRangeBid": "202609110126153841359df452300898",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-13 18:00:00",
                            "timeDetail": "2026-10-13 19:39:00",
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
        "day": "2026-10-14",
        "title": "14",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260912012836666135932113604607",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20261014085403589145268958985864",
                            "schRangeBid": "20260912012836666135932113604607",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-14 09:00:00",
                            "timeDetail": "2026-10-14 08:54:00",
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
                            "bid": "202610141921309281452d1d39600104",
                            "schRangeBid": "20260912012836666135932113604607",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-14 18:00:00",
                            "timeDetail": "2026-10-14 19:21:00",
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
        "day": "2026-10-15",
        "title": "15",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609130127335571359df453346232",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20261015085659329145268959909145",
                            "schRangeBid": "202609130127335571359df453346232",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-15 09:00:00",
                            "timeDetail": "2026-10-15 08:56:00",
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
                            "bid": "2026101518004071614528ef00456158",
                            "schRangeBid": "202609130127335571359df453346232",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-15 18:00:00",
                            "timeDetail": "2026-10-15 18:00:00",
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
        "day": "2026-10-16",
        "title": "16",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [
            {
                "bid": "202610150941275531495771a7427402",
                "type": "leave",
                "title": "国家年假",
                "subTitle": "10-16 14:00 至 10-16 18:00",
                "duration": "4.00小时",
                "applyStatus": "pass",
                "cancelRecordList": []
            }
        ],
        "schdultTask": [
            {
                "bid": "202609140129292361359536f1547482",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202610160856482901452d1d30737970",
                            "schRangeBid": "202609140129292361359536f1547482",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-16 09:00:00",
                            "timeDetail": "2026-10-16 08:56:00",
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
                            "bid": "2026101613420728214528ef01033752",
                            "schRangeBid": "202609140129292361359536f1547482",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-16 13:00:00",
                            "timeDetail": "2026-10-16 13:42:00",
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
        "badgeTipData": [
            {
                "color": "#4F70FE",
                "tipInfo": "国家年假",
                "tipType": "leave"
            }
        ],
        "columnList": []
    },
    {
        "eid": 1108012,
        "day": "2026-10-17",
        "title": "17",
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
        "day": "2026-10-18",
        "title": "18",
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
        "day": "2026-10-19",
        "title": "19",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609170129540031359b7ab0531693",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20261019085625269145253571521662",
                            "schRangeBid": "202609170129540031359b7ab0531693",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-19 09:00:00",
                            "timeDetail": "2026-10-19 08:56:00",
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
                            "bid": "20261019194923182145253572076395",
                            "schRangeBid": "202609170129540031359b7ab0531693",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-19 18:00:00",
                            "timeDetail": "2026-10-19 19:49:00",
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
        "day": "2026-10-20",
        "title": "20",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026091801260925313598f2d1105260",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202610200856479561452b7901014016",
                            "schRangeBid": "2026091801260925313598f2d1105260",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-20 09:00:00",
                            "timeDetail": "2026-10-20 08:56:00",
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
                            "bid": "202610202003527931452d1d33359332",
                            "schRangeBid": "2026091801260925313598f2d1105260",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-20 18:00:00",
                            "timeDetail": "2026-10-20 20:03:00",
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
        "day": "2026-10-21",
        "title": "21",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609190131172591359e7a72313157",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202610210852187001452a7d61608311",
                            "schRangeBid": "202609190131172591359e7a72313157",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-21 09:00:00",
                            "timeDetail": "2026-10-21 08:52:00",
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
                            "bid": "20261021180903083145205371973306",
                            "schRangeBid": "202609190131172591359e7a72313157",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-21 18:00:00",
                            "timeDetail": "2026-10-21 18:09:00",
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
        "day": "2026-10-22",
        "title": "22",
        "subTitle": "",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609200129566551359aff72226074",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "2026102208562849114528ef04267736",
                            "schRangeBid": "202609200129566551359aff72226074",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-10-22 09:00:00",
                            "timeDetail": "2026-10-22 08:56:00",
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
        "day": "2026-10-23",
        "title": "23",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026092101295860513599b7f3241189",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [],
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
        "day": "2026-10-24",
        "title": "24",
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
        "day": "2026-10-25",
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
        "day": "2026-10-26",
        "title": "26",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609240126436471359d1f34272800",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [],
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
        "day": "2026-10-27",
        "title": "27",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609250127424821359e7a75526829",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [],
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
        "day": "2026-10-28",
        "title": "28",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260926012627834135968ac5247573",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [],
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
        "day": "2026-10-29",
        "title": "29",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609270127526811359e7a75829740",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [],
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
        "day": "2026-10-30",
        "title": "30",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202609280131534921359d82c5984241",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [],
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
        "day": "2026-10-31",
        "title": "31",
        "subTitle": "",
        "titleLevel": "rest",
        "subscript": null,
        "workflow": [],
        "schdultTask": [],
        "badgeTipData": [],
        "columnList": []
    }
]

module.exports = timesData