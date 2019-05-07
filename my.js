function checkPrime(n) {
    // so nguyen n < 2 khong phai la so nguyen to
    if (n < 2) {
        return false;
    }
    // check so nguyen to khi n >= 2
    let i;
    for (i = 2; i <=n-1; i++) {
        if (n % i === 0) {
            return false;

        }
    }
    return true;
}
function PrienPrime() {
    let n = parseInt(document.getElementById("number").value);
    let dem = 0;
    let i = 2;
    while (dem < n){
        if(checkPrime(i)){
            document.write(i +" ")
            dem ++;
        }
        i++;
    }
}