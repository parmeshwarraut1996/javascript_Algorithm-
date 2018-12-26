const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
module.exports = {
    /**
* Aim: One   string   is   an   anagram   of   another   if   the   second   is   simply   a
rearrangement   of   the   first.   For   example,   'heart'   and   'earth'   are   anagrams... .
* @author Parmeshwar Raut
* @version v10.11.0
* @since 22/12/2018
*/

    checkAnagramsString(str1, str2) {
        var len1 = str1.length;
        var len2 = str2.length;
        if (len1 == len2) {
            var len = len1;

            for (var i = 0; i < len1; i++) {
                var found = 0;
                for (var j = 0; j < len2; j++) {
                    if (str1.charAt(i) == str2.charAt(j)) {
                        found = 1;
                        break;

                    }
                }
                if (found == 0) {
                    var notFound = 1
                    break;
                }
            }
            if (notFound == 1) {
                console.log("Entered string are not Anagram");

            }
            else {
                console.log("Entered string  Anagram");

            }


        }
    },
    /**
* Aim:Take   a   range   of   0   ­   1000   Numbers   and   find   the   Prime   numbers   in   that   range.
* @author Parmeshwar Raut
* @version v10.11.0
* @since 22/12/2018
*/


    primeNumbers() {
        console.log("Prime numbers are");
        var arr = [];
        for (var i = 0; i <= 1000; i++) {
            if (i == 2 || i == 3 || i == 5 || i == 7) {
                //console.log(i);

            }
            else if (i % 2 != 0 && i % 3 != 0 && i % 5 && i % 7 != 0) {
                arr.push(i);
                // console.log(i);

            }
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != undefined)
                console.log(arr[i]);

        }
        // return arr;
    },
    /**
* Aim:Extend   the   above   program   to   find   the   prime   numbers   that   are   Anagram   and
Palindrome
* @author Parmeshwar Raut
* @version v10.11.0
* @since 22/12/2018
*/

    primeAnagram(str1, str2) {
        var len1 = str1.length;
        var len2 = str2.length;
        var arr = [];
        var firstArr = str1.split(' ');

        var secondArr = str2.split(' ');
        firstArr.sort();
        secondArr.sort();
        if (len1 == len2) {
            var len = len1;

            for (var i = 0; i < firstArr.length; i++) {
                var found = 0;
                for (var j = 0; j < secondArr.length; j++) {
                    if (firstArr[i] == secondArr[j]) {
                        found = 1;
                        break;

                    }
                }
                if (found == 0) {
                    var notFound = 1
                    break;
                }
            }
            if (notFound == 1) {
                // arr.push(i);
                //arr.push(j);



            }

            else {
                //  console.log(" Anagram");
                console.log(str1 + '-' + str2);
            }


        }
    },

    /**
* Aim:binarySearch   method   for   integer
* @author Parmeshwar Raut
* @version v10.11.0
* @since 24/12/2018
*/

    binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let mid;
        while (left <= right) {
            mid = left + Math.round((right - left) / 2);
            if (arr[mid] == target) {
                console.log("Element  Present in array = ", target);
                break;
            }
            else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if (target != arr[mid]) {
            console.log("Element not present  in array");


        }

    },
    /**
* Aim:binarySearch   method   for  string
* @author Parmeshwar Raut
* @version v10.11.0
* @since 24/12/2018
*/


    binarySearchForString(arr, target) {
        console.log(target);
        console.log(arr);

        let left = 0;
        let right = arr.length - 1;
        let mid;
        while (left <= right) {
            mid = left + Math.floor((right - left) / 2);
            if (arr[mid] === target) {
                console.log("Srting  Present in array = ", target);
                break;
            }
            else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if (target != arr[mid]) {
            console.log("string not present  in array");


        }

    },

    /**
* Aim:Insertion sort   method   for   integer
* @author Parmeshwar Raut
* @version v10.11.0
* @since 24/12/2018
*/

    insertionSort(n, arr) {
        var temp;
        var j;

        for (i = 1; i <= n; i++) {
            temp = arr[i];
            j = i - 1;
            while (temp < arr[j] && j >= 0) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = temp;

        }

        console.log("Elments are sort=" + arr);


    },

    /**
* Aim:Insertion sort   method   for   string
* @author Parmeshwar Raut
* @version v10.11.0
* @since 24/12/2018
*/

    insertionSortForString(n, arr) {

        var temp;
        var j;

        for (i = 1; i <= n; i++) {
            temp = arr[i];
            j = i - 1;
            while (temp < arr[j] && j >= 0) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = temp;

        }

        console.log("Strings are sort = " + arr);


    },

    /**
* Aim:Bubble sort   method   for  integer
* @author Parmeshwar Raut
* @version v10.11.0
* @since 24/12/2018
*/
    bubbleSort(n, arr) {
        var j;
        var temp;
        for (i = 1; i <= n; i++) {
            for (j = 0; j <= n - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        console.log("Element's are sorted = " + arr);

    },
    /**
* Aim:Bubble sort   method   for  integer
* @author Parmeshwar Raut
* @version v10.11.0
* @since 24/12/2018
*/
    bubbleSortString(n, arr) {
        var j;
        var temp;
        for (i = 1; i <= n; i++) {
            for (j = 0; j <= n - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        console.log("String's are sorted = " + arr);

    },

    /**
* Aim: takes   a   command­line   argument   N,   asks   you   to   think   of   a   number
between   0   and   N­1,   where   N   =   2^n,   and   always   guesses   the   answer   with   n
questions.
* @author Parmeshwar Raut
* @version v10.11.0
* @since 24/12/2018
*/
    findNumber(n) {
        var high=parseInt(Math.pow(2,n));
        var low=0;
        console.log("keep a number "+parseInt(high-1));
        var gnum=this.search(low,high);
        console.log("Your number is = "+gnum);
                

    },
    search(low,high)
    {
        if(high-low===1)
        {
            console.log(low);
            
        }
         var mid=low+(high-low)/2;
         console.log("mid"+mid);
         userInput.question("this is your number ",(answer)=>{
             if(answer===1)
             {
                 console.log(search(low,mid));
                 
             }else
             {
                 console.log(mid,high);
                 
             }
         });

         
    },




    /**
* Aim: There   is   1,   2,   5,   10,   50,   100,   500   and   1000   Rs   Notes   which   can   be
returned   by   Vending   Machine.   Write   a   Program   to   calculate   the   minimum   number
of   Notes   as   well   as   the   Notes   to   be   returned   by   the   Vending   Machine   as   a
Change
* @author Parmeshwar Raut
* @version v10.11.0
* @since 26/12/2018
*/

    vending(amount) {
        var arr = [1, 2, 5, 10, 50, 100, 500, 1000];
        var len = arr.length - 1;

        notes(amount);
        function notes(amount) {
            if (amount > 0) {
                var a = Math.floor(amount / arr[len])
                console.log("Amount " + amount + " notes :- " + arr[len] + " Count :- " + a);
                amount = amount % arr[len];
                len--;
                notes(amount);

            }

        }

    },




    /**
* Aim: Find day of week.

* @author Parmeshwar Raut
* @version v10.11.0
* @since 26/12/2018
*/
    dayOfWeek(d, m, y, ) {
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
        var m0 = m + 12 * Math.floor(Math.floor(14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor(31 * m0 / 12)) % 7;
        d0 = parseInt(d0);

        switch (d0) {

            case 0:
                console.log("Sunday");
                break;
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Thuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;


        }
    },

    /**
   * Aim: To   the   Util   Class   add     temperaturConversion   static   function,   given   the   temperature
   in   fahrenheit   as   input   outputs   the   temperature   in   Celsius   or   viceversa   using   the
   formula.
    Celsius to Fahrenheit:(°C × 9/5)+32=   °F
    Fahrenheit to Celsius:(°F − 32)x5/9=   °C
   * @author Parmeshwar Raut
   * @version v10.11.0
   * @since 26/12/2018
   */
    temperaturConversion(f, c) {

        var fahrenheit = (c * 9 / 5) + 32;
        var Celsius = (f - 32) * 5 / 9;
        console.log("Temperature in Fahrenheit = " + fahrenheit + " F");
        console.log("Temperature in celsius = " + Celsius + " C");

    },

    /**
   * Aim: Write   a   Util   Static   Function   to   calculate     monthlyPayment   that   reads   in   three
command­line   arguments   P,   Y,   and   R   and   calculates   the   monthly   payments   you
would   have   to   make   over   Y   years   to   pay   off   a   P   principal   loan   amount   at   R   per   cent
interest   compounded   monthly.   The   formula   is   The   formula   is

        payment=pr/1-(1+r)^(-n) where n=12*y,r=R/(12*100)
   * @author Parmeshwar Raut
   * @version v10.11.0
   * @since 26/12/2018
   */
    monthlyPayment(P, Y, R) {

        var n = 12 * Y;
        var r = R / (12 * 100);

        var payment = (P * r) / (1 - (Math.pow((1 + r), (-n))));
        console.log("MontlyPayment = " + payment);

    },
    /**
  * Aim:Write   a   static   function     sqrt     to   compute   the   square   root   of   a   nonnegative   number   c
        given   in   the   input   using   Newton's   method:
­       initialize   t   =   c
­       replace   t   with   the   average   of   c/t   and   t
­       repeat   until   desired   accuracy   reached   using   condition   Math.abs(t   ­   c/t)   >   epsilon*t
        where   epsilon   =  1e-­15 ;
  * @author Parmeshwar Raut
  * @version v10.11.0
  * @since 26/12/2018
  */

    sqrtOfNumber(c) {
        var t = c;
        var epsilon = 1e-15;
        while (Math.abs(t - c / t) > epsilon * t) {
            t = (c / t + t) / 2.0;
        }

        console.log("Square root of number " + c + " is = " + t);


    },

    /**
* Aim:convert given decimal number into binary.
* @author Parmeshwar Raut
* @version v10.11.0
* @since 26/12/2018
*/

    toBinary(num) {
        var n = num;
        var a = new Array();
        var b = new Array();
        var i = 0;
        var rem = new Array();

        var str = " ";
        while (n > 0) {

            rem[i] = parseInt(n % 2);
            a.push(parseInt(rem[i]));
            n = parseInt(n / 2);
            i++;
        }

        while (i < 8) {
            a[i] = 0;
            i++;


        }
        var size = i;

        for (i = a.length - 1; i >= 0; i--) {
            console.log(a[i]);
            str += a[i]

        }
        return str;
        //var len2 = a.length;


    },



    /**
* Aim:convert given decimal number into binary then swap 4 nibble at last then calculate decimal number.
* @author Parmeshwar Raut
* @version v10.11.0
* @since 26/12/2018
*/

    swap(num) {
        var input = this.toBinary(num);

        var str1 = "";
        var str2 = "";
        var str3 = "";
        var i;
        var len = input.length - 1;
        // console.log(len);

        for (i = 0; i <= len / 2; i++) {

            str1 += input[i];
            // str1 +=i;

        }

        console.log("First four bit of  given binary number =" + str1);
        for (i = len / 2; i < len; i++) {

            str2 += input[i];
            // str1 +=i;

        }

        console.log("Last four bit of  given binary number = " + str2);
        str2 += str1
        var l = str2.length - 1;
        var decimal = 0;
        var index = 0;
        console.log("After swaping binary number = " + str2);
        // console.log(l);

        for (i = l; i >= 0; i--) {
            if (str2.charAt(i) == '1') {
                decimal = parseInt(decimal + (Math.pow(2, index)));
            } index++;
        }
        console.log("Decimal of above binary number is = " + decimal);

    },




};