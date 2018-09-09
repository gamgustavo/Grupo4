webpackJsonp([28],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalWeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weather__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HttpErrorResponse } from '@angular/common/http';
var LocalWeatherPage = (function () {
    function LocalWeatherPage(navCtrl, weatherProvider, storage) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.storage = storage;
        this.locationList = [
            { city: 'Los Angeles', state: 'CA' },
            { city: 'Miami', state: 'FL' },
            { city: 'New York', state: 'NY' },
            { city: 'Seattle', state: 'WA' }
        ];
    }
    LocalWeatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    state: 'NY',
                    city: 'New York'
                };
            }
            _this.getWeather(_this.location);
        });
    };
    LocalWeatherPage.prototype.getWeather = function (location) {
        var _this = this;
        if (typeof location === 'string') {
            this.location = JSON.parse(location);
            console.log(this.location);
        }
        else {
            this.location = location;
        }
        this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    return LocalWeatherPage;
}());
LocalWeatherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-local-weather',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\local-weather\local-weather.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Local Weather</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="common-bg">\n\n  <ion-card class="full-width" no-margin margin-bottom>\n\n    <ion-card-content no-padding>\n\n\n\n      <ion-item>\n\n        <ion-label class="text-1x bold">Select Local</ion-label>\n\n        <ion-select [(ngModel)]="location" (ionChange)="getWeather(location)">\n\n          <ion-option *ngFor="let location of locationList" [value]="location">{{ location.city }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-grid class="card" padding *ngIf="weather">\n\n    <ion-row>\n\n        <ion-col width-50 offset-25>\n\n            <h2 class="location text-dark">{{weather.display_location.full}}</h2>\n\n            <div class="icon"><img src="{{weather.icon_url}}" alt="weather"></div>\n\n            <h3 class="desc">{{weather.weather}}</h3>\n\n            <h1 class="temp">{{weather.temp_c}}&deg;</h1>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col width-100>\n\n            <ion-list>\n\n\n\n                <ion-item>\n\n                <strong>Temp:</strong> {{weather.temperature_string}}\n\n                </ion-item>\n\n                 <ion-item>\n\n                    <strong>Relative Humidity:</strong> {{weather.relative_humidity}}\n\n                </ion-item>\n\n                 <ion-item>\n\n                    <strong>Dewpoint:</strong> {{weather.dewpoint_string}}\n\n                </ion-item>\n\n                 <ion-item>\n\n                    <strong>Visibility:</strong> {{weather.visibility_km}}\n\n                </ion-item>\n\n                <ion-item>\n\n                    <strong>Heat Index:</strong> {{weather.heat_index_string}}\n\n                </ion-item>\n\n\n\n            </ion-list>\n\n        </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\local-weather\local-weather.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_weather__["a" /* WeatherProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LocalWeatherPage);

//# sourceMappingURL=local-weather.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAsignarMaestroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdminAsignarMaestroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminAsignarMaestroPage = (function () {
    function AdminAsignarMaestroPage(navCtrl, alerCtrl, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.listar_catedraticos();
        this.listar_cursos();
        this.myForm = this.createMyForm();
    }
    AdminAsignarMaestroPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            catedratico: ['', __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["f" /* Validators */].required],
            curso: ['', __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["f" /* Validators */].required],
        });
    };
    AdminAsignarMaestroPage.prototype.listar_catedraticos = function () {
        var _this = this;
        try {
            this.http.listar_maestros().then(function (res) {
                console.log("listar_maestros");
                _this.lista_catedraticos = JSON.parse(JSON.stringify(res));
                console.log(_this.lista_catedraticos);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    AdminAsignarMaestroPage.prototype.listar_cursos = function () {
        var _this = this;
        try {
            this.http.listar_cursos().then(function (res) {
                _this.lista_cursos = JSON.parse(JSON.stringify(res));
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    AdminAsignarMaestroPage.prototype.asignar_catedratico = function () {
        var _this = this;
        var catedratico = String(this.myForm.value.catedratico);
        var curso = String(this.myForm.value.curso);
        try {
            this.http.asignar_profesor(catedratico, curso).then(function (res) {
                _this.resultado = res.toString();
                if (_this.resultado == "0") {
                    _this.doAlert("ERROR", "El maestro ya esta asignado al curso");
                }
                else {
                    _this.doAlert("Exito", "Maestro asignado correctamente");
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'Intente mas Tarde');
        }
    };
    AdminAsignarMaestroPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    AdminAsignarMaestroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminAsignarMaestroPage');
    };
    return AdminAsignarMaestroPage;
}());
AdminAsignarMaestroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-admin-asignar-maestro',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_admin\admin-asignar-maestro\admin-asignar-maestro.html"*/'<ion-header >\n\n  <ion-navbar color="primary">\n\n     <ion-navbar>\n\n        <button ion-button icon-only menuToggle>\n\n           <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Asignar Curso\n\n        </ion-title>\n\n     </ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding class="trips detail-bg">\n\n\n\n\n\n <ion-card>\n\n   \n\n   <form [formGroup]="myForm" (ngSubmit)="asignar_catedratico()">\n\n     <ion-list>\n\n\n\n\n\n       <ion-item>\n\n         <ion-icon name="person" item-start></ion-icon>          \n\n         <ion-label>Profesor</ion-label>\n\n         <ion-select  formControlName="catedratico">\n\n           <ion-option ion-item *ngFor="let item of lista_catedraticos"  value="{{item.idCatedratico}}">{{item.Nombre}}</ion-option>                       \n\n         </ion-select>\n\n       </ion-item>\n\n\n\n       <ion-item>\n\n         <ion-icon ios="ios-school" md="md-school" item-start></ion-icon>          \n\n         <ion-label>Curso</ion-label>\n\n         <ion-select  formControlName="curso">\n\n           <ion-option ion-item *ngFor="let item of lista_cursos"  value="{{item.idCurso}}">{{item.Nombre}}</ion-option>                       \n\n         </ion-select>\n\n       </ion-item>\n\n\n\n     </ion-list>\n\n     <div padding>\n\n       <button ion-button block type="submit" [disabled]="!myForm.valid" >Ingresar</button>\n\n     </div>\n\n   </form>\n\n </ion-card>  \n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_admin\admin-asignar-maestro\admin-asignar-maestro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_http__["a" /* HttpProvider */]])
], AdminAsignarMaestroPage);

//# sourceMappingURL=admin-asignar-maestro.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminVerMaestrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdminVerMaestrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminVerMaestrosPage = (function () {
    function AdminVerMaestrosPage(navCtrl, navParams, http, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alerCtrl = alerCtrl;
        this.listar_maestros();
    }
    AdminVerMaestrosPage.prototype.listar_maestros = function () {
        var _this = this;
        try {
            this.http.listar_maestros().then(function (res) {
                console.log("listar_maestros");
                _this.lista_maestros = JSON.parse(JSON.stringify(res));
                console.log(_this.lista_maestros);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    AdminVerMaestrosPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    AdminVerMaestrosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminVerMaestrosPage');
    };
    return AdminVerMaestrosPage;
}());
AdminVerMaestrosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-admin-ver-maestros',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_admin\admin-ver-maestros\admin-ver-maestros.html"*/'<ion-header >\n\n  <ion-navbar color="primary">\n\n     <ion-navbar>\n\n        <button ion-button icon-only menuToggle>\n\n           <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n           Listado de Profesores\n\n        </ion-title>\n\n        <ion-buttons end>\n\n           \n\n        </ion-buttons>\n\n     </ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="trips detail-bg">\n\n <ion-list ion-item *ngFor="let item of lista_maestros">\n\n  <ion-item>\n\n     <ion-icon name="md-key" item-start large ></ion-icon>\n\n     <h2>Id Profesor</h2>\n\n     <p>{{item.idCatedratico}}</p>\n\n  </ion-item>\n\n  <ion-item>\n\n     <ion-icon name="md-person" item-start large></ion-icon>\n\n     <h2>Nombre</h2>\n\n     <p>{{item.Nombre}}</p>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_admin\admin-ver-maestros\admin-ver-maestros.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AdminVerMaestrosPage);

//# sourceMappingURL=admin-ver-maestros.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstudianteVerNotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EstudianteVerNotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstudianteVerNotasPage = (function () {
    function EstudianteVerNotasPage(navCtrl, navParams, http, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alerCtrl = alerCtrl;
        this.listar_notas_estudiante();
    }
    EstudianteVerNotasPage.prototype.listar_notas_estudiante = function () {
        var _this = this;
        try {
            this.http.listar_notas_estudiante(1).then(function (res) {
                _this.lista_notas_estudiante = JSON.parse(JSON.stringify(res));
                console.log(_this.lista_notas_estudiante);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    EstudianteVerNotasPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    EstudianteVerNotasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstudianteVerNotasPage');
    };
    return EstudianteVerNotasPage;
}());
EstudianteVerNotasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-estudiante-ver-notas',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_estudiante\estudiante-ver-notas\estudiante-ver-notas.html"*/'<ion-header >\n\n   <ion-navbar color="primary">\n\n      <ion-navbar>\n\n         <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n         </button>\n\n         <ion-title>\n\n            Mis notas\n\n         </ion-title>\n\n         <ion-buttons end>\n\n            <button ion-button icon-only (click)="listar_notas()">\n\n               <ion-icon name="md-refresh"></ion-icon>\n\n            </button>\n\n         </ion-buttons>\n\n      </ion-navbar>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="trips detail-bg">\n\n\n\n\n\n   <ion-list ion-item *ngFor="let item of lista_notas_estudiante">\n\n         <ion-item>\n\n            <ion-icon name="md-person" item-start large></ion-icon>\n\n            <h2>Curso</h2>\n\n            <p>{{item.Nombre}}</p>\n\n         </ion-item>\n\n         <ion-item>\n\n            <ion-icon ios="ios-create" md="md-create" item-start large></ion-icon>\n\n            <h2>Nota</h2>\n\n            <p>{{item.Nota}}</p>\n\n         </ion-item>\n\n   </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_estudiante\estudiante-ver-notas\estudiante-ver-notas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EstudianteVerNotasPage);

//# sourceMappingURL=estudiante-ver-notas.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadreVerHorarioHijoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__estudiante_estudiante_ver_horario_estudiante_ver_horario__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PadreVerHorarioHijoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PadreVerHorarioHijoPage = (function () {
    function PadreVerHorarioHijoPage(navCtrl, navParams, alerCtrl, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.listar_hijos();
    }
    PadreVerHorarioHijoPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    PadreVerHorarioHijoPage.prototype.listar_hijos = function () {
        var _this = this;
        try {
            this.http.listar_hijos(1).then(function (res) {
                console.log("listar_hijos");
                _this.lista_hijos = JSON.parse(JSON.stringify(res));
                console.log(_this.lista_hijos);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    PadreVerHorarioHijoPage.prototype.DetalleHijo = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__estudiante_estudiante_ver_horario_estudiante_ver_horario__["a" /* EstudianteVerHorarioPage */], { item: item });
    };
    PadreVerHorarioHijoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PadreVerHorarioHijoPage');
    };
    return PadreVerHorarioHijoPage;
}());
PadreVerHorarioHijoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-padre-ver-horario-hijo',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_padre\padre-ver-horario-hijo\padre-ver-horario-hijo.html"*/'<ion-header >\n\n  <ion-navbar color="primary">\n\n    <ion-navbar>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Listado de Hijos\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="listar_hijos()">\n\n          <ion-icon name="md-refresh"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-navbar>   \n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="trips detail-bg">\n\n  \n\n  <ion-fab bottom right >\n\n    <button ion-fab (click)="nueva_nota()">\n\n      <ion-icon name="md-add">\n\n      </ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n\n\n  <ion-list >        \n\n      <div class="trip card" *ngFor="let item of lista_hijos" tappable (click)="DetalleHijo(item)" margin-bottom>\n\n          <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/img/trip/profesor/horario.jpg)\'}">\n\n            <div class="background-filter rlt">\n\n              <div class="align-bottom" padding-left padding-right>\n\n                <h2>{{ item.nombre }}</h2>\n\n                <div class="clear"></div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div> \n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_padre\padre-ver-horario-hijo\padre-ver-horario-hijo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_http__["a" /* HttpProvider */]])
], PadreVerHorarioHijoPage);

