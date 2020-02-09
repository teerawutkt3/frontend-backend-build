@echo off
echo Start build single war.
echo Start Serve Build.
cd D:\my-project\spring-boot-build-app\server
call mvn clean install -Dmaven.test.skip=true
cd D:\my-project\spring-boot-build-app\server\target
call ren vue-app-0.0.1-SNAPSHOT.war vue-core-ui.war
echo Finish Build.
pause