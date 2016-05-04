
var hashy = window.location.hash
console.log(hashy)

$(function(){
  switch(hashy) {
    case "#invalid_client_id":
      var hashr = "Value passed for client_id was invalid."
      break
    case "#bad_client_secret":
      var hashr = "Value passed for client_secret was invalid or expired."
    case "#invalid_code":
      var hashr = "Value passed for code was invalid or expired."
    case "#bad_redirect_uri":
      var hashr = "Value passed for redirect_uri did not match the redirect_uri in the original request."
    case "#invalid_array_arg":
      var hashr = "The method was passed a PHP-style array argument (e.g. with a name like foo[7]). These are never valid with the Slack API."
    case "#invalid_charset":
      var hashr = "The method was called via a POST request, but the charset specified in the Content-Type header was invalid. Valid charset names are: utf-8 iso-8859-1."
      break
    case "#invalid_form_data":
      var hashr = "The method was called via a POST request with Content-Type application/x-www-form-urlencoded or multipart/form-data, but the form data was either missing or syntactically invalid."
      break
    case "#invalid_post_type":
      var hashr = "The method was called via a POST request, but the specified Content-Type was invalid. Valid types are: application/json application/x-www-form-urlencoded multipart/form-data text/plain."
      break
    case "#missing_post_type":
      var hashr = "The method was called via a POST request and included a data payload, but the request did not include a Content-Type header."
      break
    case "#request_timeout":
      var hashr = "Your request timed out or your POST data was either missing or truncated."
      break
    case "#duplicate":
      var hashr = "Aagenda is already added to your Slack team. Why don't you add it to another team. :)"
      break

    default:
      var hashr = "We faced an unexpected error."
  }
  $("#error-msg").text(hashr)
})
