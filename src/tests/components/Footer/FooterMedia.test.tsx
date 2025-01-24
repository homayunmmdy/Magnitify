import React from 'react'
import { render, screen } from '@testing-library/react';
import FooterMedia from '../../../components/Footer/FooterMedia';
import { FaLinkedinIn, FaDev } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';

describe('FooterMedia', () => {
  it('renders the component with all social media links', () => {
    render(<FooterMedia />);

    // Check if the Github link is rendered
    const githubLink = screen.getByTitle('Github');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/homayunmmdy');

    // Check if the Dev community link is rendered
    const devLink = screen.getByTitle('dev community');
    expect(devLink).toBeInTheDocument();
    expect(devLink).toHaveAttribute('href', 'https://dev.to/homayunmmdy');

    // Check if the Linkedin link is rendered
    const linkedinLink = screen.getByTitle('Linkedin');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'www.linkedin.com/in/homayunmmdy');
  });

  it('renders the correct icons for each social media link', () => {
    render(<FooterMedia />);

    // Check if the Github icon is rendered
    const githubIcon = screen.getByTitle('Github').querySelector('svg');
    expect(githubIcon).toBeInTheDocument();

    // Check if the Dev community icon is rendered
    const devIcon = screen.getByTitle('dev community').querySelector('svg');
    expect(devIcon).toBeInTheDocument();

    // Check if the Linkedin icon is rendered
    const linkedinIcon = screen.getByTitle('Linkedin').querySelector('svg');
    expect(linkedinIcon).toBeInTheDocument();
  });
});