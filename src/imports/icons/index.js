/* eslint-disable */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

export class Logo extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    color: '#FF5551',
    width: '3.75vw',
    height: '6.75vh',
  };

  render() {
    const {className, width, height, color} = this.props;

    return (
      <svg className={className} width={width} height={height} viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg">
        <g id="Landing" fill="none" fillRule="evenodd">
          <g id="new-landing" fill={color}>
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
    color: PropTypes.string,
  };

  static defaultProps = {
    color: '#FFF',
  };

  render() {
    return (
      <svg width="0.7vw" height="2vh" fill={this.props.color} viewBox="0 0 8 14">
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
        <svg width="0.94vw" height="2.22vh" viewBox="0 0 12 16">
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
        <svg width="1.25vw" height="2.22vh" viewBox="0 0 16 16">
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
        <svg width="1.17vw" height="2.22vh" viewBox="0 0 15 16">
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
        <svg width="1.33vw" height="2.36vh" viewBox="0 0 17 17">
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
        <svg width="1.48vw" height="2.36vh" viewBox="0 0 19 17">
          <path d="M19,17 L14.8007408,17 L14.8007408,11.0238202 C14.8007408,9.4595633 14.1438735,8.39168854 12.6994356,8.39168854 C11.5946025,8.39168854 10.9801858,9.1123135 10.6942027,9.80681309 C10.5869591,10.0560927 10.6037159,10.4033425 10.6037159,10.7505923 L10.6037159,17 L6.44355597,17 C6.44355597,17 6.4971778,6.41377986 6.44355597,5.45149517 L10.6037159,5.45149517 L10.6037159,7.26394314 C10.8494826,6.47147339 12.178857,5.34046232 14.3002705,5.34046232 C16.9322084,5.34046232 19,7.00160082 19,10.5786002 L19,17 L19,17 Z M2.23647695,4.00697957 L2.20966604,4.00697957 C0.869120414,4.00697957 0,3.12415957 0,2.00512262 C0,0.864314529 0.894814205,0 2.26217074,0 C3.62841016,0 4.46848542,0.862137414 4.49529633,2.00185695 C4.49529633,3.1208939 3.62841016,4.00697957 2.23647695,4.00697957 L2.23647695,4.00697957 L2.23647695,4.00697957 Z M0.479245061,5.45149517 L4.18250235,5.45149517 L4.18250235,17 L0.479245061,17 L0.479245061,5.45149517 L0.479245061,5.45149517 Z" />
        </svg>
      </a>
    );
  }
}

