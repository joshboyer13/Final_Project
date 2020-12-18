import { AfterViewInit, Component,  } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  public dataSource =

    {
      datasets: [{
          data: [],
          backgroundColor: [

              ],
      }],

      labels: []
      };

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {

    this.http.get('http://localhost:4200/budget')
    .subscribe((res: any) => {
      console.log(res);

      for (var i = 0; i < res.budget.length; i++){
        this.dataSource.datasets[0].data[i] = res.budget[i].budget;
        this.dataSource.labels[i] = res.budget[i].title;
        this.createBarChart();
        this.createRadarChart();
        this.createPieChart();
    }

    });
  }

  createBarChart(){
    // var ctx = document.getElementById('myChart').getContext('2d');
    const ctx = document.getElementById('BarChart');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: this.dataSource

    });
}
createRadarChart(){
  // var ctx = document.getElementById('myChart').getContext('2d');
  const ctx = document.getElementById('RadarChart');
  const myChart = new Chart(ctx, {
      type: 'radar',
      data: this.dataSource

  });
}
createPieChart(){
  // var ctx = document.getElementById('myChart').getContext('2d');
  const ctx = document.getElementById('PieChart');
  const myChart = new Chart(ctx, {
      type: 'pie',
      data: this.dataSource

  });
}

}
