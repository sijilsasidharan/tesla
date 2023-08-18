import { Pipe, PipeTransform } from '@angular/core';
import { CarVariant } from '@data-models';

@Pipe({
  name: 'activeVariant'
})
export class ActiveVariantPipe implements PipeTransform {

  transform(activeVariantId: string, variants: CarVariant[] | undefined): CarVariant {
    return variants?.find(variant => variant.id === activeVariantId) as CarVariant;
  }

}
