import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  totalRecords = 0; // Set this to the total number of records

  products = [
    { id: 1, name: 'أحمد محمود', number: '0123456789', image: "../../assets/images/image1.png", image2:"../../assets/images/icon3.png", image3:"../../assets/images/icon2.png", price: "C-101", value: '$40', cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...", no_of_people: 1, no_of_buys:"مرة واحدة", name_ticket: "تذكرة رقم 45.pdf", file_size:"9mb", Format:"PDF" },
    { id: 1, name: 'محمد الغريب', number: '0123456789', image: '../../assets/images/image1.png', image2:"../../assets/images/icon3.png", image3:"../../assets/images/icon2.png", price: "C-102", value: '$30', cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...", no_of_people: 1, no_of_buys:"مرة واحدة", name_ticket: "تذكرة رقم 45.pdf", file_size:"9mb", Format:"PDF" },
    { id: 3, name: 'محمد الغريب', number: '0123456789', image: '../../assets/images/image2.png', image2:"../../assets/images/icon3.png", image3:"../../assets/images/icon2.png", price: "C-102", value: '$45', cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...", no_of_people: 1, no_of_buys:"مرة واحدة", name_ticket: "تذكرة رقم 45.pdf",file_size:"9mb", Format:"PDF" },
    { id: 4, name: 'محمد الغريب', number: '0123456789', image: '../../assets/images/image2.png', image2:"../../assets/images/icon3.png", image3:"../../assets/images/icon2.png", price: "C-103", value: '$54', cinemas: "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...", no_of_people: 1, no_of_buys:"مرة واحدة",name_ticket: "تذكرة رقم 45.pdf", file_size:"9mb", Format:"PDF" }
  ];
}
