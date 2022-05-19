// let kill = +prompt ('Сколько ты убил врагов?', '');


// switch (kill) {
//     case 1:
//         alert('Вы заработали - 100 очков опыта');
//     break;
//     case 3:
//         alert('Вы заработали - 400  очков опыта');
//     break;
//     case 5:
//         alert('Вы заработали - 700  очков опыта');
//     break;
//     case 10:
//         alert('Вы заработали - 1000 очков опыта');
//     break;
//     default: 
//         alert('Вы заработали - ' + kill*100 + ' очков опыта');
// }


// Функция перевернет массив цифр

// Преобразовать число в перевернутый массив цифр
// Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
// 348597 => [7,9,5,8,4,3]
// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }

// function repeatStr(str, n) {
//     var new_str = '';
//     while (n-- > 0) new_str += str;
//     return new_str;
// }

// console.log(repeatStr('Hello!', 3)); // Hello!Hello!Hello!

// function my_function(n) {
//     let output = ""; 
//     let i = 1;
//     while ( i <= n) {
//     output += i + " "; 
//     i++;
//     }
//     console.log(output);
// }
// my_function(8)

function my_function(n) {
    return n <= 1? 1 : my_function(n - 1) + ' ' + n;
  }
  console.log(my_function(11));

// function my_function(n) {
//     if (n==1){ 
//         return n;
//     } else { 
//       return my_function(n-1) + ' ' + n;
//     }
// }
//  console.log(my_function(11));