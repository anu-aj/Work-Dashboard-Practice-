//jQuery Functions
$(document).ready(
  function() {
      var num=["10","273","156","64.89%","423","278","156","65%","400"];
      var tagLine=["xyz","Projects","Clients","Conversion Rate","Support Ticket","New Posts","New Comments","Bounce Rate","Total Visits"];
      for (let i= 1; i<= num.length; i++) {
          $( "#count"+i ).html(num[i]);  
          $("#tag"+i).html(tagLine[i]);
          console.log("#count"+[i] ,num[i]);
      }
  }
)

//Modal
// Charts
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Weekly Sales',
      data: [20, 15, 10, 30 ,25 ],
      backgroundColor: [
        'rgba(255, 26, 104, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(100, 216, 104, 0.5)',
        'rgba(153, 102, 255,0.5)',
        'rgba(218, 165, 32, 0.5)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(100, 216, 104, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(218, 165, 32, 1)'
      ],
      borderWidth: 2,
      hoverBackgroundColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(100, 216, 104, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(218, 165, 32, 1)' 
    ],     
    }],
    hoverOffset: 4,
};


// const ctx101=document.querySelector('#chart-disp').getContext("2d");

//modal-bar
const config101 = {
  type: 'bar',
  data: data,
      maintainAspectRatio:false,  
      options:{
      plugins: { 
      tooltip:  {
        enabled: true,
      },
       datalabels:{
        fontStyle:'bold',
        formatter:(value,context) => {
            const disp =value+'%';
            return disp;
        }
      } ,   
      radius:10,  
      hitRadius:15,
      hoverRadius:25,    
      }},
      plugins:[ChartDataLabels],

};

//modal-pie
const config102 = {
type: 'pie',
data: data,
    maintainAspectRatio:false,  
    options:{
    plugins: { 
    tooltip:  {
      enabled: true,
    },
     datalabels:{
      fontStyle:'bold',
      formatter:(value,context) => {
          const disp =value+'%';
          return disp;
      }
    } ,   
    radius:10,  
    hitRadius:15,
    hoverRadius:25,    
    }},
    plugins:[ChartDataLabels],

};

//modal-line
const config103 = {
type: 'line',
data: data,
    maintainAspectRatio:false,  
    options:{
    plugins: { 
    tooltip:  {
      enabled: true,
    },
     datalabels:{
      fontStyle:'bold',
      formatter:(value,context) => {
          const disp =value+'%';
          return disp;
      }
    } ,   
    radius:10,  
    hitRadius:15,
    hoverRadius:25,    
    }},
    plugins:[ChartDataLabels],

};

//modal-nut
const config104 = {
type: 'doughnut',
data: data,
    maintainAspectRatio:false,  
    options:{
    plugins: { 
    tooltip:  {
      enabled: true,
    },
     datalabels:{
      fontStyle:'bold',
      formatter:(value,context) => {
          const disp =value+'%';
          return disp;
      }
    } ,   
    radius:10,  
    hitRadius:15,
    hoverRadius:25,    
    }},
    plugins:[ChartDataLabels],

};
const config105 = {
type: 'pie',
data: data,
    maintainAspectRatio:false,  
    options:{
    plugins: { 
    tooltip:  {
      enabled: true,
    },
     datalabels:{
      fontStyle:'bold',
      formatter:(value,context) => {
          const disp =value+'%';
          return disp;
      }
    } ,   
    radius:10,  
    hitRadius:15,
    hoverRadius:25,    
    }},
    plugins:[ChartDataLabels],

};
var myChart=null;
$(document).ready(
function(){
  myChart=document.querySelector('#chart-disp');
  $('#modal-bar').on('shown.bs.modal',$("#modal-body").html(new Chart(myChart,config101)));  
  // $('#modal-line').on('shown.bs.modal',$("#modal-body").html(new Chart(myChart,config102)));
  // $('#modal-nut').on('shown.bs.modal',$("#modal-body").html(new Chart(myChart,config104)));
  // $('#modal-pie').on('shown.bs.modal',$("#modal-body").html(new Chart(myChart,config102)));
  // $('#modal-pie2').on('shown.bs.modal',$("#modal-body").html(new Chart(myChart,config103)));
  }    
  );

