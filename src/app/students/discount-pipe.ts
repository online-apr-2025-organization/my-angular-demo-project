import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    let discountAmt = (value * args[0]) / 100;
    return value - discountAmt;
  }
}
