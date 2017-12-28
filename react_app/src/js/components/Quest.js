function R12(){
    var temp = R6(), temp2 = R6(), num;
    if(temp2 % 2 == 0){
        temp = temp - 0.5;
    }
    num = temp*2;
    return num;
}