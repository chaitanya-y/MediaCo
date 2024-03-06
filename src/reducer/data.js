export const caseData = {
    "data": {
        "caseInfo": {
            "content": {
                "classID": "DIXL-MediaCo-Work-NewService",
                "pyLabel": "New Service",
                "pyID": "N-4006",
                "pyViewName": "CustomerInfo",
                "pyViewContext": "",
                "Email": "",
                "FirstName": "",
                "LastName": "",
                "MiddleName": "",
                "Suffix": "",
                "PhoneNumber": "",
                "ServiceDate": "",
                "pxCreateOperator": "customer@mediaco",
                "pxUpdateDateTime": "2024-03-05T17:29:27.130Z",
                "pxUpdateOperator": "customer@mediaco",
                "pxCreateDateTime": "2024-03-05T17:29:27.119Z",
                "pyStatusWork": "New"
            },
            "caseTypeID": "DIXL-MediaCo-Work-NewService",
            "owner": "customer@mediaco",
            "availableActions": [
                {
                    "name": "Edit details",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/actions/pyUpdateCaseDetails",
                            "type": "GET",
                            "title": "Get case action details"
                        }
                    },
                    "ID": "pyUpdateCaseDetails",
                    "type": "Case"
                },
                {
                    "name": "Change stage",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/actions/pyChangeStage",
                            "type": "GET",
                            "title": "Get case action details"
                        }
                    },
                    "ID": "pyChangeStage",
                    "type": "Case"
                }
            ],
            "associations": {
                "follows": false
            },
            "lastUpdatedBy": "customer@mediaco",
            "assignments": [
                {
                    "instructions": "Enter Information",
                    "canPerform": "true",
                    "assigneeInfo": {
                        "name": "customer",
                        "ID": "customer@mediaco",
                        "type": "worklist"
                    },
                    "processID": "Mashup",
                    "urgency": "10",
                    "processName": "Mashup",
                    "isMultiStep": "true",
                    "name": "Customer Info",
                    "context": "",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP",
                            "type": "GET",
                            "title": "Get assignment details"
                        }
                    },
                    "ID": "ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP",
                    "actions": [
                        {
                            "name": "Customer Info",
                            "links": {
                                "submit": {
                                    "rel": "self",
                                    "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/actions/CustomerInfo",
                                    "type": "PATCH",
                                    "title": "Submit assignment action "
                                },
                                "save": {
                                    "rel": "self",
                                    "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/actions/CustomerInfo/save",
                                    "type": "PATCH",
                                    "title": "Save assignment action "
                                },
                                "open": {
                                    "rel": "self",
                                    "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/actions/CustomerInfo",
                                    "type": "GET",
                                    "title": "Get assignment action details"
                                }
                            },
                            "ID": "CustomerInfo",
                            "type": "FlowAction"
                        }
                    ]
                }
            ],
            "hasNewAttachments": false,
            "businessID": "N-4006",
            "sla": {
                "goal": "",
                "deadline": ""
            },
            "WidgetsToRefresh": [
                "TaskList"
            ],
            "caseTypeName": "New Service",
            "urgency": "10",
            "createTime": "2024-03-05T17:29:27.119Z",
            "createdBy": "customer@mediaco",
            "name": "New Service",
            "stages": [
                {
                    "entryTime": "2024-03-05T17:29:27.125Z",
                    "name": "Create",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM0",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "completed",
                    "ID": "PRIM0",
                    "type": "Primary",
                    "transitionType": "create"
                },
                {
                    "entryTime": "2024-03-05T17:29:27.126Z",
                    "name": "Service",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM1",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "active",
                    "ID": "PRIM1",
                    "type": "Primary",
                    "transitionType": "automatic"
                },
                {
                    "name": "Connected",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM2",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "future",
                    "ID": "PRIM2",
                    "type": "Primary",
                    "transitionType": "automatic"
                },
                {
                    "name": "Resolved",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM3",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "future",
                    "ID": "PRIM3",
                    "type": "Primary",
                    "transitionType": "resolution"
                }
            ],
            "ID": "DIXL-MEDIACO-WORK N-4006",
            "caseTypeIcon": "cmicons/pycase.svg",
            "status": "New",
            "stageID": "PRIM1",
            "stageLabel": "Service",
            "lastUpdateTime": "2024-03-05T17:29:27.130Z"
        },
        "referencedUsers": {
            "customer@mediaco": {
                "UserName": "customer"
            }
        },
        "D_pyCountryCallingCodeList": {
            "pxResults": [
                {
                    "classID": "-",
                    "pyCallingCode": "+1"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+91"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+48"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+44"
                }
            ]
        },
        "shared": {
            "D_pyCountryCallingCodeList": {
                "D_pyCountryCallingCodeList": {
                    "parameters": [],
                    "pxResults": [
                        {
                            "classID": "-",
                            "pyCallingCode": "+1"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+91"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+48"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+44"
                        }
                    ],
                    "loadTime": "2024-03-05T17:29:27.217966Z"
                }
            }
        }
    },
    "uiResources": {
        "resources": {
            "views": {
                "pyDetails": [
                    {
                        "name": "pyDetails",
                        "type": "View",
                        "config": {
                            "type": "page",
                            "template": "CaseView",
                            "icon": "polaris-solid",
                            "subheader": "@P .pyID",
                            "header": "@P .pyLabel",
                            "caseClass": "@P .pxObjClass",
                            "showIconInHeader": true,
                            "ruleClass": "DIXL-MediaCo-Work-NewService",
                            "showCaseLifecycle": true,
                            "localeReference": "@LR DIXL-MEDIACO-WORK-NEWSERVICE!PAGE!PYDETAILS"
                        },
                        "children": [
                            {
                                "name": "Summary",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "reference",
                                        "config": {
                                            "type": "view",
                                            "name": "pyCaseSummary"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Stages",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "reference",
                                        "config": {
                                            "type": "view",
                                            "name": "pyStages"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Todo",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "reference",
                                        "config": {
                                            "type": "view",
                                            "name": "pyCaseWorkarea"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Tabs",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "DeferLoad",
                                        "config": {
                                            "name": "pyDetailsTabContent",
                                            "label": "Details",
                                            "visibility": "@W Always"
                                        }
                                    },
                                    {
                                        "type": "DeferLoad",
                                        "config": {
                                            "name": "CaseHistory",
                                            "label": "Case History"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Utilities",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "FileUtility",
                                        "config": {
                                            "label": "@L Attachments"
                                        }
                                    }
                                ]
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ],
                "pyCaseWorkarea": [
                    {
                        "name": "pyCaseWorkarea",
                        "type": "View",
                        "config": {
                            "localeReference": "@LR WORK-!VIEW!PYCASEWORKAREA"
                        },
                        "children": [
                            {
                                "name": "A",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "reference",
                                        "config": {
                                            "type": "view",
                                            "name": "pzFlowContainer"
                                        }
                                    }
                                ]
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ],
                "pzFlowContainer": [
                    {
                        "name": "pzFlowContainer",
                        "type": "View",
                        "config": {
                            "localeReference": "@LR @BASECLASS!VIEW!PZFLOWCONTAINER"
                        },
                        "children": [
                            {
                                "type": "FlowContainer",
                                "config": {
                                    "name": "workarea",
                                    "routingInfo": "@ROUTING_INFO"
                                },
                                "children": [
                                    {
                                        "type": "reference",
                                        "config": {
                                            "type": "view",
                                            "name": "@P .pyViewName",
                                            "context": "@P .pyViewContext"
                                        }
                                    }
                                ]
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ],
                "CustomerInfo": [
                    {
                        "name": "CustomerInfo",
                        "type": "View",
                        "config": {
                            "template": "DefaultForm",
                            "ruleClass": "DIXL-MediaCo-Work-NewService",
                            "localeReference": "@LR DIXL-MEDIACO-WORK-NEWSERVICE!VIEW!CUSTOMERINFO"
                        },
                        "children": [
                            {
                                "name": "Fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .FirstName",
                                            "label": "@L First Name",
                                            "required": true,
                                            "testId": "@L BC910F8BDF70F29374F496F05BE0330C"
                                        }
                                    },
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .MiddleName",
                                            "label": "@L Middle Name",
                                            "testId": "@L D3691D297D95C48EF1A2B7D6523EF3F0"
                                        }
                                    },
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .LastName",
                                            "label": "@L Last Name",
                                            "required": true,
                                            "testId": "@L 77587239BF4C54EA493C7033E1DBF636"
                                        }
                                    },
                                    {
                                        "type": "AutoComplete",
                                        "config": {
                                            "value": "@P .Suffix",
                                            "label": "@L Suffix",
                                            "placeholder": "Select...",
                                            "listType": "associated",
                                            "datasource": "@ASSOCIATED .Suffix",
                                            "testId": "@L 56E6DDD1CB6CEC596B433440DFB21C17"
                                        }
                                    },
                                    {
                                        "type": "Email",
                                        "config": {
                                            "value": "@P .Email",
                                            "label": "@L Email",
                                            "required": true,
                                            "testId": "@L CE8AE9DA5B7CD6C3DF2929543A9AF92D"
                                        }
                                    }
                                ]
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ],
                "pyCaseSummary": [
                    {
                        "name": "pyCaseSummary",
                        "type": "View",
                        "config": {
                            "template": "CaseSummary",
                            "status": "@P .pyStatusWork",
                            "showStatus": true,
                            "ruleClass": "DIXL-MediaCo-Work-NewService"
                        },
                        "children": [
                            {
                                "name": "Primary fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .FirstName",
                                            "label": "@L First Name"
                                        }
                                    },
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .LastName",
                                            "label": "@L Last Name"
                                        }
                                    },
                                    {
                                        "type": "Email",
                                        "config": {
                                            "value": "@P .Email",
                                            "label": "@L Email"
                                        }
                                    },
                                    {
                                        "type": "Phone",
                                        "config": {
                                            "value": "@P .PhoneNumber",
                                            "label": "@L Phone number",
                                            "datasource": {
                                                "source": "@DATASOURCE D_pyCountryCallingCodeList.pxResults",
                                                "fields": {
                                                    "value": "@P .pyCallingCode"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "Date",
                                        "config": {
                                            "value": "@P .ServiceDate",
                                            "label": "@L Service date"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Secondary fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "CaseOperator",
                                        "config": {
                                            "label": "Create operator",
                                            "createLabel": "@L Created",
                                            "updateLabel": "@L Updated",
                                            "updateDateTime": "@P .pxUpdateDateTime",
                                            "createDateTime": "@P .pxCreateDateTime",
                                            "updateOperator": "@USER .pxUpdateOperator",
                                            "createOperator": "@USER .pxCreateOperator"
                                        }
                                    },
                                    {
                                        "type": "CaseOperator",
                                        "config": {
                                            "label": "Update operator",
                                            "createLabel": "@L Created",
                                            "updateLabel": "@L Updated",
                                            "updateDateTime": "@P .pxUpdateDateTime",
                                            "createDateTime": "@P .pxCreateDateTime",
                                            "updateOperator": "@USER .pxUpdateOperator",
                                            "createOperator": "@USER .pxCreateOperator"
                                        }
                                    }
                                ]
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ],
                "pyStages": [
                    {
                        "name": "pyStages",
                        "type": "View",
                        "config": {
                            "localeReference": "@LR WORK-!VIEW!PYSTAGES"
                        },
                        "children": [
                            {
                                "config": {
                                    "currentStage": "@P .pxCurrentStage"
                                },
                                "type": "Stages"
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ]
            },
            "datapages": {
                "D_pyCountryCallingCodeList": {
                    "classID": "Code-Pega-List",
                    "mode": "readonly",
                    "isSearchable": false,
                    "isQueryable": false,
                    "structure": "list"
                }
            },
            "fields": {
                "pyLabel": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 64,
                        "displayAs": "pxTextInput",
                        "expectedLength": 60,
                        "label": "Label"
                    }
                ],
                "pyID": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 32,
                        "displayAs": "Scalar",
                        "expectedLength": 22,
                        "label": "Case ID",
                        "isClassKey": true
                    }
                ],
                "pyViewName": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "pxTextInput",
                        "label": "pyViewName"
                    }
                ],
                "pyViewContext": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "pxTextInput",
                        "label": "pyViewContext"
                    }
                ],
                "Email": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxEmail",
                        "label": "Email",
                        "validateAs": "ValidEmailAddress"
                    }
                ],
                "FirstName": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "First Name"
                    }
                ],
                "LastName": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "Last Name"
                    }
                ],
                "MiddleName": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "Middle Name"
                    }
                ],
                "Suffix": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "pxAutoComplete",
                        "label": "Suffix",
                        "datasource": {
                            "tableType": "PromptList",
                            "records": [
                                {
                                    "key": "Sr",
                                    "value": "Sr"
                                },
                                {
                                    "key": "Jr",
                                    "value": "Jr"
                                },
                                {
                                    "key": "III",
                                    "value": "III"
                                },
                                {
                                    "key": "IV",
                                    "value": "IV"
                                },
                                {
                                    "key": "V",
                                    "value": "V"
                                }
                            ]
                        }
                    }
                ],
                "PhoneNumber": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxPhone",
                        "label": "Phone number",
                        "validateAs": "ValidPhoneNumber"
                    }
                ],
                "ServiceDate": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date",
                        "displayAs": "pxDateTime",
                        "label": "Service date"
                    }
                ],
                "pxCreateOperator": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "HarnessOperator",
                        "expectedLength": 40,
                        "label": "Create Operator",
                        "isSpecial": true
                    }
                ],
                "pxUpdateDateTime": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date Time",
                        "displayAs": "pxDateTime",
                        "label": "Update date/time",
                        "isSpecial": true
                    }
                ],
                "pxUpdateOperator": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "HarnessOperator",
                        "label": "Update Operator",
                        "isSpecial": true
                    }
                ],
                "pxCreateDateTime": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date Time",
                        "displayAs": "pxDateTime",
                        "label": "Create date/time",
                        "isSpecial": true
                    }
                ],
                "pyStatusWork": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 32,
                        "displayAs": "WorkStatus",
                        "expectedLength": 32,
                        "label": "Work Status"
                    }
                ],
                "pyCallingCode": [
                    {
                        "classID": "-",
                        "type": "Unknown"
                    }
                ]
            }
        },
        "components": [
            "Email",
            "Stages",
            "FileUtility",
            "View",
            "Date",
            "DefaultForm",
            "CaseSummary",
            "CaseView",
            "FlowContainer",
            "Phone",
            "Region",
            "DeferLoad",
            "AutoComplete",
            "TextInput",
            "CaseOperator"
        ],
        "localeReferences": [
            "WORK-!VIEW!PYCASEWORKAREA",
            "DIXL-MEDIACO-WORK-NEWSERVICE!CASE!NEW SERVICE",
            "DIXL-MEDIACO-WORK-NEWSERVICE!PAGE!PYDETAILS",
            "@BASECLASS!VIEW!PZFLOWCONTAINER",
            "DIXL-MEDIACO-WORK-NEWSERVICE!ASSOCIATED!SUFFIX",
            "DIXL-MEDIACO-WORK-NEWSERVICE!VIEW!CUSTOMERINFO",
            "WORK-!VIEW!PYSTAGES"
        ],
        "root": {
            "type": "reference",
            "config": {
                "type": "view",
                "name": "pyDetails",
                "context": "caseInfo.content"
            }
        },
        "context_data": {
            "caseInfo": {
                "content": {
                    "summary_of_associated_lists__": {},
                    "summary_of_when_conditions__": {
                        "Always": true
                    }
                }
            }
        },
        "navigation": {
            "template": "Horizontal",
            "steps": [
                {
                    "allow_jump": true,
                    "name": "Customer Info",
                    "actionID": "CustomerInfo",
                    "visited_status": "current",
                    "ID": "ASSIGNMENT66"
                },
                {
                    "allow_jump": true,
                    "name": "Customer Address",
                    "actionID": "CustomerAddress",
                    "visited_status": "future",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/AssignmentSF1",
                            "type": "PATCH",
                            "title": "Go to Customer Address"
                        }
                    },
                    "ID": "AssignmentSF1"
                },
                {
                    "allow_jump": true,
                    "name": "Service Date",
                    "actionID": "ServiceDate",
                    "visited_status": "future",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/AssignmentSF2",
                            "type": "PATCH",
                            "title": "Go to Service Date"
                        }
                    },
                    "ID": "AssignmentSF2"
                },
                {
                    "allow_jump": true,
                    "name": "Requested Service",
                    "actionID": "RequestedService",
                    "visited_status": "future",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/AssignmentSF3",
                            "type": "PATCH",
                            "title": "Go to Requested Service"
                        }
                    },
                    "ID": "AssignmentSF3"
                }
            ]
        },
        "actionButtons": {
            "secondary": [
                {
                    "jsAction": "cancelAssignment",
                    "name": "Cancel",
                    "actionID": "cancel"
                },
                {
                    "jsAction": "fillFormWithAI",
                    "name": "Fill form with AI",
                    "actionID": "fillFormWithAI"
                },
                {
                    "jsAction": "saveAssignment",
                    "name": "Save for later",
                    "actionID": "save"
                }
            ],
            "main": [
                {
                    "jsAction": "finishAssignment",
                    "name": "Next   ",
                    "actionID": "next"
                }
            ]
        }
    },
    "ID": "DIXL-MEDIACO-WORK N-4006",
    "nextAssignmentInfo": {
        "context": "self",
        "className": "DIXL-MediaCo-Work-NewService",
        "links": {
            "open": {
                "rel": "self",
                "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP",
                "type": "GET",
                "title": "Get assignment details"
            }
        },
        "ID": "ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP"
    }
}


