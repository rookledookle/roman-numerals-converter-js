describe("Roman", function() {

  it("should convert 1 and changes it into I", function(){
    expect(roman_converter(1)).toEqual("I");
  });

  it("should convert 5 and changes it into V", function(){
    expect(roman_converter(5)).toEqual("V");
  });

  it("should convert 10 and changes it into X", function(){
    expect(roman_converter(10)).toEqual("X");
  });

  it("should convert 50 and changes it into L", function(){
    expect(roman_converter(50)).toEqual("L");
  });

  it("should convert 100 and changes it into C", function(){
    expect(roman_converter(100)).toEqual("C");
  });

  it("should convert 500 and changes it into D", function(){
    expect(roman_converter(500)).toEqual("D");
  });

  it("should convert 1000 and changes it into M", function(){
    expect(roman_converter(1000)).toEqual("M");
  });

  it("should convert 2 and changes it into II", function(){
    expect(roman_converter(2)).toEqual("II");
  });


  it("should convert 3 and changes it into III", function(){
    expect(roman_converter(3)).toEqual("III");
  });


  it("should convert 4 and changes it into IV", function(){
    expect(roman_converter(4)).toEqual("IV");
  });


  it("should convert 6 and changes it into VI", function(){
    expect(roman_converter(6)).toEqual("VI");
  });

  
  it("should convert 7 and changes it into VII", function(){
    expect(roman_converter(7)).toEqual("VII");
  });

  
  it("should convert 8 and changes it into VIII", function(){
    expect(roman_converter(8)).toEqual("VIII");
  });


  it("should convert 9 and changes it into IX", function(){
    expect(roman_converter(9)).toEqual("IX");
  });


  it("should convert 11 and changes it into XI", function(){
    expect(roman_converter(11)).toEqual("XI");
  });


  it("should convert 20 and changes it into XX", function(){
    expect(roman_converter(20)).toEqual("XX");
  });

  it("should convert 21 and changes it into XXI", function(){
    expect(roman_converter(21)).toEqual("XXI");
  });


  it("should convert 21 and changes it into XXI", function(){
    expect(roman_converter(21)).toEqual("XXI");
  });

  it("should convert 30 and changes it into XXX", function(){
    expect(roman_converter(30)).toEqual("XXX");
  });

  it("should convert 31 and changes it into XXXI", function(){
    expect(roman_converter(31)).toEqual("XXXI");
  });

  it("should convert 32 and changes it into XXXII", function(){
    expect(roman_converter(32)).toEqual("XXXII");
  });

  it("should convert 33 and changes it into XXXIII", function(){
    expect(roman_converter(33)).toEqual("XXXIII");
  });

  it("should convert 34 and changes it into XXXIV", function(){
    expect(roman_converter(34)).toEqual("XXXIV");
  });

  it("should convert 35 and changes it into XXXV", function(){
    expect(roman_converter(35)).toEqual("XXXV");
  });

  it("should convert 36 and changes it into XXXVI", function(){
    expect(roman_converter(36)).toEqual("XXXVI");
  });

  it("should convert 37 and changes it into XXXV", function(){
    expect(roman_converter(37)).toEqual("XXXVII");
  });

  it("should convert 38 and changes it into XXXVIII", function(){
    expect(roman_converter(38)).toEqual("XXXVIII");
  });

  it("should convert 39 and changes it into XXXIX", function(){
    expect(roman_converter(39)).toEqual("XXXIX");
  });

  it("should convert 40 and changes it into XL", function(){
    expect(roman_converter(40)).toEqual("XL");
  });

  it("should convert 41 and changes it into XLI", function(){
    expect(roman_converter(41)).toEqual("XLI");
  });

  it("should convert 4000 and changes it into MMMM", function(){
    expect(roman_converter(4000)).toEqual("MMMM");
  });

  it("should convert 2000 and changes it into MM", function(){
    expect(roman_converter(2000)).toEqual("MM");
  });

  it("should convert 3492 and changes it into MMMCDXCII", function(){
    expect(roman_converter(3492)).toEqual("MMMCDXCII");
  });

  it("should convert 444 and changes it into CDXLIV", function(){
    expect(roman_converter(444)).toEqual("CDXLIV");
  });

  it("should convert 827 and changes it into DCCCXXVII", function(){
    expect(roman_converter(827)).toEqual("DCCCXXVII");
  });

  it("should convert 3848 and changes it into MMMDCCCXLVIII", function(){
    expect(roman_converter(3848)).toEqual("MMMDCCCXLVIII");
  });

  it("should convert 4999 and changes it into MMMMCMXCIX", function(){
    expect(roman_converter(4999)).toEqual("MMMMCMXCIX");
  });


});
