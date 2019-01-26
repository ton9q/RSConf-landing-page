import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Card, Carousel, /* Button, CardGroup, */ Figure } from 'react-bootstrap'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Person = () => (
  <Layout>
    <SEO title="Person" />
    <h1>Фамилия Имя</h1>
    <Figure>
      <Figure.Image
        width={400}
        height={500}
        alt="Фамилия Имя"
        src="holder.js/171x180"
      />
      <Figure.Caption>
      Фамилия Имя Отчество
      </Figure.Caption>
    </Figure>
   <h2>Биография в таймлане</h2> 
    <Timeline lineColor={'#ddd'}>
      <TimelineItem
        key="001"
        dateText="11/2010 – Present"
        style={{ color: '#e86971' }}
      >
        <h3>Title, Company</h3>
        <h4>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="04/2009 – 11/2010"
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
        <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateComponent={(
          <div
            style={{
              display: 'block',
              float: 'left',
              padding: '10px',
              background: 'rgb(150, 150, 150)',
              color: '#fff',
            }}
          >
            11/2008 – 04/2009
          </div>
        )}
      >
        <h3>Title, Company</h3>
        <h4>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
      </TimelineItem>
      <TimelineItem
        key="004"
        dateText="08/2008 – 11/2008"
        dateInnerStyle={{ background: '#76bb7f' }}
      >
        <h3>Title, Company</h3>
        <h4>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
          exercitation. Veniam velit adipisicing anim excepteur nostrud magna
          nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
          est.
        </p>
      </TimelineItem>
    </Timeline>
    <Card.Title>Фильмография</Card.Title>
    <Timeline>
      <TimelineItem
        key="001"
        dateText="Дата1"
        style={{ color: '#e86971' }}
      >
        <p>
          Самый лучший фильм №1
        </p>
       </TimelineItem>
       <TimelineItem
        key="002"
        dateText="Дата2"
        style={{ color: '#e86971' }}
      >
        <p>
          Самый лучший фильм №2
        </p>
       </TimelineItem>
      <TimelineItem
        key="003"
        dateText="Дата3"
        style={{ color: '#e86971' }}
      >
        <p>
          Самый лучший фильм №3
        </p>
       </TimelineItem>
       <TimelineItem
        key="004"
        dateText="Дата4"
        style={{ color: '#e86971' }}
      >
        <p>
          Самый лучший фильм №4
        </p>
       </TimelineItem>
    </Timeline>
    <Carousel
     style={{
          width: '1000px',
          height: '400px',
          background: 'grey'
      }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="Название фото"
        />
        <Carousel.Caption>
          <h3>Название фото</h3>
          <p>Фото</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Название фото"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div      
      style={{
          width: '560px',
          margin: '30px auto'
      }}>
      <iframe 
        src="https://www.youtube.com/embed/hFgB5E0uL_Y" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        title="002"
        style={{
          width: "560px", 
          height: "315px",
          frameborder: "0" 
      }}>
      </iframe>
    </div>
    <div      
      style={{
          width: '800px',
          margin: '30px auto'
      }}>>
      <iframe 
        title="001"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d75241.51082857055!2d27.5830197!3d53.8909211!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1548525658390"
        style={{
          width:"800px",
          height: "450px", 
          frameborder: "0",
          border: "0" 
        }}
        allowfullscreen
      >
      </iframe> 
    </div>
    <Link to="/page-2/">Назад</Link>
  </Layout>
)

export default Person
