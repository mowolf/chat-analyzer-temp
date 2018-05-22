export const tokenizer = function ( content ) {
  let explainedPattern = [

    //might start with [
    "(\\[?)",

    /*
    * matches two occurrences of (1-4 digits followed by single character (a dash '-' or slash '/' or a dot '.')
    * representing day and month,  followed by 2-4 digits representing the year), this means it will match all the following:
    *
    * single day, single month, year at the end
    * - 1.1.18
    * - 1.1.218
    * - 1.1.2018
    *
    * double day, single month, year at the end
    * - 12.1.18
    * - 12.1.218
    * - 12.1.2018
    *
    * double day, double month, year at the end
    * - 12.12.18
    * - 12.12.218
    * - 12.12.2018
    *
    * single day, single month, year at the beginning
    * - 18.1.1
    * - 218.1.1
    * - 2018.1.1
    *
    * double day, single month, year at the beginning
    * - 18.12.1
    * - 218.12.1
    * - 2018.12.1
    *
    * double day, double month, year at the beginning
    * - 18.12.12
    * - 218.12.12
    * - 2018.12.12
    *
    * single day, single month, year at the end
    * - 1-1-18
    * - 1-1-218
    * - 1-1-2018
    *
    * double day, single month, year at the end
    * - 12-1-18
    * - 12-1-218
    * - 12-1-2018
    *
    * double day, double month, year at the end
    * - 12-12-18
    * - 12-12-218
    * - 12-12-2018
    *
    * single day, single month, year at the beginning
    * - 18-1-1
    * - 218-1-1
    * - 2018-1-1
    *
    * double day, single month, year at the beginning
    * - 18-12-1
    * - 218-12-1
    * - 2018-12-1
    *
    * double day, double month, year at the beginning
    * - 18-12-12
    * - 218-12-12
    * - 2018-12-12
    *
    * single day, single month, year at the end
    * - 1/1/18
    * - 1/1/218
    * - 1/1/2018
    *
    * double day, single month, year at the end
    * - 12/1/18
    * - 12/1/218
    * - 12/1/2018
    *
    * double day, double month, year at the end
    * - 12/12/18
    * - 12/12/218
    * - 12/12/2018
    *
    * single day, single month, year at the beginning
    * - 18/1/1
    * - 218/1/1
    * - 2018/1/1
    *
    * double day, single month, year at the beginning
    * - 18/12/1
    * - 218/12/1
    * - 2018/12/1
    *
    * double day, double month, year at the beginning
    * - 18/12/12
    * - 218/12/12
    * - 2018/12/12
    * */
    "((\\d{1,4}(\\-|\\/|\\.){1}){2}\\d{1,4})",

    /*
    * separator between date and time with one occurrence for one of:
    * - a space followed by 1-3 characters then another space
    * - a comma followed by a space
    * - any character followed by a space
    * */

    "((\\s.{1,3}\\s|\\s)|,\\s|\\.\\s){1}",

    // a group for date and time
    "(",

    /*
    * match time
    * match 1-2 digits followed by a colon ':' (hours), followed by two digits (minutes),
    * followed by an optional (colon followed by two digits) which are the seconds
    * */
    "((\\d{1,2}\\:)\\d{2}(:\\d{2})?)",

    /*
    * day/night
    * */
    "(\\s(a|p)m?|\\s(A|P)?M|\\s(a|p)?\\.(\\s)?\\m.)?",

    ")",

    /*
    * it might end with one of:
    * - ']' followed by a space
    * - a space followed by a dash '-' followed by another space
    * - a colon ':'
    * */
    "(\\]\\s|\\s\\-\\s|\\:)"
  ].join( "" );

  let re = new RegExp( explainedPattern, "g" );
  return re.exec( content )
}
