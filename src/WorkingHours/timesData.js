// https://mytimenew.haier.net/forward_webfront/api/time-card/app/myAttendDataToSort
// timesData 数组为 上述接口响应.data.data

const timesData = 
[
    {
        "eid": 1108012,
        "day": "2026-08-01",
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
        "day": "2026-08-02",
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
        "day": "2026-08-03",
        "title": "3",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260702012214380135953691338884",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260803084838326145205377145504",
                            "schRangeBid": "20260702012214380135953691338884",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-08-03 09:00:00",
                            "timeDetail": "2026-08-03 08:48:00",
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
                            "bid": "202608032020071121452d1d38784116",
                            "schRangeBid": "20260702012214380135953691338884",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-08-03 18:00:00",
                            "timeDetail": "2026-08-03 20:15:00",
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
        "day": "2026-08-04",
        "title": "4",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260703012816923135901683407477",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260804085237255145205377961530",
                            "schRangeBid": "20260703012816923135901683407477",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-08-04 09:00:00",
                            "timeDetail": "2026-08-04 08:52:00",
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
                            "bid": "20260804202623028145268959363444",
                            "schRangeBid": "20260703012816923135901683407477",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-08-04 18:00:00",
                            "timeDetail": "2026-08-04 20:26:00",
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
        "day": "2026-08-05",
        "title": "5",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260704012324174135953693049826",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202608050852306771452a7d69345724",
                            "schRangeBid": "20260704012324174135953693049826",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-08-05 09:00:00",
                            "timeDetail": "2026-08-05 08:52:00",
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
                            "bid": "20260805203941387145205379485275",
                            "schRangeBid": "20260704012324174135953693049826",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-08-05 18:00:00",
                            "timeDetail": "2026-08-05 20:39:00",
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
        "day": "2026-08-06",
        "title": "6",
        "subTitle": "出勤",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202607050127589391359df5c5716401",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "202608060849153401452d1d30424579",
                            "schRangeBid": "202607050127589391359df5c5716401",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-08-06 09:00:00",
                            "timeDetail": "2026-08-06 08:49:00",
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
                            "bid": "202608062034194301452d1d30949603",
                            "schRangeBid": "202607050127589391359df5c5716401",
                            "type": "end",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-08-06 18:00:00",
                            "timeDetail": "2026-08-06 20:34:00",
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
        "day": "2026-08-07",
        "title": "7",
        "subTitle": "",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026070601252706613599b772675864",
                "title": "弹性09:00-18:00（早来早走半小时，午饭+午休1小时）",
                "shortTitle": "弹性",
                "subTitle": null,
                "color": "#FDFDFF",
                "ranges": null,
                "records": [
                    [
                        {
                            "bid": "20260807085230133145205370429382",
                            "schRangeBid": "2026070601252706613599b772675864",
                            "type": "start",
                            "time": "",
                            "showShiftTime": null,
                            "shiftTime": "2026-08-07 09:00:00",
                            "timeDetail": "2026-08-07 08:52:00",
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
        "day": "2026-08-08",
        "title": "8",
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
        "day": "2026-08-09",
        "title": "9",
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
        "day": "2026-08-10",
        "title": "10",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202607090127411991359df5c6917312",
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
        "day": "2026-08-11",
        "title": "11",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026071001283280613599b774345651",
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
        "day": "2026-08-12",
        "title": "12",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202607110125577711359df5c8053742",
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
        "day": "2026-08-13",
        "title": "13",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026071201220901313598f0b7316975",
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
        "day": "2026-08-14",
        "title": "14",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260713012439819135997d75948437",
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
        "day": "2026-08-15",
        "title": "15",
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
        "day": "2026-08-16",
        "title": "16",
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
        "day": "2026-08-17",
        "title": "17",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202607160126523861359535f7262865",
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
        "day": "2026-08-18",
        "title": "18",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260717012339287135953699147070",
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
        "day": "2026-08-19",
        "title": "19",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "202607180127099681359df5c1133026",
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
        "day": "2026-08-20",
        "title": "20",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026071901295377813599b778028155",
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
        "day": "2026-08-21",
        "title": "21",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260720012728908135997d78963947",
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
        "day": "2026-08-22",
        "title": "22",
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
        "day": "2026-08-23",
        "title": "23",
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
        "day": "2026-08-24",
        "title": "24",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026072301304944413599b779720563",
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
        "day": "2026-08-25",
        "title": "25",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260724012747890135997d71193981",
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
        "day": "2026-08-26",
        "title": "26",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026072501242917013599b771087460",
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
        "day": "2026-08-27",
        "title": "27",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026072601263942813599b771425931",
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
        "day": "2026-08-28",
        "title": "28",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "20260727012709488135997d72963939",
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
        "day": "2026-08-29",
        "title": "29",
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
        "day": "2026-08-30",
        "title": "30",
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
        "day": "2026-08-31",
        "title": "31",
        "subTitle": "弹性",
        "titleLevel": "sch_shift",
        "subscript": null,
        "workflow": [],
        "schdultTask": [
            {
                "bid": "2026073001234531113599b773534037",
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
    }
]


module.exports = timesData