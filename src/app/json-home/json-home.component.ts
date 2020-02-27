import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil, retry, catchError, tap } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Component({
	selector: 'app-json-home',
	templateUrl: './json-home.component.html',
	styleUrls: ['./json-home.component.css']
})
export class JsonHomeComponent implements OnInit {

	private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);
	myjson = [];

	constructor(private apiService: ApiService) {
		this.getMyjson();
		// this.getAPIjson();
	}

	ngOnInit() { }

	public getMyjson() {
		this.apiService.get().subscribe((data: []) => {

			console.log(data);
			this.myjson = data;
		});
	}

	public getAPIjson() {
		this.apiService.getAPI().subscribe((data: []) => {

			console.log(data);
			this.myjson = data;
		});
	}

}