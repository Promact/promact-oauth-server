﻿import {Component, OnInit, OnDestroy} from "@angular/core";
import { ProjectService }   from '../project.service';
import {projectModel} from '../project.model'
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: "app/project/project-edit/project-edit.html",
    directives: []
})
export class ProjectEditComponent implements OnInit, OnDestroy {
    pro: projectModel;
    private sub: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getProject(id).subscribe(pro =>
                this.pro = pro
            );
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    gotoProjects() { this.router.navigate(['/project/']); }

    editProject(pro: projectModel) {
        this.service.editProject(pro).subscribe((pro) => {
            this.pro = pro
        }, err => {

        });
    }
}