import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-hike-details',
    templateUrl: 'hike-details.component.html'
})

export class HikeDetailsComponent implements OnInit {
    title: string;
    constructor(private _route: ActivatedRoute, private _router: Router) {}

    ngOnInit(): void {
        let id  = this._route.snapshot.params['id'];
        this.title = 'Détails de la randonnée '+ id;
    }

    goBack() {
        this._router.navigate(['/hikes']);
    }
}
