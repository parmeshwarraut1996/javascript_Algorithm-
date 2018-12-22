module.exports = {
    checkAnagramsString(str1, str2) {
        var len1 = str1.length;
        var len2 = str2.length;
        if (len1 == len2) {
            var len = len1;

            for (var i = 0; i < len1; i++) {
                var found = 0;
                for (var j = 0; j < len2; j++) {
                    if (str1.charAt(i) ==str2.charAt(j)) {
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
           // console.log(arr[i]);
           
        }
        return arr;
    },
    primeAnagram(str1, str2) {
        var len1 = str1.length;
        var len2 = str2.length;
        var arr=[];
        var firstArr=str1.split(' ');

        var secondArr=str2.split(' ');
        firstArr.sort();
        secondArr.sort();
        if (len1 == len2) {
            var len = len1;

            for (var i = 0; i < firstArr.length; i++) {
                var found = 0;
                for (var j = 0; j <secondArr.length; j++) {
                    if (firstArr[i] ==secondArr[j]) {
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

integerBinarySearch(search,arr)
{
    var n=arr.length;
    
    var mid;
    var low;
    var high=n-1;

    while(low<=high)
    {
        mid=Math.round((low+high)/2);
        console.log(mid);
        
        if(search.compareTo(arr[mid])==0)
        {
            console.log("Element present"+search);
            
        }
        else if(search.compareTo(arr[mid])>1)
        {
            low=mid+1;
        }
        else
        {
            high=mid;
        }
    }
    if(search!=arr[mid])
    {
        console.log("not present "+search);

        
    }

}


};