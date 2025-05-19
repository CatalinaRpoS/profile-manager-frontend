import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import { Card } from '@mui/material';
import type { SkillsData } from '../pages/Profile';

interface SkillsCardProps {
  skillsData: SkillsData[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skillsData }: SkillsCardProps) => (
    <Card
    sx={{
      p: { xs: 2, sm: 3, md: 4 },
      borderRadius: 2,
      boxShadow: 2,
      height: '100%',
      ':hover': {
        boxShadow: 4,
        transition: 'box-shadow 0.3s ease-in-out',
      }
    }}
  >
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
        <PolarGrid />
        <PolarAngleAxis 
          dataKey="name" 
        />
        <PolarRadiusAxis 
          angle={30} 
          domain={[0, 10]} 
        />
        <Radar 
          name="Skills" 
          dataKey="level" 
          stroke="#7f3667" 
          fill="#7f3667" 
          fillOpacity={0.6} 
        />
      </RadarChart>
    </ResponsiveContainer>
  </Card>
);

export default SkillsCard;
