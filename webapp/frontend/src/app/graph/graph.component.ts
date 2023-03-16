import { Component } from '@angular/core';
import { JobsService } from 'src/Services/Jobs/jobs.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

//   data= {
//     "seq_read_32_1k_1W": {
//         "bs": "1k",
//         "iodepth": "32",
//         "bw": 739736,
//         "iops": 739736.155203,
//         "lat_ns": 161764.132422
//     },
//     "seq_read_32_2k_1W": {
//         "bs": "2k",
//         "iodepth": "32",
//         "bw": 1321456,
//         "iops": 660728.418399,
//         "lat_ns": 171899.659711
//     },
//     "seq_read_32_4k_1W": {
//         "bs": "4k",
//         "iodepth": "32",
//         "bw": 2191381,
//         "iops": 547845.350052,
//         "lat_ns": 197189.791254
//     },
//     "seq_read_32_8k_1W": {
//         "bs": "8k",
//         "iodepth": "32",
//         "bw": 3120761,
//         "iops": 390095.238095,
//         "lat_ns": 257997.48637
//     },
//     "seq_read_32_16K_1W": {
//         "bs": "16K",
//         "iodepth": "32",
//         "bw": 4072139,
//         "iops": 254508.737864,
//         "lat_ns": 352699.69754
//     },
//     "seq_read_32_32k_1W": {
//         "bs": "32k",
//         "iodepth": "32",
//         "bw": 4369066,
//         "iops": 136533.333333,
//         "lat_ns": 657562.053848
//     },
//     "seq_read_32_64k_1W": {
//         "bs": "64k",
//         "iodepth": "32",
//         "bw": 5029141,
//         "iops": 78580.335731,
//         "lat_ns": 949328.873993
//     },
//     "seq_read_32_128k_1W": {
//         "bs": "128k",
//         "iodepth": "32",
//         "bw": 5229805,
//         "iops": 40857.855362,
//         "lat_ns": 2157326.573364
//     },
//     "seq_read_32_256k_1W": {
//         "bs": "256k",
//         "iodepth": "32",
//         "bw": 4559026,
//         "iops": 17808.695652,
//         "lat_ns": 5059415.783447
//     },
//     "seq_read_32_512k_1W": {
//         "bs": "512k",
//         "iodepth": "32",
//         "bw": 4559026,
//         "iops": 8904.347826,
//         "lat_ns": 10357357.21875
//     },
//     "seq_read_32_1024k_1W": {
//         "bs": "1024k",
//         "iodepth": "32",
//         "bw": 4588954,
//         "iops": 4481.400438,
//         "lat_ns": 18553732.441895
//     },
//     "seq_read_32_2048k_1W": {
//         "bs": "2048k",
//         "iodepth": "32",
//         "bw": 4639716,
//         "iops": 2265.486726,
//         "lat_ns": 37172436.0625
//     },
//     "seq_read_32_4096k_1W": {
//         "bs": "4096k",
//         "iodepth": "32",
//         "bw": 4144569,
//         "iops": 1011.857708,
//         "lat_ns": 75625059.908203
//     },
//     "seq_write_32_1k_1W": {
//         "bs": "1k",
//         "iodepth": "32",
//         "bw": 674325,
//         "iops": 674325.401929,
//         "lat_ns": 176462.676159
//     },
//     "seq_write_32_2k_1W": {
//         "bs": "2k",
//         "iodepth": "32",
//         "bw": 1205952,
//         "iops": 602976.423232,
//         "lat_ns": 192071.578455
//     },
//     "seq_write_32_4k_1W": {
//         "bs": "4k",
//         "iodepth": "32",
//         "bw": 1982185,
//         "iops": 495546.3138,
//         "lat_ns": 206817.239271
//     },
//     "seq_write_32_8k_1W": {
//         "bs": "8k",
//         "iodepth": "32",
//         "bw": 2737796,
//         "iops": 342224.543081,
//         "lat_ns": 279998.584137
//     },
//     "seq_write_32_16K_1W": {
//         "bs": "16K",
//         "iodepth": "32",
//         "bw": 3572660,
//         "iops": 223291.311755,
//         "lat_ns": 432480.196297
//     },
//     "seq_write_32_32k_1W": {
//         "bs": "32k",
//         "iodepth": "32",
//         "bw": 4152776,
//         "iops": 129774.257426,
//         "lat_ns": 646671.130737
//     },
//     "seq_write_32_64k_1W": {
//         "bs": "64k",
//         "iodepth": "32",
//         "bw": 4177593,
//         "iops": 65274.900398,
//         "lat_ns": 1179919.596558
//     },
//     "seq_write_32_128k_1W": {
//         "bs": "128k",
//         "iodepth": "32",
//         "bw": 4104015,
//         "iops": 32062.622309,
//         "lat_ns": 2218275.150452
//     },
//     "seq_write_32_256k_1W": {
//         "bs": "256k",
//         "iodepth": "32",
//         "bw": 3792318,
//         "iops": 14813.743219,
//         "lat_ns": 5204695.602661
//     },
//     "seq_write_32_512k_1W": {
//         "bs": "512k",
//         "iodepth": "32",
//         "bw": 4177593,
//         "iops": 8159.36255,
//         "lat_ns": 9019955.627197
//     },
//     "seq_write_32_1024k_1W": {
//         "bs": "1024k",
//         "iodepth": "32",
//         "bw": 3869284,
//         "iops": 3778.597786,
//         "lat_ns": 17312556.336426
//     },
//     "seq_write_32_2048k_1W": {
//         "bs": "2048k",
//         "iodepth": "32",
//         "bw": 3994575,
//         "iops": 1950.47619,
//         "lat_ns": 35086111.401367
//     },
//     "seq_write_32_4096k_1W": {
//         "bs": "4096k",
//         "iodepth": "32",
//         "bw": 4185932,
//         "iops": 1021.956088,
//         "lat_ns": 72096460.501953
//     },
//     "seq_randread_32_1k_1W": {
//         "bs": "1k",
//         "iodepth": "32",
//         "bw": 612664,
//         "iops": 612664.913818,
//         "lat_ns": 199544.320516
//     },
//     "seq_randread_32_2k_1W": {
//         "bs": "2k",
//         "iodepth": "32",
//         "bw": 1118481,
//         "iops": 559240.533333,
//         "lat_ns": 207352.174598
//     },
//     "seq_randread_32_4k_1W": {
//         "bs": "4k",
//         "iodepth": "32",
//         "bw": 1929302,
//         "iops": 482325.666973,
//         "lat_ns": 231614.054218
//     },
//     "seq_randread_32_8k_1W": {
//         "bs": "8k",
//         "iodepth": "32",
//         "bw": 2654622,
//         "iops": 331827.848101,
//         "lat_ns": 310689.724312
//     },
//     "seq_randread_32_16K_1W": {
//         "bs": "16K",
//         "iodepth": "32",
//         "bw": 3765084,
//         "iops": 235317.773788,
//         "lat_ns": 387078.106041
//     },
//     "seq_randread_32_32k_1W": {
//         "bs": "32k",
//         "iodepth": "32",
//         "bw": 4324024,
//         "iops": 135125.773196,
//         "lat_ns": 659340.802795
//     },
//     "seq_randread_32_64k_1W": {
//         "bs": "64k",
//         "iodepth": "32",
//         "bw": 4843307,
//         "iops": 75676.674365,
//         "lat_ns": 1210034.458801
//     },
//     "seq_randread_32_128k_1W": {
//         "bs": "128k",
//         "iodepth": "32",
//         "bw": 5115004,
//         "iops": 39960.97561,
//         "lat_ns": 1857101.029602
//     },
//     "seq_randread_32_256k_1W": {
//         "bs": "256k",
//         "iodepth": "32",
//         "bw": 4481094,
//         "iops": 17504.273504,
//         "lat_ns": 5209621.87561
//     },
//     "seq_randread_32_512k_1W": {
//         "bs": "512k",
//         "iodepth": "32",
//         "bw": 4510004,
//         "iops": 8808.602151,
//         "lat_ns": 8549357.010742
//     },
//     "seq_randread_32_1024k_1W": {
//         "bs": "1024k",
//         "iodepth": "32",
//         "bw": 4619277,
//         "iops": 4511.013216,
//         "lat_ns": 19178550.760742
//     },
//     "seq_randread_32_2048k_1W": {
//         "bs": "2048k",
//         "iodepth": "32",
//         "bw": 4691615,
//         "iops": 2290.82774,
//         "lat_ns": 38033152.078125
//     },
//     "seq_randread_32_4096k_1W": {
//         "bs": "4096k",
//         "iodepth": "32",
//         "bw": 4396545,
//         "iops": 1073.375262,
//         "lat_ns": 74891914.830078
//     },
//     "seq_randwrite_32_1k_1W": {
//         "bs": "1k",
//         "iodepth": "32",
//         "bw": 559987,
//         "iops": 559987.182911,
//         "lat_ns": 213314.692545
//     },
//     "seq_randwrite_32_2k_1W": {
//         "bs": "2k",
//         "iodepth": "32",
//         "bw": 1065626,
//         "iops": 532813.00813,
//         "lat_ns": 217307.708612
//     },
//     "seq_randwrite_32_4k_1W": {
//         "bs": "4k",
//         "iodepth": "32",
//         "bw": 1803226,
//         "iops": 450806.534824,
//         "lat_ns": 236683.14469
//     },
//     "seq_randwrite_32_8k_1W": {
//         "bs": "8k",
//         "iodepth": "32",
//         "bw": 2674938,
//         "iops": 334367.346939,
//         "lat_ns": 294706.048172
//     },
//     "seq_randwrite_32_16K_1W": {
//         "bs": "16K",
//         "iodepth": "32",
//         "bw": 3483641,
//         "iops": 217727.574751,
//         "lat_ns": 429595.173714
//     },
//     "seq_randwrite_32_32k_1W": {
//         "bs": "32k",
//         "iodepth": "32",
//         "bw": 4128251,
//         "iops": 129007.874016,
//         "lat_ns": 660826.239182
//     },
//     "seq_randwrite_32_64k_1W": {
//         "bs": "64k",
//         "iodepth": "32",
//         "bw": 4297442,
//         "iops": 67147.540984,
//         "lat_ns": 1212620.547333
//     },
//     "seq_randwrite_32_128k_1W": {
//         "bs": "128k",
//         "iodepth": "32",
//         "bw": 4462025,
//         "iops": 34859.574468,
//         "lat_ns": 2344186.281067
//     },
//     "seq_randwrite_32_256k_1W": {
//         "bs": "256k",
//         "iodepth": "32",
//         "bw": 4359983,
//         "iops": 17031.185031,
//         "lat_ns": 4502688.737183
//     },
//     "seq_randwrite_32_512k_1W": {
//         "bs": "512k",
//         "iodepth": "32",
//         "bw": 4228129,
//         "iops": 8258.064516,
//         "lat_ns": 8525715.117187
//     },
//     "seq_randwrite_32_1024k_1W": {
//         "bs": "1024k",
//         "iodepth": "32",
//         "bw": 4185932,
//         "iops": 4087.824351,
//         "lat_ns": 19507492.998535
//     },
//     "seq_randwrite_32_2048k_1W": {
//         "bs": "2048k",
//         "iodepth": "32",
//         "bw": 4194304,
//         "iops": 2048.0,
//         "lat_ns": 34001406.570312
//     },
//     "seq_randwrite_32_4096k_1W": {
//         "bs": "4096k",
//         "iodepth": "32",
//         "bw": 3986980,
//         "iops": 973.38403,
//         "lat_ns": 63879421.246094
//     }
// } 

