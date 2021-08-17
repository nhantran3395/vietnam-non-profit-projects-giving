import React from 'react';
import { Card, Heading, Text } from 'evergreen-ui';
import { IProjectCardProps } from './interfaces';

const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <Card key="project.id">
      <Heading>{project.title}</Heading>
    </Card>
  );
};

export default ProjectCard;
