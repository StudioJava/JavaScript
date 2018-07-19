// $('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();
//$("#element").text(); this is a getter
//$("#element").html("<p>I am a string in this html</p>");  this is a setter because of the argument

const title = 'My first blog post';
const content= 'This is my <strong>first</strong> Post';
// $('#blogTitlePreview').text(title);
// $('#blogContentPreview').html(content);
/*
 Blog Previewer: Getting Values from Form Fields
 html(), text(), val()
The click() method
*/
$('#flashMessage').hide();
$('#previewButton').click(function(){
   var title =  $('#blogTitleInput').val();
   var input = $('#blogContentInput').val();
   $('#blogTitlePreview').text(title);
   $('#blogContentPreview').html(input);
   $('#flashMessage').slideDown(1000).delay(3000).slideUp();
});

