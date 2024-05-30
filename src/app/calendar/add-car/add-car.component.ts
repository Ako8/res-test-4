import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  carForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      licensePlate: ['', Validators.required],
      yearOfManufacture: ['', [Validators.required, Validators.min(1986)]],
      bodyColor: ['', Validators.required],
      bodyType: ['', Validators.required],
      unlimited: [false],
      limit: [''],
      overageFee: [''],
      engineType: ['', Validators.required],
      horsepower: ['', Validators.required],
      fuel: ['', Validators.required],
      tankCapacity: ['', Validators.required],
      fuelConsumption: ['', Validators.required],
      transmission: ['', Validators.required],
      drive: ['', Validators.required],
      abs: [false],
      ebd: [false],
      esp: [false],
      requiredLicense: ['', Validators.required],
      seats: ['', Validators.required],
      numberOfDoors: ['', Validators.required],
      airConditioning: ['', Validators.required],
      interior: ['', Validators.required],
      roof: ['', Validators.required],
      poweredWindows: [false],
      airbags: ['', Validators.required],
      sideWheel: ['', Validators.required],
      cruiseControl: [false],
      rearViewCamera: [false],
      parkingAssist: [false],
      radio: [false],
      aux: [false],
      usb: [false],
      mp3: [false],
      bluetooth: [false],
      audioCD: [false],
      franchise: [false],
      franchiseAmount: [''],
      deposit: [false],
      depositAmount: [''],
    });

  }

  onSubmit() {
    if (this.carForm.valid) {
      console.log(this.carForm.value);
    }
  }
}