//# sourceMappingURL=padre-ver-horario-hijo.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorActividadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profesor_ver_actividades_curso_profesor_ver_actividades_curso__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profesor_crear_actividad_profesor_crear_actividad__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProfesorActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorActividadPage = (function () {
    function ProfesorActividadPage(navCtrl, navParams, alerCtrl, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        // this.listar_actividades(); 
        this.listar_cursos();
    }
    ProfesorActividadPage.prototype.listar_cursos = function () {
        var _this = this;
        try {
            this.http.listar_cursos().then(function (res) {
                console.log("listar_notas");
                _this.lista_cursos = JSON.parse(JSON.stringify(res));
                console.log(_this.lista_cursos);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    ProfesorActividadPage.prototype.DetalleCurso = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profesor_ver_actividades_curso_profesor_ver_actividades_curso__["a" /* ProfesorVerActividadesCursoPage */], { item: item });
    };
    ProfesorActividadPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    ProfesorActividadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorActividadPage');
    };
    ProfesorActividadPage.prototype.nueva_actividad = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profesor_crear_actividad_profesor_crear_actividad__["a" /* ProfesorCrearActividadPage */]);
    };
    return ProfesorActividadPage;
}());
ProfesorActividadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profesor-actividad',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-actividad\profesor-actividad.html"*/'<!--\n\n  Generated template for the ProfesorActividadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header > \n\n  <ion-navbar color="dark"> \n\n    <ion-navbar> \n\n      <button ion-button icon-only menuToggle> \n\n        <ion-icon name="menu"></ion-icon> \n\n      </button> \n\n      <ion-title> \n\n        Actividades \n\n      </ion-title> \n\n      <ion-buttons end> \n\n        <button ion-button icon-only (click)="listar_notas()"> \n\n          <ion-icon name="md-refresh"></ion-icon> \n\n        </button> \n\n      </ion-buttons> \n\n    </ion-navbar> \n\n  </ion-navbar>    \n\n</ion-header> \n\n \n\n \n\n \n\n<ion-content padding class="trips detail-bg"> \n\n   \n\n  <ion-fab bottom right > \n\n    <button ion-fab (click)="nueva_actividad()"> \n\n      <ion-icon name="md-add"> \n\n      </ion-icon> \n\n    </button> \n\n  </ion-fab> \n\n \n\n \n\n  <ion-list >         \n\n \n\n    <!--button ion-item *ngFor="let item of lista_cursos"  class="button button4" (click)="DetalleCurso(item)"  icon-start>\n\n        \n\n      <ion-card-content>\n\n          <h4  style="font-size: 20px; font-weight:bold ">  {{ item.Nombre }} </h4>\n\n      </ion-card-content>\n\n\n\n    </button-->\n\n\n\n    <div class="trip card" *ngFor="let item of lista_cursos" tappable (click)="DetalleCurso(item)" margin-bottom>\n\n        <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/img/trip/profesor/actividad.jpg)\'}">\n\n          <div class="background-filter rlt">\n\n            <div class="align-bottom" padding-left padding-right>\n\n              <h2>{{ item.Nombre }}</h2>\n\n              <div class="clear"></div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n  </ion-list> \n\n \n\n \n\n \n\n \n\n</ion-content> \n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-actividad\profesor-actividad.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_http__["a" /* HttpProvider */]])
], ProfesorActividadPage);

//# sourceMappingURL=profesor-actividad.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorVerActividadesCursoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfesorVerActividadesCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorVerActividadesCursoPage = (function () {
    function ProfesorVerActividadesCursoPage(navCtrl, navParams, http, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alerCtrl = alerCtrl;
        console.log('Passed params id_curso', navParams.data['item']);
        this.identificador_curso = navParams.data['item'];
        this.listar_actividades();
    }
    ProfesorVerActividadesCursoPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    ProfesorVerActividadesCursoPage.prototype.listar_actividades = function () {
        var _this = this;
        try {
            this.http.listar_actividades(this.identificador_curso.idCurso).then(function (res) {
                _this.lista_actividades = JSON.parse(JSON.stringify(res));
                console.log(_this.lista_actividades);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    ProfesorVerActividadesCursoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorVerActividadesCursoPage');
    };
    return ProfesorVerActividadesCursoPage;
}());
ProfesorVerActividadesCursoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profesor-ver-actividades-curso',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-ver-actividades-curso\profesor-ver-actividades-curso.html"*/'<!--\n\n  Generated template for the ProfesorVerActividadesCursoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Actividades del Curso: </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list ion-item *ngFor="let item of lista_notas">\n\n    <ion-item>\n\n       <ion-icon  ios="ios-attach" md="md-attach" item-start large ></ion-icon>\n\n       <h2>Titulo</h2>\n\n       <p>{{item.Nombre}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n       <ion-icon ios="ios-create" md="md-create"  item-start large></ion-icon>\n\n       <h2>Descripcion</h2>\n\n       <p>{{item.Descripcion}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n       <ion-icon ios="ios-calendar" md="md-calendar" item-start large></ion-icon>\n\n       <h2>Fecha</h2>\n\n       <p>{{item.Fecha}}</p>\n\n    </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-ver-actividades-curso\profesor-ver-actividades-curso.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProfesorVerActividadesCursoPage);

//# sourceMappingURL=profesor-ver-actividades-curso.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorCrearActividadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfesorCrearActividadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorCrearActividadPage = (function () {
    function ProfesorCrearActividadPage(navCtrl, alerCtrl, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.listar_cursos();
        this.myForm = this.createMyForm();
    }
    ProfesorCrearActividadPage.prototype.listar_cursos = function () {
        var _this = this;
        try {
            this.http.listar_cursos().then(function (res) {
                _this.lista_cursos = JSON.parse(JSON.stringify(res));
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    ProfesorCrearActividadPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            fecha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            curso: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    ProfesorCrearActividadPage.prototype.agregar_actividad = function () {
        var _this = this;
        var nombre = String(this.myForm.value.nombre);
        var descripcion = String(this.myForm.value.descripcion);
        var fecha = String(this.myForm.value.fecha);
        var curso = String(this.myForm.value.curso);
        try {
            this.http.agregar_actividad(nombre, descripcion, fecha, curso).then(function (res) {
                _this.doAlert("EXITO", "Actividad agregada con exito");
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'Intente mas Tarde');
        }
    };
    ProfesorCrearActividadPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    ProfesorCrearActividadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorCrearActividadPage');
    };
    return ProfesorCrearActividadPage;
}());
ProfesorCrearActividadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profesor-crear-actividad',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-crear-actividad\profesor-crear-actividad.html"*/'<!--\n\n  Generated template for the ProfesorCrearActividadPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n  <ion-navbar color="primary">\n\n     <ion-navbar>\n\n        <button ion-button icon-only menuToggle>\n\n           <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n           Agregar Actividad\n\n        </ion-title>\n\n     </ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="trips detail-bg">\n\n\n\n\n\n  <ion-card>\n\n    \n\n    <form [formGroup]="myForm" (ngSubmit)="agregar_actividad()">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-icon ios="ios-attach" md="md-attach" item-start></ion-icon>          \n\n          <ion-label>Nombre de la Actividad</ion-label>\n\n          <ion-input formControlName="nombre" placeholder="Nombre"></ion-input>\n\n        </ion-item>   \n\n\n\n        <ion-item>\n\n          <ion-icon ios="ios-create" md="md-create" item-start></ion-icon>          \n\n          <ion-label>Descripcion de la actividad</ion-label>\n\n          <ion-input formControlName="descripcion" placeholder="Descripcion"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-icon ios="ios-book" md="md-book" item-start></ion-icon>          \n\n          <ion-label>Curso</ion-label>\n\n          <ion-select  formControlName="curso">\n\n            <ion-option ion-item *ngFor="let item of lista_cursos"  value="{{item.idCurso}}">{{item.Nombre}}</ion-option>                       \n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-icon ios="ios-calendar" md="md-calendar" item-start></ion-icon>\n\n          <ion-label stacked>Fecha de Entrega</ion-label>\n\n          <ion-input formControlName="fecha"></ion-input>\n\n        </ion-item>  \n\n\n\n\n\n      </ion-list>\n\n      <div padding>\n\n        <button ion-button block type="submit" [disabled]="!myForm.valid" >Crear Actividad</button>\n\n      </div>\n\n    </form>\n\n  </ion-card>  \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-crear-actividad\profesor-crear-actividad.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_http__["a" /* HttpProvider */]])
], ProfesorCrearActividadPage);

//# sourceMappingURL=profesor-crear-actividad.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorVerAgregarNotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfesorVerAgregarNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorVerAgregarNotaPage = (function () {
    function ProfesorVerAgregarNotaPage(navCtrl, alerCtrl, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.listar_estudiantes();
        this.listar_cursos();
        this.myForm = this.createMyForm();
    }
    ProfesorVerAgregarNotaPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    ProfesorVerAgregarNotaPage.prototype.listar_cursos = function () {
        var _this = this;
        try {
            this.http.listar_cursos().then(function (res) {
                _this.lista_cursos = JSON.parse(JSON.stringify(res));
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    ProfesorVerAgregarNotaPage.prototype.listar_estudiantes = function () {
        var _this = this;
        try {
            this.http.listar_estudiantes().then(function (res) {
                _this.lista_estudiante = JSON.parse(JSON.stringify(res));
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    ProfesorVerAgregarNotaPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            alumno: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            curso: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            nota: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    ProfesorVerAgregarNotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorVerAgregarNotaPage');
    };
    ProfesorVerAgregarNotaPage.prototype.agregar_nota = function () {
        var _this = this;
        var alumno = String(this.myForm.value.alumno);
        var curso = String(this.myForm.value.curso);
        var nota = String(this.myForm.value.nota);
        try {
            this.http.agregar_nota(alumno, curso, nota).then(function (res) {
                console.log(res['result']);
                console.log(res['usuario_id']);
                var usuario_id = String(res['usuario_id']);
                if (res['result'] == 'logueado') {
                    _this.doAlert('Bienvenido', 'Datos correctos');
                }
                else {
                    _this.doAlert('Error', 'Datos incorrectos');
                }
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'Intente mas Tarde');
        }
    };
    return ProfesorVerAgregarNotaPage;
}());
ProfesorVerAgregarNotaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profesor-ver-agregar-nota',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-ver-agregar-nota\profesor-ver-agregar-nota.html"*/'<ion-header >\n\n   <ion-navbar color="dark">\n\n      <ion-navbar>\n\n         <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n         </button>\n\n         <ion-title>\n\n            Agregar Registro de Nota\n\n         </ion-title>\n\n      </ion-navbar>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content class="login-content" padding>\n\n\n\n\n\n  <ion-card>\n\n    \n\n    <form [formGroup]="myForm" (ngSubmit)="agregar_nota()">\n\n      <ion-list>\n\n\n\n\n\n        <ion-item>\n\n          <ion-icon name="person" item-start></ion-icon>          \n\n          <ion-label>Alumno</ion-label>\n\n          <ion-select  formControlName="alumno">\n\n            <ion-option ion-item *ngFor="let item of lista_estudiante"  value="{{item.idEstudiante}}">{{item.Nombre}}</ion-option>                       \n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-icon name="person" item-start></ion-icon>          \n\n          <ion-label>Curso</ion-label>\n\n          <ion-select  formControlName="curso">\n\n            <ion-option ion-item *ngFor="let item of lista_cursos"  value="{{item.idCurso}}">{{item.Nombre}}</ion-option>                       \n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-icon name="md-podium" item-start></ion-icon>\n\n          <ion-label stacked>Nota:</ion-label>\n\n          <ion-input formControlName="nota" type="number"></ion-input>\n\n        </ion-item>    \n\n\n\n\n\n      </ion-list>\n\n      <div padding>\n\n        <button ion-button block type="submit" [disabled]="!myForm.valid" >Ingresar</button>\n\n      </div>\n\n    </form>\n\n  </ion-card>  \n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-ver-agregar-nota\profesor-ver-agregar-nota.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_http__["a" /* HttpProvider */]])
], ProfesorVerAgregarNotaPage);

//# sourceMappingURL=profesor-ver-agregar-nota.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorVerNotasCursoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profesor_ver_agregar_nota_profesor_ver_agregar_nota__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfesorVerNotasCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorVerNotasCursoPage = (function () {
    function ProfesorVerNotasCursoPage(navCtrl, navParams, http, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alerCtrl = alerCtrl;
        console.log('Passed params id_usuario', navParams.data['item']);
        this.identificador_curso = navParams.data['item'];
        this.listar_notas();
    }
    ProfesorVerNotasCursoPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    ProfesorVerNotasCursoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorVerNotasCursoPage');
    };
    ProfesorVerNotasCursoPage.prototype.listar_notas = function () {
        var _this = this;
        try {
            this.http.listar_notas(this.identificador_curso.idCurso).then(function (res) {
                _this.lista_notas = JSON.parse(JSON.stringify(res));
                console.log(_this.lista_notas);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    ProfesorVerNotasCursoPage.prototype.nueva_nota = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profesor_ver_agregar_nota_profesor_ver_agregar_nota__["a" /* ProfesorVerAgregarNotaPage */]);
    };
    return ProfesorVerNotasCursoPage;
}());
ProfesorVerNotasCursoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profesor-ver-notas-curso',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-ver-notas-curso\profesor-ver-notas-curso.html"*/'<ion-header >\n\n   <ion-navbar color="primary">\n\n      <ion-navbar>\n\n         <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n         </button>\n\n         <ion-title>\n\n            Notas Curso: {{ identificador_curso.Nombre }}\n\n         </ion-title>\n\n         <ion-buttons end>\n\n            <button ion-button icon-only (click)="listar_notas()">\n\n               <ion-icon name="md-refresh"></ion-icon>\n\n            </button>\n\n         </ion-buttons>\n\n      </ion-navbar>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="trips detail-bg">\n\n\n\n  <ion-fab bottom right >\n\n    <button ion-fab (click)="nueva_nota()">\n\n      <ion-icon name="md-add">\n\n      </ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n   <ion-list ion-item *ngFor="let item of lista_notas">\n\n         <ion-item>\n\n            <ion-icon name="md-key" item-start large ></ion-icon>\n\n            <h2>Id alumno</h2>\n\n            <p>{{item.idEstudiante}}</p>\n\n         </ion-item>\n\n         <ion-item>\n\n            <ion-icon name="md-person" item-start large></ion-icon>\n\n            <h2>Nombre</h2>\n\n            <p>{{item.Nombre}}</p>\n\n         </ion-item>\n\n         <ion-item>\n\n            <ion-icon name="md-person" item-start large></ion-icon>\n\n            <h2>Apellido</h2>\n\n            <p>{{item.Apellido}}</p>\n\n         </ion-item>\n\n         <ion-item>\n\n            <ion-icon ios="ios-create" md="md-create" item-start large></ion-icon>\n\n            <h2>Nota</h2>\n\n            <p>{{item.Nota}}</p>\n\n         </ion-item>\n\n   </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-ver-notas-curso\profesor-ver-notas-curso.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProfesorVerNotasCursoPage);

