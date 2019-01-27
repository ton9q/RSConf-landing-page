import React from 'react'
import { CardGroup } from 'react-bootstrap'

import Layout from '../components/layout'
import Person from '../components/person'

const Team = () => (
  <Layout>
    <h1>"Group 23" Team</h1>

    <CardGroup>
      <Person
        nickname="Saniok017"
        person="Aliaksandr Naumenka"
        linkImage="https://avatars3.githubusercontent.com/u/39351424?s=400&v=4"
        linkButton="https://github.com/saniok017"
      />
      <Person
        nickname="sergey496"
        person="Siarhei Zylevich"
        linkImage="https://avatars0.githubusercontent.com/u/21264092?s=400&v=4"
        linkButton="https://github.com/sergey496"
      />
      <Person
        nickname="ton9q"
        person="Anton Kuchma"
        linkImage="https://avatars3.githubusercontent.com/u/26420726?s=400&v=4"
        linkButton="https://github.com/ton9q"
      />
      <Person
        nickname="alexeykuril0"
        person="Alexey Kurilo"
        linkImage="https://avatars0.githubusercontent.com/u/43179292?s=400&v=4"
        linkButton="https://github.com/alexeykuril0"
      />
    </CardGroup>
  </Layout>
)

export default Team
