import { usecases } from './mocks';
import { tokenizer } from './tokenizer';

describe( 'tokenizer', () => {

  it( 'should cover all use cases', () => {
    usecases.forEach( ( [ usecase, expectedResult ] ) => {

      if ( expectedResult ) {
        //str.match returns array-like object which has more
        //properties then the regular array (index, input, groups .. )
        //this is why we wrapped it in Array.from
        expect( Array.from( tokenizer( usecase ) ) ).toEqual( expectedResult );
      } else {
        expect( tokenizer( usecase ) ).toBeFalsy();
      }
    } );
  } );

} );