//# sourceMappingURL=profesor-ver-notas-curso.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorVerNotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profesor_ver_notas_curso_profesor_ver_notas_curso__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfesorVerNotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorVerNotasPage = (function () {
    function ProfesorVerNotasPage(navCtrl, navParams, alerCtrl, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.listar_notas();
    }
    ProfesorVerNotasPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    ProfesorVerNotasPage.prototype.listar_notas = function () {
        var _this = this;
        try {
            this.http.listar_cursos().then(function (res) {
                console.log("listar_notas");
                _this.lista_cursos = JSON.parse(JSON.stringify(res));
                console.log(_this.lista_cursos);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    ProfesorVerNotasPage.prototype.DetalleCurso = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profesor_ver_notas_curso_profesor_ver_notas_curso__["a" /* ProfesorVerNotasCursoPage */], { item: item });
    };
    ProfesorVerNotasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorVerNotasPage');
    };
    return ProfesorVerNotasPage;
}());
ProfesorVerNotasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profesor-ver-notas',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-ver-notas\profesor-ver-notas.html"*/'<ion-header >\n\n  <ion-navbar color="primary">\n\n    <ion-navbar>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Notas de Cursos\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="listar_notas()">\n\n          <ion-icon name="md-refresh"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-navbar>   \n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="trips detail-bg">\n\n  \n\n  <ion-fab bottom right >\n\n    <button ion-fab (click)="nueva_nota()">\n\n      <ion-icon name="md-add">\n\n      </ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n\n\n  <ion-list >        \n\n\n\n      <!--button ion-item *ngFor="let item of lista_cursos"  class="button button4" (click)="DetalleCurso(item)"  icon-start>\n\n        \n\n        <ion-card-content>\n\n            <ion-icon name="md-key" item-start large ></ion-icon>\n\n            <h2>  {{ item.Nombre }} </h2>\n\n        </ion-card-content>\n\n\n\n      </button-->\n\n\n\n      <div class="trip card" *ngFor="let item of lista_cursos" tappable (click)="DetalleCurso(item)" margin-bottom>\n\n          <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/img/trip/profesor/curso.jpg)\'}">\n\n            <div class="background-filter rlt">\n\n              <div class="align-bottom" padding-left padding-right>\n\n                <h2>{{ item.Nombre }}</h2>\n\n                <div class="clear"></div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-ver-notas\profesor-ver-notas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__services_http__["a" /* HttpProvider */]])
], ProfesorVerNotasPage);

//# sourceMappingURL=profesor-ver-notas.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = (function () {
    function HttpProvider(http) {
        this.http = http;
        this.ruta_base = 'http://35.237.152.46/';
        this.ruta_listar_cursos = 'Devolver_Cursos';
        this.ruta_nota_curso = 'Nota_Curso';
        this.ruta_actividad_curso = 'Actividad_Curso';
        this.ruta_listar_estudiantes = 'Devolver_Estudiantes';
        this.ruta_listar_actividades = 'Devolver_Actividad';
        this.ruta_listar_notas_curso = 'Devolver_Cursos';
        this.ruta_Insertar_Nota = 'Insertar_Nota';
        this.ruta_Insertar_Actividad = 'Insertar_Actividad';
        this.ruta_listar_horario = 'DevolverHorarioEstudiante';
        this.ruta_listar_hijos = "DevolverListadoHijos";
        this.ruta_listar_notas_estudiante = "DevolverNotaEstudiante";
        this.ruta_listar_maestros = "DevolverCatedraticos";
        this.ruta_listar_notas_desc = "DevolverNotaEstudiante";
        this.ruta_asignar_profesor = "InsertarAsignacionCatedratico";
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.asignar_profesor = function (profesor, curso) {
        var path_aux = this.ruta_base + this.ruta_asignar_profesor + '?idCurso=' + curso + '&idCatedratico=' + profesor;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_notas_desc = function (id) {
        var path_aux = this.ruta_base + this.ruta_listar_notas_desc + '/' + id;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_maestros = function () {
        var path_aux = this.ruta_base + this.ruta_listar_maestros;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_notas_estudiante = function (id) {
        var path_aux = this.ruta_base + this.ruta_listar_notas_estudiante + '/' + id;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_hijos = function (id) {
        var path_aux = this.ruta_base + this.ruta_listar_hijos + '/' + id;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_horario = function (id) {
        var path_aux = this.ruta_base + this.ruta_listar_horario + '/' + id;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_actividades = function (id) {
        var path_aux = this.ruta_base + this.ruta_listar_actividades + '/' + id;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_alumnos_notas = function (codigo_curso) {
        var path_aux = this.ruta_base + this.ruta_listar_notas_curso;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_cursos = function () {
        var path_aux = this.ruta_base + this.ruta_listar_cursos;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_estudiantes = function () {
        var path_aux = this.ruta_base + this.ruta_listar_estudiantes;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_notas = function (id) {
        var path_aux = this.ruta_base + this.ruta_nota_curso + '/' + id;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.agregar_nota = function (alumno, curso, nota) {
        var path_aux = this.ruta_base + this.ruta_Insertar_Nota + '?idEstudiante=' + alumno + '&idCurso=' + curso + '&Nota=' + nota + '&idCatedratico=' + 10;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.agregar_actividad = function (nombre, descripcion, fecha, curso) {
        var path_aux = this.ruta_base + this.ruta_Insertar_Actividad + '?nombre=' + nombre + '&descripcion=' + descripcion + '&fecha=' + fecha + '&curso=' + curso;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    //-------------------------------- Codigo Nuevo--------------------------------------------------------
    HttpProvider.prototype.metodo_usuario_crear = function (nombre, apellido, contrasena) {
        var path_aux = this.ruta_base + 'crear_usuario?nombre=' + nombre + '&apellido=' + apellido + '&clave=' + contrasena;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.metodo_login = function (nombre, contrasena) {
        var path_aux = this.ruta_base + 'login?nombre=' + nombre + '&clave=' + contrasena;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.metodo_negocio_crear = function (nombre, propietario, ubicacion, descripcion) {
        var path_aux = this.ruta_base + 'negocio_crear?nombre=' + nombre + '&propietario=' + propietario + '&ubicacion=' + ubicacion + '&descripcion=' + descripcion;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.metodo_negocio_show = function (propietario) {
        var path_aux = this.ruta_base + 'negocio_show?propietario=' + propietario;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.metodo_agregar_producto = function (nombre, codigo, lote, fecha, descripcion, precio) {
        var path_aux = this.ruta_base + 'agregar_producto?nombre=' + nombre + '&codigo=' + codigo + '&lote=' + lote + '&fecha=' + fecha + '&descripcion=' + descripcion + '&precio=' + precio;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.metodo_productos_show = function () {
        var path_aux = this.ruta_base + 'productos_show';
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.metodo_contabilizar = function (nombre_negocio, producto, cantidad, fecha) {
        var path_aux = this.ruta_base + 'contabilizar?negocio=' + nombre_negocio + '&producto=' + producto + '&cantidad=' + cantidad + '&fecha=' + fecha;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_stock_actual = function (negocio) {
        var path_aux = this.ruta_base + 'stock_actual?negocio=' + negocio;
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    HttpProvider.prototype.listar_stock_recomendaciones = function () {
        var path_aux = this.ruta_base + 'recomendaciones';
        console.log(path_aux);
        return this.http
            .get(path_aux)
            .toPromise();
    };
    return HttpProvider;
}());
HttpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], HttpProvider);

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/_admin/admin-asignar-maestro/admin-asignar-maestro.module": [
		311,
		27
	],
	"../pages/_admin/admin-ver-cuadro-honor/admin-ver-cuadro-honor.module": [
		312,
		8
	],
	"../pages/_admin/admin-ver-estudiantes/admin-ver-estudiantes.module": [
		313,
		7
	],
	"../pages/_admin/admin-ver-juegos-cursos/admin-ver-juegos-cursos.module": [
		314,
		6
	],
	"../pages/_admin/admin-ver-maestros/admin-ver-maestros.module": [
		315,
		26
	],
	"../pages/_admin/admin-ver-notas-por-curso/admin-ver-notas-por-curso.module": [
		316,
		5
	],
	"../pages/_admin/admin-ver-padres/admin-ver-padres.module": [
		317,
		4
	],
	"../pages/_estudiante/estudiante-ver-horario/estudiante-ver-horario.module": [
		318,
		25
	],
	"../pages/_estudiante/estudiante-ver-juego/estudiante-ver-juego.module": [
		319,
		3
	],
	"../pages/_estudiante/estudiante-ver-notas-orden/estudiante-ver-notas-orden.module": [
		320,
		24
	],
	"../pages/_estudiante/estudiante-ver-notas/estudiante-ver-notas.module": [
		321,
		23
	],
	"../pages/_padre/padre-ver-horario-hijo/padre-ver-horario-hijo.module": [
		322,
		22
	],
	"../pages/_padre/padre-ver-mensajes/padre-ver-mensajes.module": [
		323,
		21
	],
	"../pages/_padre/padres-listado-hijos/padres-listado-hijos.module": [
		324,
		20
	],
	"../pages/_padre/padres-ver-asistencia-hijos/padres-ver-asistencia-hijos.module": [
		325,
		2
	],
	"../pages/_padre/padres-ver-notas-hijos/padres-ver-notas-hijos.module": [
		326,
		19
	],
	"../pages/_profesor/profesor-actividad/profesor-actividad.module": [
		327,
		18
	],
	"../pages/_profesor/profesor-crear-actividad-juego/profesor-crear-actividad-juego.module": [
		328,
		1
	],
	"../pages/_profesor/profesor-crear-actividad/profesor-crear-actividad.module": [
		329,
		17
	],
	"../pages/_profesor/profesor-crear-juego/profesor-crear-juego.module": [
		330,
		16
	],
	"../pages/_profesor/profesor-listado-juegos/profesor-listado-juegos.module": [
		331,
		0
	],
	"../pages/_profesor/profesor-mensaje-padres/profesor-mensaje-padres.module": [
		332,
		15
	],
	"../pages/_profesor/profesor-planificacion/profesor-planificacion.module": [
		333,
		14
	],
	"../pages/_profesor/profesor-ver-actividades-curso/profesor-ver-actividades-curso.module": [
		334,
		13
	],
	"../pages/_profesor/profesor-ver-agregar-nota/profesor-ver-agregar-nota.module": [
		335,
		12
	],
	"../pages/_profesor/profesor-ver-modificar-nota/profesor-ver-modificar-nota.module": [
		336,
		11
	],
	"../pages/_profesor/profesor-ver-notas-curso/profesor-ver-notas-curso.module": [
		337,
		10
	],
	"../pages/_profesor/profesor-ver-notas/profesor-ver-notas.module": [
		338,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').map(function (res) { return res; });
    };
    return WeatherProvider;
}());
WeatherProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], WeatherProvider);

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\notifications\notifications.html"*/'<ion-list class="no-margin">\n\n  <ion-list-header class="no-margin">\n\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n\n  	<span ion-text color="primary" class="bold">Notifications</span>\n\n  </ion-list-header>\n\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail"></ion-icon>\n\n  	New booking success!\n\n  </button>\n\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail"></ion-icon>\n\n  	Activity rescheduled\n\n  </button>\n\n  <button ion-item class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n\n  	<span ion-text color="secondary">Activity rescheduled</span>\n\n  </button>\n\n  <button ion-item class="text-1x" tappable (click)="close()">\n\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n\n  	<span ion-text color="secondary">Activity rescheduled</span>\n\n  </button>\n\n</ion-list>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\notifications\notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    // logout
    SettingsPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\settings\settings.html"*/'<!-- -->\n\n<ion-header class="no-shadow">\n\n\n\n  <ion-navbar class="no-border">\n\n    <ion-title>\n\n      <ion-icon name="cog" class="text-primary"></ion-icon>\n\n      <span class="text-primary">Settings</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="common-bg">\n\n  <!-- User settings-->\n\n  <ion-item-group>\n\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n\n    <ion-item>\n\n      <ion-label>Language</ion-label>\n\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n\n        <ion-option value="en-GB">English (UK)</ion-option>\n\n        <ion-option value="en-CA">English (CA)</ion-option>\n\n        <ion-option value="en-AU">English (AU)</ion-option>\n\n        <ion-option value="en-IN">English (IN)</ion-option>\n\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Currency</ion-label>\n\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n\n        <ion-option value="EUR">Euro (€)</ion-option>\n\n        <ion-option value="GBP">Pound (£)</ion-option>\n\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Units</ion-label>\n\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n\n        <ion-option value="K">Kilometers (m²)</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Notifications?</ion-label>\n\n      <ion-toggle checked="true"></ion-toggle>\n\n    </ion-item>\n\n  </ion-item-group>\n\n  <!-- App settings-->\n\n  <ion-item-group>\n\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n\n    <ion-item>\n\n      <span>Clear Private Data</span>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Push Notifications?</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <span>Privacy Policy</span>\n\n    </ion-item>\n\n  </ion-item-group>  \n\n\n\n  <!--sign out button-->\n\n  <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(nav) {
        this.nav = nav;
    }
    // register and go to home page
    RegisterPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\register\register.html"*/'<!-- -->\n\n<ion-content class="auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding text-center>\n\n      <div class="logo"></div>\n\n      <h2 ion-text class="text-primary">\n\n        <strong>Ionic 3</strong> Start Theme\n\n      </h2>\n\n    </div>\n\n\n\n    <!-- Login form -->\n\n    <form class="list-form">\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n\n          Full Name\n\n        </ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n    </form>\n\n\n\n    <div margin-top>\n\n      <button ion-button block color="dark" tappable (click)="register()">\n\n        SIGN UP\n\n      </button>\n\n\n\n      <p text-center ion-text color="secondary">Or Sign Up with:</p>\n\n\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <button ion-button icon-only block class="btn-facebook">\n\n              <ion-icon name="logo-facebook"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button icon-only block class="btn-twitter">\n\n              <ion-icon name="logo-twitter"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <button ion-button icon-only block class="btn-gplus">\n\n              <ion-icon name="logo-googleplus"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n    <!-- Other links -->\n\n    <div text-center margin-top>\n\n      <span ion-text color="primary" tappable (click)="login()">I have an account</span>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profesorHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profesor_actividad_profesor_actividad__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profesor_ver_notas_profesor_ver_notas__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__estudiante_estudiante_ver_horario_estudiante_ver_horario__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__estudiante_estudiante_ver_notas_estudiante_ver_notas__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__padre_padre_ver_horario_hijo_padre_ver_horario_hijo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_asignar_maestro_admin_asignar_maestro__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_ver_maestros_admin_ver_maestros__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var profesorHomePage = (function () {
    function profesorHomePage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // set sample data
        this.trips = tripService.getAll();
    }
    // view trip detail
    profesorHomePage.prototype.viewDetail = function (id) {
        if (id === 1) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__profesor_ver_notas_profesor_ver_notas__["a" /* ProfesorVerNotasPage */]);
        }
        else if (id === 2) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__profesor_actividad_profesor_actividad__["a" /* ProfesorActividadPage */]);
        }
        else if (id === 4) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__estudiante_estudiante_ver_horario_estudiante_ver_horario__["a" /* EstudianteVerHorarioPage */]);
        }
        else if (id === 5) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__estudiante_estudiante_ver_notas_estudiante_ver_notas__["a" /* EstudianteVerNotasPage */]);
        }
        else if (id === 6) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__padre_padre_ver_horario_hijo_padre_ver_horario_hijo__["a" /* PadreVerHorarioHijoPage */]);
        }
        else if (id === 7) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__admin_admin_asignar_maestro_admin_asignar_maestro__["a" /* AdminAsignarMaestroPage */]);
        }
        else if (id === 8) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_9__admin_admin_ver_maestros_admin_ver_maestros__["a" /* AdminVerMaestrosPage */]);
        }
        //this.nav.push(TripDetailPage, {id: id});
    };
    return profesorHomePage;
}());
profesorHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'profesorHome',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesorHome\profesorHome.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      <span ion-text>Profesores</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="trips detail-bg">\n\n  <!--list of trips-->\n\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}">\n\n      <div class="background-filter rlt">\n\n        <div class="align-bottom" padding-left padding-right>\n\n          <h6 class="pull-left text-white" ion-text>{{ trip.name }}</h6>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesorHome\profesorHome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], profesorHomePage);

