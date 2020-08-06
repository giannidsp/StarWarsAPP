import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { PlanetasService } from 'src/app/services/planetas.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css'],
  providers: [PlanetasService]
})
export class PlanetasComponent implements OnInit {

  public title: string;
  public planets: any;
  public planetInfo: any;

  pageActual: number = 1;

  public show:boolean = false;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  showGoUpButton = false;

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private _service: PlanetasService

  ) { 
    this.title = "Planets";
  }
  

  //---------------------------------------------------
  // Método para hacer scroll up mediante un botón 
  // que aparecerá luego de hacer un cierto scroll down
  //---------------------------------------------------

  @HostListener('window:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  onScrollTop():void{
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Otro navegador
  }
  // -------------------------------------

  ngOnInit() {
    this._service.getPlanets().subscribe(
      response => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.planets = res.results; //Accede al arreglo 'results' que está dentro de 'res' y lo guarda en planets
      },
      error => {
        console.log(error);
      }
    );
    
  }

  // Función para botón Details, se obtiene un arreglo con toda la info del planeta seleccionado
  showInfo(planetInfor){
    this.planetInfo = planetInfor;
  }

  // Función toggle Show/Hide
  toggle() {
    this.show = !this.show;
  }
}
