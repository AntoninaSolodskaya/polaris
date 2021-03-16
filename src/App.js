import React from "react";
import {
  Avatar,
  TextStyle,
  Button,
  Card,
  ResourceItem,
  ResourceList
} from "@shopify/polaris";

export default function ResourceListWithAlternateToolExample() {
  const resourceName = {
    singular: "Orders",
    plural: "Orders"
  };

  const items = [
    {
      id: 107,
      url: "customers/341",
      name: "Mae Jemison",
      location: "Decatur, USA"
    },
    {
      id: 207,
      url: "customers/256",
      name: "Ellen Ochoa",
      location: "Los Angeles, USA"
    }
  ];

  const itemsHeader = [
    {
      id: 109,
      name: "Orders",
      price: "Price",
      nest: "Nest Price"
    }
  ];

  function header(item) {
    const { id, name, price, nest } = item;
    return (
      <div>
        <ResourceItem id={id} accessibilityLabel={`View details for ${name}`}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: "50%"
              }}
            >
              <h3 style={{ width: "30%" }}>{name}</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%"
              }}
            >
              <h3 style={{ width: "30%" }}>{price}</h3>
              <h3 style={{ width: "30%" }}>{nest}</h3>
            </div>
          </div>
        </ResourceItem>
        <ResourceItem
          style={{
            display: "none",
            minHeight: "0px !important",
            padding: "0px !important"
          }}
        />
      </div>
    );
  }

  return (
    <Card>
      <ResourceList items={itemsHeader} renderItem={header} />

      <ResourceList items={items} renderItem={renderItem} />
    </Card>
  );

  function renderItem(item) {
    const { id, url, name, location } = item;
    const media = <Avatar customer size="medium" name={name} />;

    return (
      <ResourceItem
        id={id}
        url={url}
        media={media}
        accessibilityLabel={`View details for ${name}`}
      >
        <h3>
          <TextStyle variation="strong">{name}</TextStyle>
        </h3>
        <div>{location}</div>
      </ResourceItem>
    );
  }
}
