$(function() {
$('.signin').on('click', function() {
  $('.modal').fadeIn('swing')
})
})

$(function() {
$('.close').on('click', function() {
$('.modal').fadeOut('swing')
})
})

$(function() {
  $('.submit').on('click', function() {
  $("[name = 'user']").addClass('error')
  $("[name = 'pass']").addClass('error')
  })
  })

$(function() {
$("[name = 'user']").on('click', function() {
$("[name = 'user']").removeClass('error')
})
})

$(function() {
$("[name = 'pass']").on('click', function() {
$("[name = 'pass']").removeClass('error')
})
})

// $(function() {
// $('.modal').on('click', function() {
// $('.modal').fadeOut('slow')
// })
// })
