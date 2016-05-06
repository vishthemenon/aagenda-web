$(function() {
  var snum = 1;
  var mnum = 1;
  $('h2, h3').each(function(){
    if(this.id === ""){
      var lastchild = $('#toc li').last()
      this.id = $(this).text()
      if(this.tagName == 'H2') {
        $('#toc').append($('<li>')
        .addClass('toc-item')
        .html(mnum +'. '+ $(this).text())
        .attr('href', '#'+$(this).text()))
        $(this).html(mnum +'. '+ $(this).text())
        mnum ++
      }
      else {
        if(lastchild.hasClass('sub-item')) {
          $(lastchild).parent().append($('<li>')
          .addClass('toc-item sub-item')
          .html((mnum-1)+ '.' +snum +'. '+$(this).text().split(':')[0])
          .attr('href', '#'+$(this).text()))
          $(this).html((mnum-1)+ '.' +snum +'. '+$(this).text())
        }
        else {
          snum = 1;
          $(lastchild).parent()
          .append($('<li>')
          .addClass('toc-item sub-item')
          .html((mnum-1)+ '.' +snum +'. '+$(this).text().split(':')[0])
          .attr('href', '#'+$(this).text()))
          $(this).html((mnum-1)+ '.' +snum +'. '+$(this).text())
        }
        snum ++;
      }
    }
  })
})

$(function(){
  $('img').each(function() {
    if(document.body.style.zoom == undefined) {
    $(this)[0].width = $(this)[0].width/2
  }
  })
})

$(function(){
  $('.toc-item').click(function() {
    window.location.href = $(this).attr('href')
  })
})