export class AppleIcon extends PureComponent {
  render() {
    return (
      <svg width="0.9375vw" height="2.083vh" viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
        <g id="Landing" fill="none" fillRule="evenodd">
          <g id="Home" transform="translate(-466 -1625)" fill="#F5F8FA" fillRule="nonzero">
            <g id="Case-studies" transform="translate(0 1122)">
              <g id="Text" transform="translate(126 191)">
                <g id="Group-14-Copy" transform="translate(241 304)">
                  <g id="Group-3" transform="translate(89)">
                    <g id="Group" transform="translate(10 8)">
                      <path d="M9.82872928,7.92229898 C9.81234304,6.0698926 11.3198769,5.16869086 11.3888122,5.1267344 C10.5350326,3.86056894 9.21170266,3.68757039 8.74667253,3.67377649 C7.63523355,3.55480406 6.55713209,4.35025254 5.99095932,4.35025254 C5.41348569,4.35025254 4.54162481,3.68527141 3.60195881,3.70481277 C2.39276745,3.72377939 1.26155198,4.4358897 0.641135108,5.54170102 C-0.639251632,7.79642961 0.315670517,11.1098403 1.5423782,12.9323599 C2.15601457,13.8249405 2.87305374,14.8215501 3.81158965,14.7864906 C4.72978403,14.7479826 5.07276494,14.1910537 6.18081366,14.1910537 C7.27869161,14.1910537 7.60076595,14.7864906 8.55794827,14.7640755 C9.54338272,14.7479826 10.1637996,13.8674717 10.7559643,12.9668447 C11.4650929,11.9437968 11.7498744,10.9362671 11.7611753,10.8845399 C11.7380085,10.8764935 9.84737569,10.1425428 9.82872928,7.92229898 Z"
                            id="Shape" />
                      <path d="M8.02059267,2.47485631 C8.51443998,1.84665893 8.85233551,0.992011611 8.75853842,0.124719884 C8.04375942,0.15690566 7.14986188,0.627622642 6.63510799,1.24202612 C6.17968358,1.78343687 5.77285284,2.6708447 5.87795078,3.50537591 C6.68087644,3.56629898 7.50527373,3.09328302 8.02059267,2.47485631 Z"
                            id="Shape" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export class Phone extends PureComponent {
  render() {
    return (
      <svg width="25.23vw" height="81.67vh" viewBox="0 0 323 588" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter x="-22.7%" y="-9.2%" width="145.5%" height="122.2%" filterUnits="objectBoundingBox"
                  id="filter-1">
            <feOffset dy="10" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="17.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"
            />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1"
                           result="shadowMatrixOuter1" />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g id="Landing" fill="none" fillRule="evenodd">
          <g id="Home" transform="translate(-566 -1164)">
            <g id="Case-studies" transform="translate(0 1122)">
              <g id="Device" transform="translate(601 67)">
                <g id="Phone" filter="url(#filter-1)">
                  <path d="M0,474.6 L0,43.4 C0,17.9278158 13.2099496,0 43.5722222,0 C74.9374003,1.81045511e-15 196.873753,3.15686115e-15 210.130556,0 C229.753607,-3.15686123e-15 253,8.68847656 253,43.4 C253,187.35159 253,330.343641 253,474.6 C253,489.001573 248.845665,518 208.022222,518 L43.5722222,518 C4.32860309,518 0,489.162598 0,474.6 Z M16.1638889,66.5 L16.1638889,455.7 L236.133333,455.7 L236.133333,66.5 L16.1638889,66.5 Z"
                        id="Phone-Shape" fill="#FFF" />
                  <path d="M126.350877,502.491228 L126.350877,502.491228 C135.107854,502.491228 142.491228,495.107854 142.491228,486.350877 C142.491228,476.892146 135.107854,469.508772 126.350877,469.508772 C116.892146,469.508772 109.508772,476.892146 109.508772,486.350877 C109.508772,495.107854 116.892146,502.491228 126.350877,502.491228 L126.350877,502.491228 Z M126.350877,506 L126.350877,506 C114.954305,506 106,497.045695 106,486.350877 C106,474.954305 114.954305,466 126.350877,466 C137.045695,466 146,474.954305 146,486.350877 C146,497.045695 137.045695,506 126.350877,506 L126.350877,506 Z"
                        id="Home-Button" fill="#E6E6E6" fillRule="nonzero" />
                  <path d="M106,41.2 C106,38.5670034 107.580368,37 109.508772,37 L142.491228,37 C144.418586,37 146,38.5665784 146,41.2 C146,42.4329966 144.419632,44 142.491228,44 L109.508772,44 C107.581414,44 106,42.4334216 106,41.2 Z"
                        id="Mask" fill="#E6E6E6" />
                  <circle id="Mask" fill="#E6E6E6" cx="126.5" cy="21.5" r="3.5" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export class FeatherPen extends PureComponent {
  render() {
    return (
      <svg id="Layer_1" width="3.90625vw" height="6.9445vh" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 50 50">
        <defs>
          <mask id="feather-mask" x="0" y="0" width="50" height="50" maskUnits="userSpaceOnUse">
            <g transform="translate(-2.24 1.22)">
              <g id="mask-2">
                <path id="path-1" fill="#fff" d="M4,48.48a1,1,0,0,1-1.42-1.41l48-48A1,1,0,0,1,52-.93,1,1,0,0,1,52,.48Zm34.36-23c.84.85,2.06,2.06,3.64,3.63a1,1,0,0,1,0,1.41Q30.72,41.72,9.29,42.78a1,1,0,0,1-1-1.13q3-23.29,12.28-32.58T51.19-1.22a1,1,0,0,1,1,1.12q-2,15.3-6.34,23.55a1,1,0,0,1-.66.5C42.17,24.64,39.87,25.14,38.31,25.44Zm1.5,4.33c-2.47-2.46-3.89-3.89-4.29-4.3a1,1,0,0,1,.61-1.69c1-.11,3.75-.67,8.2-1.68Q48.2,14.57,50.09.84C37,1.62,27.57,4.86,22,10.48S12.42,26.22,10.39,40.71Q29.55,39.47,39.81,29.77ZM17.53,15.48a1,1,0,0,1,0-1.41,1,1,0,0,1,1.42,0l5,5a1,1,0,1,1-1.42,1.41Zm-4,8a1,1,0,0,1,0-1.41,1,1,0,0,1,1.42,0l3,3a1,1,0,1,1-1.42,1.41Z" />
              </g>
            </g>
          </mask>
        </defs>
        <g id="Landing">
          <g id="Services">
            <g id="Dream-Design-Develop">
              <g id="Dream_-Design_-Devel" data-name="Dream,-Design,-Devel">
                <g id="Branding">
                  <g className="cls-2" mask="url(#feather-mask)" id="_2.-Icon-_-2.-Icon-Box-_-25-Size--_-ic_feather-pen"
                     data-name="2.-Icon-/-2.-Icon-Box-/-25-Size--/-ic_feather-pen">
                    <g id="_3.-Color-_-2.-Purple" data-name="3.-Color-/-2.-Purple">
                      <rect id="Red-Main" fill="#5c64aa" className="cls-3" width="50" height="50" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export class Compass extends PureComponent {
  render() {
    return (
      <svg id="Layer_1" data-name="Layer 1" width="3.90625vw" height="6.9445vh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <defs>
          <mask id="compass-mask" x="0" y="0" width="50" height="50" maskUnits="userSpaceOnUse">
            <g transform="translate(4 4)">
              <g id="mask-2">
                <path id="path-1" className="cls-1" fill="#fff" d="M32.59,33.23a22,22,0,0,1-19.69.84l-7,11.45a1,1,0,0,1-1.7-1l7-11.31A22,22,0,0,1,0,16.09,1,1,0,0,1,.91,15,1,1,0,0,1,2,15.91,20,20,0,0,0,12.16,31.46l8-13a1,1,0,1,1,1.7,1L14,32.35a20,20,0,0,0,17.58-.82l-7.39-12a1,1,0,0,1,1.7-1l16,26a1,1,0,0,1-1.7,1ZM22.13,1a1,1,0,0,1,2,0V6a1,1,0,0,1-2,0ZM23,20a7,7,0,1,1,7-7A7,7,0,0,1,23,20Zm0-2a5,5,0,1,0-5-5A5,5,0,0,0,23,18Z" />
              </g>
            </g>
          </mask>
        </defs>
        <g id="Landing">
          <g id="Services">
            <g id="Dream-Design-Develop">
              <g id="Dream_-Design_-Devel" data-name="Dream,-Design,-Devel">
                <g id="Design">
                  <g className="cls-2" mask="url(#compass-mask)" id="_2.-Icon-_-2.-Icon-Box-_-25-Size--_-ic_compass"
                     data-name="2.-Icon-/-2.-Icon-Box-/-25-Size--/-ic_compass">
                    <g id="_3.-Color-_-2.-Purple" data-name="3.-Color-/-2.-Purple">
                      <rect id="Red-Main" className="cls-3" fill="#5c64aa" width="50" height="50" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export class BrowserWindows extends PureComponent {
  render() {
    return (
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="3.90625vw" height="6.9445vh" viewBox="0 0 50 50">
        <defs>
          <mask id="browser-mask" x="0" y="0" width="50" height="50" maskUnits="userSpaceOnUse">
            <g id="mask-2">
              <path id="path-1" fill="#fff" className="cls-1" d="M8,16a2,2,0,1,1,2-2A2,2,0,0,1,8,16Zm8,0a2,2,0,1,1,2-2A2,2,0,0,1,16,16Zm8,0a2,2,0,1,1,2-2A2,2,0,0,1,24,16ZM1,22a1,1,0,0,1,0-2H42a1,1,0,0,1,0,2ZM2,8V43a5,5,0,0,0,5,5H42V13a5,5,0,0,0-5-5ZM1,6H37a7,7,0,0,1,7,7V49a1,1,0,0,1-1,1H7a7,7,0,0,1-7-7V7A1,1,0,0,1,1,6ZM8,2a8.45,8.45,0,0,1,6-2H40A10,10,0,0,1,50,10V36a8.45,8.45,0,0,1-2,6V10a8,8,0,0,0-8-8Z"
              />
            </g>
          </mask>
        </defs>
        <g id="Landing">
          <g id="Services">
            <g id="Dream-Design-Develop">
              <g id="Dream_-Design_-Devel" data-name="Dream,-Design,-Devel">
                <g id="Development">
                  <g className="cls-2" mask="url(#browser-mask)" id="_2.-Icon-_-2.-Icon-Box-_-25-Size--_-ic_browser-windows"
                     data-name="2.-Icon-/-2.-Icon-Box-/-25-Size--/-ic_browser-windows">
                    <g id="_3.-Color-_-2.-Purple" data-name="3.-Color-/-2.-Purple">
                      <rect id="Red-Main" fill="#5c64aa" className="cls-3" width="50" height="50" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