// $(document).ready(
// function(){
//     // $(".modal-title").html(config105.type);
//     $(".max").on('click',function(){
//       $("#modal-pie2").on('click',new Chart(document.querySelector('#chart-disp'),config105)); 
//       $("#modal-nut").on('click',new Chart(document.querySelector('#chart-disp'),config104)); 
//       $("#modal-line").on('click',new Chart(document.querySelector('#chart-disp'),config103)); 
//       $("#modal-pie").on('click',new Chart(document.querySelector('#chart-disp'),config102)); 
//       $("#modal-bar").on('click',new Chart(document.querySelector('#chart-disp'),config101)); 
//       // $("#modal-nut").html( new Chart(document.querySelector('#chart-disp'),config104));
//       // $("#modal-line").html( new Chart(document.querySelector('#chart-disp'),config103));
//       // $("#modal-pie").html( new Chart(document.querySelector('#chart-disp'),config102));
//       // $("#modal-bar").html( new Chart(document.querySelector('#chart-disp'),config101));
//     })
//     }    
// );

// Line

const ctx0=document.querySelector('#myline').getContext("2d");
const config0 = {
type: 'line',
data: data,
    maintainAspectRatio:false,  
    options:{
    plugins: { 
    tooltip:  {
      enabled: true,
    },
      legend: {
        display: false
    },
    radius:10,  
    hitRadius:15,
    hoverRadius:25,    
    }}
};

const myChart0 = new Chart(ctx0,config0);

// pie
const ctx1=document.querySelector('#mypie1').getContext("2d");
const config1 = {
  type: 'pie',
  data: data,
  options: { 
      maintainAspectRatio:false,  
      plugins:{
        tooltip:  {
          enabled:false,
        },
        legend:{
          display:false,
        },
        datalabels:{
          fontStyle:'bold',
          formatter:(value,context) => {
              const disp =value+'%';
              return disp;
          }
        }
      },
    },
   plugins:[ChartDataLabels],

};

const myChart1 = new Chart(ctx1,config1);

// Bar
const ctx2=document.querySelector('#mybar').getContext("2d");

const config2 = {
  type: 'bar',
  data: data,
      maintainAspectRatio:false,  
      options: {  
      plugins:{
        legend:{
          display:false,
        },
        datalabels:{
          fontStyle:'bold',
          formatter:(value) => {
              const disp = value+'%';
              return disp;
          }
        }
      },
    },
    plugins:[ChartDataLabels],
};
const myChart2 = new Chart(ctx2,config2);

// Doughnut
const ctx3=document.querySelector('#mynut').getContext("2d");
const config3 = {
  type: 'doughnut',
  data: data,
  options: { 
      maintainAspectRatio:false,  
      plugins:{
        tooltip:  {
          enabled:false,
        },
        legend:{
          display:false,
        },
        datalabels:{
          formatter:(value) => {
              const disp = value+'%';
              return disp;
          }
        }
      },
    },
    plugins:[ChartDataLabels],
};
const myChart3 = new Chart(ctx3,config3);

//pie2
const ctx4=document.querySelector('#mypie2').getContext("2d");
const config4 = {
  type: 'pie',
  data: data,
  options: { 
      maintainAspectRatio:false,  
      plugins:{
        tooltip:  {
          enabled:false,
        },
        legend:{
          display:false,
        },
        datalabels:{
          fontStyle:'bold',
          formatter:(value) => {
              const disp = value+'%';
              return disp;
          }
        }
      },
    },
   plugins:[ChartDataLabels],

};

const myChart4 = new Chart(ctx4,config4);