import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories;

  constructor(
    private dataService: DataService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.dataService
            .getCategories()
            .subscribe(data => this.categories = data.data)
  }

  onClick(category){
    this.route.navigate(['/products', category.catId])
  }

}
