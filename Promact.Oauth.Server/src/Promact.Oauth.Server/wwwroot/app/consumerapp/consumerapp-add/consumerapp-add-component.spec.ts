﻿declare var describe, it, beforeEach, expect;
import { async, inject, TestBed, ComponentFixture } from '@angular/core/testing';
import { Provider } from "@angular/core";
import { ConsumerAppModel } from "../consumerapp-model";
import { ConsumerappAddComponent } from "../consumerapp-add/consumerapp-add.component";
import { ConsumerAppService } from "../consumerapp.service";
import { Router, ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { Md2Toast } from 'md2';
import { MockToast } from "../../shared/mocks/mock.toast";
import { MockConsumerappService } from "../../shared/mocks/consumerapp/mock.consumerapp.service";
import { MockRouter } from '../../shared/mocks/mock.router';
import { Observable } from 'rxjs/Observable';
import { RouterLinkStubDirective } from '../../shared/mocks/mock.routerLink';
import { ConsumerAppModule } from '../consumerapp.module';
import { LoaderService } from '../../shared/loader.service';
import { StringConstant } from '../../shared/stringconstant';

let promise: TestBed;
let stringConstant = new StringConstant();

describe('Consumer Add Test', () => {
    const routes: Routes = [];
    beforeEach(async(() => {
        this.promise = TestBed.configureTestingModule({
            declarations: [RouterLinkStubDirective], //Declaration of mock routerLink used on page.
            imports: [ConsumerAppModule, RouterModule.forRoot(routes, { useHash: true }) //Set LocationStrategy for component. 
            ],
            providers: [
                { provide: Router, useClass: MockRouter },
                { provide: ConsumerAppService, useClass: MockConsumerappService },
                { provide: Md2Toast, useClass: MockToast },
                { provide: ConsumerAppModel, useClass: ConsumerAppModel },
                { provide: LoaderService, useClass: LoaderService },
                { provide: StringConstant, useClass: StringConstant }
            ]
        }).compileComponents();
    }));

    it("should be defined ConsumerappAddComponent", () => {
        let fixture = TestBed.createComponent(ConsumerappAddComponent);
        let consumerappAddComponent = fixture.componentInstance;
        expect(consumerappAddComponent).toBeDefined();
    });


    it("Added consumer app", done => {
        this.promise.then(() => {
            let fixture = TestBed.createComponent(ConsumerappAddComponent); //Create instance of component            
            let consumerappAddComponent = fixture.componentInstance;
            let toast = fixture.debugElement.injector.get(Md2Toast);
            let consumerAppModel = new ConsumerAppModel();
            let expectedconsumerappname = stringConstant.consumerappname;
            consumerAppModel.Name = expectedconsumerappname;
            consumerAppModel.Description = stringConstant.description;
            consumerAppModel.CallbackUrl = stringConstant.callbackUrl;
            consumerAppModel.AuthSecret = stringConstant.authSecret;
            consumerAppModel.AuthId = stringConstant.authId;
            consumerappAddComponent.submitApps(consumerAppModel);
            expect(consumerAppModel.Name).toBe(expectedconsumerappname);
            done();
        });
    });
});