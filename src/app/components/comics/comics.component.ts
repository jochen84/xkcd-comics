import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-comics',
	templateUrl: './comics.component.html',
	styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

	loading:boolean = false;
	img:string;
	
	constructor(private apiService:ApiService) { 
		this.img = apiService.comic.img;
	}

	ngOnInit(): void {
		//Starts a spinner every time /comic is loaded
		this.loading = true;
		setTimeout(() => this.loading = false, 2000);
	}
}
