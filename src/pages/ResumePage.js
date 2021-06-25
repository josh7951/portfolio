import React from 'react';
import { MainLayout } from '../styles/Layouts';
import Skills from '../components/Skills';
import Resume from '../components/Resume';

function ResumePage() {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  )
}

export default ResumePage;