$(function() {
  $('h2, h3').each(function(){
    if(this.id === ""){

      var lastchild = $('#toc li').last()
      console.log(lastchild.hasClass('sub-item'))


      this.id = $(this).text()

      if(this.tagName == 'H2') {
        $('#toc').append($('<li>')
        .addClass('toc-item')
        .append($('<a>')
        .html('h2 ' + $(this).text())
        .attr('href', '#'+$(this).text())))
      }
      else {
        if(lastchild.hasClass('sub-item')) {
          $(lastchild).parent().append($('<li>')
          .addClass('toc-item sub-item')
          .append($('<a>')
          .html('h3 ' + $(this).text())
          .attr('href', '#'+$(this).text())))
        }
        else {
          $(lastchild).append($('<ol type="a">')
          .append($('<li>')
          .addClass('toc-item sub-item')
          .append($('<a>')
          .html('h3 ' + $(this).text())
          .attr('href', '#'+$(this).text()))))
        }

      }
    }
  })
})
