import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  	providedIn: 'root'
})
export class ApiService {

	xkcdUrl:string = 'https://getxkcd.now.sh/api/comic?num='

	maxNumberComics:number;

	serviceImg:string;
	serviceTitle:string;

	comic = {
		id: 0,
		img: '',
		title: ''
	}

	constructor(private http: HttpClient) { }

	getRandomComic() {
		let random = Math.floor(Math.random() * this.maxNumberComics+1);
		return this.http.get<any>(`${this.xkcdUrl}${random}`).toPromise();
	}

	setRandomComic() {
		let random = Math.floor(Math.random() * this.maxNumberComics+1);
		this.http.get<any>(`${this.xkcdUrl}${random}`).toPromise().then(comic => {
			this.comic.id = comic.num
			this.comic.img = comic.img;
			this.comic.title = comic.title;
		});
	}

	setMaxNumber(){
		this.http.get<any>(`${this.xkcdUrl}latest`).subscribe(comic => {
			this.maxNumberComics = comic.num;
		});
	}

	returnImgString() {
		return this.comic.img;
	}
}
