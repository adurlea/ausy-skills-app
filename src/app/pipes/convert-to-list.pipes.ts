import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToList'
})
export class ConvertToList implements PipeTransform {
  transform(value: string) {
    if (value.length) {
      value = '<ul><li>' + value;
      value = value.replace(/,/g, '</li><li>');
      value = value + '</li></ul>';
    }

    return value;
  }
}
