import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy{
    @Output() sidenavToggle = new EventEmitter<void>();

    appTitle: string = 'Test'
    
    constructor() {}

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        
    }
    
    onToggleSidenavClick() {
        this.sidenavToggle.emit();
    }
}