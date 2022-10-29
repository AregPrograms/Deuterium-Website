@echo off

echo Compiling main.ts
npx tsc .\ts\main.ts --outDir ./js
echo Compiling 404.ts
npx tsc .\ts\404.ts --outDir ./js