@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\_webpack@2.7.0@webpack\bin\webpack.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\_webpack@2.7.0@webpack\bin\webpack.js" %*
)