import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DiscountPipe } from "./discount-pipe";

@Component({
  selector: 'students',
  imports: [CommonModule, DiscountPipe],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  allStudents = [
    {
      studId: 201,
      studName: 'Chithra',
      studMark: 70,
      studDOB: '2001-10-10',
      studFee: 2000,
    },
    {
      studId: 202,
      studName: 'Mithra',
      studMark: 50,
      studDOB: '2003-09-02',
      studFee: 3000,
    },
    {
      studId: 203,
      studName: 'Pavithra',
      studMark: 75,
      studDOB: '2002-11-11',
      studFee: 2500,
    },
  ];
}
