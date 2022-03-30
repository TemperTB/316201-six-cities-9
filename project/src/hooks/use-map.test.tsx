
import { MOCK_CITY } from '../mock';
import useMap from './use-map';
import {renderHook} from '@testing-library/react-hooks';


describe('Hook: useUserAnswers', () => {
  it('should return array with 3 elements', () => {

    const { result } = renderHook(() => useMap(ref, MOCK_CITY.location));

    const map = result.current;

    expect(result.current).toHaveLength(1);
    expect(map).toBeInstanceOf(Map);
  });

});

