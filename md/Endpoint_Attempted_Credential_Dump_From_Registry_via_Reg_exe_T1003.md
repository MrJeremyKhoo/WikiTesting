## title

Attempted Credential Dump From Registry via Reg exe

## id

None

## status

experimental

## description

None

## references

None

## tags

['attack.Credential Access', 'attack.T1003', 'attack.T1003.002']

## author

None

## date

None

## logsource

{'category': None, 'product': None}

## detection

{'selection': {'FieldName': None}, 'condition': None}

## fields

['_time', 'Processes.dest', 'Processes.user', 'Processes.parent_process_name', 'Processes.parent_process', 'Processes.original_file_name', 'Processes.process_name', 'Processes.process', 'Processes.process_id', 'Processes.parent_process_path', 'Processes.process_path', 'Processes.parent_process_id']

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

{'helix': None, 'splunk': '| tstats `security_content_summariesonly` count min(_time) as firstTime max(_time) as lastTime from datamodel=Endpoint.Processes where `process_reg` OR `process_cmd` Processes.process=*save* (Processes.process=*HKEY_LOCAL_MACHINE\\\\Security* OR Processes.process=*HKEY_LOCAL_MACHINE\\\\SAM* OR Processes.process=*HKEY_LOCAL_MACHINE\\\\System* OR Processes.process=*HKLM\\\\Security* OR Processes.process=*HKLM\\\\System* OR Processes.process=*HKLM\\\\SAM*) by Processes.dest Processes.user Processes.parent_process Processes.process_name Processes.original_file_name Processes.process Processes.process_id Processes.parent_process_id | `drop_dm_object_name(Processes)` | `security_content_ctime(firstTime)`| `security_content_ctime(lastTime)` | `attempted_credential_dump_from_registry_via_reg_exe_filter`'}

## platform description

{'helix': None, 'splunk': 'Monitor for execution of reg.exe with parameters specifying an export of keys that contain hashed credentials that attackers may try to crack offline.'}

## platform id

{'helix': None, 'splunk': 'e9fb4a59-c5fb-440a-9f24-191fbc6b2911'}

## platform references

{'helix': None, 'splunk': ['https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1003.002/T1003.002.md#atomic-test-1---registry-dump-of-sam-creds-and-secrets']}

## platform confidence

{'helix': None, 'splunk': 100}

## platform risk

{'helix': None, 'splunk': 90}

## platform severity

{'helix': None, 'splunk': 'Nil'}

