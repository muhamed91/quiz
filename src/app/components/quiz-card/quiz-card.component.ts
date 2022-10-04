import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {

  countries:[] = [];
  capitalCity: any= []

  constructor(private countriesService: RestApiService) { }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((d) => {

      for (const key in d) {
        const element = d[key];

        this.capitalCity.push(element.capital[0])
      
        
      }      

    });

    console.log(this.capitalCity);
    
  
  }

}
