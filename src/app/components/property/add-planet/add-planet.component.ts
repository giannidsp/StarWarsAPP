import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {
  
  public title: string;
  registrationForm: FormGroup;
  planet: any = {};
  planetSubmitted: boolean;

  constructor(private fb: FormBuilder) { 

    this.title = "Add Planet";
  }

  ngOnInit(): void {
    this.createRegistrationForm();
  }
  
  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      planetName: [null, Validators.required],
      Gravity: [null, [Validators.required]],
      Climate: [null, [Validators.required]]
    });
  }

  //-----------------------------------
  //Getter methods for all form controls
  // ----------------------------------
  get planetName() {
    return this.registrationForm.get('planetName') as FormControl;
  }

  get Gravity() {
    return this.registrationForm.get('Gravity') as FormControl;
  }

  get Climate() {
    return this.registrationForm.get('Climate') as FormControl;
  }
  //-----------------------------------

  onSubmit() {
    console.log(this.registrationForm.value);
    this.planetSubmitted = true;

    if (this.registrationForm.valid) {
      this.planet = Object.assign(this.planet, this.registrationForm.value);
      this.addPlanet(this.planet);
      this.registrationForm.reset();
      this.planetSubmitted = false;
    }
  }

  // Funcion para guardar el nuevo planeta en el local storage
  addPlanet(planet) {
    let planets = [];
    if (localStorage.getItem('Planets')) {
      planets = JSON.parse(localStorage.getItem('Planets'));
      planets = [planet, ...planets];
    } else {
      planets = [planet];
    }
    localStorage.setItem('Planets', JSON.stringify(planets));
  }
}
