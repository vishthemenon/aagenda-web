$(function() {
  $('h2').each(function(){
    if(this.id == ""){
      this.id = $(this).text()
      $('#toc').append($('<li>')
                .addClass('toc-item')
                .append($('<a>')
                  .html($(this).text())
                  .attr('href', '#'+$(this).text())
                ))
      console.log($(this).text())
    }
  })
})