export const customerAddressData = {
    "data": {
        "caseInfo": {
            "content": {
                "classID": "DIXL-MediaCo-Work-NewService",
                "City": "",
                "PhoneNumber": "",
                "State": "",
                "Street": "",
                "PostalCode": "",
                "Email": "dsf@d.f",
                "FirstName": "Chaitana",
                "ServiceDate": "",
                "LastName": "Lakshman",
                "pxCreateOperator": "customer@mediaco",
                "pxUpdateDateTime": "2024-03-05T17:31:33.599Z",
                "pxUpdateOperator": "customer@mediaco",
                "pxCreateDateTime": "2024-03-05T17:29:27.119Z",
                "pyStatusWork": "New",
                "pyLabel": "New Service",
                "pyID": "N-4006"
            },
            "caseTypeID": "DIXL-MediaCo-Work-NewService",
            "owner": "customer@mediaco",
            "availableActions": [
                {
                    "name": "Edit details",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/actions/pyUpdateCaseDetails",
                            "type": "GET",
                            "title": "Get case action details"
                        }
                    },
                    "ID": "pyUpdateCaseDetails",
                    "type": "Case"
                },
                {
                    "name": "Change stage",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/actions/pyChangeStage",
                            "type": "GET",
                            "title": "Get case action details"
                        }
                    },
                    "ID": "pyChangeStage",
                    "type": "Case"
                }
            ],
            "associations": {
                "follows": false
            },
            "lastUpdatedBy": "customer@mediaco",
            "assignments": [
                {
                    "instructions": "",
                    "canPerform": "true",
                    "assigneeInfo": {
                        "name": "customer",
                        "ID": "customer@mediaco",
                        "type": "worklist"
                    },
                    "processID": "Mashup",
                    "urgency": "10",
                    "processName": "Mashup",
                    "isMultiStep": "true",
                    "name": "Customer Address",
                    "context": "",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP",
                            "type": "GET",
                            "title": "Get assignment details"
                        }
                    },
                    "ID": "ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP",
                    "actions": [
                        {
                            "name": "Customer Address",
                            "links": {
                                "submit": {
                                    "rel": "self",
                                    "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/actions/CustomerAddress",
                                    "type": "PATCH",
                                    "title": "Submit assignment action "
                                },
                                "save": {
                                    "rel": "self",
                                    "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/actions/CustomerAddress/save",
                                    "type": "PATCH",
                                    "title": "Save assignment action "
                                },
                                "open": {
                                    "rel": "self",
                                    "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/actions/CustomerAddress",
                                    "type": "GET",
                                    "title": "Get assignment action details"
                                }
                            },
                            "ID": "CustomerAddress",
                            "type": "FlowAction"
                        }
                    ]
                }
            ],
            "hasNewAttachments": false,
            "businessID": "N-4006",
            "sla": {
                "goal": "",
                "deadline": ""
            },
            "WidgetsToRefresh": [
                "TaskList"
            ],
            "caseTypeName": "New Service",
            "urgency": "10",
            "createTime": "2024-03-05T17:29:27.119Z",
            "createdBy": "customer@mediaco",
            "name": "New Service",
            "stages": [
                {
                    "entryTime": "2024-03-05T17:29:27.125Z",
                    "name": "Create",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM0",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "completed",
                    "ID": "PRIM0",
                    "type": "Primary",
                    "transitionType": "create"
                },
                {
                    "entryTime": "2024-03-05T17:29:27.126Z",
                    "name": "Service",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM1",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "active",
                    "ID": "PRIM1",
                    "type": "Primary",
                    "transitionType": "automatic"
                },
                {
                    "name": "Connected",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM2",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "future",
                    "ID": "PRIM2",
                    "type": "Primary",
                    "transitionType": "automatic"
                },
                {
                    "name": "Resolved",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM3",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "future",
                    "ID": "PRIM3",
                    "type": "Primary",
                    "transitionType": "resolution"
                }
            ],
            "ID": "DIXL-MEDIACO-WORK N-4006",
            "caseTypeIcon": "cmicons/pycase.svg",
            "status": "New",
            "stageID": "PRIM1",
            "stageLabel": "Service",
            "lastUpdateTime": "2024-03-05T17:31:33.599Z"
        },
        "D_pyCountryCallingCodeList": {
            "pxResults": [
                {
                    "classID": "-",
                    "pyCallingCode": "+1"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+91"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+48"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+44"
                }
            ]
        },
        "shared": {
            "D_pyCountryCallingCodeList": {
                "D_pyCountryCallingCodeList": {
                    "parameters": [],
                    "pxResults": [
                        {
                            "classID": "-",
                            "pyCallingCode": "+1"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+91"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+48"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+44"
                        }
                    ],
                    "loadTime": "2024-03-05T17:31:34.058265Z"
                }
            },
            "D_GetStates": {
                "D_GetStates": {
                    "pxResults": [
                        {
                            "pyFieldValue": "AK",
                            "pyLocalizedValue": "AK"
                        },
                        {
                            "pyFieldValue": "AL",
                            "pyLocalizedValue": "AL"
                        },
                        {
                            "pyFieldValue": "AR",
                            "pyLocalizedValue": "AR"
                        },
                        {
                            "pyFieldValue": "AZ",
                            "pyLocalizedValue": "AZ"
                        },
                        {
                            "pyFieldValue": "CA",
                            "pyLocalizedValue": "CA"
                        },
                        {
                            "pyFieldValue": "CO",
                            "pyLocalizedValue": "CO"
                        },
                        {
                            "pyFieldValue": "CT",
                            "pyLocalizedValue": "CT"
                        },
                        {
                            "pyFieldValue": "DC",
                            "pyLocalizedValue": "DC"
                        },
                        {
                            "pyFieldValue": "DE",
                            "pyLocalizedValue": "DE"
                        },
                        {
                            "pyFieldValue": "FL",
                            "pyLocalizedValue": "FL"
                        },
                        {
                            "pyFieldValue": "GA",
                            "pyLocalizedValue": "GA"
                        },
                        {
                            "pyFieldValue": "HI",
                            "pyLocalizedValue": "HI"
                        },
                        {
                            "pyFieldValue": "IA",
                            "pyLocalizedValue": "IA"
                        },
                        {
                            "pyFieldValue": "ID",
                            "pyLocalizedValue": "ID"
                        },
                        {
                            "pyFieldValue": "IL",
                            "pyLocalizedValue": "IL"
                        },
                        {
                            "pyFieldValue": "IN",
                            "pyLocalizedValue": "IN"
                        },
                        {
                            "pyFieldValue": "KS",
                            "pyLocalizedValue": "KS"
                        },
                        {
                            "pyFieldValue": "KY",
                            "pyLocalizedValue": "KY"
                        },
                        {
                            "pyFieldValue": "LA",
                            "pyLocalizedValue": "LA"
                        },
                        {
                            "pyFieldValue": "MA",
                            "pyLocalizedValue": "MA"
                        },
                        {
                            "pyFieldValue": "MD",
                            "pyLocalizedValue": "MD"
                        },
                        {
                            "pyFieldValue": "ME",
                            "pyLocalizedValue": "ME"
                        },
                        {
                            "pyFieldValue": "MI",
                            "pyLocalizedValue": "MI"
                        },
                        {
                            "pyFieldValue": "MN",
                            "pyLocalizedValue": "MN"
                        },
                        {
                            "pyFieldValue": "MO",
                            "pyLocalizedValue": "MO"
                        },
                        {
                            "pyFieldValue": "MS",
                            "pyLocalizedValue": "MS"
                        },
                        {
                            "pyFieldValue": "MT",
                            "pyLocalizedValue": "MT"
                        },
                        {
                            "pyFieldValue": "NC",
                            "pyLocalizedValue": "NC"
                        },
                        {
                            "pyFieldValue": "ND",
                            "pyLocalizedValue": "ND"
                        },
                        {
                            "pyFieldValue": "NE",
                            "pyLocalizedValue": "NE"
                        },
                        {
                            "pyFieldValue": "NH",
                            "pyLocalizedValue": "NH"
                        },
                        {
                            "pyFieldValue": "NJ",
                            "pyLocalizedValue": "NJ"
                        },
                        {
                            "pyFieldValue": "NM",
                            "pyLocalizedValue": "NM"
                        },
                        {
                            "pyFieldValue": "NV",
                            "pyLocalizedValue": "NV"
                        },
                        {
                            "pyFieldValue": "NY",
                            "pyLocalizedValue": "NY"
                        },
                        {
                            "pyFieldValue": "OH",
                            "pyLocalizedValue": "OH"
                        },
                        {
                            "pyFieldValue": "OK",
                            "pyLocalizedValue": "OK"
                        },
                        {
                            "pyFieldValue": "OR",
                            "pyLocalizedValue": "OR"
                        },
                        {
                            "pyFieldValue": "PA",
                            "pyLocalizedValue": "PA"
                        },
                        {
                            "pyFieldValue": "RI",
                            "pyLocalizedValue": "RI"
                        },
                        {
                            "pyFieldValue": "SC",
                            "pyLocalizedValue": "SC"
                        },
                        {
                            "pyFieldValue": "SD",
                            "pyLocalizedValue": "SD"
                        },
                        {
                            "pyFieldValue": "TN",
                            "pyLocalizedValue": "TN"
                        },
                        {
                            "pyFieldValue": "TX",
                            "pyLocalizedValue": "TX"
                        },
                        {
                            "pyFieldValue": "UT",
                            "pyLocalizedValue": "UT"
                        },
                        {
                            "pyFieldValue": "VA",
                            "pyLocalizedValue": "VA"
                        },
                        {
                            "pyFieldValue": "VT",
                            "pyLocalizedValue": "VT"
                        },
                        {
                            "pyFieldValue": "WA",
                            "pyLocalizedValue": "WA"
                        },
                        {
                            "pyFieldValue": "WI",
                            "pyLocalizedValue": "WI"
                        },
                        {
                            "pyFieldValue": "WV",
                            "pyLocalizedValue": "WV"
                        },
                        {
                            "pyFieldValue": "WY",
                            "pyLocalizedValue": "WY"
                        }
                    ],
                    "parameters": [],
                    "loadTime": "2024-03-05T17:31:34.056119Z"
                }
            }
        },
        "referencedUsers": {
            "customer@mediaco": {
                "UserName": "customer"
            }
        }
    },
    "uiResources": {
        "resources": {
            "views": {
                "CustomerAddress": [
                    {
                        "name": "CustomerAddress",
                        "type": "View",
                        "config": {
                            "template": "DefaultForm",
                            "ruleClass": "DIXL-MediaCo-Work-NewService",
                            "localeReference": "@LR DIXL-MEDIACO-WORK-NEWSERVICE!VIEW!CUSTOMERADDRESS"
                        },
                        "children": [
                            {
                                "name": "Fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .Street",
                                            "label": "@L Street",
                                            "testId": "@L D61EBDD8A0C0CD57C22455E9F0918C65"
                                        }
                                    },
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .City",
                                            "label": "@L City",
                                            "testId": "@L 57D056ED0984166336B7879C2AF3657F",
                                            "required": false
                                        }
                                    },
                                    {
                                        "type": "Dropdown",
                                        "config": {
                                            "value": "@P .State",
                                            "label": "@L State",
                                            "placeholder": "Select...",
                                            "listType": "associated",
                                            "datasource": "@ASSOCIATED .State",
                                            "testId": "@L 46A2A41CC6E552044816A2D04634545D"
                                        }
                                    },
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .PostalCode",
                                            "label": "@L Postal code",
                                            "testId": "@L 572ED696F21038E6CC6C86BB272A3222"
                                        }
                                    },
                                    {
                                        "type": "Phone",
                                        "config": {
                                            "value": "@P .PhoneNumber",
                                            "label": "@L Phone number",
                                            "datasource": {
                                                "source": "@DATASOURCE D_pyCountryCallingCodeList.pxResults",
                                                "fields": {
                                                    "value": "@P .pyCallingCode"
                                                }
                                            },
                                            "showCountryCode": true,
                                            "testId": "@L 1F8261D17452A959E013666C5DF45E07"
                                        }
                                    }
                                ]
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ],
                "pyCaseSummary": [
                    {
                        "name": "pyCaseSummary",
                        "type": "View",
                        "config": {
                            "template": "CaseSummary",
                            "status": "@P .pyStatusWork",
                            "showStatus": true,
                            "ruleClass": "DIXL-MediaCo-Work-NewService"
                        },
                        "children": [
                            {
                                "name": "Primary fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .FirstName",
                                            "label": "@L First Name"
                                        }
                                    },
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .LastName",
                                            "label": "@L Last Name"
                                        }
                                    },
                                    {
                                        "type": "Email",
                                        "config": {
                                            "value": "@P .Email",
                                            "label": "@L Email"
                                        }
                                    },
                                    {
                                        "type": "Phone",
                                        "config": {
                                            "value": "@P .PhoneNumber",
                                            "label": "@L Phone number",
                                            "datasource": {
                                                "source": "@DATASOURCE D_pyCountryCallingCodeList.pxResults",
                                                "fields": {
                                                    "value": "@P .pyCallingCode"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "Date",
                                        "config": {
                                            "value": "@P .ServiceDate",
                                            "label": "@L Service date"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Secondary fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "CaseOperator",
                                        "config": {
                                            "label": "Create operator",
                                            "createLabel": "@L Created",
                                            "updateLabel": "@L Updated",
                                            "updateDateTime": "@P .pxUpdateDateTime",
                                            "createDateTime": "@P .pxCreateDateTime",
                                            "updateOperator": "@USER .pxUpdateOperator",
                                            "createOperator": "@USER .pxCreateOperator"
                                        }
                                    },
                                    {
                                        "type": "CaseOperator",
                                        "config": {
                                            "label": "Update operator",
                                            "createLabel": "@L Created",
                                            "updateLabel": "@L Updated",
                                            "updateDateTime": "@P .pxUpdateDateTime",
                                            "createDateTime": "@P .pxCreateDateTime",
                                            "updateOperator": "@USER .pxUpdateOperator",
                                            "createOperator": "@USER .pxCreateOperator"
                                        }
                                    }
                                ]
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ]
            },
            "datapages": {
                "D_GetStates": {
                    "classID": "Rule-Obj-FieldValue",
                    "mode": "readonly",
                    "isSearchable": false,
                    "isQueryable": false,
                    "structure": "list"
                },
                "D_pyCountryCallingCodeList": {
                    "classID": "Code-Pega-List",
                    "mode": "readonly",
                    "isSearchable": false,
                    "isQueryable": false,
                    "structure": "list"
                }
            },
            "fields": {
                "City": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "City"
                    }
                ],
                "PhoneNumber": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxPhone",
                        "label": "Phone number",
                        "validateAs": "ValidPhoneNumber"
                    }
                ],
                "State": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "pxDropdown",
                        "label": "State",
                        "datasource": {
                            "tableType": "DataPage",
                            "tableClass": "Rule-Obj-FieldValue",
                            "name": "D_GetStates",
                            "propertyForDisplayText": "@P .pyLocalizedValue",
                            "propertyForValue": "@P .pyFieldValue",
                            "parameters": []
                        }
                    }
                ],
                "Street": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "Street"
                    }
                ],
                "PostalCode": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "Postal Code"
                    }
                ],
                "pyCallingCode": [
                    {
                        "classID": "-",
                        "type": "Unknown"
                    }
                ],
                "Email": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxEmail",
                        "label": "Email",
                        "validateAs": "ValidEmailAddress"
                    }
                ],
                "FirstName": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "First Name"
                    }
                ],
                "ServiceDate": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date",
                        "displayAs": "pxDateTime",
                        "label": "Service date"
                    }
                ],
                "LastName": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "Last Name"
                    }
                ],
                "pxCreateOperator": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "HarnessOperator",
                        "expectedLength": 40,
                        "label": "Create Operator",
                        "isSpecial": true
                    }
                ],
                "pxUpdateDateTime": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date Time",
                        "displayAs": "pxDateTime",
                        "label": "Update date/time",
                        "isSpecial": true
                    }
                ],
                "pxUpdateOperator": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "HarnessOperator",
                        "label": "Update Operator",
                        "isSpecial": true
                    }
                ],
                "pxCreateDateTime": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date Time",
                        "displayAs": "pxDateTime",
                        "label": "Create date/time",
                        "isSpecial": true
                    }
                ],
                "pyStatusWork": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 32,
                        "displayAs": "WorkStatus",
                        "expectedLength": 32,
                        "label": "Work Status"
                    }
                ],
                "pyLabel": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 64,
                        "displayAs": "pxTextInput",
                        "expectedLength": 60,
                        "label": "Label"
                    }
                ],
                "pyID": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 32,
                        "displayAs": "Scalar",
                        "expectedLength": 22,
                        "label": "Case ID",
                        "isClassKey": true
                    }
                ]
            }
        },
        "components": [
            "DefaultForm",
            "Email",
            "CaseSummary",
            "Phone",
            "Dropdown",
            "Region",
            "TextInput",
            "CaseOperator",
            "View",
            "Date"
        ],
        "localeReferences": [
            "DIXL-MEDIACO-WORK-NEWSERVICE!VIEW!CUSTOMERADDRESS",
            "DIXL-MEDIACO-WORK-NEWSERVICE!CASE!NEW SERVICE",
            "@BASECLASS!DATAPAGE!D_PYCOUNTRYCALLINGCODELIST",
            "@BASECLASS!DATAPAGE!D_GETSTATES"
        ],
        "root": {
            "type": "reference",
            "config": {
                "type": "view",
                "name": "CustomerAddress",
                "context": "caseInfo.content"
            }
        },
        "context_data": {
            "caseInfo": {
                "content": {
                    "summary_of_associated_lists__": {}
                }
            }
        },
        "navigation": {
            "template": "Horizontal",
            "steps": [
                {
                    "allow_jump": true,
                    "name": "Customer Info",
                    "actionID": "CustomerInfo",
                    "visited_status": "success",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/ASSIGNMENT66",
                            "type": "PATCH",
                            "title": "Go to Customer Info"
                        }
                    },
                    "ID": "ASSIGNMENT66"
                },
                {
                    "allow_jump": true,
                    "name": "Customer Address",
                    "actionID": "CustomerAddress",
                    "visited_status": "current",
                    "ID": "AssignmentSF1"
                },
                {
                    "allow_jump": true,
                    "name": "Service Date",
                    "actionID": "ServiceDate",
                    "visited_status": "future",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/AssignmentSF2",
                            "type": "PATCH",
                            "title": "Go to Service Date"
                        }
                    },
                    "ID": "AssignmentSF2"
                },
                {
                    "allow_jump": true,
                    "name": "Requested Service",
                    "actionID": "RequestedService",
                    "visited_status": "future",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/AssignmentSF3",
                            "type": "PATCH",
                            "title": "Go to Requested Service"
                        }
                    },
                    "ID": "AssignmentSF3"
                }
            ]
        },
        "actionButtons": {
            "secondary": [
                {
                    "jsAction": "cancelAssignment",
                    "name": "Cancel",
                    "actionID": "cancel"
                },
                {
                    "jsAction": "fillFormWithAI",
                    "name": "Fill form with AI",
                    "actionID": "fillFormWithAI"
                },
                {
                    "jsAction": "saveAssignment",
                    "name": "Save for later",
                    "actionID": "save"
                },
                {
                    "jsAction": "navigateToStep",
                    "name": "Previous",
                    "actionID": "back",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/previous",
                            "type": "PATCH",
                            "title": "Go back to previous step"
                        }
                    }
                }
            ],
            "main": [
                {
                    "jsAction": "finishAssignment",
                    "name": "Next   ",
                    "actionID": "next"
                }
            ]
        }
    },
    "nextAssignmentInfo": {
        "context": "self",
        "className": "DIXL-MediaCo-Work-NewService",
        "links": {
            "open": {
                "rel": "self",
                "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP",
                "type": "GET",
                "title": "Get assignment details"
            }
        },
        "ID": "ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP"
    }
}

