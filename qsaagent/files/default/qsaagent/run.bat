@echo off
SET path="C:\java\jre8\bin";%path%
SET BASE_DIRECTORY=%~1
IF DEFINED BASE_DIRECTORY (@set COMMAND=%BASE_DIRECTORY%\QSAgent-Desktop-1.0.0.jar %BASE_DIRECTORY%) ELSE (@set COMMAND=QSAgent-Desktop-1.0.0.jar)

start "QSAgent" javaw -jar %COMMAND%
exit