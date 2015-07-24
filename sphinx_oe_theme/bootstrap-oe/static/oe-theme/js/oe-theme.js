
// Function that resizes the title to a appropriate size
$( document ).ready(function () {
  var element = $('.logo-block2');
  resize_title(element);
});

function resize_title(element){
  console.log(element);
  var title = element.find('h1')[0];
  console.log(title);
  var span = element.find('div.logo-block-title')[0];
  console.log(span);
  var fontsize = $(title).css('font-size');
  console.log(fontsize);
  $(title).css('font-size', parseFloat(fontsize) - 1);
  var padding = $(title).css('padding-top');
  $(title).css('padding-top', parseFloat(padding) + 0.5);
  console.log($(title).width(), $(span).width());
  if ($(title).width() > $(span).width()){
    resize_title(element);
  }
};