(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var age = prompt('How are are you?');

if (age <= 2) {
  console.log('child');
}

if (age <= 12) {
  console.log('child');
}

if (age <= 12) {
  console.log('child');
}

if (age <= 12) {
  console.log('child');
}

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9wZXNvY2huaWNhSlMvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxHQUFHLEdBQUMsTUFBTSxDQUFDLGtCQUFELENBQWQ7O0FBQ0EsSUFBSSxHQUFHLElBQUUsQ0FBVCxFQUFZO0FBQ1gsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7QUFDQTs7QUFDRCxJQUFJLEdBQUcsSUFBRSxFQUFULEVBQWE7QUFDWixFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWjtBQUNBOztBQUNELElBQUksR0FBRyxJQUFFLEVBQVQsRUFBYTtBQUNaLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0E7O0FBQ0QsSUFBSSxHQUFHLElBQUUsRUFBVCxFQUFhO0FBQ1osRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IGFnZT1wcm9tcHQoJ0hvdyBhcmUgYXJlIHlvdT8nKTtcclxuaWYgKGFnZTw9Mikge1xyXG5cdGNvbnNvbGUubG9nKCdjaGlsZCcpO1xyXG59XHJcbmlmIChhZ2U8PTEyKSB7XHJcblx0Y29uc29sZS5sb2coJ2NoaWxkJyk7XHJcbn1cclxuaWYgKGFnZTw9MTIpIHtcclxuXHRjb25zb2xlLmxvZygnY2hpbGQnKTtcclxufVxyXG5pZiAoYWdlPD0xMikge1xyXG5cdGNvbnNvbGUubG9nKCdjaGlsZCcpO1xyXG59Il0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTl3WlhOdlkyaHVhV05oU2xNdmMzSmpMMnB6TDJGd2NDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN08wRkRRVUVzU1VGQlNTeEhRVUZITEVkQlFVTXNUVUZCVFN4RFFVRkRMR3RDUVVGRUxFTkJRV1E3TzBGQlEwRXNTVUZCU1N4SFFVRkhMRWxCUVVVc1EwRkJWQ3hGUVVGWk8wRkJRMWdzUlVGQlFTeFBRVUZQTEVOQlFVTXNSMEZCVWl4RFFVRlpMRTlCUVZvN1FVRkRRVHM3UVVGRFJDeEpRVUZKTEVkQlFVY3NTVUZCUlN4RlFVRlVMRVZCUVdFN1FVRkRXaXhGUVVGQkxFOUJRVThzUTBGQlF5eEhRVUZTTEVOQlFWa3NUMEZCV2p0QlFVTkJPenRCUVVORUxFbEJRVWtzUjBGQlJ5eEpRVUZGTEVWQlFWUXNSVUZCWVR0QlFVTmFMRVZCUVVFc1QwRkJUeXhEUVVGRExFZEJRVklzUTBGQldTeFBRVUZhTzBGQlEwRTdPMEZCUTBRc1NVRkJTU3hIUVVGSExFbEJRVVVzUlVGQlZDeEZRVUZoTzBGQlExb3NSVUZCUVN4UFFVRlBMRU5CUVVNc1IwRkJVaXhEUVVGWkxFOUJRVm83UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1S0NsN1puVnVZM1JwYjI0Z2NpaGxMRzRzZENsN1puVnVZM1JwYjI0Z2J5aHBMR1lwZTJsbUtDRnVXMmxkS1h0cFppZ2haVnRwWFNsN2RtRnlJR005WENKbWRXNWpkR2x2Ymx3aVBUMTBlWEJsYjJZZ2NtVnhkV2x5WlNZbWNtVnhkV2x5WlR0cFppZ2haaVltWXlseVpYUjFjbTRnWXlocExDRXdLVHRwWmloMUtYSmxkSFZ5YmlCMUtHa3NJVEFwTzNaaGNpQmhQVzVsZHlCRmNuSnZjaWhjSWtOaGJtNXZkQ0JtYVc1a0lHMXZaSFZzWlNBblhDSXJhU3RjSWlkY0lpazdkR2h5YjNjZ1lTNWpiMlJsUFZ3aVRVOUVWVXhGWDA1UFZGOUdUMVZPUkZ3aUxHRjlkbUZ5SUhBOWJsdHBYVDE3Wlhod2IzSjBjenA3ZlgwN1pWdHBYVnN3WFM1allXeHNLSEF1Wlhod2IzSjBjeXhtZFc1amRHbHZiaWh5S1h0MllYSWdiajFsVzJsZFd6RmRXM0pkTzNKbGRIVnliaUJ2S0c1OGZISXBmU3h3TEhBdVpYaHdiM0owY3l4eUxHVXNiaXgwS1gxeVpYUjFjbTRnYmx0cFhTNWxlSEJ2Y25SemZXWnZjaWgyWVhJZ2RUMWNJbVoxYm1OMGFXOXVYQ0k5UFhSNWNHVnZaaUJ5WlhGMWFYSmxKaVp5WlhGMWFYSmxMR2s5TUR0cFBIUXViR1Z1WjNSb08ya3JLeWx2S0hSYmFWMHBPM0psZEhWeWJpQnZmWEpsZEhWeWJpQnlmU2tvS1NJc0lteGxkQ0JoWjJVOWNISnZiWEIwS0NkSWIzY2dZWEpsSUdGeVpTQjViM1UvSnlrN1hISmNibWxtSUNoaFoyVThQVElwSUh0Y2NseHVYSFJqYjI1emIyeGxMbXh2WnlnblkyaHBiR1FuS1R0Y2NseHVmVnh5WEc1cFppQW9ZV2RsUEQweE1pa2dlMXh5WEc1Y2RHTnZibk52YkdVdWJHOW5LQ2RqYUdsc1pDY3BPMXh5WEc1OVhISmNibWxtSUNoaFoyVThQVEV5S1NCN1hISmNibHgwWTI5dWMyOXNaUzVzYjJjb0oyTm9hV3hrSnlrN1hISmNibjFjY2x4dWFXWWdLR0ZuWlR3OU1USXBJSHRjY2x4dVhIUmpiMjV6YjJ4bExteHZaeWduWTJocGJHUW5LVHRjY2x4dWZTSmRmUT09In0=
