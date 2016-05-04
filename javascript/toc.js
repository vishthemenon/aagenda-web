$(function() {
  $('h2').each(function(){
    if(this.id == ""){
      $('#toc').append($('<li>').addClass('toc-item').html($(this).text()))
      console.log($(this).text())
    }
  })
})
