import { Component, OnInit  } from '@angular/core';
import { PlanetasService } from 'src/app/services/planetas.service';

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

  public show:boolean = false;

  constructor(private _service: PlanetasService) { 

    this.title = "Planets";
  }

  ngOnInit() {
    this._service.getPlanets().subscribe(
      response => {
        let res: any;
        res = response; // Recolecta la respuesta de la API en la variable 'res'
        this.planets = res.results; //Accede al arreglo 'results' que esta dentro de 'res' y lo guarda en planets
      },
      error => {
        console.log(error);
      }
    );
    
  }

  // Funcion para boton Details, se obtiene un arreglo con toda la info del planeta seleccionado
  showInfo(planetInfor){
    this.planetInfo = planetInfor;
  }

  // Funcion toggle Show/Hide
  toggle() {
    this.show = !this.show;
  }
}
