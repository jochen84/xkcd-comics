import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  	providedIn: 'root'
})
export class ApiService {

	xkcdUrl:string = 'https://getxkcd.now.sh/api/comic?num='

	maxNumberComics:number;

	constructor(private http: HttpClient) { }

	getRandomComic() {
		let random = Math.floor(Math.random() * this.maxNumberComics+1);
		return this.http.get<any>(`${this.xkcdUrl}${random}`).toPromise();
	}

	getComic(comicId) {
		return this.http.get<any>(`${this.xkcdUrl}${comicId}`).toPromise();
	}

	setMaxNumber(){
		this.http.get<any>(`${this.xkcdUrl}latest`).subscribe(comic => {
			this.maxNumberComics = comic.num;
			console.log('Max number is set to: ' + this.maxNumberComics)
		});
	}
}
