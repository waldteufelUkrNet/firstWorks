$(document).ready(function(){
  $('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);

      $this.children('.detector').text('+');
    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);

      $this.parent().parent().find('li .detector').text('+');
      $this.children('.detector').text('-');
    }
  });
});