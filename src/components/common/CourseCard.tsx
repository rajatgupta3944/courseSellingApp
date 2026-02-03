import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CourseCard: React.FC = ({title, description, price, image, instructor}: any) => {
  console.log(image, 'img')
  return <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src={image}
      />
    }
  >
    <Meta title={title} description={description} />
    <div style={{ marginTop: 12 }}>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
    </div>
  </Card>
}

export default CourseCard;