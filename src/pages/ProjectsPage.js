import React, { useState } from 'react';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';
import projects from '../data/projects';
import Menu from '../components/Menu';
import Button from '../components/Button';

const btnGroup = ['All', ...new Set(projects.map(item => item.category))]

function ProjectsPage() {
  const [ menuItem, setMenuItems ] = useState(projects);
  const [ button ] = useState(btnGroup);
  
  const filter = (button) => {
    if(button === 'All') {
      setMenuItems(projects);
      return;
    }

    const filteredData = projects.filter(item => item.category === button);
    setMenuItems(filteredData);
  } 
  return (
    <MainLayout>
      <Title title={'Projects'} span={'Projects'} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  )
}

export default ProjectsPage;