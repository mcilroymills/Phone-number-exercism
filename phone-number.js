var PhoneNumber = function (numberIn) {

  this.numberIn = numberIn;
  this.newNumber = numberIn.replace(/[^0-9]/g, "");
  //console.log(this.newNumber);
  this.number = function() {
    if (this.newNumber.length > 11 || this.newNumber.length < 10)
      return '0000000000';
    else if (this.newNumber.length === 11 && this.newNumber[0] !== '1')
      return '0000000000';
    else if (this.newNumber.length === 11 && this.newNumber[0] === '1')
      return  this.newNumber.substring(1);
    else
      return this.newNumber;
  };
  this.areaCode = function() {
    return this.newNumber.slice(0, 3);
  };
  this.toString = function() {
    var array  = this.newNumber.split("");
    //console.log(array);

    if (array.length === 10) {
      array.splice(0,0, '(');//(000)0000000
      array.splice(4, 0, ')');
      array.splice(5, 0, ' ');
      array.splice(9, 0, '-');
    }
    else if (array.length === 11 && array[0] === '1') {
      this.newNumber = this.newNumber.substring(1);
      array  = this.newNumber.split("");
      //console.log(array);
      array.splice(0,0, '(');//(000)0000000
      //console.log(array);
      array.splice(4, 0, ')');
      array.splice(5, 0, ' ');
      array.splice(9, 0, '-');
    }
    else
      return '(000) 000-0000';

    return array.join("");

    };

};
 var phone = new PhoneNumber ("17346581807");

 //console.log(phone.toString());



 module.exports = PhoneNumber;

