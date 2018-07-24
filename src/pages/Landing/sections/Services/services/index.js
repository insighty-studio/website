import React from 'react';
import {
  DesignThinkingIcon,
  PrototypeIcon,
  UXDesignIcon,
  UIDesignIcon,
  DesktopAppsIcon,
  ApisIcon,
  WebAppsIcon,
  MobileAppsIcon,
  BusinessAnalysisIcon,
  QAIcon,
  ProjectManagementIcon,
  AutomationIcon
} from 'icons';

export const Design = [
  {
  icon: <DesignThinkingIcon/>,
  title: 'Design Thinking'
  },
  {
    icon: <UIDesignIcon/>,
    title: 'UI Design',
    animationDelay: 200,
  },
  {
    icon: <UXDesignIcon/>,
    title: 'UX Design',
    animationDelay: 400,
  },
  {
    icon: <PrototypeIcon/>,
    title: 'Prototype',
    animationDelay: 600,
  }
];

export const Development = [
  {
  icon: <MobileAppsIcon/>,
  title: 'Mobile Apps',
  },
  {
    icon: <WebAppsIcon/>,
    title: 'Web Apps',
    animationDelay: 200,
  },
  {
    icon: <ApisIcon/>,
    title: 'Apis',
    animationDelay: 400
  },
  {
    icon: <DesktopAppsIcon/>,
    title: 'Desktop Apps',
    animationDelay: 600
  }
];

export const Quality = [
  {
  icon: <BusinessAnalysisIcon/>,
  title: 'Business Analysis'
  },
  {
    icon: <QAIcon/>,
    title: 'QA',
    animationDelay: 200,
  },
  {
    icon: <ProjectManagementIcon/>,
    title: 'Project Management',
    animationDelay: 400,
  },
  {
    icon: <AutomationIcon/>,
    title: 'Automation',
    animationDelay: 600,
  }
];
