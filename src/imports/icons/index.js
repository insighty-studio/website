/* eslint-disable */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

export class Logo extends PureComponent {
  render() {
    return (
      <svg width="3.75%" height="6.75%" viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg">
        <g id="Landing" fill="none" fillRule="evenodd">
          <g id="new-landing" fill="#FF5551">
            <path d="M38.8998121,43.4126339 C37.8847071,43.4466446 36.871561,43.3013129 35.9069495,42.9833197 C35.0814654,42.7424801 34.3140071,42.3352402 33.6518164,41.7866682 C33.1065381,41.2932036 32.7537109,40.5258662 32.4773707,39.8128099 C31.8630073,36.4572508 32.1936286,34.2440622 32.2454424,31.4461181 C32.2909888,29.691677 32.2341438,27.9360728 32.0751971,26.1882531 C32.0603932,25.966194 31.9691022,24.2760779 31.3744774,24.3180224 C31.2683825,24.2760779 30.8217971,24.5302121 30.5676628,25.1470428 C29.9779727,26.7804106 29.5486585,28.1078303 28.9614357,29.733796 C28.3914841,31.3202846 27.8930849,32.9536523 27.1158782,34.4365134 C26.832136,34.9743898 25.6996349,35.5369394 25.1938337,35.3691614 C24.5597317,35.1569717 23.8886199,34.2712027 23.7282439,33.5655484 C23.4302401,32.2541557 23.281257,30.9133084 23.2841258,29.5684854 C23.2841258,29.2970799 23.3680148,28.0510818 23.316201,27.784611 C23.1829655,28.0683531 22.9362333,28.6185661 22.5513309,29.4007074 C21.7297124,31.063683 21.0906758,32.6427697 19.8200045,33.9430488 C17.1972403,36.6324307 13.9527107,34.4611866 13.274197,31.7693374 C12.9065659,30.3111496 12.6425623,28.8258212 12.2305194,27.37997 C11.9122347,26.2573381 11.2806001,25.2037913 11.1054202,24.0712901 C11.0264658,23.5531523 11.8826269,22.5908964 12.6623009,22.511942 C14.8236757,22.428053 15.1296237,23.1238381 15.8920265,25.1889873 C16.3262753,26.3757696 16.6494946,27.6020291 16.9850505,28.8208866 C17.194773,29.580822 17.2687927,30.3876366 17.5500675,31.1204315 C17.6314891,31.3301539 18.2557218,31.6953177 18.5369966,31.4214449 C19.8240813,30.1967701 20.9702749,28.8320963 21.9542388,27.3528295 C22.6204159,26.3856389 23.0250569,25.2950822 23.4790443,24.5968298 C23.8108662,24.1078733 24.3565062,23.8070835 24.9471014,23.7875479 C25.7711872,23.8171558 26.4052892,24.643709 26.5286553,25.2679417 C26.8568093,26.921048 26.7753876,28.6506413 26.8765479,30.3481594 C26.9076958,30.5178583 26.9581943,30.6834273 27.0270545,30.841624 C27.0932827,30.7149895 27.1525857,30.5848523 27.2047018,30.451787 C27.8906175,28.3891051 28.559262,26.3190212 29.2575144,24.2612739 C29.7287731,22.8721712 31.539788,21.586696 32.815394,21.8432975 C34.2168333,22.2035267 35.0359845,23.4223842 35.6972271,24.3451629 C36.2486861,25.1607241 36.6150146,26.0870722 36.7705125,27.059218 C37.0172448,28.5396118 36.881542,30.0200055 36.881542,31.5201378 C36.881542,32.2825405 36.9333558,33.0474106 36.9481597,33.8098134 C36.965431,34.8781642 36.8914113,35.9563843 37.0024408,37.0173331 C37.0887971,37.8463536 37.2072286,39.1885772 37.6488794,39.3415512 C38.3471318,39.5882835 39.4845676,39.2527276 40.1581468,38.7715996 C41.4444222,37.8835429 42.5961403,36.8149213 43.5778563,35.5986224 C44.7116641,34.1517732 45.6537576,32.5644783 46.380735,30.8761665 C47.0843565,29.1764343 47.5557438,27.3896441 47.7821744,25.5640204 C48.0596404,23.5891508 48.0720871,21.5860682 47.8191842,19.607903 C47.5269726,17.7706044 46.9439593,15.9915812 46.0920582,14.3377014 C44.9577764,12.10763 43.6371778,9.97733938 42.1443417,7.96954112 C41.1968897,6.69393521 39.8892086,5.63792102 38.6062007,4.66579582 C37.3771019,3.75176352 36.0605331,2.9616569 34.6757554,2.30703517 C33.1632865,1.56683831 31.5940692,0.861183977 29.973038,0.461477675 C28.3902343,0.0803547217 26.7599912,-0.065959799 25.1346179,0.0272288525 C22.7564867,0.129125864 20.3923268,0.444567376 18.0706726,0.969746183 C16.5187265,1.33984461 15.1098852,2.31443714 13.6294914,3.00775486 C13.2100466,3.20267337 12.7585265,3.3359088 12.3390816,3.53082731 C11.8184765,3.77755959 11.3126753,4.05143243 10.7994721,4.31296865 C10.1110891,4.66579582 9.30427448,4.89278952 8.75406149,5.39859071 C7.45624967,6.59524229 6.09428745,7.79682852 5.10735831,9.23774507 C3.91070672,10.987077 3.02493782,12.9584679 2.10462639,14.8829798 C1.59823795,16.0002964 1.17918379,17.1551701 0.851226385,18.3372318 C0.505801185,19.4944062 0.278807483,20.6861231 0,21.8605688 C0.268938191,24.162581 0.382435042,26.4423873 0.838889771,28.6506413 C1.19930439,30.3104151 1.78626914,31.9127376 2.58328703,33.4125744 C3.73021214,35.5939754 5.0261618,37.6937106 6.46191856,39.6968457 C7.38716463,40.9921902 8.70224771,42.0062599 9.79280441,43.1905749 C9.90966152,43.3613976 9.97241981,43.5634277 9.97291898,43.7703957 C10.4663835,44.1306249 10.9697174,44.4735828 11.4829206,44.7992694 C11.6704371,44.6487627 11.8406824,44.5525371 11.9763851,44.5895469 C12.785667,44.8362792 13.4567788,45.5246623 14.2586588,45.8232084 C15.460245,46.2747284 16.6889718,46.6497615 17.9127639,47.0371312 C17.9264192,47.0256091 17.9424144,47.0171906 17.9596431,47.012458 C17.9596431,47.012458 17.981849,47.0395985 17.9966529,47.0642718 C18.4703789,47.2123111 18.9441049,47.3652851 19.4128962,47.5256611 C19.9951334,47.7434777 20.5615168,48.0015243 21.107947,48.2979332 C21.107947,48.2979332 21.122751,48.3176718 21.1276856,48.342345 C21.2559864,48.3596162 21.3744179,48.3793548 21.512588,48.3941588 C21.5458898,48.3505619 21.5927717,48.3193072 21.6458234,48.3053351 C21.6927025,48.3053351 21.7469836,48.3620836 21.8210033,48.4311686 C22.5973876,48.5216371 23.3844636,48.5759182 24.1822313,48.5940119 L24.1822313,48.5150576 C24.6214148,48.2880639 25.0507289,47.9080962 25.502249,47.8809556 C25.7835238,47.8661517 26.0870045,48.2806619 26.3830833,48.5471328 C31.5079977,48.2157843 36.4041734,46.3038622 40.3974771,43.0746107 C39.9191429,43.2653598 39.4137059,43.379437 38.8998121,43.4126339 Z M12.1811729,17.4267896 C12.6055525,17.2516097 13.2495237,16.7334719 13.82441,16.8025569 C14.8310777,16.9209884 16.3706871,16.9234558 16.2695269,18.3520357 C16.2152458,19.1045692 15.1345584,20.2839495 14.3918942,20.3900444 C12.5241308,20.6565152 12.1367611,20.0298152 12.1811729,17.4267896 Z" id="Shape" />
          </g>
        </g>
      </svg>
    );
  }
}

