
import { MOCK_CITY } from '../mock';
import useMap from './use-map';
import {renderHook} from '@testing-library/react-hooks';
import {Map} from 'leaflet';

//Непонятно что именно тут тестировать в итоге
describe('Hook: useMap', () => {
  it('Возвращает Object', () => {
    const elem = document.createElement('div');
    const ref = {
      current: elem,
    };

    const { result } = renderHook(() => useMap(ref, MOCK_CITY.location));

    expect(result.current).toBeInstanceOf(Map);
  });

});