export const serviceDateData = {
    "data": {
        "caseInfo": {
            "content": {
                "classID": "DIXL-MediaCo-Work-NewService",
                "ServiceDate": "",
                "Email": "dsf@d.f",
                "FirstName": "Chaitana",
                "PhoneNumber": "+10000000000",
                "LastName": "Lakshman",
                "pxCreateOperator": "customer@mediaco",
                "pxUpdateDateTime": "2024-03-05T17:32:11.270Z",
                "pxUpdateOperator": "customer@mediaco",
                "pxCreateDateTime": "2024-03-05T17:29:27.119Z",
                "pyStatusWork": "New",
                "pyLabel": "New Service",
                "pyID": "N-4006"
            },
            "caseTypeID": "DIXL-MediaCo-Work-NewService",
            "owner": "customer@mediaco",
            "availableActions": [
                {
                    "name": "Edit details",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/actions/pyUpdateCaseDetails",
                            "type": "GET",
                            "title": "Get case action details"
                        }
                    },
                    "ID": "pyUpdateCaseDetails",
                    "type": "Case"
                },
                {
                    "name": "Change stage",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/actions/pyChangeStage",
                            "type": "GET",
                            "title": "Get case action details"
                        }
                    },
                    "ID": "pyChangeStage",
                    "type": "Case"
                }
            ],
            "associations": {
                "follows": false
            },
            "lastUpdatedBy": "customer@mediaco",
            "assignments": [
                {
                    "instructions": "",
                    "canPerform": "true",
                    "assigneeInfo": {
                        "name": "customer",
                        "ID": "customer@mediaco",
                        "type": "worklist"
                    },
                    "processID": "Mashup",
                    "urgency": "10",
                    "processName": "Mashup",
                    "isMultiStep": "true",
                    "name": "Service Date",
                    "context": "",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP",
                            "type": "GET",
                            "title": "Get assignment details"
                        }
                    },
                    "ID": "ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP",
                    "actions": [
                        {
                            "name": "Service Date",
                            "links": {
                                "submit": {
                                    "rel": "self",
                                    "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/actions/ServiceDate",
                                    "type": "PATCH",
                                    "title": "Submit assignment action "
                                },
                                "save": {
                                    "rel": "self",
                                    "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/actions/ServiceDate/save",
                                    "type": "PATCH",
                                    "title": "Save assignment action "
                                },
                                "open": {
                                    "rel": "self",
                                    "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/actions/ServiceDate",
                                    "type": "GET",
                                    "title": "Get assignment action details"
                                }
                            },
                            "ID": "ServiceDate",
                            "type": "FlowAction"
                        }
                    ]
                }
            ],
            "hasNewAttachments": false,
            "businessID": "N-4006",
            "sla": {
                "goal": "",
                "deadline": ""
            },
            "WidgetsToRefresh": [
                "TaskList"
            ],
            "caseTypeName": "New Service",
            "urgency": "10",
            "createTime": "2024-03-05T17:29:27.119Z",
            "createdBy": "customer@mediaco",
            "name": "New Service",
            "stages": [
                {
                    "entryTime": "2024-03-05T17:29:27.125Z",
                    "name": "Create",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM0",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "completed",
                    "ID": "PRIM0",
                    "type": "Primary",
                    "transitionType": "create"
                },
                {
                    "entryTime": "2024-03-05T17:29:27.126Z",
                    "name": "Service",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM1",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "active",
                    "ID": "PRIM1",
                    "type": "Primary",
                    "transitionType": "automatic"
                },
                {
                    "name": "Connected",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM2",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "future",
                    "ID": "PRIM2",
                    "type": "Primary",
                    "transitionType": "automatic"
                },
                {
                    "name": "Resolved",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM3",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "future",
                    "ID": "PRIM3",
                    "type": "Primary",
                    "transitionType": "resolution"
                }
            ],
            "ID": "DIXL-MEDIACO-WORK N-4006",
            "caseTypeIcon": "cmicons/pycase.svg",
            "status": "New",
            "stageID": "PRIM1",
            "stageLabel": "Service",
            "lastUpdateTime": "2024-03-05T17:32:11.270Z"
        },
        "referencedUsers": {
            "customer@mediaco": {
                "UserName": "customer"
            }
        },
        "D_pyCountryCallingCodeList": {
            "pxResults": [
                {
                    "classID": "-",
                    "pyCallingCode": "+1"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+91"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+48"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+44"
                }
            ]
        },
        "shared": {
            "D_pyCountryCallingCodeList": {
                "D_pyCountryCallingCodeList": {
                    "parameters": [],
                    "pxResults": [
                        {
                            "classID": "-",
                            "pyCallingCode": "+1"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+91"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+48"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+44"
                        }
                    ],
                    "loadTime": "2024-03-05T17:32:11.333652Z"
                }
            }
        }
    },
    "uiResources": {
        "resources": {
            "views": {
                "ServiceDate": [
                    {
                        "name": "ServiceDate",
                        "type": "View",
                        "config": {
                            "template": "DefaultForm",
                            "ruleClass": "DIXL-MediaCo-Work-NewService",
                            "localeReference": "@LR DIXL-MEDIACO-WORK-NEWSERVICE!VIEW!SERVICEDATE"
                        },
                        "children": [
                            {
                                "name": "Fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "Date",
                                        "config": {
                                            "value": "@P .ServiceDate",
                                            "label": "@L Date service to begin",
                                            "testId": "@L 1321FA74451B96BC02663B0EF96CCBB9"
                                        }
                                    }
                                ]
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ],
                "pyCaseSummary": [
                    {
                        "name": "pyCaseSummary",
                        "type": "View",
                        "config": {
                            "template": "CaseSummary",
                            "status": "@P .pyStatusWork",
                            "showStatus": true,
                            "ruleClass": "DIXL-MediaCo-Work-NewService"
                        },
                        "children": [
                            {
                                "name": "Primary fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .FirstName",
                                            "label": "@L First Name"
                                        }
                                    },
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .LastName",
                                            "label": "@L Last Name"
                                        }
                                    },
                                    {
                                        "type": "Email",
                                        "config": {
                                            "value": "@P .Email",
                                            "label": "@L Email"
                                        }
                                    },
                                    {
                                        "type": "Phone",
                                        "config": {
                                            "value": "@P .PhoneNumber",
                                            "label": "@L Phone number",
                                            "datasource": {
                                                "source": "@DATASOURCE D_pyCountryCallingCodeList.pxResults",
                                                "fields": {
                                                    "value": "@P .pyCallingCode"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "Date",
                                        "config": {
                                            "value": "@P .ServiceDate",
                                            "label": "@L Service date"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Secondary fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "CaseOperator",
                                        "config": {
                                            "label": "Create operator",
                                            "createLabel": "@L Created",
                                            "updateLabel": "@L Updated",
                                            "updateDateTime": "@P .pxUpdateDateTime",
                                            "createDateTime": "@P .pxCreateDateTime",
                                            "updateOperator": "@USER .pxUpdateOperator",
                                            "createOperator": "@USER .pxCreateOperator"
                                        }
                                    },
                                    {
                                        "type": "CaseOperator",
                                        "config": {
                                            "label": "Update operator",
                                            "createLabel": "@L Created",
                                            "updateLabel": "@L Updated",
                                            "updateDateTime": "@P .pxUpdateDateTime",
                                            "createDateTime": "@P .pxCreateDateTime",
                                            "updateOperator": "@USER .pxUpdateOperator",
                                            "createOperator": "@USER .pxCreateOperator"
                                        }
                                    }
                                ]
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ]
            },
            "datapages": {
                "D_pyCountryCallingCodeList": {
                    "classID": "Code-Pega-List",
                    "mode": "readonly",
                    "isSearchable": false,
                    "isQueryable": false,
                    "structure": "list"
                }
            },
            "fields": {
                "ServiceDate": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date",
                        "displayAs": "pxDateTime",
                        "label": "Service date"
                    }
                ],
                "Email": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxEmail",
                        "label": "Email",
                        "validateAs": "ValidEmailAddress"
                    }
                ],
                "FirstName": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "First Name"
                    }
                ],
                "PhoneNumber": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxPhone",
                        "label": "Phone number",
                        "validateAs": "ValidPhoneNumber"
                    }
                ],
                "LastName": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "Last Name"
                    }
                ],
                "pxCreateOperator": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "HarnessOperator",
                        "expectedLength": 40,
                        "label": "Create Operator",
                        "isSpecial": true
                    }
                ],
                "pxUpdateDateTime": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date Time",
                        "displayAs": "pxDateTime",
                        "label": "Update date/time",
                        "isSpecial": true
                    }
                ],
                "pxUpdateOperator": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "HarnessOperator",
                        "label": "Update Operator",
                        "isSpecial": true
                    }
                ],
                "pxCreateDateTime": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date Time",
                        "displayAs": "pxDateTime",
                        "label": "Create date/time",
                        "isSpecial": true
                    }
                ],
                "pyStatusWork": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 32,
                        "displayAs": "WorkStatus",
                        "expectedLength": 32,
                        "label": "Work Status"
                    }
                ],
                "pyCallingCode": [
                    {
                        "classID": "-",
                        "type": "Unknown"
                    }
                ],
                "pyLabel": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 64,
                        "displayAs": "pxTextInput",
                        "expectedLength": 60,
                        "label": "Label"
                    }
                ],
                "pyID": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 32,
                        "displayAs": "Scalar",
                        "expectedLength": 22,
                        "label": "Case ID",
                        "isClassKey": true
                    }
                ]
            }
        },
        "components": [
            "DefaultForm",
            "Email",
            "CaseSummary",
            "Phone",
            "Region",
            "TextInput",
            "CaseOperator",
            "View",
            "Date"
        ],
        "localeReferences": [
            "DIXL-MEDIACO-WORK-NEWSERVICE!CASE!NEW SERVICE",
            "DIXL-MEDIACO-WORK-NEWSERVICE!VIEW!SERVICEDATE"
        ],
        "root": {
            "type": "reference",
            "config": {
                "type": "view",
                "name": "ServiceDate",
                "context": "caseInfo.content"
            }
        },
        "context_data": {},
        "navigation": {
            "template": "Horizontal",
            "steps": [
                {
                    "allow_jump": true,
                    "name": "Customer Info",
                    "actionID": "CustomerInfo",
                    "visited_status": "success",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/ASSIGNMENT66",
                            "type": "PATCH",
                            "title": "Go to Customer Info"
                        }
                    },
                    "ID": "ASSIGNMENT66"
                },
                {
                    "allow_jump": true,
                    "name": "Customer Address",
                    "actionID": "CustomerAddress",
                    "visited_status": "success",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/AssignmentSF1",
                            "type": "PATCH",
                            "title": "Go to Customer Address"
                        }
                    },
                    "ID": "AssignmentSF1"
                },
                {
                    "allow_jump": true,
                    "name": "Service Date",
                    "actionID": "ServiceDate",
                    "visited_status": "current",
                    "ID": "AssignmentSF2"
                },
                {
                    "allow_jump": true,
                    "name": "Requested Service",
                    "actionID": "RequestedService",
                    "visited_status": "future",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/AssignmentSF3",
                            "type": "PATCH",
                            "title": "Go to Requested Service"
                        }
                    },
                    "ID": "AssignmentSF3"
                }
            ]
        },
        "actionButtons": {
            "secondary": [
                {
                    "jsAction": "cancelAssignment",
                    "name": "Cancel",
                    "actionID": "cancel"
                },
                {
                    "jsAction": "fillFormWithAI",
                    "name": "Fill form with AI",
                    "actionID": "fillFormWithAI"
                },
                {
                    "jsAction": "saveAssignment",
                    "name": "Save for later",
                    "actionID": "save"
                },
                {
                    "jsAction": "navigateToStep",
                    "name": "Previous",
                    "actionID": "back",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP/navigation_steps/previous",
                            "type": "PATCH",
                            "title": "Go back to previous step"
                        }
                    }
                }
            ],
            "main": [
                {
                    "jsAction": "finishAssignment",
                    "name": "Next   ",
                    "actionID": "next"
                }
            ]
        }
    },
    "nextAssignmentInfo": {
        "context": "self",
        "className": "DIXL-MediaCo-Work-NewService",
        "links": {
            "open": {
                "rel": "self",
                "href": "/assignments/ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP",
                "type": "GET",
                "title": "Get assignment details"
            }
        },
        "ID": "ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!MASHUP"
    }
}