export class LPMATitle extends PureComponent {
  render() {
    return (
      <svg viewBox="0 0 997 671">
        <path fill="#FFF" d="M779.7812 389.3601h85.5108l-44.0254-91.9437-41.4854 91.9437zm101.597 33.9621H763.695l-29.6326 67.0929h-44.872l138.0027-299.852h28.786l140.5419 299.852H913.55l-32.1718-67.0929zM544.4218 370.6556l-76.1969 180.574-71.9646-180.574H294.6632v299.852h46.5653V436.9214l93.1307 233.5864h27.9392L557.97 436.9213v233.5864h77.8897v-299.852zM456.3838 155.7244c51.645 0 71.9644-18.2231 71.9644-59.6392 0-41.416-20.3193-58.8109-71.9644-58.8109h-28.786v118.45h28.786zm-28.786 36.4461V299.852h-80.431V0h139.696C557.9809 0 611.32 32.3046 611.32 96.0852c0 63.7807-52.4927 96.9135-124.4571 96.9135h-59.265v-.8282zM0 190.563v299.8521h226.8992V452.313H80.431v-261.75z" />
      </svg>
    );
  }
}

export class RightArrowIcon extends PureComponent {
  static propTypes = {
    color: PropTypes.string
  };

  static defaultProps = {
    color: '#FFF'
  };

  render() {
    return (
      <svg width="8px" height="14px" fill={this.props.color} viewBox="0 0 8 14">
        <path
          d="M7.51011525,6.88461538 C7.51693377,7.12873677 7.43061924,7.37571617 7.24823153,7.57156599 L1.78094788,13.4423916 C1.40351071,13.8476876 0.757567115,13.8805433 0.338192479,13.515777 C-0.0811821572,13.1510106 -0.115179189,12.5267518 0.262257984,12.1214559 L5.1391346,6.88461538 L0.262257984,1.64777489 C-0.115179189,1.24247896 -0.0811821572,0.618220141 0.338192479,0.253453799 C0.757567115,-0.111312542 1.40351071,-0.0784568152 1.78094788,0.32683912 L7.24823153,6.19766478 C7.43061924,6.39351459 7.51693377,6.640494 7.51011525,6.88461538 Z"
        />
      </svg>
    )
  }
}

