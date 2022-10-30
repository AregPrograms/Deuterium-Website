@echo off

echo Compiling main.ts
call npx tsc .\ts\main.ts --outDir ./js

echo Compiling 404.ts
call npx tsc .\ts\404.ts --outDir ./js