//# sourceMappingURL=profesorHome.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripsPage = (function () {
    function TripsPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // set sample data
        this.trips = tripService.getAll();
    }
    // view trip detail
    TripsPage.prototype.viewDetail = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__["a" /* TripDetailPage */], { id: id });
    };
    return TripsPage;
}());
TripsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trips',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\trips\trips.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      <span ion-text>Activities</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n  <!--  -->\n\n  <ion-toolbar padding color="light">\n\n    <p ion-text no-margin class="text-white">\n\n      <strong>4</strong> results found!\n\n    </p>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="trips detail-bg">\n\n  <!--list of trips-->\n\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}">\n\n      <div class="background-filter rlt">\n\n        <div class="align-bottom" padding-left padding-right>\n\n          <h6 class="pull-left text-white" ion-text>{{ trip.name }}</h6>\n\n          <h6 class="pull-right text-white" ion-text>{{ trip.price_adult | currency:\'USD\':true }}</h6>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="padding-sm primary-bg">\n\n      <ion-icon name="time" class="text-white"></ion-icon>\n\n      <span ion-text class="text-white">{{ trip.time }}</span>\n\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\trips\trips.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripsPage);

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage = (function () {
    function TripDetailPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // minus adult when click minus button
    TripDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage;
}());
TripDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\trip-detail\trip-detail.html"*/'<!-- -->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="primary">\n\n    <ion-title>\n\n      <span ion-text>{{ trip.name }}</span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="common-bg">\n\n  <!--slides-->\n\n  <ion-slides class="to-top" pager>\n\n    <ion-slide *ngFor="let image of trip.images">\n\n      <img [src]="image" alt="">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <!--services-->\n\n  <ion-grid class="border-bottom dark-bg">\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <div class="text-sm">\n\n          <div>\n\n            <ion-icon name="time" class="text-white"></ion-icon>\n\n            <span ion-text color="light">{{ trip.time }}</span>\n\n            <ion-icon name="checkbox-outline" margin-left class="text-white" *ngIf="trip.free_cancellation"></ion-icon>\n\n            <span ion-text color="light" *ngIf="trip.free_cancellation">Free cancellation</span>\n\n            <ion-icon name="list-box" margin-left class="text-white" *ngIf="trip.electric_voucher"></ion-icon>\n\n            <span ion-text color="light" *ngIf="trip.electric_voucher">Electronic voucher</span>\n\n          </div>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <!--high light-->\n\n  <div class="border-bottom" padding>\n\n    <span ion-text color="dark" class="bold">HIGHLIGHT</span>\n\n    <ul class="highlight">\n\n      <li *ngFor="let highlight of trip.highlights">\n\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n\n        <span ion-text color="primary">{{ highlight }}</span>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n\n\n  <!--booking form-->\n\n  <div class="booking-form card round" margin>\n\n    <div class="border-bottom" padding>\n\n      <h5>{{ trip.sub_name }}</h5>\n\n\n\n      <!--choose guest-->\n\n      <ion-grid class="filters" no-padding margin-top>\n\n        <ion-row>\n\n          <ion-col class="adult" width-70>\n\n            <span ion-text color="primary"><strong>{{ trip.price_adult | currency:\'USD\':true }}</strong> Adults</span>\n\n          </ion-col>\n\n          <ion-col width-10 text-center>\n\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="adults < 2"\n\n                      color="secondary"></ion-icon>\n\n          </ion-col>\n\n          <ion-col width-10 text-center>{{ adults }}</ion-col>\n\n          <ion-col width-10 text-center>\n\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="secondary"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row margin-top>\n\n          <ion-col width-70>\n\n            <span ion-text color="primary"><strong>{{ trip.price_child | currency:\'USD\':true }}</strong> Child (0-12 years)</span>\n\n          </ion-col>\n\n          <ion-col width-10 text-center>\n\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusChildren()" [hidden]="children < 1"\n\n                      color="secondary"></ion-icon>\n\n          </ion-col>\n\n          <ion-col width-10 text-center>{{ children }}</ion-col>\n\n          <ion-col width-10 text-center>\n\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusChildren()" color="secondary"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n    <div padding class="form-bottom">\n\n<!--       <span ion-text color="dark" class="bold">{{ adults }} Adults</span> -->\n\n      <!--booking button-->\n\n      <button ion-button class="pull-right" color="secondary" tappable (click)="checkout()">Book Now {{ adults * trip.price_adult +\n\n        children * trip.price_child | currency:\'USD\':true }}\n\n      </button>\n\n      <div class="clear"></div>\n\n    </div>\n\n  </div>\n\n\n\n  <!--description-->\n\n  <div class="border-bottom" padding>\n\n    <span ion-text color="primary" class="bold">DESCRIPTION</span>\n\n    <p ion-text>{{ trip.description }}</p>\n\n  </div>\n\n\n\n  <!--address-->\n\n  <div class="border-bottom" padding>\n\n    <span ion-text color="primary" class="bold">LOCATION</span>\n\n    <p ion-text>{{ trip.location }}</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\trip-detail\trip-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripDetailPage);

