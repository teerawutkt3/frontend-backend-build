@echo off
echo Start build single war.
echo Start Copy file client to server.
call xcopy D:\my-project\spring-boot-build-app\app-coreui-vue-admin-template-master\dist D:\my-project\spring-boot-build-app\server\src\main\resources\static /o /x /e /h /k
echo Finish Build.
pause