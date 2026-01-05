import { CommonModule, Location, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  userId: any
  userName: any;
  dataReceived: string = '';

  constructor(
    private route: ActivatedRoute, 
    private location: Location, 
    private dataService: DataService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void { 
    this.userId = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe(params=>{
      
      if(params['id']){
        this.userId = params['id'];
        this.userName = params['name'];
      }
    });

    if( this.location.getState() ){
      const data: any = this.location.getState();
      console.log(data);
      if(data['id']){
        this.userId = data['id'];
        this.userName = data['name'];
      }
    }

    this.dataService.currentData.subscribe(data => {
      this.dataReceived = data;
    });
    
    if (isPlatformBrowser(this.platformId)) {
      console.log(localStorage.getItem('myData'));
    }

  }

}