export class AngelListIcon extends PureComponent {
  render() {
    return (
      <a href="https://angel.co/insighty" target="_blank">
        <svg width="12px" height="16px" viewBox="0 0 12 16">
          <path d="M8.74985599,3.375 L7.69095622,6.30357143 L8.77772177,6.49107143 C9.79946717,3.80654762 10.3103399,2.26488095 10.3103399,1.86607143 C10.3103399,1.5327381 10.1926843,1.36607143 9.95737327,1.36607143 C9.60440668,1.36607143 9.20190092,2.03571429 8.74985599,3.375 Z M5.97256624,9.50892857 L6.27908986,10.2946429 C6.50820853,10.0446429 6.72803859,9.8452381 6.93858007,9.69642857 L6.63205645,9.64732143 L6.27444556,9.58482143 L5.97256624,9.50892857 Z M3.26029666,1.50892857 C3.26029666,2.0922619 3.75259217,3.64285714 4.73718318,6.16071429 C4.84864631,6.10119048 5.00036002,6.07142857 5.19232431,6.07142857 C5.28521025,6.07142857 5.51742512,6.08630952 5.88896889,6.11607143 L4.76504896,2.98214286 C4.30061924,1.67261905 3.91978687,1.01785714 3.62255184,1.01785714 C3.50489631,1.01785714 3.41510657,1.06994048 3.3531826,1.17410714 C3.29125864,1.27827381 3.26029666,1.38988095 3.26029666,1.50892857 Z M2.5264977,8.28571429 C2.5264977,8.5 2.6859519,8.85416667 3.00486031,9.34821429 C3.32376872,9.8422619 3.687572,10.297619 4.09627016,10.7142857 C4.50496832,11.1309524 4.81458813,11.3392857 5.02512961,11.3392857 C5.11182316,11.3392857 5.19077621,11.3005952 5.26198877,11.2232143 C5.33320132,11.1458333 5.3688076,11.0654762 5.3688076,10.9821429 C5.3688076,10.8392857 5.26972926,10.5357143 5.07157258,10.0714286 C4.99107143,9.88095238 4.89199309,9.66666667 4.77433756,9.42857143 C4.65668203,9.19047619 4.50961262,8.92559524 4.33312932,8.63392857 C4.15664603,8.3422619 3.96622984,8.10119048 3.76188076,7.91071429 C3.55753168,7.7202381 3.3655674,7.625 3.1859879,7.625 C3.06213998,7.625 2.92126296,7.70535714 2.76335685,7.86607143 C2.60545075,8.02678571 2.5264977,8.16666667 2.5264977,8.28571429 Z M1.05889977,11.2767857 C1.05889977,11.5208333 1.13630472,11.8303571 1.29111463,12.2053571 C1.65646601,13.0684524 2.22461838,13.7440476 2.99557172,14.2321429 C3.76652506,14.7202381 4.63810484,14.9642857 5.61031106,14.9642857 C7.01598502,14.9642857 8.19873272,14.4583333 9.15855415,13.4464286 C10.0997984,12.4404762 10.5704205,11.1696429 10.5704205,9.63392857 C10.5704205,9.37797619 10.5673243,9.17857143 10.5611319,9.03571429 C10.5549395,8.89285714 10.5193332,8.70833333 10.4543131,8.48214286 C10.3892929,8.25595238 10.2948589,8.08928571 10.1710109,7.98214286 C9.82423675,7.69047619 9.16939084,7.46577381 8.20647321,7.30803571 C7.24355559,7.15029762 6.40603399,7.07142857 5.69390841,7.07142857 C5.46478975,7.07142857 5.31307604,7.10416667 5.23876728,7.16964286 C5.16445853,7.19940476 5.12730415,7.30357143 5.12730415,7.48214286 C5.12730415,7.68452381 5.19387241,7.86309524 5.32700893,8.01785714 C5.46014545,8.17261905 5.63198445,8.29166667 5.84252592,8.375 C6.0530674,8.45833333 6.29302275,8.52827381 6.56239199,8.58482143 C6.83176123,8.64136905 7.10267857,8.67559524 7.37514401,8.6875 C7.64760945,8.69940476 7.91078629,8.71130952 8.16467454,8.72321429 C8.41856279,8.73511905 8.63529666,8.73511905 8.81487615,8.72321429 L9.02851382,8.72321429 C9.17713134,8.72321429 9.30097926,8.7797619 9.4000576,8.89285714 C9.49294355,9.00595238 9.55177131,9.16964286 9.5765409,9.38392857 C9.4031538,9.55059524 9.10591878,9.71130952 8.68483583,9.86607143 C8.30709965,9.99702381 8.01915323,10.1339286 7.82099654,10.2767857 C7.42468318,10.5505952 7.08874568,10.889881 6.81318404,11.2946429 C6.53762241,11.6994048 6.39984159,12.1071429 6.39984159,12.5178571 C6.39984159,12.702381 6.45712126,12.9657738 6.57168059,13.3080357 C6.68623992,13.6502976 6.74351959,13.9107143 6.74351959,14.0892857 L6.7156538,14.1964286 C6.69088422,14.2678571 6.67849942,14.3095238 6.67849942,14.3214286 C5.83014113,14.2619048 5.3780962,13.6190476 5.32236463,12.3928571 C5.27282546,12.4047619 5.14588134,12.4107143 4.94153226,12.4107143 C4.95391705,12.452381 4.96010945,12.514881 4.96010945,12.5982143 C4.96010945,12.9136905 4.83471342,13.1800595 4.58392137,13.3973214 C4.33312932,13.6145833 4.04053859,13.7232143 3.70614919,13.7232143 C3.1983727,13.7232143 2.6828557,13.4910714 2.15959821,13.0267857 C1.63634073,12.5625 1.37471198,12.0892857 1.37471198,11.6071429 C1.37471198,11.4047619 1.47688652,11.2053571 1.6812356,11.0089286 C2.00324021,11.389881 2.1890121,11.6160714 2.23855127,11.6875 C2.71536578,12.3065476 3.12716014,12.6160714 3.47393433,12.6160714 C3.54824309,12.6160714 3.63029234,12.5907738 3.72008209,12.5401786 C3.80987183,12.4895833 3.85476671,12.4285714 3.85476671,12.3571429 C3.85476671,12.1547619 3.58384937,11.7232143 3.04201469,11.0625 C2.50018001,10.4017857 2.13947293,10.0714286 1.95989343,10.0714286 C1.69362039,10.0714286 1.47688652,10.203869 1.30969182,10.46875 C1.14249712,10.733631 1.05889977,11.0029762 1.05889977,11.2767857 Z M0,11.3571429 C0,10.7559524 0.131588422,10.2708333 0.394765265,9.90178571 C0.657942108,9.5327381 1.08057316,9.27083333 1.66265841,9.11607143 C1.48927131,8.67559524 1.40257776,8.36607143 1.40257776,8.1875 C1.40257776,7.81845238 1.59144585,7.45238095 1.96918203,7.08928571 C2.3469182,6.72619048 2.72465438,6.54464286 3.10239055,6.54464286 C3.28197005,6.54464286 3.49870392,6.58928571 3.75259217,6.67857143 C2.74323157,3.92857143 2.23855127,2.24107143 2.23855127,1.61607143 C2.23855127,1.13988095 2.36549539,0.751488095 2.61938364,0.450892857 C2.87327189,0.150297619 3.24171947,0 3.72472638,0 C4.5359303,0 5.5421947,1.72916667 6.74351959,5.1875 C6.78067396,5.28869048 6.80544355,5.35714286 6.81782834,5.39285714 C6.85498272,5.29761905 6.94477247,5.0610119 7.08719758,4.68303571 C7.2296227,4.30505952 7.36430732,3.95238095 7.49125144,3.625 C7.61819556,3.29761905 7.78539026,2.91815476 7.99283554,2.48660714 C8.20028082,2.05505952 8.3999856,1.6889881 8.59194988,1.38839286 C8.78391417,1.08779762 9.00219614,0.830357143 9.24679579,0.616071429 C9.49139545,0.401785714 9.72825461,0.294642857 9.95737327,0.294642857 C10.3970334,0.294642857 10.7438076,0.44047619 10.9976959,0.732142857 C11.2515841,1.02380952 11.3785282,1.38690476 11.3785282,1.82142857 C11.3785282,2.46428571 10.8862327,4.10119048 9.90164171,6.73214286 C10.2793779,6.82142857 10.5905458,6.95833333 10.8351454,7.14285714 C11.0797451,7.32738095 11.2608727,7.55952381 11.3785282,7.83928571 C11.4961838,8.11904762 11.5766849,8.39732143 11.6200317,8.67410714 C11.6633785,8.95089286 11.6850518,9.2797619 11.6850518,9.66071429 C11.6850518,10.5535714 11.5395305,11.3869048 11.2484879,12.1607143 C10.9574453,12.9345238 10.5487471,13.6041667 10.0223934,14.1696429 C9.49603975,14.735119 8.84274194,15.1815476 8.0625,15.5089286 C7.28225806,15.8363095 6.42151498,16 5.48027074,16 C4.79291475,16 4.10246256,15.875 3.40891417,15.625 C2.48624712,15.2857143 1.687428,14.7157738 1.0124568,13.9151786 C0.337485599,13.1145833 0,12.2619048 0,11.3571429 Z" />
        </svg>
      </a>
    );
  }
}

