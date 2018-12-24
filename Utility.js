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
            if(arr[i]!=undefined)
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
            while (temp <arr[j] && j >= 0) {
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
    
   



};