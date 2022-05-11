import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityfilter'
})
export class ActivityfilterPipe implements PipeTransform {

  transform(publications: any, term?: any): any {
    
  } 

}
