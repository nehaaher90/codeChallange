
import { Component, OnInit } from '@angular/core';
import { albumDataService } from './album-dataservice';

@Component({
  selector: 'album-display',
  templateUrl: './album-display.component.html'
  //,
  //styleUrls: ['./data-display.component.css']
})
export class AlbumDisplayComponent implements OnInit {

  posts: any[] = []; // Array to hold fetched data
  error: any; // Variable to hold error message, if any

  constructor(private apiService: albumDataService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (data) => {
        this.posts = data; // Assign fetched data to posts array
        console.log("data",this.posts);
      },
      (error) => {
        this.error = error; // Assign error message
      }
    );
  }

}
