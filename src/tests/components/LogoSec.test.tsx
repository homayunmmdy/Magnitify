import React from 'react'
import { render, screen } from "@testing-library/react";
import Logo from '../../../public/static/Image/logo.png';
import  LogoSec  from '../../components/LogoSec';

describe('LogoSec Component', () => {
  const siteName = 'MySite';

  it('renders the logo and site name when LogoOnlyInDesktop is false', () => {
    render(<LogoSec siteName={siteName} LogoOnlyInDesktop={false} />);

    // Check if the logo is rendered
    const logoElement = screen.getByRole('img', { name: `${siteName} logo` });
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', Logo.src);
    expect(logoElement).toHaveAttribute('alt', siteName);
    expect(logoElement).toHaveAttribute('title', siteName);

    // Check if the site name is rendered
    const siteNameElement = screen.getByText(siteName);
    expect(siteNameElement).toBeInTheDocument();
  });

  it('renders the logo and hides the site name on desktop when LogoOnlyInDesktop is true', () => {
    render(<LogoSec siteName={siteName} LogoOnlyInDesktop={true} />);

    // Check if the logo is rendered
    const logoElement = screen.getByRole('img', { name: `${siteName} logo` });
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', Logo.src);
    expect(logoElement).toHaveAttribute('alt', siteName);
    expect(logoElement).toHaveAttribute('title', siteName);

    // Check if the site name is hidden on desktop
    const siteNameElement = screen.getByText(siteName);
    expect(siteNameElement).toBeInTheDocument();
    expect(siteNameElement).toHaveClass('hidden', 'md:block');
  });

  it('renders the logo and site name when LogoOnlyInDesktop is not provided', () => {
    render(<LogoSec siteName={siteName} />);

    // Check if the logo is rendered
    const logoElement = screen.getByRole('img', { name: `${siteName} logo` });
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', Logo.src);
    expect(logoElement).toHaveAttribute('alt', siteName);
    expect(logoElement).toHaveAttribute('title', siteName);

    // Check if the site name is rendered
    const siteNameElement = screen.getByText(siteName);
    expect(siteNameElement).toBeInTheDocument();
  });
});