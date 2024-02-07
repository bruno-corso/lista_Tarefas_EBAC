$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        let tarefa = $('form input').val()
        let novoItem = $(`<li>${tarefa}</li>`)
        $(novoItem).appendTo('ul');
        $('form input').val('')
    })

    $('ul').on('click','li',function() {
        $(this).toggleClass("risco");
      });
})