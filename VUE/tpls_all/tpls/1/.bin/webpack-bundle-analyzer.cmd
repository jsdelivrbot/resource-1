@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\_webpack-bundle-analyzer@2.9.0@webpack-bundle-analyzer\lib\bin\analyzer.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\_webpack-bundle-analyzer@2.9.0@webpack-bundle-analyzer\lib\bin\analyzer.js" %*
)