export class BloggerIcon extends PureComponent {
  render() {
    return (
      <a href="http://alexpanov.me" target="_blank">
        <svg width="16px" height="16px" viewBox="0 0 16 16">
          <path d="M10.8490057,11.841 L5.13443322,11.841 C4.59795496,11.841 4.16335236,11.4025 4.16335236,10.879 C4.16335236,10.3495 4.59795496,9.9165 5.13443322,9.9165 L10.8490057,9.9165 C11.3799636,9.9165 11.8145662,10.3495 11.8145662,10.879 C11.8145662,11.4025 11.3799636,11.841 10.8490057,11.841 M5.13443322,4.1325 L7.94630199,4.1325 C8.48278025,4.1325 8.91738285,4.5655 8.91738285,5.0945 C8.91738285,5.624 8.48278025,6.062 7.94630199,6.062 L5.13443322,6.062 C4.59795496,6.062 4.16335236,5.624 4.16335236,5.0945 C4.16335236,4.5655 4.59795496,4.1325 5.13443322,4.1325 M15.5919955,6.1905 C15.25425,6.046 13.8054074,6.2065 13.4029233,5.843 C13.1188759,5.581 13.1008092,5.107 12.9899003,4.4745 C12.8042155,3.4155 12.7269306,3.1755 12.5337181,2.7585 C11.8311273,1.2725 10.1469168,0 8.61677436,0 L5.07019635,0 C2.27990716,0 0,2.2775 0,5.057 L0,10.9535 C0,13.728 2.27990716,16 5.07019635,16 L10.8971834,16 C13.6874726,16 15.9518223,13.728 15.9678816,10.9535 L16,6.8695 C16,6.8695 16,6.3645 15.5919955,6.1905" />
        </svg>
      </a>
    );
  }
}

export class ClutchIcon extends PureComponent {
  render() {
    return (
      <a href="https://clutch.co/profile/insighty" target="_blank">
        <svg width="15px" height="16px" viewBox="0 0 15 16">
          <path d="M11.3610038,11.1132983 L11.920586,10.6189693 L14.4387057,13.0708411 L13.8391534,13.6244896 C12.3359765,14.9729837 10.3721547,15.7077902 8.3432572,15.6808982 C3.82662982,15.6808982 0.409181665,12.2996879 0.409181665,7.79140754 C0.409181665,3.28312718 3.74668951,0.000782708828 8.3432572,0.000782708828 C10.3530902,-0.0271349339 12.3002477,0.692660088 13.7991832,2.01764497 L14.4187206,2.5910666 L11.940571,5.04293837 L11.3809889,4.56838255 C10.5356882,3.85258587 9.45578274,3.46597407 8.3432572,3.48085878 C5.72521212,3.48085878 3.90657013,5.26044313 3.90657013,7.8111807 C3.90657013,10.3619183 5.78516736,12.2205953 8.3432572,12.2205953 C9.45329873,12.235359 10.5291186,11.8406101 11.3610038,11.1132983 Z M8.52887324,10.3374486 C7.13221512,10.3374486 6,9.21723921 6,7.83539095 C6,6.45354268 7.13221512,5.33333333 8.52887324,5.33333333 C9.92553136,5.33333333 11.0577465,6.45354268 11.0577465,7.83539095 C11.0577465,9.21723921 9.92553136,10.3374486 8.52887324,10.3374486 Z" />
        </svg>
      </a>
    );
  }
}

