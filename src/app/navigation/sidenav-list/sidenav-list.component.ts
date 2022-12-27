import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-sidenav-list',
    templateUrl: 'sidenav-list.component.html',
    styleUrls: ['sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy{
    @Output() closeSidenav = new EventEmitter<void>();


    constructor(){}

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        
    }

    onLogoutClick(): void {
        this.onSidenavItemClick();
    }

    onSidenavItemClick(): void {
        this.closeSidenav.emit();
    }
}