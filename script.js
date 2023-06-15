// complete the given function

function palindrome(str){
 let left = 0, right = str.length - 1;
    while (left < right) {
        if (!isAlphaNumeric(str[left]))
            left++;
        else if (!isAlphaNumeric(str[right]))
            right--;
        else if (str[left].toLowerCase() !== str[right].toLowerCase())
            return false;
        else {
            left++;
            right--;
        }
    }
    return true;
}
function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
module.exports = palindrome
