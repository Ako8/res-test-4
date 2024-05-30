import {Component, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  number_of_days = 20;
  years = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  slices = [0, 1, 2, 3];
  dates = signal<Date[]>([]);
  currentDate = signal(new Date());
  selectedMonth = signal(this.currentDate().getMonth() + 1);
  selectedYear = signal(this.currentDate().getFullYear());


  filteredCars = signal<{
    brand: string,
    model: string,
    plate: string,
    required: string,
    orders: { date: Date, slices: boolean[] }[]
  }[]>([]);

  ngOnInit() {
    this.generateDateList(this.currentDate());
    this.filteredCars.set(this.cars());
  }

  generateDateList(startDate: Date) {
    const dates: Date[] = [];

    for (let i = 0; i < this.number_of_days; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      dates.push(currentDate);
    }
    this.dates.set(dates);
  }

  updateCurrentDate() {
    const startDate = new Date(this.selectedYear(), this.selectedMonth() - 1, 1);
    this.currentDate.set(startDate);
    this.generateDateList(startDate);
  }

  resetDate() {
    const now = new Date();
    this.currentDate.set(now);
    this.selectedMonth.set(now.getMonth() + 1);
    this.selectedYear.set(now.getFullYear());
    this.generateDateList(now);
  }

  slideDateChange(days: number) {
    const currentDate = this.currentDate();
    const newDate = new Date(currentDate.getTime() + days * 24 * 60 * 60 * 1000);
    this.currentDate.set(newDate);
    this.generateDateList(newDate);
  }

  filterBrandModel(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredCars.set(this.cars().filter(car =>
      (car.brand.toLowerCase() + ' ' + car.model.toLowerCase()).includes(filterValue)
    ));
  }

  filterPlate(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredCars.set(this.cars().filter(car =>
      car.plate.toLowerCase().includes(filterValue)
    ));
  }

  filterRequired(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredCars.set(this.cars().filter(car =>
      car.required.toLowerCase().includes(filterValue)
    ));
  }

  cars = signal<{
    brand: string,
    model: string,
    plate: string,
    required: string,
    orders: { date: Date, slices: boolean[] }[]
  }[]>(
    [
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },{
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },
      {
        brand: "Toyota",
        model: "Prius",
        plate: "GA 777 HE",
        required: "M",
        orders: [
          {
            date: new Date(2024, 4, 25),
            slices: [false, false, true, true]
          },
          {
            date: new Date(2024, 4, 26),
            slices: [true, true, true, true]
          },
          {
            date: new Date(2024, 4, 27),
            slices: [true, true, true, false]
          },
          {
            date: new Date(2024, 5, 2),
            slices: [true, true, true, true]
          },
        {
            date: new Date(2024, 5, 3),
            slices: [true, true, true, false]
          }
        ]
      },


    ]
  );


  checkOrderOnDate(orders: { date: Date, slices: boolean[] }[], day: Date) {
    return orders.some(orders => this.isSameDay(orders.date, day))
  }

  getOrder(day: Date, carOrders: { date: Date, slices: boolean[] }[]): number {
    for (let i = 0; i < carOrders.length; i++) {
      if (this.isSameDay(carOrders[i].date, day)) {
        return i;
      }
    }
    return -1;
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  }

}
