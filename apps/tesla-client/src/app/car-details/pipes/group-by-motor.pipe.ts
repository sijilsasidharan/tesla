import { Pipe, PipeTransform } from '@angular/core';
import { CarVariant } from '@data-models';

type GroupByMotor = { [key: string]: CarVariant[] }
@Pipe({
  name: 'groupByMotor'
})
export class GroupByMotorPipe implements PipeTransform {

  transform(variants: CarVariant[] | undefined): GroupByMotor {
    if (!variants) return {}
    return variants.reduce((prev, variant) => {
      if (!prev[variant.motor]) {
        prev = { ...prev, [variant.motor]: [] };
      }
      prev[variant.motor].push(variant);
      return prev;
    }, {} as GroupByMotor);
  }

}
