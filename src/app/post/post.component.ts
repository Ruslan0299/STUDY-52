import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  title = 'High-Performance Computing';
  text =
    'High-Performance Computing(HPC) is the ability to process data and perform complex calculations at high speeds. HPC is one of the most essential tools fueling the advacement of computational science.';
}
