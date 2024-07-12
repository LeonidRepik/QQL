import React from "react";
import { Card, List } from "antd";

const PersonCard = (props) => {
  const { firstName, id, lastName, cars } = props;

  return (
    <Card title={`${firstName} ${lastName}`}>
      <List
        dataSource={cars}
        renderItem={(car) => (
          <List.Item>
            {car.year} {car.make} {car.model} - ${car.price}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default PersonCard;
