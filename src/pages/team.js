import React from 'react';
import { CardGroup } from 'react-bootstrap';

import Layout from '../components/layout';
import Person from '../components/person';

import team from '../../data/team.json';

const Team = () => (
  <Layout>
    <h1>&ldquo;Group 23&rdquo; Team</h1>

    <CardGroup>
      {team.map(teammate => (
        <Person
          nickname={teammate.nickaname}
          person={teammate.person}
          linkImage={teammate.linkImage}
          linkButton={teammate.linkButton}
        />
      ))}
    </CardGroup>
  </Layout>
);

export default Team;
