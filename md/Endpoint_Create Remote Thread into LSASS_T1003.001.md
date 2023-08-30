## title

Create Remote Thread into LSASS

## id

None

## status

experimental

## description

None

## references

None

## tags

['attack.Credential Access', 'attack.T1003', 'attack.T1003.001']

## author

None

## date

None

## logsource

{'category': None, 'product': None}

## detection

{'selection': {'FieldName': None}, 'condition': None}

## fields

['_time', 'EventID', 'TargetImage', 'Computer', 'EventCode', 'TargetImage', 'TargetProcessId', 'dest']

## falsepositives

['describe possible false positive conditions to help the analysts in their investigation']

## level

one of five levels (informational, low, medium, high, critical)

## risk_score

None

## dataset

None

## platform

Splunk

## platform query

{'helix': None, 'splunk': '`sysmon` EventID=8 TargetImage=*lsass.exe | stats count min(_time) as firstTime max(_time) as lastTime by Computer, EventCode, TargetImage, TargetProcessId | rename Computer as dest | `security_content_ctime(firstTime)`| `security_content_ctime(lastTime)` | `create_remote_thread_into_lsass_filter`'}

## platform description

{'helix': None, 'splunk': 'Detect remote thread creation into LSASS consistent with credential dumping.'}

## platform id

{'helix': None, 'splunk': '67d4dbef-9564-4699-8da8-03a151529edc'}

## platform references

{'helix': None, 'splunk': ['https://2017.zeronights.org/wp-content/uploads/materials/ZN17_Kheirkhabarov_Hunting_for_Credentials_Dumping_in_Windows_Environment.pdf']}

## platform confidence

{'helix': None, 'splunk': 90}

## platform risk

{'helix': None, 'splunk': 81}

## platform severity

{'helix': None, 'splunk': 'Nil'}

