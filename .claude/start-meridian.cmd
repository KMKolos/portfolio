@echo off
rem Launches the MERIDIAN dev server. Exists because the preview launcher
rem can't quote paths with spaces ("Real Estate Project") in runtimeArgs.
npm --prefix "C:\Users\kmkol\Desktop\Real Estate Project" run dev
