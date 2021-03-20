$('h2').append(' Isso é um H2');
$('h3').append(' Isso é um H3');
$('p').append($('.introducao h1'));
$('h2').appendTo($('.introducao h1'));

$('p').html('<strong>Teste</strong>');
$('p').text('testando');
$('h1').prepend('Teste prepend');
$('p').after('<span> após </span>');
$('<span> inserir após </span>').insertAfter('p');
$('p').before('<span> antes </span>');
$('p').wrap('<span> ... </span>');


