import { Pipe, PipeTransform } from '@angular/core';
import i18next from 'i18next';
import { format } from 'timeago.js';
import '../timeago-tr.js'

@Pipe({
  name: 'timeago'
})
export class TimeagoPipe implements PipeTransform {

  transform(value: Date | string): string {
    i18next.language = 'tr';
    if (!value) return '';
    return format(new Date(value), i18next.language);
  }

}