// val ={
//   "bs": "1k",
//   "iodepth": "32",
//   "bw": 739736,
//   "iops": 739736.155203,
//   "lat_ns": 161764.132422
// }

// data1 = {
//     "seq_read_32":{
//          "bs":["1k","2k","4k"],
//          "bw":[73976,83976,93976],
//          "lantency":[171899.659711,181899.659711,161899.659711],
//          "iops":[739736.155203,759736.155203,729736.155203]
//     },
//     "seq_write_32":{
//       "bs":["1k","2k","4k"],
//       "bw":[73976,83976,93976],
//       "lantency":[171899.659711,181899.659711,161899.659711],
//       "iops":[739736.155203,759736.155203,729736.155203]
//     },
//     "seq_randread_32":{
//       "bs":["1k","2k","4k"],
//       "bw":[73976,83976,93976],
//       "lantency":[171899.659711,181899.659711,161899.659711],
//       "iops":[739736.155203,759736.155203,729736.155203]
//     },
//     "seq_randwrite_32":{
//       "bs":["1k","2k","4k"],
//       "bw":[73976,83976,93976],
//       "lantency":[171899.659711,181899.659711,161899.659711],
//       "iops":[739736.155203,759736.155203,729736.155203]
//     },
  
//   };

// graphdata :any = {};

data1:any = {};

constructor(public jobService:JobsService,){
    

}

ngOnInit(){   
    console.log("graphdata");
    this.jobService.getGraphData().subscribe((d)=>{
        console.log(JSON.stringify(d));
        this.data1 = d;
      }) 
 }

}
