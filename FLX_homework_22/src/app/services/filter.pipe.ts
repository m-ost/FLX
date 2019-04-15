import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../models/employee.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): IEmployee[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase().substring(0, 50);

    return items.filter( item => {
      return item.name && item.name.toLowerCase().includes(searchText) ||
             item.surname && item.surname.toLowerCase().includes(searchText);
    });
  }
}
