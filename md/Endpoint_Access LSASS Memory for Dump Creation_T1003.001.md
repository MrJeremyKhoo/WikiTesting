## title

Access LSASS Memory for Dump Creation

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

['_time', 'EventCode', 'TargetImage', 'CallTrace', 'Computer', 'TargetProcessId', 'SourceImage', 'SourceProcessId']

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

{'helix': None, 'splunk': '`sysmon` EventCode=10 TargetImage=*lsass.exe CallTrace=*dbgcore.dll* OR CallTrace=*dbghelp.dll* | stats count min(_time) as firstTime max(_time) as lastTime by Computer, TargetImage, TargetProcessId, SourceImage, SourceProcessId | rename Computer as dest | `security_content_ctime(firstTime)`| `security_content_ctime(lastTime)` | `access_lsass_memory_for_dump_creation_filter` '}

## platform description

{'helix': None, 'splunk': 'Detect memory dumping of the LSASS process.'}

## platform id

{'helix': None, 'splunk': 'fb4c31b0-13e8-4155-8aa5-24de4b8d6717'}

## platform references

{'helix': None, 'splunk': ['https://2017.zeronights.org/wp-content/uploads/materials/ZN17_Kheirkhabarov_Hunting_for_Credentials_Dumping_in_Windows_Environment.pdf']}

## platform confidence

{'helix': None, 'splunk': 90}

## platform risk

{'helix': None, 'splunk': 63}

## platform severity

{'helix': None, 'splunk': 'Nil'}

