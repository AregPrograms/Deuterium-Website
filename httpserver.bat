@echo off

if [%1] == [node] (
    echo Starting node server....
    npx http-server --proxy http://localhost:8080?
)

if [%~1] == [python] (
    echo Starting python http server....
    py -m http.server 8080
)