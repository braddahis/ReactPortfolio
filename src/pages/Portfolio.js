import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import YFITOPS from '../images/YFITOPS.png';
import Pawz from '../images/Pawz.png';
import RegexTurtorial from '../images/RegexTurtorial.png';
import TextEditor from '../images/TextEditor.png';
import NoteTaker from '../images/NoteTaker.png';
import VisibleHand from '../images/VisibleHand.png';

export default function Portfolio() {
const projects = [
    {
        id: 1, title: "project one",
        image: YFITOPS,
        website: "https://qelson.github.io/GroupProject1/"
    },
    {
        id: 2, title: "project two",
        image: Pawz,
        website: "https://github.com/codejoes/Pawz"
    },
    {
        id: 3, title: "project three",
        image: VisibleHand,
        website: "https://cryptic-anchorage-50091.herokuapp.com/"
    },
    {
      id: 4, title: "project four",
      image: RegexTurtorial,
      website: "https://gist.github.com/braddahis"
    },
    {
      id: 5, title: "project five",
      image: TextEditor,
      website: "https://safe-beach-10726.herokuapp.com/"
    },
    {
      id: 6, title: "project six",
      image: NoteTaker,
      website: "https://sleepy-cliffs-70515.herokuapp.com/"
    }

]
  return (
    <div>
      <h1>Portfolio</h1>
      <div style={{display:"flex", justifyContent:"center"}}> {
        projects.map(project => {
            return (
                <Card key={project.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    Examples of work in a multitude of Coding specific areas
                  </Card.Text>
                  <Button href = {project.website}variant="primary">Go to Website</Button>
                </Card.Body>
              </Card>
            )
        })
        } </div>
     
    </div>
  );
}


