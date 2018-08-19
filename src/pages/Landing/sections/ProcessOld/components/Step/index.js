// import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
//
// import './index.styl';
// import './mobile/index.styl';
//
// class Step extends PureComponent {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     desc: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     first: PropTypes.bool,
//     last: PropTypes.bool
//   };
//
//   static defaultProps = {
//     first: false,
//     last: false
//   };
//
//   render() {
//     const {
//       title, desc, number, first, last
//     } = this.props;
//     return (
//       <div className="step">
//         <div className="step-header" data-aos="fade-right">
//           <div className="number">
//             <div className={!first ? 'line' : 'filler'} />
//             <div className="circle">
//               {number}
//             </div>
//           </div>
//           <div className={!last ? 'line' : ''} />
//         </div>
//         <div className="step-desc">
//           <div data-aos="fade-in" data-aos-easing="ease-in-sine">
//             {title}
//           </div>
//           <div data-aos="fade-in" data-aos-easing="ease-in-sine" data-aos-delay="250">
//             {desc}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Step;