//# sourceMappingURL=trip-detail.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutTripPage = (function () {
    function CheckoutTripPage(nav, tripService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // number of adults
        this.adults = 2;
        // date
        this.date = new Date();
        this.paymethods = 'creditcard';
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // process send button
    CheckoutTripPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Book Activity Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    return CheckoutTripPage;
}());
CheckoutTripPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout-trip',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\checkout-trip\checkout-trip.html"*/'<!-- -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Activity Checkout</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="checkout-trip common-bg">\n\n  <!--trip information-->\n\n  <div class="trip-info card round">\n\n    <div class="trip-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}"></div>\n\n    <ion-grid padding>\n\n      <ion-row>\n\n        <ion-col width-66>\n\n          <h5 ion-text color="primary">{{ trip.name }}</h5>\n\n          <div>\n\n            <span class="bold">{{ trip.sub_name }}</span>\n\n            <br/>\n\n            <span ion-text color="dark">{{ adults }} Adults</span>\n\n          </div>\n\n          <div margin-top>\n\n            <span ion-text color="dark">{{ date | date: \'EEE, MMM dd\' }}</span>\n\n            <br/>\n\n            <span ion-text>{{ trip.location }}</span>\n\n          </div>\n\n          <div margin-top>\n\n            <ion-icon name="checkmark" class="text-green" *ngIf="trip.free_cancellation"></ion-icon>\n\n            <span ion-text *ngIf="trip.free_cancellation">Free cancellation</span>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <span ion-text>Total with Tax</span>\n\n          <h5 ion-text color="primary" class="bold" no-margin>{{ trip.price_adult * adults | currency:\'USD\':true }}</h5>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n    <!--more info-->\n\n  <h5>Guest Details</h5>\n\n  <div class="card round" margin-top>\n\n\n\n    <ion-list no-margin>\n\n      <ion-item class="primary-bg">\n\n        <ion-avatar item-start>\n\n          <img src="assets/img/avatar.jpeg">\n\n        </ion-avatar>\n\n        <h2 ion-text class="text-white bold">João Firmino</h2>\n\n        <p ion-text class="text-secondary bold">User</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <h5 ion-text color="secondary">Other Guests</h5>\n\n\n\n      <ion-item no-padding>\n\n        <ion-label color="dark" stacked>Adult 1 Name:</ion-label>\n\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n\n      </ion-item>\n\n      <ion-item no-padding>\n\n        <ion-label color="dark" stacked>Child 1 Name:</ion-label>\n\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n\n      </ion-item>\n\n    </div>\n\n  </div>\n\n\n\n  <!--payment info-->\n\n  <h5>Payment Methods</h5>\n\n  <ion-segment color="secondary" [(ngModel)]="paymethods">\n\n    <ion-segment-button value="creditcard" >\n\n      Credit card\n\n    </ion-segment-button>\n\n    <ion-segment-button value="paypal">\n\n      PayPal\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div class="card round" margin-top margin-bottom>\n\n\n\n    <div [ngSwitch]="paymethods">\n\n      <ion-grid *ngSwitchCase="\'creditcard\'" padding>\n\n        <ion-row>\n\n          <ion-col no-padding text-center>\n\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMTUuMTg3NSAxOSBMIDEyLjU1ODU5NCAyNi44MzIwMzEgQyAxMi41NTg1OTQgMjYuODMyMDMxIDExLjg5NDUzMSAyMy41MTk1MzEgMTEuODI4MTI1IDIzLjEwMTU2MyBDIDEwLjMzMjAzMSAxOS42OTE0MDYgOC4xMjUgMTkuODgyODEzIDguMTI1IDE5Ljg4MjgxMyBMIDEwLjcyNjU2MyAzMCBMIDEwLjcyNjU2MyAyOS45OTYwOTQgTCAxMy44ODY3MTkgMjkuOTk2MDk0IEwgMTguMjU3ODEzIDE5IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkZGRkY7IiBkPSJNIDE3LjY4NzUgMzAgTCAyMC41NTg1OTQgMzAgTCAyMi4yOTY4NzUgMTkgTCAxOS4zOTA2MjUgMTkgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzguMDA3ODEzIDE5IEwgMzQuOTg4MjgxIDE5IEwgMzAuMjc3MzQ0IDMwIEwgMzMuMTI4OTA2IDMwIEwgMzMuNzE4NzUgMjguNDI5Njg4IEwgMzcuMzEyNSAyOC40Mjk2ODggTCAzNy42MTcxODggMzAgTCA0MC4yMzA0NjkgMzAgWiBNIDM0LjUxMTcxOSAyNi4zMjgxMjUgTCAzNi4wNzQyMTkgMjIuMTcxODc1IEwgMzYuODk0NTMxIDI2LjMyODEyNSBaICIvPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNi4zNjcxODggMjIuMjA3MDMxIEMgMjYuMzY3MTg4IDIxLjYwMTU2MyAyNi44NjcxODggMjEuMTQ4NDM4IDI4LjI5Njg3NSAyMS4xNDg0MzggQyAyOS4yMjI2NTYgMjEuMTQ4NDM4IDMwLjI4NTE1NiAyMS44MjQyMTkgMzAuMjg1MTU2IDIxLjgyNDIxOSBMIDMwLjc1MzkwNiAxOS41MTU2MjUgQyAzMC43NTM5MDYgMTkuNTE1NjI1IDI5LjM5NDUzMSAxOSAyOC4wNjI1IDE5IEMgMjUuMDQyOTY5IDE5IDIzLjQ4NDM3NSAyMC40NDE0MDYgMjMuNDg0Mzc1IDIyLjI2OTUzMSBDIDIzLjQ4NDM3NSAyNS41NzgxMjUgMjcuNDY0ODQ0IDI1LjEyNSAyNy40NjQ4NDQgMjYuODIwMzEzIEMgMjcuNDY0ODQ0IDI3LjExMzI4MSAyNy4yMzQzNzUgMjcuNzg1MTU2IDI1LjU3NDIxOSAyNy43ODUxNTYgQyAyMy45MTQwNjMgMjcuNzg1MTU2IDIyLjgxNjQwNiAyNy4xNzU3ODEgMjIuODE2NDA2IDI3LjE3NTc4MSBMIDIyLjMyMDMxMyAyOS4zOTQ1MzEgQyAyMi4zMjAzMTMgMjkuMzk0NTMxIDIzLjM4NjcxOSAzMCAyNS40Mzc1IDMwIEMgMjcuNDk2MDk0IDMwIDMwLjM1NTQ2OSAyOC40NjA5MzggMzAuMzU1NDY5IDI2LjI0NjA5NCBDIDMwLjM1NTQ2OSAyMy41ODU5MzggMjYuMzY3MTg4IDIzLjM5NDUzMSAyNi4zNjcxODggMjIuMjA3MDMxIFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkMxMDc7IiBkPSJNIDEyLjIxMDkzOCAyNC45NDUzMTMgTCAxMS4yNDYwOTQgMjAuMTk1MzEzIEMgMTEuMjQ2MDk0IDIwLjE5NTMxMyAxMC44MDg1OTQgMTkuMTY3OTY5IDkuNjcxODc1IDE5LjE2Nzk2OSBDIDguNTM1MTU2IDE5LjE2Nzk2OSA1LjIzNDM3NSAxOS4xNjc5NjkgNS4yMzQzNzUgMTkuMTY3OTY5IEMgNS4yMzQzNzUgMTkuMTY3OTY5IDEwLjg5NDUzMSAyMC44Mzk4NDQgMTIuMjEwOTM4IDI0Ljk0NTMxMyBaICIvPjwvZz48L3N2Zz4=" alt="Visa" />\n\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGQzEwNzsiIGQ9Ik0gNDAgMjQgQyA0MCAyOS41MjM0MzggMzUuNTIzNDM4IDM0IDMwIDM0IEMgMjQuNDc2NTYzIDM0IDIwIDI5LjUyMzQzOCAyMCAyNCBDIDIwIDE4LjQ3NjU2MyAyNC40NzY1NjMgMTQgMzAgMTQgQyAzNS41MjM0MzggMTQgNDAgMTguNDc2NTYzIDQwIDI0IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRjNEMDA7IiBkPSJNIDIyLjAxNTYyNSAzMCBDIDIxLjU1MDc4MSAyOS4zODI4MTMgMjEuMTUyMzQ0IDI4LjcxNDg0NCAyMC44Mzk4NDQgMjggTCAyNi4xNjQwNjMgMjggQyAyNi40NDE0MDYgMjcuMzYzMjgxIDI2LjY2MDE1NiAyNi42OTUzMTMgMjYuODAwNzgxIDI2IEwgMjAuMjAzMTI1IDI2IEMgMjAuMDcwMzEzIDI1LjM1NTQ2OSAyMCAyNC42ODc1IDIwIDI0IEwgMjcgMjQgQyAyNyAyMy4zMTI1IDI2LjkyOTY4OCAyMi42NDQ1MzEgMjYuODAwNzgxIDIyIEwgMjAuMTk5MjE5IDIyIEMgMjAuMzQzNzUgMjEuMzA0Njg4IDIwLjU1ODU5NCAyMC42MzY3MTkgMjAuODM5ODQ0IDIwIEwgMjYuMTY0MDYzIDIwIEMgMjUuODUxNTYzIDE5LjI4NTE1NiAyNS40NTMxMjUgMTguNjE3MTg4IDI0Ljk4ODI4MSAxOCBMIDIyLjAxNTYyNSAxOCBDIDIyLjQ0OTIxOSAxNy40MjE4NzUgMjIuOTQ1MzEzIDE2Ljg3ODkwNiAyMy40OTYwOTQgMTYuNDA2MjUgQyAyMS43NDYwOTQgMTQuOTEwMTU2IDE5LjQ4MDQ2OSAxNCAxNyAxNCBDIDExLjQ3NjU2MyAxNCA3IDE4LjQ3NjU2MyA3IDI0IEMgNyAyOS41MjM0MzggMTEuNDc2NTYzIDM0IDE3IDM0IEMgMjAuMjY5NTMxIDM0IDIzLjE2MDE1NiAzMi40MjU3ODEgMjQuOTg0Mzc1IDMwIFogIi8+PC9nPjwvc3ZnPg==" alt="mastercard">\n\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRTFFN0VBOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjE5OTIxOSA0My4xOTkyMTkgMzkgNDEgMzkgTCA3IDM5IEMgNC44MDA3ODEgMzkgMyAzNy4xOTkyMTkgMyAzNSBMIDMgMTMgQyAzIDEwLjgwMDc4MSA0LjgwMDc4MSA5IDcgOSBMIDQxIDkgQyA0My4xOTkyMTkgOSA0NSAxMC44MDA3ODEgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGNkQwMDsiIGQ9Ik0gNDUgMzUgQyA0NSAzNy4xOTkyMTkgNDMuMTk5MjE5IDM5IDQxIDM5IEwgMTYgMzkgQyAxNiAzOSAzOS42MDE1NjMgMzUuMTk5MjE5IDQ1IDI0IFogTSAyMiAyNCBDIDIyIDI1LjY5OTIxOSAyMy4zMDA3ODEgMjcgMjUgMjcgQyAyNi42OTkyMTkgMjcgMjggMjUuNjk5MjE5IDI4IDI0IEMgMjggMjIuMzAwNzgxIDI2LjY5OTIxOSAyMSAyNSAyMSBDIDIzLjMwMDc4MSAyMSAyMiAyMi4zMDA3ODEgMjIgMjQgWiAiLz48cGF0aCBzdHlsZT0iICIgZD0iTSAxMS4xOTkyMTkgMjEgTCAxMi4zMDA3ODEgMjEgTCAxMi4zMDA3ODEgMjcgTCAxMS4xOTkyMTkgMjcgWiBNIDE3LjE5OTIxOSAyNCBDIDE3LjE5OTIxOSAyNS42OTkyMTkgMTguNSAyNyAyMC4xOTkyMTkgMjcgQyAyMC42OTkyMTkgMjcgMjEuMTAxNTYzIDI2Ljg5ODQzOCAyMS42MDE1NjMgMjYuNjk5MjE5IEwgMjEuNjAxNTYzIDI1LjM5ODQzOCBDIDIxLjE5OTIxOSAyNS44MDA3ODEgMjAuODAwNzgxIDI2IDIwLjE5OTIxOSAyNiBDIDE5LjEwMTU2MyAyNiAxOC4zMDA3ODEgMjUuMTk5MjE5IDE4LjMwMDc4MSAyNCBDIDE4LjMwMDc4MSAyMi44OTg0MzggMTkuMTAxNTYzIDIyIDIwLjE5OTIxOSAyMiBDIDIwLjY5OTIxOSAyMiAyMS4xMDE1NjMgMjIuMTk5MjE5IDIxLjYwMTU2MyAyMi42MDE1NjMgTCAyMS42MDE1NjMgMjEuMzAwNzgxIEMgMjEuMTAxNTYzIDIxLjEwMTU2MyAyMC42OTkyMTkgMjAuODk4NDM4IDIwLjE5OTIxOSAyMC44OTg0MzggQyAxOC41IDIxIDE3LjE5OTIxOSAyMi4zOTg0MzggMTcuMTk5MjE5IDI0IFogTSAzMC42MDE1NjMgMjQuODk4NDM4IEwgMjkgMjEgTCAyNy44MDA3ODEgMjEgTCAzMC4zMDA3ODEgMjcgTCAzMC44OTg0MzggMjcgTCAzMy4zOTg0MzggMjEgTCAzMi4xOTkyMTkgMjEgWiBNIDMzLjg5ODQzOCAyNyBMIDM3LjEwMTU2MyAyNyBMIDM3LjEwMTU2MyAyNiBMIDM1IDI2IEwgMzUgMjQuMzk4NDM4IEwgMzcgMjQuMzk4NDM4IEwgMzcgMjMuMzk4NDM4IEwgMzUgMjMuMzk4NDM4IEwgMzUgMjIgTCAzNy4xMDE1NjMgMjIgTCAzNy4xMDE1NjMgMjEgTCAzMy44OTg0MzggMjEgWiBNIDQxLjUgMjIuODAwNzgxIEMgNDEuNSAyMS42OTkyMTkgNDAuODAwNzgxIDIxIDM5LjUgMjEgTCAzNy44MDA3ODEgMjEgTCAzNy44MDA3ODEgMjcgTCAzOC44OTg0MzggMjcgTCAzOC44OTg0MzggMjQuNjAxNTYzIEwgMzkgMjQuNjAxNTYzIEwgNDAuNjAxNTYzIDI3IEwgNDIgMjcgTCA0MC4xOTkyMTkgMjQuNSBDIDQxIDI0LjMwMDc4MSA0MS41IDIzLjY5OTIxOSA0MS41IDIyLjgwMDc4MSBaIE0gMzkuMTk5MjE5IDIzLjgwMDc4MSBMIDM4Ljg5ODQzOCAyMy44MDA3ODEgTCAzOC44OTg0MzggMjIgTCAzOS4xOTkyMTkgMjIgQyAzOS44OTg0MzggMjIgNDAuMzAwNzgxIDIyLjMwMDc4MSA0MC4zMDA3ODEgMjIuODk4NDM4IEMgNDAuMzAwNzgxIDIzLjM5ODQzOCA0MCAyMy44MDA3ODEgMzkuMTk5MjE5IDIzLjgwMDc4MSBaIE0gNy42OTkyMTkgMjEgTCA2IDIxIEwgNiAyNyBMIDcuNjAxNTYzIDI3IEMgMTAuMTAxNTYzIDI3IDEwLjY5OTIxOSAyNC44OTg0MzggMTAuNjk5MjE5IDI0IEMgMTAuODAwNzgxIDIyLjE5OTIxOSA5LjUgMjEgNy42OTkyMTkgMjEgWiBNIDcuMzk4NDM4IDI2IEwgNy4xMDE1NjMgMjYgTCA3LjEwMTU2MyAyMiBMIDcuNSAyMiBDIDkgMjIgOS42MDE1NjMgMjMgOS42MDE1NjMgMjQgQyA5LjYwMTU2MyAyNC4zOTg0MzggOS41IDI2IDcuMzk4NDM4IDI2IFogTSAxNS4zMDA3ODEgMjMuMzAwNzgxIEMgMTQuNjAxNTYzIDIzIDE0LjM5ODQzOCAyMi44OTg0MzggMTQuMzk4NDM4IDIyLjYwMTU2MyBDIDE0LjM5ODQzOCAyMi4xOTkyMTkgMTQuODAwNzgxIDIyIDE1LjE5OTIxOSAyMiBDIDE1LjUgMjIgMTUuODAwNzgxIDIyLjEwMTU2MyAxNi4xMDE1NjMgMjIuNSBMIDE2LjY5OTIxOSAyMS42OTkyMTkgQyAxNi4xOTkyMTkgMjEuMTk5MjE5IDE1LjY5OTIxOSAyMSAxNSAyMSBDIDE0IDIxIDEzLjE5OTIxOSAyMS42OTkyMTkgMTMuMTk5MjE5IDIyLjY5OTIxOSBDIDEzLjE5OTIxOSAyMy41IDEzLjYwMTU2MyAyMy44OTg0MzggMTQuNjAxNTYzIDI0LjMwMDc4MSBDIDE1LjE5OTIxOSAyNC41IDE1LjY5OTIxOSAyNC42OTkyMTkgMTUuNjk5MjE5IDI1LjE5OTIxOSBDIDE1LjY5OTIxOSAyNS42OTkyMTkgMTUuMzAwNzgxIDI2IDE0LjgwMDc4MSAyNiBDIDE0LjMwMDc4MSAyNiAxMy44MDA3ODEgMjUuNjk5MjE5IDEzLjYwMTU2MyAyNS4xOTkyMTkgTCAxMi44OTg0MzggMjUuODk4NDM4IEMgMTMuMzk4NDM4IDI2LjY5OTIxOSAxNCAyNyAxNC44OTg0MzggMjcgQyAxNi4xMDE1NjMgMjcgMTYuODk4NDM4IDI2LjE5OTIxOSAxNi44OTg0MzggMjUuMTAxNTYzIEMgMTYuODk4NDM4IDI0LjE5OTIxOSAxNi41IDIzLjgwMDc4MSAxNS4zMDA3ODEgMjMuMzAwNzgxIFogIi8+PC9nPjwvc3ZnPg==" alt="discover">\n\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTIgMjUyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyNTJ2LTI1MmgyNTJ2MjUyeiIgZmlsbD0ibm9uZSIvPjxnPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTIzNi4yNSwxODMuNzVjMCwxMS42MDc0MiAtOS4zOTI1OCwyMSAtMjEsMjFoLTE3OC41Yy0xMS42MDc0MiwwIC0yMSwtOS4zOTI1OCAtMjEsLTIxdi0xMTUuNWMwLC0xMS42MDc0MiA5LjM5MjU4LC0yMSAyMSwtMjFoMTc4LjVjMTEuNjA3NDIsMCAyMSw5LjM5MjU4IDIxLDIxeiIgZmlsbD0iIzE2YTA4NSIvPjxwYXRoIGQ9Ik0xMTYuODMzMDEsMTA1bC0xMS4wOTQ3MywyNC41ODg4N2wtMTEuMDMzMiwtMjQuNTg4ODdoLTE0LjE1MDM5djM1LjMxNDQ2bC0xNS43NzA1MSwtMzUuMzE0NDZoLTExLjkzNTU1bC0xNi4wOTg2MywzNi42NDc0Nmg5LjUzNjEzbDMuNTA2ODQsLTguMTgyNjJoMTguMDI2MzdsMy41ODg4Nyw4LjE4MjYyaDE4LjE5MDQzdi0yNy4yMTM4N2wxMi4wNTg1OSwyNy4yMTM4N2g4LjIwMzEzbDEyLjM0NTcxLC0yNi43NDIxOXYyNi43NDIxOWg5LjA0Mzk0di0zNi42NDc0NnpNNTMuMjE3NzcsMTI1LjU0ODgzbDUuMzczMDQsLTEyLjc5Njg3bDUuNTk4NjQsMTIuNzk2ODh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5OC44ODQ3NywxMjIuOTIzODNsMTYuMzY1MjMsLTE3LjgyMTI5aC0xMS42NDg0NGwtMTAuNDU4OTgsMTEuMzYxMzNsLTEwLjEzMDg2LC0xMS40NjM4N2gtMzYuMDExNzJ2MzYuNjQ3NDZoMzQuODQyNzdsMTAuOTcxNjgsLTEyLjEyMDEybDEwLjcwNTA4LDEyLjIyMjY2aDExLjYwNzQyek0xNzcuMDY0NDYsMTMzLjk1NzAzaC0yMS4wNDEwMnYtNy4yMzkyNmgyMC4xMzg2N3YtNi45NTIxNWgtMjAuMTM4Njd2LTYuODcwMTJsMjIuMjA5OTYsMC4wNjE1Mmw4LjkwMDM5LDkuOTY2OHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="Amex">\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item no-padding>\n\n              <ion-input type="text" placeholder="Card Holder"></ion-input>\n\n<!--               <ion-icon name="person" item-end no-margin></ion-icon> -->\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item no-padding>\n\n              <ion-input placeholder="Card Number" type="number"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-item no-padding>\n\n              <ion-select placeholder="MM" class="max-width full-width">\n\n                <ion-option value="01">01</ion-option>\n\n                <ion-option value="02">02</ion-option>\n\n                <ion-option value="03">03</ion-option>\n\n                <ion-option value="04">04</ion-option>\n\n                <ion-option value="05">05</ion-option>\n\n                <ion-option value="06">06</ion-option>\n\n                <ion-option value="07">07</ion-option>\n\n                <ion-option value="08">08</ion-option>\n\n                <ion-option value="09">09</ion-option>\n\n                <ion-option value="10">10</ion-option>\n\n                <ion-option value="11">11</ion-option>\n\n                <ion-option value="12">12</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-item no-padding>\n\n              <ion-select placeholder="YY" class="max-width full-width">\n\n                <ion-option value="19">19</ion-option>\n\n                <ion-option value="20">20</ion-option>\n\n                <ion-option value="21">21</ion-option>\n\n                <ion-option value="22">22</ion-option>\n\n                <ion-option value="23">23</ion-option>\n\n                <ion-option value="24">24</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <ion-item no-padding>\n\n              <ion-input placeholder="CVV" type="number"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-grid *ngSwitchCase="\'paypal\'" padding>\n\n        <ion-row>\n\n          <ion-col no-padding text-center>\n\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSAxOC42OTkyMTkgMTMuNzY1NjI1IEwgMTguNzAzMTI1IDEzLjc2OTUzMSBDIDE4LjgwODU5NCAxMy4zMjQyMTkgMTkuMTg3NSAxMyAxOS42NjAxNTYgMTMgTCAzMy4xMzI4MTMgMTMgQyAzMy4xNDg0MzggMTMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xODM1OTQgMTIuOTkyMTg4IEMgMzIuODk0NTMxIDguMjE0ODQ0IDI4Ljg4NjcxOSA2IDI1LjM1MTU2MyA2IEwgMTEuODc4OTA2IDYgQyAxMS40MDIzNDQgNiAxMS4wMjczNDQgNi4zMzU5MzggMTAuOTIxODc1IDYuNzc3MzQ0IEwgMTAuOTE3OTY5IDYuNzczNDM4IEwgNS4wMjczNDQgMzMuODEyNSBMIDUuMDQyOTY5IDMzLjgxMjUgQyA1LjAyNzM0NCAzMy44Nzg5MDYgNS4wMDM5MDYgMzMuOTM3NSA1LjAwMzkwNiAzNC4wMDc4MTMgQyA1LjAwMzkwNiAzNC41NjI1IDUuNDQ5MjE5IDM1IDYuMDAzOTA2IDM1IEwgMTQuMDc0MjE5IDM1IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMwMzlCRTU7IiBkPSJNIDMzLjE4MzU5NCAxMi45OTIxODggQyAzMy4yMzQzNzUgMTMuODcxMDk0IDMzLjE3OTY4OCAxNC44MjQyMTkgMzIuOTUzMTI1IDE1Ljg3NSBDIDMxLjY3MTg3NSAyMS44NzEwOTQgMjcuMDQyOTY5IDI0Ljk5MjE4OCAyMS4zMjAzMTMgMjQuOTkyMTg4IEMgMjEuMzIwMzEzIDI0Ljk5MjE4OCAxNy44NDc2NTYgMjQuOTkyMTg4IDE3LjAwNzgxMyAyNC45OTIxODggQyAxNi40ODQzNzUgMjQuOTkyMTg4IDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuMTI1IDI1LjUzMTI1IEwgMTQuMzg2NzE5IDMzLjU3ODEyNSBMIDE0LjA4MjAzMSAzNS4wMDc4MTMgTCAxNC4wNzQyMTkgMzUuMDA3ODEzIEwgMTIuODEyNSA0MC44MDQ2ODggTCAxMi44MjQyMTkgNDAuODA0Njg4IEMgMTIuODEyNSA0MC44NzEwOTQgMTIuNzg1MTU2IDQwLjkyOTY4OCAxMi43ODUxNTYgNDEgQyAxMi43ODUxNTYgNDEuNTU0Njg4IDEzLjIzNDM3NSA0MiAxMy43ODUxNTYgNDIgTCAyMS4xMTcxODggNDIgTCAyMS4xMzI4MTMgNDEuOTg4MjgxIEMgMjEuNjA1NDY5IDQxLjk4NDM3NSAyMS45ODA0NjkgNDEuNjQ0NTMxIDIyLjA3ODEyNSA0MS4yMDMxMjUgTCAyMi4wOTM3NSA0MS4xODc1IEwgMjMuOTA2MjUgMzIuNzY5NTMxIEMgMjMuOTA2MjUgMzIuNzY5NTMxIDI0LjAzMTI1IDMxLjk2ODc1IDI0Ljg3ODkwNiAzMS45Njg3NSBDIDI1LjcyMjY1NiAzMS45Njg3NSAyOS4wNTQ2ODggMzEuOTY4NzUgMjkuMDU0Njg4IDMxLjk2ODc1IEMgMzQuNzc3MzQ0IDMxLjk2ODc1IDM5LjQ1NzAzMSAyOC44NjMyODEgNDAuNzM4MjgxIDIyLjg2NzE4OCBDIDQyLjE3OTY4OCAxNi4xMDU0NjkgMzcuMzU5Mzc1IDEzLjAxOTUzMSAzMy4xODM1OTQgMTIuOTkyMTg4IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMyODM1OTM7IiBkPSJNIDE5LjY2MDE1NiAxMyBDIDE5LjE4NzUgMTMgMTguODA4NTk0IDEzLjMyNDIxOSAxOC43MDMxMjUgMTMuNzY5NTMxIEwgMTguNjk5MjE5IDEzLjc2NTYyNSBMIDE2LjEyNSAyNS41MzEyNSBDIDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuNDg0Mzc1IDI0Ljk5MjE4OCAxNy4wMDM5MDYgMjQuOTkyMTg4IEMgMTcuODQ3NjU2IDI0Ljk5MjE4OCAyMS4yMzgyODEgMjQuOTkyMTg4IDIxLjIzODI4MSAyNC45OTIxODggQyAyNi45NjQ4NDQgMjQuOTkyMTg4IDMxLjY3MTg3NSAyMS44NzEwOTQgMzIuOTUzMTI1IDE1Ljg3ODkwNiBDIDMzLjE3OTY4OCAxNC44MjQyMTkgMzMuMjM0Mzc1IDEzLjg3MTA5NCAzMy4xODM1OTQgMTIuOTk2MDk0IEMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xNDg0MzggMTMgMzMuMTMyODEzIDEzIFogIi8+PC9nPjwvc3ZnPg==" alt="paypal">\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item no-padding>\n\n              <ion-input type="mail" placeholder="E-mail"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item no-padding>\n\n              <ion-input placeholder="Password" type="password"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <!--submit button-->\n\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\checkout-trip\checkout-trip.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], CheckoutTripPage);

//# sourceMappingURL=checkout-trip.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SearchCarsPage} from "../search-cars/search-cars";
var SearchLocationPage = (function () {
    function SearchLocationPage(storage, nav, navParams) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        // places
        this.places = {
            nearby: [
                {
                    id: 1,
                    name: "Current Location"
                },
                {
                    id: 2,
                    name: "Rio de Janeiro, Brazil"
                },
                {
                    id: 3,
                    name: "São Paulo, Brazil"
                },
                {
                    id: 4,
                    name: "New York, United States"
                },
                {
                    id: 5,
                    name: "London, United Kingdom"
                },
                {
                    id: 6,
                    name: "Same as pickup"
                }
            ],
            recent: [
                {
                    id: 1,
                    name: "Rio de Janeiro"
                }
            ]
        };
        this.fromto = this.navParams.data;
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (item) {
        if (this.fromto === 'from') {
            this.storage.set('pickup', item.name);
        }
        if (this.fromto === 'to') {
            this.storage.set('dropOff', item.name);
        }
        // this.nav.push(SearchCarsPage);
        this.nav.pop();
    };
    return SearchLocationPage;
}());
SearchLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search-location',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\search-location\search-location.html"*/'<!-- # -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-input placeholder="Enter Destination" padding-left autofocus></ion-input>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="list-no-border">\n\n    <!--nearby places-->\n\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item)">\n\n      <ion-icon name="md-locate" item-left color="primary"></ion-icon>\n\n      <span ion-text color="primary">{{ item.name }}</span>\n\n    </ion-item>\n\n    <!--recent places-->\n\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item)">\n\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n\n      <span ion-text color="primary">{{ item.name }}</span>\n\n    </ion-item>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\search-location\search-location.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SearchLocationPage);

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstudianteVerNotasOrdenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EstudianteVerNotasOrdenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstudianteVerNotasOrdenPage = (function () {
    function EstudianteVerNotasOrdenPage(navCtrl, navParams, http, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alerCtrl = alerCtrl;
        this.listar_notas_Desc();
    }
    EstudianteVerNotasOrdenPage.prototype.listar_notas_Desc = function () {
        var _this = this;
        try {
            this.http.listar_notas_desc(1).then(function (res) {
                _this.lista_notas_desc = JSON.parse(JSON.stringify(res));
                console.log(_this.lista_notas_desc);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    EstudianteVerNotasOrdenPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    EstudianteVerNotasOrdenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstudianteVerNotasOrdenPage');
    };
    return EstudianteVerNotasOrdenPage;
}());
EstudianteVerNotasOrdenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-estudiante-ver-notas-orden',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_estudiante\estudiante-ver-notas-orden\estudiante-ver-notas-orden.html"*/'<ion-header >\n\n  <ion-navbar color="primary">\n\n     <ion-navbar>\n\n        <button ion-button icon-only menuToggle>\n\n           <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n           Mis Notas Altas\n\n        </ion-title>\n\n        <ion-buttons end>\n\n           <button ion-button icon-only (click)="listar_notas_desc()">\n\n              <ion-icon name="md-refresh"></ion-icon>\n\n           </button>\n\n        </ion-buttons>\n\n     </ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="trips detail-bg">\n\n\n\n\n\n  <ion-list ion-item *ngFor="let item of lista_notas_desc">\n\n        <ion-item>\n\n           <ion-icon name="md-person" item-start large></ion-icon>\n\n           <h2>Curso</h2>\n\n           <p>{{item.Nombre}}</p>\n\n        </ion-item>\n\n        <ion-item>\n\n           <ion-icon name="md-list-box" item-start large></ion-icon>\n\n           <h2>Nota</h2>\n\n           <p>{{item.Nota}}</p>\n\n        </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_estudiante\estudiante-ver-notas-orden\estudiante-ver-notas-orden.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EstudianteVerNotasOrdenPage);

//# sourceMappingURL=estudiante-ver-notas-orden.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadreVerMensajesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PadreVerMensajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PadreVerMensajesPage = (function () {
    function PadreVerMensajesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PadreVerMensajesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PadreVerMensajesPage');
    };
    return PadreVerMensajesPage;
}());
PadreVerMensajesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-padre-ver-mensajes',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_padre\padre-ver-mensajes\padre-ver-mensajes.html"*/'<ion-header >\n\n  <ion-navbar color="dark">\n\n    <ion-navbar>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Mensajes\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="listar_mensajes()">\n\n          <ion-icon name="md-refresh"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-navbar>   \n\n</ion-header>\n\n\n\n<ion-content class="login-content" padding>\n\n  <ion-fab bottom right >\n\n    <button ion-fab (click)="nuevo_mensaje()">\n\n      <ion-icon name="md-add">\n\n      </ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_padre\padre-ver-mensajes\padre-ver-mensajes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PadreVerMensajesPage);

