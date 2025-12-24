import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  icon?: React.ReactNode;
  delay?: number;
}

export interface CalculatorState {
  corpusSizeTB: number;
}

export interface PricingTier {
  name: string;
  cost: number;
  infrastructure: number;
  license: number;
  label: string;
  color: string;
  tag?: string;
}