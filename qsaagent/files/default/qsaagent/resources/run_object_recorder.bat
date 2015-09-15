SET path="C:\java\jre8\bin";%path%
SET USERNAME=%~1
SET PASSWORD=%~2
SET LOAD_URL=%~3
SET RECORD_SCRIPT_API=%~4
SET PROJECT_ID=%~5
SET BUILD_ID=%~6
SET BASE_DIR=%~7
start javaw -jar %~dp0QSAObjectRecorder.jar %USERNAME% %PASSWORD% %LOAD_URL% %RECORD_SCRIPT_API% %PROJECT_ID% %BUILD_ID% %BASE_DIR%
REM Username:abc Password:abcd LoadUrl:abcde GetElementApi:abcdef SendElementApi:abcdefg ProjectId:1 BuildId:2