export class FacebookIcon extends PureComponent {
  render() {
    return (
      <a href="https://www.facebook.com/insighty.studio/" target="_blank">
        <svg width="17px" height="17px" viewBox="0 0 17 17">
          <path d="M9.08025082,17 L0.938269497,17 C0.419925732,17 0,16.5798137 0,16.0616718 L0,0.938262216 C0,0.419988437 0.419991696,0 0.938269497,0 L16.0617965,0 C16.5799423,0 17,0.419988437 17,0.938262216 L17,16.0616718 C17,16.5798796 16.5798764,17 16.0617965,17 L11.729754,17 L11.729754,10.4166631 L13.9394762,10.4166631 L14.2703508,7.85101991 L11.729754,7.85101991 L11.729754,6.21301883 C11.729754,5.47020592 11.9360228,4.96400343 13.0012068,4.96400343 L14.3597978,4.96340976 L14.3597978,2.6686779 C14.1248346,2.63741129 13.3183608,2.56755614 12.3800913,2.56755614 C10.4212955,2.56755614 9.08025082,3.76320721 9.08025082,5.95892813 L9.08025082,7.85101991 L6.86485564,7.85101991 L6.86485564,10.4166631 L9.08025082,10.4166631 L9.08025082,17 L9.08025082,17 Z" />
        </svg>
      </a>
    );
  }
}

export class LinkedInIcon extends PureComponent {
  render() {
    return (
      <a href="https://www.linkedin.com/company/insighty" target="_blank">
        <svg width="19px" height="17px" viewBox="0 0 19 17">
          <path d="M19,17 L14.8007408,17 L14.8007408,11.0238202 C14.8007408,9.4595633 14.1438735,8.39168854 12.6994356,8.39168854 C11.5946025,8.39168854 10.9801858,9.1123135 10.6942027,9.80681309 C10.5869591,10.0560927 10.6037159,10.4033425 10.6037159,10.7505923 L10.6037159,17 L6.44355597,17 C6.44355597,17 6.4971778,6.41377986 6.44355597,5.45149517 L10.6037159,5.45149517 L10.6037159,7.26394314 C10.8494826,6.47147339 12.178857,5.34046232 14.3002705,5.34046232 C16.9322084,5.34046232 19,7.00160082 19,10.5786002 L19,17 L19,17 Z M2.23647695,4.00697957 L2.20966604,4.00697957 C0.869120414,4.00697957 0,3.12415957 0,2.00512262 C0,0.864314529 0.894814205,0 2.26217074,0 C3.62841016,0 4.46848542,0.862137414 4.49529633,2.00185695 C4.49529633,3.1208939 3.62841016,4.00697957 2.23647695,4.00697957 L2.23647695,4.00697957 L2.23647695,4.00697957 Z M0.479245061,5.45149517 L4.18250235,5.45149517 L4.18250235,17 L0.479245061,17 L0.479245061,5.45149517 L0.479245061,5.45149517 Z" />
        </svg>
      </a>
    );
  }
}

export class TwitterIcon extends PureComponent {
  render() {
    return (
      <a href="https://twitter.com/insighty_studio" target="_blank">
        <svg width="19px" height="16px" viewBox="0 0 19 16">
          <path
            d="M19,1.9076643 C18.3169553,2.2455131 17.584661,2.46384554 16.8328125,2.553808 C17.5971223,2.02131788 18.1709514,1.24276424 18.465625,0.338458196 C17.9015625,0.707683162 16.6546875,1.23075187 16.03125,1.23075187 C15.2727851,0.450495908 14.2498758,0.00876064919 13.18125,1.97641044e-06 C12.1416189,-0.00106076412 11.1442736,0.426502088 10.409143,1.18840683 C9.67401243,1.95031157 9.26147461,2.98398112 9.2625,4.06147661 C9.26119739,4.36135894 9.29105703,4.66051476 9.3515625,4.95377028 C6.4125,4.86146404 2.96875,3.35379542 1.0390625,0.73845191 C0.0347067352,2.57206633 0.55044628,4.89724257 2.2265625,6.09221393 C1.78125,6.15375142 0.9203125,6.06144518 0.534375,5.66145146 C0.5046875,7.07681384 1.1578125,8.95370742 3.5625,9.63061986 C3.0875,9.87676983 2.2859375,9.81523234 1.9296875,9.75369485 C2.0484375,10.953676 3.68125,12.5228821 5.4328125,12.5228821 C4.809375,13.261332 2.671875,14.6459257 0,14.2151632 C1.85187191,15.3826131 3.97776515,15.9999685 6.1453125,15.9997505 C9.14810413,16.0203934 12.0267093,14.7591422 14.1046466,12.512395 C16.1825838,10.2656478 17.2766325,7.23151019 17.1296875,4.1230141 L17.1296875,3.96917037 C17.8814282,3.4204068 18.5177394,2.71904843 19,1.9076643 Z" />
        </svg>
      </a>
    );
  }
}