//# sourceMappingURL=padre-ver-mensajes.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadresListadoHijosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PadresListadoHijosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PadresListadoHijosPage = (function () {
    function PadresListadoHijosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PadresListadoHijosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PadresListadoHijosPage');
    };
    return PadresListadoHijosPage;
}());
PadresListadoHijosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-padres-listado-hijos',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_padre\padres-listado-hijos\padres-listado-hijos.html"*/'<ion-header >\n\n  <ion-navbar color="dark">\n\n    <ion-navbar>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Hijos\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="listar_hijos()">\n\n          <ion-icon name="md-refresh"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-navbar>   \n\n</ion-header>\n\n\n\n<ion-content class="login-content" padding>\n\n  <ion-fab bottom right >\n\n    <button ion-fab (click)="nuevo_hijo()">\n\n      <ion-icon name="md-add">\n\n      </ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_padre\padres-listado-hijos\padres-listado-hijos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PadresListadoHijosPage);

//# sourceMappingURL=padres-listado-hijos.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadresVerNotasHijosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PadresVerNotasHijosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PadresVerNotasHijosPage = (function () {
    function PadresVerNotasHijosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PadresVerNotasHijosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PadresVerNotasHijosPage');
    };
    return PadresVerNotasHijosPage;
}());
PadresVerNotasHijosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-padres-ver-notas-hijos',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_padre\padres-ver-notas-hijos\padres-ver-notas-hijos.html"*/'<ion-header >\n\n  <ion-navbar color="dark">\n\n    <ion-navbar>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Notas\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="listar_notas()">\n\n          <ion-icon name="md-refresh"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-navbar>   \n\n</ion-header>\n\n\n\n<ion-content class="login-content" padding>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_padre\padres-ver-notas-hijos\padres-ver-notas-hijos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PadresVerNotasHijosPage);

