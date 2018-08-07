/* eslint-disable max-len */
import React, {PureComponent} from 'react';

import './styles/web.styl';

class AboutBackground extends PureComponent {
  render() {
    return (
      <svg className="about-section-background" width="1375" height="366">
        <path
          fillRule="evenodd"
          d="M299.632 323.056c1.626675 4.229354 2.44 8.133315 2.44 11.712 0 8.458709-2.765306 15.371973-8.296 20.74-5.530694 5.368027-11.874631 8.052-19.032 8.052-5.856029 0-11.142643-1.789315-15.86-5.368s-8.37732-8.458636-10.98-14.64l-25.376-59.048H77.104L51.728 344.04c-2.2773447 6.181364-5.7746431 10.979983-10.492 14.396-4.7173569 3.416017-9.8413057 5.124-15.372 5.124-8.458709 0-14.883978-2.277311-19.276-6.832C2.19597804 352.173311 0 345.992039 0 338.184c0-2.928015.48799512-6.01865 1.464-9.272L122.976 37.088c2.60268-6.5066992 6.506641-11.5493154 11.712-15.128 5.205359-3.5786846 11.061301-5.0426699 17.568-4.392 5.856029 0 11.305308 1.7079829 16.348 5.124 5.042692 3.4160171 8.702655 8.2146358 10.98 14.396l120.048 285.968zm-198.616-94.672h97.6l-49.288-114.192-48.312 114.192zM473.848 95.16c22.448112 0 42.781242 5.774609 61 17.324 18.218758 11.549391 32.614614 27.571898 43.188 48.068 10.573386 20.496102 15.86 43.757203 15.86 69.784 0 26.026797-5.205281 49.36923-15.616 70.028-10.410719 20.65877-24.64391 36.762609-42.7 48.312S497.597442 366 475.8 366c-15.616078 0-30.337264-3.171968-44.164-9.516s-25.294621-14.070621-34.404-23.18v2.928c0 8.458709-2.765306 15.534638-8.296 21.228-5.530694 5.693362-12.525291 8.54-20.984 8.54-8.458709 0-15.453306-2.765306-20.984-8.296-5.530694-5.530694-8.296-12.687956-8.296-21.472V29.768c0-8.458709 2.765306-15.5346382 8.296-21.228C352.498694 2.8466382 359.493291 0 367.952 0c8.458709 0 15.453306 2.8466382 20.984 8.54 5.530694 5.6933618 8.296 12.769291 8.296 21.228V131.76c7.808039-9.760049 18.706597-18.299963 32.696-25.62 13.989403-7.3200366 28.629257-10.98 43.92-10.98zm-7.32 217.16c20.821437 0 37.901267-7.807922 51.24-23.424 13.338733-15.616078 20.008-35.135883 20.008-58.56 0-23.424117-6.587934-42.862589-19.764-58.316-13.176066-15.453411-30.337228-23.18-51.484-23.18-21.146772 0-38.389267 7.726589-51.728 23.18-13.338733 15.453411-20.008 34.891883-20.008 58.316 0 23.424117 6.669267 42.943922 20.008 58.56 13.338733 15.616078 30.581228 23.424 51.728 23.424zm427-81.496c0 26.026797-5.855941 49.36923-17.568 70.028-11.712059 20.65877-27.734565 36.681276-48.068 48.068-20.333435 11.386724-42.699878 17.08-67.1 17.08-24.725457 0-47.173232-5.693276-67.344-17.08-20.170768-11.386724-36.111941-27.40923-47.824-48.068-11.712059-20.65877-17.568-44.001203-17.568-70.028 0-26.026797 5.855941-49.36923 17.568-70.028 11.712059-20.65877 27.653232-36.762609 47.824-48.312s42.618543-17.324 67.344-17.324c24.400122 0 46.766565 5.774609 67.1 17.324 20.333435 11.549391 36.355941 27.65323 48.068 48.312 11.712059 20.65877 17.568 44.001203 17.568 70.028zm-58.56 0c0-15.941413-3.334633-30.174604-10.004-42.7-6.669367-12.525396-15.615944-22.203966-26.84-29.036s-23.667932-10.248-37.332-10.248-26.107944 3.415966-37.332 10.248c-11.224056 6.832034-20.170633 16.510604-26.84 29.036-6.669367 12.525396-10.004 26.758587-10.004 42.7 0 15.941413 3.334633 30.093272 10.004 42.456 6.669367 12.362728 15.615944 21.959966 26.84 28.792s23.667932 10.248 37.332 10.248 26.107944-3.415966 37.332-10.248c11.224056-6.832034 20.170633-16.429272 26.84-28.792 6.669367-12.362728 10.004-26.514587 10.004-42.456zm301.096-130.784c8.45871 0 15.45331 2.846638 20.984 8.54 5.53069 5.693362 8.296 12.769291 8.296 21.228V253.76c0 35.136176-9.67857 62.626567-29.036 82.472-19.35743 19.845433-46.92915 29.768-82.716 29.768-35.78685 0-63.277237-9.922567-82.472-29.768-19.194763-19.845433-28.792-47.335824-28.792-82.472V129.808c0-8.458709 2.765306-15.534638 8.296-21.228 5.530694-5.693362 12.525291-8.54 20.984-8.54 8.458709 0 15.453306 2.846638 20.984 8.54 5.530694 5.693362 8.296 12.769291 8.296 21.228V253.76c0 19.845433 4.39196 34.566619 13.176 44.164 8.78404 9.597381 21.95991 14.396 39.528 14.396 17.89342 0 31.23196-4.798619 40.016-14.396 8.78404-9.597381 13.176-24.318567 13.176-44.164V129.808c0-8.458709 2.76531-15.534638 8.296-21.228 5.53069-5.693362 12.52529-8.54 20.984-8.54zm218.624 205.936c4.55469 0 8.70265 2.195978 12.444 6.588 3.74135 4.392022 5.612 10.166631 5.612 17.324 0 8.784044-4.79862 16.185303-14.396 22.204-9.59738 6.018697-20.41461 9.028-32.452 9.028-20.17077 0-37.16926-4.310624-50.996-12.932-13.82674-8.621376-20.74-26.921193-20.74-54.9V158.6h-22.448c-7.80804 0-14.31464-2.602641-19.52-7.808-5.20536-5.205359-7.808-11.711961-7.808-19.52 0-7.482704 2.60264-13.745308 7.808-18.788 5.20536-5.042692 11.71196-7.564 19.52-7.564h22.448V73.688c0-8.458709 2.84664-15.5346382 8.54-21.228 5.69336-5.6933618 12.76929-8.54 21.228-8.54 8.13337 0 14.96531 2.8466382 20.496 8.54 5.53069 5.6933618 8.296 12.769291 8.296 21.228v31.232h34.648c7.80804 0 14.31464 2.602641 19.52 7.808 5.20536 5.205359 7.808 11.711961 7.808 19.52 0 7.482704-2.60264 13.745308-7.808 18.788-5.20536 5.042692-11.71196 7.564-19.52 7.564h-34.648v132.248c0 6.832034 1.78932 11.793318 5.368 14.884 3.57868 3.090682 8.45864 4.636 14.64 4.636 2.60268 0 6.18131-.65066 10.736-1.952 3.90402-1.626675 7.64532-2.44 11.224-2.44z"
        />
      </svg>
    );
  }
}

export default AboutBackground;
