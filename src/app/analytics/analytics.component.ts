import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements AfterViewInit, OnDestroy {
  private myChart: echarts.ECharts | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.initChart();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
    this.myChart?.dispose();
  }

  initChart(): void {
    const chartDom = document.getElementById('chart') as HTMLElement;
    this.myChart = echarts.init(chartDom);

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
          formatter: function (value: string) {
            const months: { [key: string]: string } = {
              'Jan': 'يناير',
              'Feb': 'فبراير',
              'Mar': 'مارس',
              'Apr': 'أبريل',
              'May': 'مايو',
              'Jun': 'يونيو',
              'Jul': 'يوليو',
              'Aug': 'أغسطس',
              'Sep': 'سبتمبر',
              'Oct': 'أكتوبر',
              'Nov': 'نوفمبر',
              'Dec': 'ديسمبر'
            };
            return months[value];
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} '
        }
      },
      series: [{
        name: 'استخدم ',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 2
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(115, 102, 255, 0.5)' },
            { offset: 1, color: 'rgba(115, 102, 255, 0)' }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210, 250, 220, 190, 160, 120],
        label: {
          show: true,
          position: 'top',
          color: '#5957ff',
          formatter: function (params: any) {
            if (params.dataIndex === 7) { // Highlight August
              return params.data + " استخدام";
            }
            return '';
          }
        },
        itemStyle: {
          color: '#7366ff'
        }
      }],
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      }
    };

    this.myChart.setOption(option);
  }

  onResize(): void {
    this.myChart?.resize();
  }
}
