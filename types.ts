
// Fix: Import React to resolve the 'React' namespace when using React.ReactNode
import React from 'react';

export interface BusinessArea {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}