//# sourceMappingURL=padres-ver-notas-hijos.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorCrearJuegoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfesorCrearJuegoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorCrearJuegoPage = (function () {
    function ProfesorCrearJuegoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfesorCrearJuegoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorCrearJuegoPage');
    };
    return ProfesorCrearJuegoPage;
}());
ProfesorCrearJuegoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profesor-crear-juego',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-crear-juego\profesor-crear-juego.html"*/'<ion-header >\n\n  <ion-navbar color="dark">\n\n    <ion-navbar>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Juegos\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="listar_juegos()">\n\n          <ion-icon name="md-refresh"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-navbar>   \n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="login-content" padding>\n\n  \n\n  <ion-fab bottom right >\n\n    <button ion-fab (click)="nuevo_juego()">\n\n      <ion-icon name="md-add">\n\n      </ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-crear-juego\profesor-crear-juego.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfesorCrearJuegoPage);

//# sourceMappingURL=profesor-crear-juego.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorMensajePadresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfesorMensajePadresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorMensajePadresPage = (function () {
    function ProfesorMensajePadresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfesorMensajePadresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorMensajePadresPage');
    };
    return ProfesorMensajePadresPage;
}());
ProfesorMensajePadresPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profesor-mensaje-padres',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-mensaje-padres\profesor-mensaje-padres.html"*/'<ion-header >\n\n  <ion-navbar color="dark">\n\n    <ion-navbar>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Mensajes\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="listar_mensajes()">\n\n          <ion-icon name="md-refresh"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-navbar>   \n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="login-content" padding>\n\n  \n\n  <ion-fab bottom right >\n\n    <button ion-fab (click)="nuevo_mensaje()">\n\n      <ion-icon name="md-add">\n\n      </ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-mensaje-padres\profesor-mensaje-padres.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfesorMensajePadresPage);

//# sourceMappingURL=profesor-mensaje-padres.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorPlanificacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfesorPlanificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorPlanificacionPage = (function () {
    function ProfesorPlanificacionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfesorPlanificacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorPlanificacionPage');
    };
    ProfesorPlanificacionPage.prototype.subirDoc = function () { };
    ProfesorPlanificacionPage.prototype.verDoc = function () { };
    return ProfesorPlanificacionPage;
}());
ProfesorPlanificacionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profesor-planificacion',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-planificacion\profesor-planificacion.html"*/'<!--\n\n  Generated template for the ProfesorPlanificacionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n  <ion-navbar color="dark">\n\n    <ion-navbar>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        Planificacion\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="listar_mensajes()">\n\n          <ion-icon name="md-refresh"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-navbar>   \n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="login-content" padding>\n\n  \n\n  <ion-fab bottom right >\n\n    <button ion-fab (click)="nuevo_mensaje()">\n\n      <ion-icon name="md-add">\n\n      </ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <button ion-button color="light" (click)="subirDoc()">Subir Planificacion</button> \n\n \n\n  <button ion-button color="dark" (click)= "verDoc()">Ver Planificacion</button> \n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-planificacion\profesor-planificacion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfesorPlanificacionPage);

//# sourceMappingURL=profesor-planificacion.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesorVerModificarNotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfesorVerModificarNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfesorVerModificarNotaPage = (function () {
    function ProfesorVerModificarNotaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfesorVerModificarNotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfesorVerModificarNotaPage');
    };
    return ProfesorVerModificarNotaPage;
}());
ProfesorVerModificarNotaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profesor-ver-modificar-nota',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-ver-modificar-nota\profesor-ver-modificar-nota.html"*/'<!--\n\n  Generated template for the ProfesorVerModificarNotaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>profesor-ver-modificar-nota</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesor-ver-modificar-nota\profesor-ver-modificar-nota.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ProfesorVerModificarNotaPage);

//# sourceMappingURL=profesor-ver-modificar-nota.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(248);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_activity_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_trip_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_weather__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notifications_notifications__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_location_search_location__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_trip_detail_trip_detail__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_trips_trips__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_local_weather_local_weather__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profesor_profesorHome_profesorHome__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profesor_profesorListarCursos_profesorListarCursos__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_profesor_profesor_crear_juego_profesor_crear_juego__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_profesor_profesor_ver_agregar_nota_profesor_ver_agregar_nota__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_profesor_profesor_ver_modificar_nota_profesor_ver_modificar_nota__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_profesor_profesor_mensaje_padres_profesor_mensaje_padres__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_profesor_profesor_ver_notas_profesor_ver_notas__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_profesor_profesor_planificacion_profesor_planificacion__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_profesor_profesor_ver_notas_curso_profesor_ver_notas_curso__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_profesor_profesor_ver_actividades_curso_profesor_ver_actividades_curso__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_profesor_profesor_actividad_profesor_actividad__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_profesor_profesor_crear_actividad_profesor_crear_actividad__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_estudiante_estudiante_ver_horario_estudiante_ver_horario__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_estudiante_estudiante_ver_notas_estudiante_ver_notas__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_estudiante_estudiante_ver_notas_orden_estudiante_ver_notas_orden__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_padre_padres_listado_hijos_padres_listado_hijos__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_padre_padre_ver_mensajes_padre_ver_mensajes__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_padre_padres_ver_notas_hijos_padres_ver_notas_hijos__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_padre_padre_ver_horario_hijo_padre_ver_horario_hijo__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_admin_admin_ver_maestros_admin_ver_maestros__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_admin_admin_asignar_maestro_admin_asignar_maestro__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_search_location_search_location__["a" /* SearchLocationPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_trips_trips__["a" /* TripsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_profesor_profesorHome_profesorHome__["a" /* profesorHomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_profesor_profesorListarCursos_profesorListarCursos__["a" /* profesorListarCursosPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_profesor_profesor_crear_juego_profesor_crear_juego__["a" /* ProfesorCrearJuegoPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_profesor_profesor_ver_agregar_nota_profesor_ver_agregar_nota__["a" /* ProfesorVerAgregarNotaPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_profesor_profesor_ver_modificar_nota_profesor_ver_modificar_nota__["a" /* ProfesorVerModificarNotaPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_profesor_profesor_mensaje_padres_profesor_mensaje_padres__["a" /* ProfesorMensajePadresPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_profesor_profesor_ver_notas_profesor_ver_notas__["a" /* ProfesorVerNotasPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_profesor_profesor_planificacion_profesor_planificacion__["a" /* ProfesorPlanificacionPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_profesor_profesor_ver_notas_curso_profesor_ver_notas_curso__["a" /* ProfesorVerNotasCursoPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_profesor_profesor_ver_actividades_curso_profesor_ver_actividades_curso__["a" /* ProfesorVerActividadesCursoPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_profesor_profesor_actividad_profesor_actividad__["a" /* ProfesorActividadPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_profesor_profesor_crear_actividad_profesor_crear_actividad__["a" /* ProfesorCrearActividadPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_estudiante_estudiante_ver_horario_estudiante_ver_horario__["a" /* EstudianteVerHorarioPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_estudiante_estudiante_ver_notas_estudiante_ver_notas__["a" /* EstudianteVerNotasPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_estudiante_estudiante_ver_notas_orden_estudiante_ver_notas_orden__["a" /* EstudianteVerNotasOrdenPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_padre_padres_listado_hijos_padres_listado_hijos__["a" /* PadresListadoHijosPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_padre_padre_ver_mensajes_padre_ver_mensajes__["a" /* PadreVerMensajesPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_padre_padres_ver_notas_hijos_padres_ver_notas_hijos__["a" /* PadresVerNotasHijosPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_padre_padre_ver_horario_hijo_padre_ver_horario_hijo__["a" /* PadreVerHorarioHijoPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_admin_admin_ver_maestros_admin_ver_maestros__["a" /* AdminVerMaestrosPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_admin_admin_asignar_maestro_admin_asignar_maestro__["a" /* AdminAsignarMaestroPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/_admin/admin-asignar-maestro/admin-asignar-maestro.module#AdminAsignarMaestroPageModule', name: 'AdminAsignarMaestroPage', segment: 'admin-asignar-maestro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_admin/admin-ver-cuadro-honor/admin-ver-cuadro-honor.module#AdminVerCuadroHonorPageModule', name: 'AdminVerCuadroHonorPage', segment: 'admin-ver-cuadro-honor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_admin/admin-ver-estudiantes/admin-ver-estudiantes.module#AdminVerEstudiantesPageModule', name: 'AdminVerEstudiantesPage', segment: 'admin-ver-estudiantes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_admin/admin-ver-juegos-cursos/admin-ver-juegos-cursos.module#AdminVerJuegosCursosPageModule', name: 'AdminVerJuegosCursosPage', segment: 'admin-ver-juegos-cursos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_admin/admin-ver-maestros/admin-ver-maestros.module#AdminVerMaestrosPageModule', name: 'AdminVerMaestrosPage', segment: 'admin-ver-maestros', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_admin/admin-ver-notas-por-curso/admin-ver-notas-por-curso.module#AdminVerNotasPorCursoPageModule', name: 'AdminVerNotasPorCursoPage', segment: 'admin-ver-notas-por-curso', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_admin/admin-ver-padres/admin-ver-padres.module#AdminVerPadresPageModule', name: 'AdminVerPadresPage', segment: 'admin-ver-padres', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_estudiante/estudiante-ver-horario/estudiante-ver-horario.module#EstudianteVerHorarioPageModule', name: 'EstudianteVerHorarioPage', segment: 'estudiante-ver-horario', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_estudiante/estudiante-ver-juego/estudiante-ver-juego.module#EstudianteVerJuegoPageModule', name: 'EstudianteVerJuegoPage', segment: 'estudiante-ver-juego', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_estudiante/estudiante-ver-notas-orden/estudiante-ver-notas-orden.module#EstudianteVerNotasOrdenPageModule', name: 'EstudianteVerNotasOrdenPage', segment: 'estudiante-ver-notas-orden', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_estudiante/estudiante-ver-notas/estudiante-ver-notas.module#EstudianteVerNotasPageModule', name: 'EstudianteVerNotasPage', segment: 'estudiante-ver-notas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_padre/padre-ver-horario-hijo/padre-ver-horario-hijo.module#PadreVerHorarioHijoPageModule', name: 'PadreVerHorarioHijoPage', segment: 'padre-ver-horario-hijo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_padre/padre-ver-mensajes/padre-ver-mensajes.module#PadreVerMensajesPageModule', name: 'PadreVerMensajesPage', segment: 'padre-ver-mensajes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_padre/padres-listado-hijos/padres-listado-hijos.module#PadresListadoHijosPageModule', name: 'PadresListadoHijosPage', segment: 'padres-listado-hijos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_padre/padres-ver-asistencia-hijos/padres-ver-asistencia-hijos.module#PadresVerAsistenciaHijosPageModule', name: 'PadresVerAsistenciaHijosPage', segment: 'padres-ver-asistencia-hijos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_padre/padres-ver-notas-hijos/padres-ver-notas-hijos.module#PadresVerNotasHijosPageModule', name: 'PadresVerNotasHijosPage', segment: 'padres-ver-notas-hijos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-actividad/profesor-actividad.module#ProfesorActividadPageModule', name: 'ProfesorActividadPage', segment: 'profesor-actividad', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-crear-actividad-juego/profesor-crear-actividad-juego.module#ProfesorCrearActividadJuegoPageModule', name: 'ProfesorCrearActividadJuegoPage', segment: 'profesor-crear-actividad-juego', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-crear-actividad/profesor-crear-actividad.module#ProfesorCrearActividadPageModule', name: 'ProfesorCrearActividadPage', segment: 'profesor-crear-actividad', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-crear-juego/profesor-crear-juego.module#ProfesorCrearJuegoPageModule', name: 'ProfesorCrearJuegoPage', segment: 'profesor-crear-juego', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-listado-juegos/profesor-listado-juegos.module#ProfesorListadoJuegosPageModule', name: 'ProfesorListadoJuegosPage', segment: 'profesor-listado-juegos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-mensaje-padres/profesor-mensaje-padres.module#ProfesorMensajePadresPageModule', name: 'ProfesorMensajePadresPage', segment: 'profesor-mensaje-padres', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-planificacion/profesor-planificacion.module#ProfesorPlanificacionPageModule', name: 'ProfesorPlanificacionPage', segment: 'profesor-planificacion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-ver-actividades-curso/profesor-ver-actividades-curso.module#ProfesorVerActividadesCursoPageModule', name: 'ProfesorVerActividadesCursoPage', segment: 'profesor-ver-actividades-curso', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-ver-agregar-nota/profesor-ver-agregar-nota.module#ProfesorVerAgregarNotaPageModule', name: 'ProfesorVerAgregarNotaPage', segment: 'profesor-ver-agregar-nota', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-ver-modificar-nota/profesor-ver-modificar-nota.module#ProfesorVerModificarNotaPageModule', name: 'ProfesorVerModificarNotaPage', segment: 'profesor-ver-modificar-nota', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-ver-notas-curso/profesor-ver-notas-curso.module#ProfesorVerNotasCursoPageModule', name: 'ProfesorVerNotasCursoPage', segment: 'profesor-ver-notas-curso', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/_profesor/profesor-ver-notas/profesor-ver-notas.module#ProfesorVerNotasPageModule', name: 'ProfesorVerNotasPage', segment: 'profesor-ver-notas', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__ionic3_start_theme',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_local_weather_local_weather__["a" /* LocalWeatherPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_search_location_search_location__["a" /* SearchLocationPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_trips_trips__["a" /* TripsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_profesor_profesorHome_profesorHome__["a" /* profesorHomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_profesor_profesorListarCursos_profesorListarCursos__["a" /* profesorListarCursosPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_profesor_profesor_crear_juego_profesor_crear_juego__["a" /* ProfesorCrearJuegoPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_profesor_profesor_ver_agregar_nota_profesor_ver_agregar_nota__["a" /* ProfesorVerAgregarNotaPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_profesor_profesor_ver_modificar_nota_profesor_ver_modificar_nota__["a" /* ProfesorVerModificarNotaPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_profesor_profesor_mensaje_padres_profesor_mensaje_padres__["a" /* ProfesorMensajePadresPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_profesor_profesor_ver_notas_profesor_ver_notas__["a" /* ProfesorVerNotasPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_profesor_profesor_planificacion_profesor_planificacion__["a" /* ProfesorPlanificacionPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_profesor_profesor_ver_notas_curso_profesor_ver_notas_curso__["a" /* ProfesorVerNotasCursoPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_profesor_profesor_ver_actividades_curso_profesor_ver_actividades_curso__["a" /* ProfesorVerActividadesCursoPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_profesor_profesor_actividad_profesor_actividad__["a" /* ProfesorActividadPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_profesor_profesor_crear_actividad_profesor_crear_actividad__["a" /* ProfesorCrearActividadPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_estudiante_estudiante_ver_horario_estudiante_ver_horario__["a" /* EstudianteVerHorarioPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_estudiante_estudiante_ver_notas_estudiante_ver_notas__["a" /* EstudianteVerNotasPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_estudiante_estudiante_ver_notas_orden_estudiante_ver_notas_orden__["a" /* EstudianteVerNotasOrdenPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_padre_padres_listado_hijos_padres_listado_hijos__["a" /* PadresListadoHijosPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_padre_padre_ver_mensajes_padre_ver_mensajes__["a" /* PadreVerMensajesPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_padre_padres_ver_notas_hijos_padres_ver_notas_hijos__["a" /* PadresVerNotasHijosPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_padre_padre_ver_horario_hijo_padre_ver_horario_hijo__["a" /* PadreVerHorarioHijoPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_admin_admin_ver_maestros_admin_ver_maestros__["a" /* AdminVerMaestrosPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_admin_admin_asignar_maestro_admin_asignar_maestro__["a" /* AdminAsignarMaestroPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_9__services_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_10__services_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_24__services_http__["a" /* HttpProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_activities__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    return ActivityService;
}());
ActivityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ActivityService);

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        name: "Notas - Profesor",
        price_adult: 60,
        price_child: 30,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/profesor/actividades.png",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/trip/thumb/trip_5.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Actividades- Profesor",
        price_adult: 90,
        price_child: 45,
        time: "4h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/profesor/cursos.png",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 4,
        name: "Ver Horario - Estudiante",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/profesor/mensajes.png",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 5,
        name: "Ver Notas - Estudiante",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/profesor/mensajes.png",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 6,
        name: "Ver horario de hijos - Padre",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/profesor/mensajes.png",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 7,
        name: "Asignar Maestro - Admin",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/profesor/mensajes.png",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 8,
        name: "Ver Maestros - Admin",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/profesor/mensajes.png",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_local_weather_local_weather__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Homes', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Local Weather', component: __WEBPACK_IMPORTED_MODULE_7__pages_local_weather_local_weather__["a" /* LocalWeatherPage */], icon: 'partly-sunny' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\app\app.html"*/'\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profesorListarCursosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var profesorListarCursosPage = (function () {
    function profesorListarCursosPage(nav, tripService, loadingCtrl, toastCtrl, http) {
        this.nav = nav;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        // number of adults
        this.adults = 2;
        // date
        this.date = new Date();
        this.paymethods = 'creditcard';
        // set sample data
        this.trip = tripService.getItem(1);
        console.log("asdfaaaaaa");
        this.listar_cursos();
    }
    profesorListarCursosPage.prototype.listar_cursos = function () {
        var _this = this;
        console.log("antes de llamada");
        try {
            console.log("antes de llamada2");
            this.http.listar_cursos().then(function (res) {
                _this.cursos = JSON.parse(JSON.stringify(res));
                console.log(_this.cursos);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            console.log("Error");
        }
    };
    // process send button
    profesorListarCursosPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Book Activity Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    return profesorListarCursosPage;
}());
profesorListarCursosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'profesorListarCursos',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesorListarCursos\profesorListarCursos.html"*/'<!-- -->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Listado de Cursos </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="trips detail-bg">\n\n\n\n\n\n   <ion-list ion-item *ngFor="let item of cursos">\n\n         <ion-item (click)=\'goHome(branch)\'>\n\n            <ion-icon name="md-key" item-start large ></ion-icon>\n\n            <h2>Id alumno</h2>\n\n            <p>{{item.Nombre}}</p>\n\n         </ion-item>\n\n   </ion-list>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_profesor\profesorListarCursos\profesorListarCursos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__services_http__["a" /* HttpProvider */]])
], profesorListarCursosPage);

