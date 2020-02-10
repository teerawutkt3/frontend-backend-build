@echo off
echo Start build single war.
echo Start Copy war file to this folder.
call xcopy D:\my-project\spring-boot-build-app\server\target\vue-core-ui.war D:\my-project\spring-boot-build-app /o /x /e /h /k
echo Finish Build.
pause