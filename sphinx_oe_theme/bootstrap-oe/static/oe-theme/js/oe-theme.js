
// Function that resizes the title to a appropriate size
$( document ).ready(function () {
  var element = $('.logo-block2');
  resize_title(element);
});

function resize_title(element){
  var title = element.find('h1')[0];
  var span = element.find('div.logo-block-title')[0];
  var fontsize = $(title).css('font-size');
  $(title).css('font-size', parseFloat(fontsize) - 1);
  var padding = $(title).css('padding-top');
  $(title).css('padding-top', parseFloat(padding) + 0.5);
  if ($(title).width() > $(span).width()){
    resize_title(element);
  }
};