//# sourceMappingURL=profesorListarCursos.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    return TripService;
}());
TripService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TripService);

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trips_trips__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_location_search_location__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__local_weather_local_weather__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = HomePage_1 = (function () {
    function HomePage(storage, nav, popoverCtrl) {
        this.storage = storage;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        // search condition
        this.search = {
            name: "Rio de Janeiro, Brazil",
            date: new Date().toISOString()
        };
        this.appMenuItems = [
            { title: 'Homesotro menu', component: HomePage_1, icon: 'home' },
            { title: 'Local Weather', component: __WEBPACK_IMPORTED_MODULE_7__local_weather_local_weather__["a" /* LocalWeatherPage */], icon: 'partly-sunny' }
        ];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.search.pickup = "Rio de Janeiro, Brazil";
        // this.search.dropOff = "Same as pickup";
        this.storage.get('pickup').then(function (val) {
            if (val === null) {
                _this.search.name = "Rio de Janeiro, Brazil";
            }
            else {
                _this.search.name = val;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    // go to result page
    HomePage.prototype.doSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trips_trips__["a" /* TripsPage */]);
    };
    // choose place
    HomePage.prototype.choosePlace = function (from) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_location_search_location__["a" /* SearchLocationPage */], from);
    };
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    return HomePage;
}());
HomePage = HomePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\home\home.html"*/'<!-- -->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <strong>Ionic 3</strong> Start Theme\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable (click)="presentNotifications($event)">\n\n        <ion-icon name="notifications"></ion-icon>\n\n      </button>\n\n      <button ion-button tappable (click)="goToAccount()">\n\n        <ion-icon name="cog"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="animated fadeIn common-bg">\n\n\n\n  <ion-card no-margin margin-bottom class="full-width">\n\n    <ion-item tappable (click)="choosePlace(\'from\')" class="border-bottom">\n\n      <ion-icon name="search" color="primary" item-left></ion-icon>\n\n      <span>{{ search.name }}</span>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n\n      <ion-datetime class="no-pl" displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" [(ngModel)]="search.date"></ion-datetime>\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n  <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">\n\n    <ion-icon name="search"></ion-icon> Search\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
], HomePage);

var HomePage_1;
//
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profesor_profesorHome_profesorHome__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(formBuilder, nav, forgotCtrl, menu, toastCtrl) {
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.menu.swipeEnable(false);
        this.myForm = this.createMyForm();
    }
    LoginPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        console.log(this.myForm.value.email);
        console.log(this.myForm.value.password);
        var tipoUsuario = this.myForm.value.email;
        if (tipoUsuario === 'profesor') {
        }
        else if (tipoUsuario === 'admin') {
        }
        else if (tipoUsuario === 'padre') {
        }
        else if (tipoUsuario === 'estudiante') {
        }
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__profesor_profesorHome_profesorHome__["a" /* profesorHomePage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\login\login.html"*/'<!-- -->\n\n<ion-content padding class="animated fadeIn login auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding-horizontal text-center class="animated fadeInDown">\n\n      <div class="logo"></div>\n\n      <h2 ion-text class="text-primary">\n\n        <strong>USAC</strong> Learn\n\n      </h2>\n\n    </div>\n\n\n\n    <!-- Login form -->\n\n    <form  [formGroup]="myForm"   class="list-form">\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n\n          Email\n\n        </ion-label>\n\n        <ion-input formControlName="email" type="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>\n\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n\n          Password\n\n        </ion-label>\n\n        <ion-input formControlName="password" type="password"></ion-input>\n\n      </ion-item>\n\n      <div>\n\n        <button ion-button icon-start block color="dark" tappable [disabled]="!myForm.valid" (click)="login()">\n\n          <ion-icon name="log-in"></ion-icon>\n\n          SIGN IN\n\n        </button>\n\n        <p text-center ion-text color="secondary">Or Sign in with:</p>\n\n      </div>    \n\n    </form>\n\n    <!-- Other links -->\n\n    <div text-center margin-top>\n\n      <span ion-text color="secondary" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstudianteVerHorarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EstudianteVerHorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstudianteVerHorarioPage = (function () {
    function EstudianteVerHorarioPage(navCtrl, navParams, http, alerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alerCtrl = alerCtrl;
        this.listar_horario();
    }
    EstudianteVerHorarioPage.prototype.listar_horario = function () {
        var _this = this;
        try {
            this.http.listar_horario(1).then(function (res) {
                _this.lista_horario = JSON.parse(JSON.stringify(res));
                console.log(_this.lista_horario);
            }, function (error) {
                console.log(error);
            });
        }
        catch (e) {
            this.doAlert('Error', 'No se puede cargar intenta mas tarde');
        }
    };
    EstudianteVerHorarioPage.prototype.doAlert = function (titulo, mensaje) {
        var alert = this.alerCtrl.create({
            title: String(titulo),
            message: String(mensaje),
            buttons: ['Ok']
        });
        alert.present();
    };
    EstudianteVerHorarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstudianteVerHorarioPage');
    };
    return EstudianteVerHorarioPage;
}());
EstudianteVerHorarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-estudiante-ver-horario',template:/*ion-inline-start:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_estudiante\estudiante-ver-horario\estudiante-ver-horario.html"*/'<ion-header >\n\n  <ion-navbar color="primary">\n\n     <ion-navbar>\n\n        <button ion-button icon-only menuToggle>\n\n           <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n           Mi horario\n\n        </ion-title>\n\n        <ion-buttons end>\n\n           \n\n        </ion-buttons>\n\n     </ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding class="trips detail-bg">\n\n <ion-list ion-item *ngFor="let item of lista_horario">\n\n  <ion-item>\n\n     <ion-icon ios="ios-school" md="md-school" item-start large ></ion-icon>\n\n     <h2>Nombre Curso</h2>\n\n     <p>{{item.Nombre}}</p>\n\n  </ion-item>\n\n  <ion-item>\n\n     <ion-icon ios="ios-timer" md="md-timer" item-start large></ion-icon>\n\n     <h2>Horario</h2>\n\n     <p>{{item.Hora}}</p>\n\n  </ion-item>\n\n  <ion-item>\n\n     <ion-icon ios="ios-calendar" md="md-calendar" item-start large></ion-icon>\n\n     <h2>Dias</h2>\n\n     <p>{{item.Dias}}</p>\n\n  </ion-item>\n\n  <ion-item>\n\n     <ion-icon ios="ios-bookmark" md="md-bookmark" item-start large></ion-icon>\n\n     <h2>Salon</h2>\n\n     <p>{{item.Salon}}</p>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Documents\GitHub\Grupo4\MOBILE\src\pages\_estudiante\estudiante-ver-horario\estudiante-ver-horario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EstudianteVerHorarioPage);

//# sourceMappingURL=estudiante-ver-horario.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.js.map