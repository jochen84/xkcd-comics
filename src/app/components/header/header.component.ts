import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	comicTitle:string;
	comicId:number = 0;

	constructor(private apiService:ApiService) { }

	ngOnInit(): void {
		//Sets max numbers of available comics
		this.apiService.setMaxNumber();
		//Preloads a random comic
		setTimeout(() => this.apiService.setRandomComic(), 600)
	}

	clickDotsMenu() {
		//Sets the comic title and id of the loaded comic
		this.comicTitle = this.apiService.comic.title;
		this.comicId = this.apiService.comic.id;
	}

	clickBackButton() {
		//window.history.back();
	}
}
