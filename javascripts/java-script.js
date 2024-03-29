// document.addEventListener("DOMContentLoaded", function(){
//     alert("MEOW");
//     alert( 1+2+3+5 );
//     alert( "1+2+3+5" );
//     let message;
//     message = 'Hello!' ;
//     alert(message);


//     let user = "Iwan";
//     let age = 24;
//     let eoe = 'hi Dessssigner';
//     console.log(eoe + user + age);


//     let str = "привет";
//     let phrase = `обратные кавычки позволяют встаивать переменные ${str}`;
//     alert(phrase);


//     let rea = 4 > 1;
//     alert( rea ); // true результатом сравнения будет "да";


//     let x = 5;
//     let y = 10;
//     let ater = x > y;
//     alert( ater ); // false

//     let tem = 25;
//     let isHot = tem > 30 ? "Горячо": "Не горячо";
//     alert( isHot ); // Не горячо


//     let age = prompt('Сколько тебе лет?', "xbckj");
//     alert(`Тебе ${age} лет!`); // тебе 100 лет



//     let uAge = prompt('Введите ваш возраст');
//     let ear = parseInt(uAge) + 1;
//     alert("В следущем году вам будет" + ear + "лет."); // тебе 100 лет



//     alert( 0 == false); // true не строгое равенство
//     alert(10-10 === false); // false строгое равенство




//     let year = prompt('Введите число:', 'возможный ответ');
//     if( year == 2015){
//         alert('правда');
//     } else {
//         alert('ойойой');
//     }


//     let magic = prompt('сколько тебе лет?');
//     let period = (magic == 200);
//     if( period ){
//         alert('дада');
//     } else {
//         alert('нетнет');
//     }


//     let frog = prompt('В каком веке ты родился?');
//     if(frog > 21){
//         alert('молодец');
//     } if else( frog == 20) {
//         alert('vjkjltw!')
//     } else {
//         alert('врёшь');
//     }


//     let er = {
//         name: 'VASILISA'
//         age: 18;
//     };
//     let key = prompt("что?", 'name')



//     let fruit = prompt('какой фрукт купить?','');
//     let bag = {
//         [fruit]: 5,
//         orange : 7,

//         // имя взято из переменной
//     };
//     alert( bag.apple );
//     alert( bag.orange ); // 5, если fruit='apple'



//     document.getElementById('palter').innerHTML = 'мяу';

//     let element = document.querySelectorAll('.ultra');

//     element.forEach(function(p){
//         p.innerHTML = 'мур';
//         p.style.backgroundColor = 'pink';
//     });
// });




// JQUERY ⛑️

// $(document).ready(function(){
//     $('.demo').html('woww') ;// найди класс демо и добавь какойто текст

//     $('.box').click(function(){
//         $(this).toggleClass('grey')
//     });   // найди коробочку и при клике будет проигрываться эта функция 

//     $('.add').click(function(){
//         $('.magic').addClass('pink');
//     });

//     $('.remove').click(function(){
//         $('.magic').removeClass('pink',);
//     });

//     $('.toggle').click(function(){
//         $('.magic').toggleClass('blue');
//     });



//     $('.visibalone').hover(function(){
//         $('.visibalone').addClass('pink'); // при наведении на коробочку она меняет цвет на пинк
//     });

//     $('.visibalone').click(function(){
//         $(this).css({
//             width: function(index, value){
//                 return parseFloat(value) + 50;
//             },
//                 height: function(index, value){
//                     return parseFloat(value) + 50;
//                 }
//         }); // при клике происходит 
//     });

//     $('.blue').click(function(){
//         $('.pink').toggleClass('block')
//     });


//     $('.green').click(function(){
//         setTimeout(function(){
//             $('.blue').toggleClass('block');
//         }, 1000);

//     });


// });

$(document).ready(function() {

//  2 экран пазл
    $('.kvadrat1, .kvadrat2, .kvadrat3, .kvadrat4, .kvadrat5').draggable();
    $('.kvadrat').droppable();

  

    // $('.nazad10').click(function() {
    //     $('.secondscreen').addClass('none1');
    //     $('.firstscreen').removeClass('none1');
    //   });

// 1 экран переходы
      // $('.frame2').click(function() {
      //   $('.firstscreen').addClass('none1');
      //   $('.secondscreen').removeClass('none1');
      // });

      $('.frame2').click(function(){
        $('.firstscreen').css({display: 'none'});
        $('.secondscreen').css({display: 'block'});
    });

    $('.frame3').click(function(){
      $('.firstscreen').css({display: 'none'});
      $('.thirdsection').css({display: 'block'});
  });

  $('.frame4').click(function(){
    $('.firstscreen').css({display: 'none'});
    $('.fourthsection').css({display: 'block'});
});

$('.frame5').click(function(){
  $('.firstscreen').css({display: 'none'});
  $('.fifthsection').css({display: 'block'});
});

$('.frame6').click(function(){
  $('.firstscreen').css({display: 'none'});
  $('.sixthsection').css({display: 'block'});
});

$('.nazad10').click(function(){
  $('.secondscreen').css({display: 'none'});
  $('.firstscreen').css({display: 'block'});
});
$('.nazad25').click(function(){
  $('.thirdsection').css({display: 'none'});
  $('.firstscreen').css({display: 'block'});
});
$('.nazad50').click(function(){
  $('.fourthsection').css({display: 'none'});
  $('.firstscreen').css({display: 'block'});
});
$('.nazad75').click(function(){
  $('.fifthsection').css({display: 'none'});
  $('.firstscreen').css({display: 'block'});
});
$('.nazad100').click(function(){
  $('.sixthsection').css({display: 'none'});
  $('.firstscreen').css({display: 'block'});
});

// шахматы
$('.framew').click(function(){
  $('.white img').css({display: 'block'});
});

$('.frameb').click(function(){
  $('.black img').css({display: 'block'});
});


// тарелки
$('.plate1').click(function(){
  $('.plate1').css({opacity: 0});
  $('.plate2').css({display: 'flex', opacity: 1});
});

$('.plate2').click(function(){
  $('.plate2').css({opacity: 0});
  $('.plate3').css({display: 'flex', opacity: 1});
});



//  рисую

const canvas = document.getElementById('drawing');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
    ctx.strokeStyle = "#B30000";
    ctx.lineWidth = 1;
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);  

});