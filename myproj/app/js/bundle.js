(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(function () {
  var doc_h = $(window).height();
  $(window).scroll(function () {
    if ($(window).scrollTop() > doc_h / 2) {
      $('#fixed').css('display', 'block');
    } else {
      $('#fixed').css('display', 'none');
    }

    ;
  });
  $('#fixed').click(function () {
    $(window).scrollTop(0);
  });
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9teXByb2ovc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxDQUFDLFlBQVU7QUFDVCxNQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsTUFBVixFQUFaO0FBRUksRUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsTUFBVixDQUFpQixZQUFVO0FBQzFCLFFBQUksQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLFNBQVYsS0FBd0IsS0FBSyxHQUFDLENBQWxDLEVBQ0E7QUFDSSxNQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxHQUFaLENBQWdCLFNBQWhCLEVBQTJCLE9BQTNCO0FBQ0gsS0FIRCxNQUlJO0FBQ0EsTUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVksR0FBWixDQUFnQixTQUFoQixFQUEyQixNQUEzQjtBQUNDOztBQUFBO0FBQ04sR0FSQTtBQVVKLEVBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0IsWUFBVTtBQUN4QixJQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxTQUFWLENBQW9CLENBQXBCO0FBQ04sR0FGRTtBQUdGLENBaEJBLENBQUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZnVuY3Rpb24oKXtcclxuICAgdmFyIGRvY19oID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICBcclxuICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXsgIFxyXG4gICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBkb2NfaC8yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJCgnI2ZpeGVkJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICQoJyNmaXhlZCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgIH0gKTsgXHJcbiAgICAgIFxyXG4gICAkKCcjZml4ZWQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcCgwKTtcclxufSk7ICAgICAgICAgICAgICAgIFxyXG59KTsiXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSndjbTlxWldOMGN5OXRlWEJ5YjJvdmMzSmpMMnB6TDJGd2NDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN08wRkRRVUVzUTBGQlF5eERRVUZETEZsQlFWVTdRVUZEVkN4TlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlJDeERRVUZFTEVOQlFWVXNUVUZCVml4RlFVRmFPMEZCUlVrc1JVRkJRU3hEUVVGRExFTkJRVU1zVFVGQlJDeERRVUZFTEVOQlFWVXNUVUZCVml4RFFVRnBRaXhaUVVGVk8wRkJRekZDTEZGQlFVa3NRMEZCUXl4RFFVRkRMRTFCUVVRc1EwRkJSQ3hEUVVGVkxGTkJRVllzUzBGQmQwSXNTMEZCU3l4SFFVRkRMRU5CUVd4RExFVkJRMEU3UVVGRFNTeE5RVUZCTEVOQlFVTXNRMEZCUXl4UlFVRkVMRU5CUVVRc1EwRkJXU3hIUVVGYUxFTkJRV2RDTEZOQlFXaENMRVZCUVRKQ0xFOUJRVE5DTzBGQlEwZ3NTMEZJUkN4TlFVbEpPMEZCUTBFc1RVRkJRU3hEUVVGRExFTkJRVU1zVVVGQlJDeERRVUZFTEVOQlFWa3NSMEZCV2l4RFFVRm5RaXhUUVVGb1FpeEZRVUV5UWl4TlFVRXpRanRCUVVORE96dEJRVUZCTzBGQlEwNHNSMEZTUVR0QlFWVktMRVZCUVVFc1EwRkJReXhEUVVGRExGRkJRVVFzUTBGQlJDeERRVUZaTEV0QlFWb3NRMEZCYTBJc1dVRkJWVHRCUVVONFFpeEpRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRkVMRU5CUVVRc1EwRkJWU3hUUVVGV0xFTkJRVzlDTEVOQlFYQkNPMEZCUTA0c1IwRkdSVHRCUVVkR0xFTkJhRUpCTEVOQlFVUWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlncGUyWjFibU4wYVc5dUlISW9aU3h1TEhRcGUyWjFibU4wYVc5dUlHOG9hU3htS1h0cFppZ2hibHRwWFNsN2FXWW9JV1ZiYVYwcGUzWmhjaUJqUFZ3aVpuVnVZM1JwYjI1Y0lqMDlkSGx3Wlc5bUlISmxjWFZwY21VbUpuSmxjWFZwY21VN2FXWW9JV1ltSm1NcGNtVjBkWEp1SUdNb2FTd2hNQ2s3YVdZb2RTbHlaWFIxY200Z2RTaHBMQ0V3S1R0MllYSWdZVDF1WlhjZ1JYSnliM0lvWENKRFlXNXViM1FnWm1sdVpDQnRiMlIxYkdVZ0oxd2lLMmtyWENJblhDSXBPM1JvY205M0lHRXVZMjlrWlQxY0lrMVBSRlZNUlY5T1QxUmZSazlWVGtSY0lpeGhmWFpoY2lCd1BXNWJhVjA5ZTJWNGNHOXlkSE02ZTMxOU8yVmJhVjFiTUYwdVkyRnNiQ2h3TG1WNGNHOXlkSE1zWm5WdVkzUnBiMjRvY2lsN2RtRnlJRzQ5WlZ0cFhWc3hYVnR5WFR0eVpYUjFjbTRnYnlodWZIeHlLWDBzY0N4d0xtVjRjRzl5ZEhNc2NpeGxMRzRzZENsOWNtVjBkWEp1SUc1YmFWMHVaWGh3YjNKMGMzMW1iM0lvZG1GeUlIVTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaU3hwUFRBN2FUeDBMbXhsYm1kMGFEdHBLeXNwYnloMFcybGRLVHR5WlhSMWNtNGdiMzF5WlhSMWNtNGdjbjBwS0NraUxDSWtLR1oxYm1OMGFXOXVLQ2w3WEhKY2JpQWdJSFpoY2lCa2IyTmZhQ0E5SUNRb2QybHVaRzkzS1M1b1pXbG5hSFFvS1R0Y2NseHVJQ0FnWEhKY2JpQWdJQ0FnSUNBa0tIZHBibVJ2ZHlrdWMyTnliMnhzS0daMWJtTjBhVzl1S0NsN0lDQmNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0pDaDNhVzVrYjNjcExuTmpjbTlzYkZSdmNDZ3BJRDRnWkc5algyZ3ZNaWxjY2x4dUlDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNRb0p5Tm1hWGhsWkNjcExtTnpjeWduWkdsemNHeGhlU2NzSUNkaWJHOWpheWNwT3lBZ0lDQWdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCbGJITmxlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWtLQ2NqWm1sNFpXUW5LUzVqYzNNb0oyUnBjM0JzWVhrbkxDQW5ibTl1WlNjcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOU8xeHlYRzRnSUNBZ0lDQjlJQ2s3SUZ4eVhHNGdJQ0FnSUNCY2NseHVJQ0FnSkNnbkkyWnBlR1ZrSnlrdVkyeHBZMnNvWm5WdVkzUnBiMjRvS1h0Y2NseHVJQ0FnSUNBZ0lDUW9kMmx1Wkc5M0tTNXpZM0p2Ykd4VWIzQW9NQ2s3WEhKY2JuMHBPeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNjbHh1ZlNrN0lsMTkifQ==
