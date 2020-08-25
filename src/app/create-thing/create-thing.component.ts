import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-create-thing',
  templateUrl: './create-thing.component.html',
  styleUrls: ['./create-thing.component.css']
})
export class CreateThingComponent implements OnInit {

  isSubmitted = false;

  // iot devices
  Sensors: Array<string> = new Array<string>();
  deviceData: any;

  constructor(public fb: FormBuilder) { }
  ngOnInit(): void {
    this.Sensors = ['Temperature Sensor', 'Pressure Sensor', 'Optical Sensor', 'Gas Sensor', 'Accelerometer and Gyroscope Sensor', 'Smoke Sensor']

    this.deviceData = {
      "1: Pressure Sensor": ["1", "2", "3", "4"],
      "2: Temperature Sensor": ["10", "20", "30", "40"],
      "3: Optical Sensor": ["1", "2", "3", "4"]
    }


  }



  registrationForm = this.fb.group({
    SensorName: ['', [Validators.required]],
     ThingName: ['', [Validators.required]],
     Thresold: []

  })

  changeSensor(e) {
    console.log(e.target.value)
    this.SensorName.setValue(e.target.value, {
      onlySelf: true
    })
    if (e.target.length == 0) document.getElementById("Thresold").innerHTML = "<option></option>";
    else {
      var catOptions = "";
      console.log(this.deviceData[e.target.value])
      for (var val in this.deviceData[e.target.value]) {
        
        catOptions += "<option>" + this.deviceData[e.target.value][val] + "</option>";
      }
      document.getElementById("Thresold").innerHTML = catOptions;
    }
  }

  // Getter method to access formcontrols
  get SensorName() {
    return this.registrationForm.get('SensorName');
  }

  get ThingName() {
    return this.registrationForm.get('ThingName');
  }
  get Thresold() {
    return this.registrationForm.get('Thresold');
  }


  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }

  }
}
