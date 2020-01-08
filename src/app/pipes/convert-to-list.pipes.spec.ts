import { ConvertToList } from './convert-to-list.pipes';


describe('ConvertToList', () => {
  let component: ConvertToList;

  beforeEach(() => {
    component = new ConvertToList();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transform pipe', () => {
    const valueToTransform = 'Java,JEE';
    const valueTransformed = '<ul><li>Java</li><li>JEE</li></ul>';
    expect(component.transform(valueToTransform)).toEqual(valueTransformed);
  });
});