export const RequestedService = {
    "data": {
        "caseInfo": {
            "content": {
                "classID": "DIXL-MediaCo-Work-NewService",
                "Email": "dsf@d.f",
                "FirstName": "Chaitana",
                "PhoneNumber": "+10000000000",
                "ServiceDate": "2024-03-16",
                "LastName": "Lakshman",
                "pxCreateOperator": "customer@mediaco",
                "pxUpdateDateTime": "2024-03-05T17:35:56.843Z",
                "pxUpdateOperator": "customer@mediaco",
                "pxCreateDateTime": "2024-03-05T17:29:27.119Z",
                "pyStatusWork": "Pending-Fulfillment",
                "pyLabel": "New Service",
                "pyID": "N-4006"
            },
            "caseTypeID": "DIXL-MediaCo-Work-NewService",
            "owner": "customer@mediaco",
            "availableActions": [
                {
                    "name": "Edit details",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/actions/pyUpdateCaseDetails",
                            "type": "GET",
                            "title": "Get case action details"
                        }
                    },
                    "ID": "pyUpdateCaseDetails",
                    "type": "Case"
                },
                {
                    "name": "Change stage",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/actions/pyChangeStage",
                            "type": "GET",
                            "title": "Get case action details"
                        }
                    },
                    "ID": "pyChangeStage",
                    "type": "Case"
                }
            ],
            "associations": {
                "follows": false
            },
            "lastUpdatedBy": "customer@mediaco",
            "assignments": [
                {
                    "assigneeInfo": {
                        "name": "tech",
                        "ID": "tech@mediaco",
                        "type": "worklist"
                    },
                    "instructions": "",
                    "processID": "Connected_Flow",
                    "urgency": "10",
                    "processName": "Connected",
                    "isMultiStep": "false",
                    "name": "Service Connect",
                    "context": "",
                    "canPerform": "false",
                    "ID": "ASSIGN-WORKLIST DIXL-MEDIACO-WORK N-4006!CONNECTED_FLOW"
                }
            ],
            "hasNewAttachments": false,
            "businessID": "N-4006",
            "sla": {
                "goal": "",
                "deadline": ""
            },
            "WidgetsToRefresh": [
                "TaskList"
            ],
            "caseTypeName": "New Service",
            "urgency": "10",
            "createTime": "2024-03-05T17:29:27.119Z",
            "createdBy": "customer@mediaco",
            "name": "New Service",
            "stages": [
                {
                    "entryTime": "2024-03-05T17:29:27.125Z",
                    "name": "Create",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM0",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "completed",
                    "ID": "PRIM0",
                    "type": "Primary",
                    "transitionType": "create"
                },
                {
                    "entryTime": "2024-03-05T17:29:27.126Z",
                    "name": "Service",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM1",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "completed",
                    "ID": "PRIM1",
                    "type": "Primary",
                    "transitionType": "automatic"
                },
                {
                    "entryTime": "2024-03-05T17:35:56.832Z",
                    "name": "Connected",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM2",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "active",
                    "ID": "PRIM2",
                    "type": "Primary",
                    "transitionType": "automatic"
                },
                {
                    "name": "Resolved",
                    "links": {
                        "open": {
                            "rel": "self",
                            "href": "/cases/DIXL-MEDIACO-WORK N-4006/stages/PRIM3",
                            "type": "PUT",
                            "title": "Jump to this stage"
                        }
                    },
                    "visited_status": "future",
                    "ID": "PRIM3",
                    "type": "Primary",
                    "transitionType": "resolution"
                }
            ],
            "ID": "DIXL-MEDIACO-WORK N-4006",
            "caseTypeIcon": "cmicons/pycase.svg",
            "status": "Pending-Fulfillment",
            "stageID": "PRIM2",
            "stageLabel": "Connected",
            "lastUpdateTime": "2024-03-05T17:35:56.843Z"
        },
        "referencedUsers": {
            "customer@mediaco": {
                "UserName": "customer"
            }
        },
        "D_pyCountryCallingCodeList": {
            "pxResults": [
                {
                    "classID": "-",
                    "pyCallingCode": "+1"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+91"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+48"
                },
                {
                    "classID": "-",
                    "pyCallingCode": "+44"
                }
            ]
        },
        "shared": {
            "D_pyCountryCallingCodeList": {
                "D_pyCountryCallingCodeList": {
                    "parameters": [],
                    "pxResults": [
                        {
                            "classID": "-",
                            "pyCallingCode": "+1"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+91"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+48"
                        },
                        {
                            "classID": "-",
                            "pyCallingCode": "+44"
                        }
                    ],
                    "loadTime": "2024-03-05T17:35:56.905533Z"
                }
            }
        }
    },
    "uiResources": {
        "resources": {
            "views": {
                "pyCaseSummary": [
                    {
                        "name": "pyCaseSummary",
                        "type": "View",
                        "config": {
                            "template": "CaseSummary",
                            "status": "@P .pyStatusWork",
                            "showStatus": true,
                            "ruleClass": "DIXL-MediaCo-Work-NewService"
                        },
                        "children": [
                            {
                                "name": "Primary fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .FirstName",
                                            "label": "@L First Name"
                                        }
                                    },
                                    {
                                        "type": "TextInput",
                                        "config": {
                                            "value": "@P .LastName",
                                            "label": "@L Last Name"
                                        }
                                    },
                                    {
                                        "type": "Email",
                                        "config": {
                                            "value": "@P .Email",
                                            "label": "@L Email"
                                        }
                                    },
                                    {
                                        "type": "Phone",
                                        "config": {
                                            "value": "@P .PhoneNumber",
                                            "label": "@L Phone number",
                                            "datasource": {
                                                "source": "@DATASOURCE D_pyCountryCallingCodeList.pxResults",
                                                "fields": {
                                                    "value": "@P .pyCallingCode"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "type": "Date",
                                        "config": {
                                            "value": "@P .ServiceDate",
                                            "label": "@L Service date"
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "Secondary fields",
                                "type": "Region",
                                "children": [
                                    {
                                        "type": "CaseOperator",
                                        "config": {
                                            "label": "Create operator",
                                            "createLabel": "@L Created",
                                            "updateLabel": "@L Updated",
                                            "updateDateTime": "@P .pxUpdateDateTime",
                                            "createDateTime": "@P .pxCreateDateTime",
                                            "updateOperator": "@USER .pxUpdateOperator",
                                            "createOperator": "@USER .pxCreateOperator"
                                        }
                                    },
                                    {
                                        "type": "CaseOperator",
                                        "config": {
                                            "label": "Update operator",
                                            "createLabel": "@L Created",
                                            "updateLabel": "@L Updated",
                                            "updateDateTime": "@P .pxUpdateDateTime",
                                            "createDateTime": "@P .pxCreateDateTime",
                                            "updateOperator": "@USER .pxUpdateOperator",
                                            "createOperator": "@USER .pxCreateOperator"
                                        }
                                    }
                                ]
                            }
                        ],
                        "classID": "DIXL-MediaCo-Work-NewService"
                    }
                ]
            },
            "datapages": {
                "D_pyCountryCallingCodeList": {
                    "classID": "Code-Pega-List",
                    "mode": "readonly",
                    "isSearchable": false,
                    "isQueryable": false,
                    "structure": "list"
                }
            },
            "fields": {
                "Email": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxEmail",
                        "label": "Email",
                        "validateAs": "ValidEmailAddress"
                    }
                ],
                "FirstName": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "First Name"
                    }
                ],
                "PhoneNumber": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxPhone",
                        "label": "Phone number",
                        "validateAs": "ValidPhoneNumber"
                    }
                ],
                "ServiceDate": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date",
                        "displayAs": "pxDateTime",
                        "label": "Service date"
                    }
                ],
                "LastName": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 256,
                        "displayAs": "pxTextInput",
                        "label": "Last Name"
                    }
                ],
                "pxCreateOperator": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "HarnessOperator",
                        "expectedLength": 40,
                        "label": "Create Operator",
                        "isSpecial": true
                    }
                ],
                "pxUpdateDateTime": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date Time",
                        "displayAs": "pxDateTime",
                        "label": "Update date/time",
                        "isSpecial": true
                    }
                ],
                "pxUpdateOperator": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "displayAs": "HarnessOperator",
                        "label": "Update Operator",
                        "isSpecial": true
                    }
                ],
                "pxCreateDateTime": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Date Time",
                        "displayAs": "pxDateTime",
                        "label": "Create date/time",
                        "isSpecial": true
                    }
                ],
                "pyStatusWork": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 32,
                        "displayAs": "WorkStatus",
                        "expectedLength": 32,
                        "label": "Work Status"
                    }
                ],
                "pyCallingCode": [
                    {
                        "classID": "-",
                        "type": "Unknown"
                    }
                ],
                "pyLabel": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 64,
                        "displayAs": "pxTextInput",
                        "expectedLength": 60,
                        "label": "Label"
                    }
                ],
                "pyID": [
                    {
                        "classID": "DIXL-MediaCo-Work-NewService",
                        "type": "Text",
                        "maxLength": 32,
                        "displayAs": "Scalar",
                        "expectedLength": 22,
                        "label": "Case ID",
                        "isClassKey": true
                    }
                ]
            }
        },
        "components": [
            "Email",
            "CaseSummary",
            "Phone",
            "Region",
            "TextInput",
            "CaseOperator",
            "View",
            "Date"
        ],
        "localeReferences": [
            "DIXL-MEDIACO-WORK-NEWSERVICE!CASE!NEW SERVICE"
        ],
        "context_data": {}
    },
    "confirmationNote": "Thank you! The next step in this case has been routed appropriately."
}



// export const assignData = 