export class VRGirlInSpace extends PureComponent {
  render() {
    return (
      <svg width="482" height="380" viewBox="0 0 482 380" xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <path d="M611.282038,301.30288 C507.247625,413.068781 158.529572,376.284992 62.3803717,301.30288 C-34.3671355,226.189175 -9.39387587,110.03596 74.5673536,81.9071293 C158.396907,53.7712904 206.363605,111.671744 266.14671,111.647442 C326.043156,111.671744 397.997585,-43.8771061 545.472335,12.188035 C643.265521,49.1672031 714.73811,189.083053 611.282038,301.30288 Z"
                id="path-1" />
          <path d="M590.959473,286.22601 C494.468341,377.561585 171.03498,347.501714 81.8573236,286.22601 C-7.87525859,224.842767 15.2872511,129.92186 93.1606573,106.934858 C170.911935,83.9421298 215.400685,131.258629 270.849063,131.23877 C326.402565,131.258629 393.139754,4.14344021 529.921471,49.9601146 C620.623912,80.1796499 686.914199,194.519484 590.959473,286.22601 Z"
                id="path-3" />
          <path d="M566.096588,271.438725 C478.091647,345.047988 183.103565,320.822105 101.768894,271.438725 C19.9281029,221.968677 41.0535189,145.46992 112.078124,126.944211 C182.991341,108.413887 223.5674,146.54725 274.13921,146.531246 C324.8069,146.54725 385.674694,44.1024436 510.426749,81.0270661 C593.152102,105.381626 653.612299,197.530505 566.096588,271.438725 Z"
                id="path-5" />
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-7">
            <stop stopColor="#403F9F" stopOpacity="0" offset="0%" />
            <stop stopOpacity="0.2" offset="100%" />
          </linearGradient>
          <path d="M21.5704808,91.3830044 C6.97265905,79.628254 -5.70288679,53.2316836 2.6963101,28.1532924 C10.9908362,3.25644855 40.1795436,-7.4931415 62.8240254,7.34693415 C85.1197062,22.3376658 85.2189951,37.2193149 116.210965,43.8256142 C146.995031,50.5584637 158.651048,91.4963428 130.231778,107.055326 C101.583363,122.873983 36.1629299,103.108434 21.5704808,91.3830044 Z"
                id="path-8" />
          <linearGradient x1="0%" y1="0%" y2="100%" id="linearGradient-10">
            <stop stopOpacity="0.3" offset="0%" />
            <stop stopColor="#1F1845" stopOpacity="0" offset="100%" />
          </linearGradient>
          <path d="M127.814121,108.268069 C104.766594,118.754188 62.1900539,109.706542 37.5724122,99.793906 C31.3152092,94.1057661 25.2016051,87.3690038 19.4134327,79.4936569 C9.08660764,65.6399284 7.73845259,52.1293062 15.3689676,38.9617902 L61.4758703,38.9617902 C70.6068941,46.7471522 78.0666854,52.3315427 83.8552442,55.7149617 C92.7098717,60.6488216 119.016666,65.2072222 128.613992,75.9808951 C136.644657,85.1190475 134.301056,98.1737211 127.814121,108.268069 Z"
                id="path-11" />
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-13">
            <stop stopColor="#FFC62C" stopOpacity="0" offset="0%" />
            <stop stopColor="#FF6663" stopOpacity="0.3" offset="100%" />
          </linearGradient>
          <path d="M17.0725631,96 C9.71895431,95.2906687 5.59434166,93.4076598 4.69872514,90.3509734 C3.41656239,85.6953462 -1.20994562,80.4794293 0.299138315,78.5149175 C2.00598697,76.7190046 4.39552195,82.696999 5.79862185,83.3569404 C7.6540264,84.0851523 6.8695826,63.6939367 13.772873,68.8308719 C20.6773788,74.1367241 19.0698478,78.6635582 18.1724598,84.7019467 C17.635592,88.8997203 17.2689598,92.6657381 17.0725631,96 Z"
                id="path-14" />
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-15">
            <stop stopColor="#A7A7EE" stopOpacity="0" offset="0%" />
            <stop stopColor="#4C55A0" stopOpacity="0.2" offset="100%" />
          </linearGradient>
          <path d="M76.1104133,76 C62.5405283,76 16.9238592,86.2302019 14.4307553,86.7370209 C11.8230494,87.3466132 10.6124869,94.0943591 14.4307553,96.372809 C18.1344217,98.8207993 64.8431611,97.7924202 67.6872001,97.7493501 C70.7244828,97.7924202 89.7967516,76 76.1104133,76 Z"
                id="path-16" />
          <path d="M112.472357,209.522317 C114.161062,213.950982 129.725385,223.6304 129.84307,226.524365 C129.725385,229.171183 135,230.931811 135,225.153232 C135,219.150875 129.725385,215.131974 129.84307,210.89345 C129.725385,206.44536 127.705452,198.658156 121.700548,200.198614 C115.413113,201.311515 110.406815,204.876756 112.472357,209.522317 Z"
                id="path-17" />
          <path d="M75.9627568,76 L152.160537,76 C159.575804,76 157.57328,87.5022936 152.160537,87.6376147 C148.588933,87.6134596 105.311019,94.1092326 105.311019,96.2981651 C105.311019,97.7574535 107.106019,108.76357 110.696021,129.316514 L75.9627568,135 C66.4720928,120.969214 59,109.543213 59,99.5458716 C59,89.5485297 62.9266634,76 75.9627568,76 Z"
                id="path-18" />
          <path d="M78.2037021,137.193516 C74.4087254,147.282575 73.4806067,163.906255 78.2037021,170.377666 C82.8890785,176.88578 108.556228,207.597806 112.386179,209.497193 C116.214553,211.523648 122,207.050849 122,202.752447 C122,198.365665 108.768157,173.058003 98.4995475,162.823551 C88.2270868,152.926605 81.9609598,127.413877 78.2037021,137.193516 Z"
                id="path-19" />
          <path d="M7.5,-2.84217094e-14 L7.5,-2.84217094e-14 C11.6421356,-2.91826074e-14 15,3.35786438 15,7.5 L15,16.5 C15,20.6421356 11.6421356,24 7.5,24 L7.5,24 C3.35786438,24 4.05997899e-15,20.6421356 3.55271368e-15,16.5 L-8.8817842e-16,7.5 C-1.39544373e-15,3.35786438 3.35786438,-2.76608115e-14 7.5,-2.84217094e-14 Z"
                id="path-20" />
          <linearGradient x1="100%" y1="50%" x2="0%" y2="100%" id="linearGradient-21">
            <stop stopOpacity="0.2" offset="0%" />
            <stop stopColor="#FFC42C" stopOpacity="0" offset="100%" />
          </linearGradient>
          <path d="M43.0871132,146.327 C45.1216548,157.389989 61.642469,164.280989 92.6495559,167 C94.7573339,166.746387 96.2920543,165.476992 97.2537172,163.191816 C98.9449771,159.642063 98.973232,157.018653 98.8787153,156.935513 C115.885456,157.018653 122.840813,135.29448 111.337034,122.11783 C99.9813002,109.099141 40.4158628,129.641358 43.0871132,146.327 Z"
                id="path-22" />
          <path d="M102.188729,39.0801939 C108.260019,39.1871483 110.792138,41.81028 109.785087,46.9495889 C108.825729,52.7342554 106.718913,58.1273355 101.917431,57.5325684 C96.7053469,67.1158881 90.3684088,73 78.0431634,73 C65.8496455,73 59.966229,61.3907252 59.0522689,55.0903424 C56.6733685,48.7009424 58.9428924,25.9165583 59.8661644,23.6127622 C61.6188756,18.1374047 72.7953419,28.0595302 85.0969242,31.7535157 C93.0904781,34.4313696 98.7877464,36.8735957 102.188729,39.0801939 Z"
                id="path-23" />
          <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-24">
            <stop stopOpacity="0.15" offset="0%" />
            <stop stopColor="#FFC42C" stopOpacity="0" offset="100%" />
          </linearGradient>
          <path d="M153.158794,88 C146.74172,88 145.721455,68.4797323 148.34168,68.3477961 C151.016474,68.4797323 149.281312,76.2246168 151.820707,76.3149058 C154.386969,76.2246168 152.968786,57.8926102 159.84923,59.0528348 C166.607981,60.329355 167.410833,73.8657211 164.13111,80.0328903 C160.898031,86.1418908 159.338539,88 153.158794,88 Z"
                id="path-25" />
          <path d="M92,166.203828 C109.612165,168.904451 119.753698,168.559696 122.424598,165.169562 C126.213827,159.947683 110.190036,158.560681 106.397355,155.602599 C102.571812,152.845239 99.690628,152.19732 97.7046122,154.0512 C95.7018167,156.023199 97.9026884,158.170395 96.8896676,161.54963 C96.1579827,164.007173 94.5280935,165.558572 92,166.203828 Z"
                id="path-26" />
        </defs>
        <g id="Landing" fill="none" fillRule="evenodd">
          <g id="Space" opacity="0.263" transform="translate(0 8)">
            <mask id="mask-2" fill="#fff">
              <use xlinkHref="#path-1" />
            </mask>
            <use id="Details" fill="#F2F5F9" xlinkHref="#path-1" />
            <mask id="mask-4" fill="#fff">
              <use xlinkHref="#path-3" />
            </mask>
            <use id="Details" fill="#E2EAF5" xlinkHref="#path-3" />
            <mask id="mask-6" fill="#fff">
              <use xlinkHref="#path-5" />
            </mask>
            <use id="Details" fill="#B6C5D9" xlinkHref="#path-5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="108.5" cy="169.5"
                    r="6.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="273.5" cy="194.5"
                    r="6.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="479.5" cy="141.5"
                    r="3.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="431.5" cy="191.5"
                    r="3.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="367.5" cy="273.5"
                    r="3.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="211.5" cy="273.5"
                    r="3.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="158.5" cy="215.5"
                    r="3.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="129.5" cy="259.5"
                    r="3.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="148.5" cy="138.5"
                    r="3.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="296.5" cy="232.5"
                    r="6.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="311.5" cy="247.5"
                    r="6.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="324.5" cy="169.5"
                    r="6.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="399.5" cy="140.5"
                    r="6.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="399.5" cy="227.5"
                    r="6.5" />
            <circle id="Details" fill="#FFF" mask="url(#mask-6)" cx="461.5" cy="219.5"
                    r="6.5" />
            <polygon id="Details" fill="#FFF" fillRule="nonzero" mask="url(#mask-6)"
                     points="321.626495 168.722311 270.781106 196 108 168.792438 108.320248 166.868119 270.447115 193.96633 320.82724 166.938247 399.327952 138 400 139.830957"
            />
            <polygon id="Details" fill="#FFF" fillRule="nonzero" mask="url(#mask-6)"
                     points="108.123149 164 110 164.456958 85.8768508 267 84 266.543042" />
            <polygon id="Details" fill="#FFF" fillRule="nonzero" mask="url(#mask-6)"
                     points="272.021117 193 274 193.183169 261.978883 320 260 319.816831" />
            <polygon id="Details" fill="#FFF" fillRule="nonzero" mask="url(#mask-6)"
                     points="310.585573 249 295.77501 232.829441 272 191.998138 273.679583 191 297.348031 231.648292 311.25289 246.82998 398.943316 226.856727 462.756435 218.730443 463 220.683616 399.326031 228.787582"
            />
          </g>
          <g id="Girl-in-VR" transform="translate(125)">
            <g id="Hair" transform="translate(41)">
              <mask id="mask-9" fill="#fff">
                <use xlinkHref="#path-8" />
              </mask>
              <use fill="#464D89" xlinkHref="#path-8" />
              <use fill="url(#linearGradient-7)" xlinkHref="#path-8" />
              <mask id="mask-12" fill="#fff">
                <use xlinkHref="#path-11" />
              </mask>
              <use id="Combined-Shape" fill="url(#linearGradient-10)" xlinkHref="#path-11"
              />
            </g>
            <g id="Hand-L">
              <use fill="#FFC62C" xlinkHref="#path-14" />
              <use fill="url(#linearGradient-13)" xlinkHref="#path-14" />
            </g>
            <g id="Hand-L">
              <use fill="#A7A7EE" xlinkHref="#path-16" />
              <use fill="url(#linearGradient-15)" xlinkHref="#path-16" />
            </g>
            <g id="Leg-L">
              <use fill="#A7A7EE" xlinkHref="#path-17" />
              <use fill="url(#linearGradient-15)" xlinkHref="#path-17" />
            </g>
            <g id="Body">
              <use fill="#A7A7EE" xlinkHref="#path-18" />
              <use fill="url(#linearGradient-15)" xlinkHref="#path-18" />
            </g>
            <g id="Leg-R">
              <use fill="#464D89" xlinkHref="#path-19" />
              <use fill="url(#linearGradient-7)" xlinkHref="#path-19" />
            </g>
            <g id="Neck" transform="translate(73 62)">
              <use fill="#FFC62C" xlinkHref="#path-20" />
              <use fill="url(#linearGradient-13)" xlinkHref="#path-20" />
              <path d="M15,13.9668506 C11.9958227,15.4695504 8.45161337,16.2758621 4.13793103,16.2758621 C2.662586,16.2758621 1.28414673,16.0857319 0,15.7406395 L0,8 C0,3.581722 3.35786438,0 7.5,0 C11.6421356,0 15,3.581722 15,8 L15,13.9668506 Z"
                    id="Sh" fill="url(#linearGradient-21)" />
            </g>
            <g id="Hand-R">
              <use fill="#464D89" xlinkHref="#path-22" />
              <use fill="url(#linearGradient-7)" xlinkHref="#path-22" />
            </g>
            <g id="Face">
              <use fill="#FFC62C" xlinkHref="#path-23" />
              <use fill="url(#linearGradient-13)" xlinkHref="#path-23" />
            </g>
            <path d="M60.4434786,32 C68.7757239,32 74.461231,32 77.5,32 C80.7889029,32 86.47441,32 94.5565214,32 C98.9940687,32 103,37.5964406 103,44.5 C103,51.4035594 98.9940687,57 94.5565214,57 C86.1511067,57 80.4655996,57 77.5,57 C74.1379277,57 68.4524206,57 60.4434786,57 C56.0059313,57 52,51.4035594 52,44.5 C52,37.5964406 56.0059313,32 60.4434786,32 Z"
                  id="Sh" fill="url(#linearGradient-24)" />
            <g id="Glasses" transform="translate(51 30)">
              <path d="M9.73315523,0 C18.008684,0 23.6554906,0 26.6735751,0 C29.9400909,0 35.5868975,0 43.613995,0 C48.0213366,0 52,5.59644063 52,12.5 C52,19.4035594 48.0213366,25 43.613995,25 C35.2657949,25 29.6189882,25 26.6735751,25 C23.334388,25 17.6875814,25 9.73315523,25 C5.32581368,25 1.34715026,19.4035594 1.34715026,12.5 C1.34715026,5.59644063 5.32581368,0 9.73315523,0 Z"
                    id="Detail" fill="#D6DFEA" />
              <path d="M5.61539975,3.2967033 C14.5862975,3.2967033 20.7075891,3.2967033 23.9792746,3.2967033 C27.5202663,3.2967033 33.6415579,3.2967033 42.3431495,3.2967033 C47.1208273,3.2967033 47.9585492,7.41715958 47.9585492,12.5 C47.9585492,17.5828404 47.1208273,21.7032967 42.3431495,21.7032967 C33.293474,21.7032967 27.1721824,21.7032967 23.9792746,21.7032967 C20.3595052,21.7032967 14.2382136,21.7032967 5.61539975,21.7032967 C0.837721917,21.7032967 0,17.5828404 0,12.5 C0,7.41715958 0.837721917,3.2967033 5.61539975,3.2967033 Z"
                    id="Detail" fill="#1F1845" />
              <path d="M46.3419689,6.04395604 L48.9868806,6.17880071 C50.5242656,6.2571807 51.7305699,7.52655236 51.7305699,9.06593407 L46.3419689,13.4615385 L46.3419689,6.04395604 Z"
                    id="Detail" fill="#1F1845" />
              <rect id="Detail" fill="#7BC1EB" opacity="0.3" x="12.394" y="6.319" width="20.207"
                    height="12.637" rx="6.319" />
              <rect id="Detail" fill="#7BC1EB" x="16.435" y="10.44" width="12.124" height="4.396"
                    rx="2.198" />
            </g>
            <path d="M64.3006766,138.77799 C64.0837283,138.720836 63.9554936,138.503449 64.0142564,138.292442 C64.0730192,138.081435 64.2965271,137.956712 64.5134754,138.013866 C68.7590349,139.132329 72.4838507,141.03976 77.526646,144.383633 C78.6503396,145.128753 82.5839134,147.815949 82.6730112,147.876195 C88.8945135,152.083021 93.2682671,154.46926 98.7210407,156.228363 C98.9343771,156.297186 99.0499567,156.521186 98.9791951,156.72868 C98.9084334,156.936174 98.6781265,157.048589 98.4647901,156.979765 C92.9225639,155.191804 88.4885173,152.772671 82.2083914,148.526205 C82.1151704,148.463171 78.1862747,145.77917 77.0681411,145.037737 C72.093846,141.739287 68.4410751,139.868749 64.3006766,138.77799 Z"
                  id="Line" fill="#FFF" fillRule="nonzero" />
            <g id="Hend-R">
              <use fill="#FFC62C" xlinkHref="#path-25" />
              <use fill="url(#linearGradient-13)" xlinkHref="#path-25" />
            </g>
            <g id="Leg-R">
              <use fill="#A7A7EE" xlinkHref="#path-26" />
              <use fill="url(#linearGradient-15)" xlinkHref="#path-26" />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
